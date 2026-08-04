/* ============================================================
   ALQUIMYSTICA — script principal
   ============================================================ */

/* ---------- geração das mandalas em SVG (marca própria) ---------- */
function gerarMandala({ raios, corBase, cores, temNucleo = true }) {
  const NS = "http://www.w3.org/2000/svg";
  const size = 480;
  const c = size / 2;
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", `0 0 ${size} ${size}`);
  svg.setAttribute("aria-hidden", "true");

  const bg = document.createElementNS(NS, "circle");
  bg.setAttribute("cx", c);
  bg.setAttribute("cy", c);
  bg.setAttribute("r", c - 4);
  bg.setAttribute("fill", "none");
  svg.appendChild(bg);

  raios.forEach((anel, ai) => {
    const grupo = document.createElementNS(NS, "g");
    const n = anel.pontos;
    for (let i = 0; i < n; i++) {
      const ang = (i / n) * Math.PI * 2 + (ai % 2 === 0 ? 0 : Math.PI / n);
      const x = c + Math.cos(ang) * anel.raio;
      const y = c + Math.sin(ang) * anel.raio;
      const dot = document.createElementNS(NS, "circle");
      dot.setAttribute("cx", x);
      dot.setAttribute("cy", y);
      dot.setAttribute("r", anel.tamanho);
      dot.setAttribute("fill", cores[ai % cores.length]);
      dot.setAttribute("opacity", anel.opacidade || 1);
      grupo.appendChild(dot);
    }
    svg.appendChild(grupo);
  });

  if (temNucleo) {
    const nucleo = document.createElementNS(NS, "circle");
    nucleo.setAttribute("cx", c);
    nucleo.setAttribute("cy", c);
    nucleo.setAttribute("r", 7);
    nucleo.setAttribute("fill", corBase);
    nucleo.setAttribute("class", "core");
    svg.appendChild(nucleo);
  }

  return svg;
}

function montarHeroMandala() {
  const host = document.getElementById("hero-mandala-svg");
  if (!host) return;
  const cores = ["#c9a24b", "#6b2d5c", "#e6cc85", "#23456b", "#8a4a75"];
  const aneis = [];
  const passos = 9;
  for (let i = 1; i <= passos; i++) {
    aneis.push({
      raio: 20 + i * 24,
      pontos: 10 + i * 4,
      tamanho: Math.max(2.5, 8 - i * 0.5),
      opacidade: 1 - i * 0.05,
    });
  }
  const svg = gerarMandala({ raios: aneis, corBase: "#e6cc85", cores });
  host.appendChild(svg);
}

function montarSobreMandala() {
  const host = document.getElementById("sobre-mandala-svg");
  if (!host) return;
  const cores = ["#6b2d5c", "#c9a24b", "#23456b", "#e6cc85"];
  const aneis = [
    { raio: 30, pontos: 8, tamanho: 6 },
    { raio: 62, pontos: 14, tamanho: 5.5 },
    { raio: 96, pontos: 18, tamanho: 5 },
    { raio: 132, pontos: 22, tamanho: 4.5 },
    { raio: 170, pontos: 28, tamanho: 4 },
    { raio: 210, pontos: 34, tamanho: 3.5, opacidade: 0.7 },
  ];
  const svg = gerarMandala({ raios: aneis, corBase: "#c9a24b", cores });
  host.appendChild(svg);
}

/* ---------- menu mobile ---------- */
function initNavToggle() {
  const btn = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (!btn || !links) return;
  btn.addEventListener("click", () => {
    const isOpen = links.classList.toggle("mobile-open");
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

/* ---------- WhatsApp helpers ---------- */
function linkWhatsApp(mensagem) {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}

function mensagemProdutoUnico(produto) {
  return `Olá! Vim pelo site da ALQUIMYSTICA ✨\n\nTenho interesse nesta peça:\n• ${produto.nome}\n\nPode me passar mais detalhes e valor?`;
}

/* ---------- estado do carrinho ---------- */
const CART_KEY = "alquimystica_cart_v1";
let carrinho = [];

function carregarCarrinho() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    carrinho = raw ? JSON.parse(raw) : [];
  } catch (e) {
    carrinho = [];
  }
}
function salvarCarrinho() {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(carrinho));
  } catch (e) {
    /* silencioso */
  }
}

function encontrarProdutoPorId(id) {
  for (const cat of CATALOGO) {
    for (const grupo of cat.grupos) {
      const achado = grupo.produtos.find((p) => p.id === id);
      if (achado) return achado;
    }
  }
  return null;
}

function adicionarAoCarrinho(id) {
  const item = carrinho.find((i) => i.id === id);
  if (item) {
    item.qtd += 1;
  } else {
    carrinho.push({ id, qtd: 1 });
  }
  salvarCarrinho();
  renderCarrinho();
  atualizarContadorCarrinho();
}

function alterarQtd(id, delta) {
  const item = carrinho.find((i) => i.id === id);
  if (!item) return;
  item.qtd += delta;
  if (item.qtd <= 0) {
    carrinho = carrinho.filter((i) => i.id !== id);
  }
  salvarCarrinho();
  renderCarrinho();
  atualizarContadorCarrinho();
}

function removerDoCarrinho(id) {
  carrinho = carrinho.filter((i) => i.id !== id);
  salvarCarrinho();
  renderCarrinho();
  atualizarContadorCarrinho();
}

function atualizarContadorCarrinho() {
  const el = document.getElementById("cart-count");
  if (!el) return;
  const total = carrinho.reduce((s, i) => s + i.qtd, 0);
  el.textContent = total;
  el.classList.toggle("hidden", total === 0);
}

function renderCarrinho() {
  const wrap = document.getElementById("cart-items");
  if (!wrap) return;
  wrap.innerHTML = "";

  if (carrinho.length === 0) {
    wrap.innerHTML = `<div class="cart-empty">Sua sacola mística está vazia.<br>Escolha algumas peças e volte aqui.</div>`;
    return;
  }

  carrinho.forEach((item) => {
    const produto = encontrarProdutoPorId(item.id);
    if (!produto) return;
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <div class="cart-item-info">
        <h5>${produto.nome}</h5>
        <div class="cart-item-qty">
          <button type="button" data-action="dec" aria-label="Diminuir quantidade">–</button>
          <span>${item.qtd}</span>
          <button type="button" data-action="inc" aria-label="Aumentar quantidade">+</button>
        </div>
        <button type="button" class="cart-item-remove" data-action="remove">Remover</button>
      </div>
    `;
    row.querySelector('[data-action="inc"]').addEventListener("click", () => alterarQtd(item.id, 1));
    row.querySelector('[data-action="dec"]').addEventListener("click", () => alterarQtd(item.id, -1));
    row.querySelector('[data-action="remove"]').addEventListener("click", () => removerDoCarrinho(item.id));
    wrap.appendChild(row);
  });
}

function montarMensagemCarrinho() {
  const nota = document.getElementById("cart-note").value.trim();
  let msg = "Olá! Vim pelo site da ALQUIMYSTICA ✨\n\nGostaria de fazer este pedido:\n";
  carrinho.forEach((item) => {
    const produto = encontrarProdutoPorId(item.id);
    if (!produto) return;
    msg += `\n• ${produto.nome} — Qtd: ${item.qtd}`;
  });
  if (nota) {
    msg += `\n\nObservações: ${nota}`;
  }
  msg += "\n\nPode confirmar disponibilidade e valores? 🙏";
  return msg;
}

function initCarrinho() {
  carregarCarrinho();
  atualizarContadorCarrinho();
  renderCarrinho();

  const overlay = document.getElementById("cart-overlay");
  const drawer = document.getElementById("cart-drawer");
  const abrir = document.getElementById("cart-toggle");
  const fechar = document.getElementById("cart-close");
  const finalizar = document.getElementById("cart-checkout");

  function abrirCarrinho() {
    overlay.classList.add("open");
    drawer.classList.add("open");
  }
  function fecharCarrinho() {
    overlay.classList.remove("open");
    drawer.classList.remove("open");
  }

  abrir.addEventListener("click", abrirCarrinho);
  fechar.addEventListener("click", fecharCarrinho);
  overlay.addEventListener("click", fecharCarrinho);

  finalizar.addEventListener("click", () => {
    if (carrinho.length === 0) return;
    const msg = montarMensagemCarrinho();
    window.open(linkWhatsApp(msg), "_blank", "noopener");
  });
}

/* ---------- renderização do catálogo ---------- */
function renderCatalogo() {
  const host = document.getElementById("catalogo-host");
  const navHost = document.getElementById("cat-nav");
  if (!host) return;

  CATALOGO.forEach((cat) => {
    // pílula de navegação
    const pill = document.createElement("button");
    pill.type = "button";
    pill.className = "cat-pill";
    pill.textContent = cat.nome;
    pill.addEventListener("click", () => {
      document.getElementById(`cat-${cat.id}`).scrollIntoView({ behavior: "smooth", block: "start" });
    });
    navHost.appendChild(pill);

    // bloco da categoria
    const bloco = document.createElement("div");
    bloco.className = "cat-block";
    bloco.id = `cat-${cat.id}`;

    const head = document.createElement("div");
    head.className = "cat-block-head";
    head.innerHTML = `<h3>${cat.nome}</h3>`;
    bloco.appendChild(head);

    if (cat.descricao) {
      const desc = document.createElement("p");
      desc.className = "cat-block-desc";
      desc.textContent = cat.descricao;
      bloco.appendChild(desc);
    }

    cat.grupos.forEach((grupo) => {
      const nomeGrupo = document.createElement("div");
      nomeGrupo.className = "grupo-nome";
      nomeGrupo.textContent = grupo.nome;
      bloco.appendChild(nomeGrupo);

      const grid = document.createElement("div");
      grid.className = "product-grid";

      grupo.produtos.forEach((produto) => {
        const card = document.createElement("article");
        card.className = "card";
        card.innerHTML = `
          <div class="card-media">
            <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">
          </div>
          <div class="card-body">
            <h4>${produto.nome}</h4>
            <p>${produto.descricao}</p>
            <div class="card-actions">
              <a class="card-order" href="${linkWhatsApp(mensagemProdutoUnico(produto))}" target="_blank" rel="noopener">
                Fazer pedido →
              </a>
              <button type="button" class="add-cart" title="Adicionar à sacola" aria-label="Adicionar ${produto.nome} à sacola">+</button>
            </div>
          </div>
        `;
        const addBtn = card.querySelector(".add-cart");
        addBtn.addEventListener("click", () => {
          adicionarAoCarrinho(produto.id);
          addBtn.classList.remove("added");
          void addBtn.offsetWidth;
          addBtn.classList.add("added");
        });
        grid.appendChild(card);
      });

      bloco.appendChild(grid);
    });

    host.appendChild(bloco);
  });

  // aviso de categorias futuras, se quiser sinalizar que o catálogo está crescendo
}

/* ---------- init geral ---------- */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("ano").textContent = new Date().getFullYear();
  montarHeroMandala();
  montarSobreMandala();
  initNavToggle();
  renderCatalogo();
  initCarrinho();
});
