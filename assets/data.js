/* ============================================================
   ALQUIMYSTICA — catálogo de produtos
   Para adicionar uma nova categoria, copie o bloco de um
   "grupo" e ajuste id / nome / produtos. Cada produto precisa
   de: id, nome, imagem (caminho relativo) e descricao curta.
   O preço é opcional — deixe null se ela preferir combinar
   valores direto no WhatsApp.
   ============================================================ */

const WHATSAPP_NUMERO = "5511913299693";

const CATALOGO = [
  {
    id: "incensarios",
    nome: "Incensários",
    eyebrow: "Base & Fumaça",
    descricao:
      "Peças pintadas à mão, ponto a ponto, para acender incenso e criar seu altar particular.",
    grupos: [
      {
        id: "incensario-mandala",
        nome: "Formato Mandala",
        produtos: [
          {
            id: "inc-mandala-01",
            nome: "Incensário Mandala Arco-Íris",
            imagem: "assets/mandala1.png",
            descricao:
              "Pétalas em pontilhismo multicolorido sobre base preta — energia e movimento em cada camada de cor.",
          },
          {
            id: "inc-mandala-02",
            nome: "Incensário Mandala Chakras",
            imagem: "assets/mandala2.png",
            descricao:
              "Sete pétalas nas cores dos chakras, unidas ao centro — equilíbrio para o ambiente de meditação.",
          },
          {
            id: "inc-mandala-03",
            nome: "Incensário Mandala Dourada",
            imagem: "assets/mandala3.png",
            descricao:
              "Traços dourados sobre pontilhismo em tons de terra — um toque solar para compor seu cantinho.",
          },
        ],
      },
      {
        id: "incensario-olho-grego",
        nome: "Olho Grego",
        produtos: [
          {
            id: "inc-olho-01",
            nome: "Incensário Olho Grego Dourado",
            imagem: "assets/olho-grego-01.png",
            descricao:
              "Olhos protetores em azul profundo emoldurados em dourado — proteção e boas energias para a casa.",
          },
          {
            id: "inc-olho-02",
            nome: "Incensário Olho Grego Azul Royal",
            imagem: "assets/olho-grego-02.png",
            descricao:
              "Círculos concêntricos em degradê de azul — o clássico amuleto grego em formato de pontilhismo.",
          },
          {
            id: "inc-olho-03",
            nome: "Incensário Olho Grego Noite",
            imagem: "assets/olho-grego-03.png",
            descricao:
              "Fundo preto profundo com pétalas em azul turquesa — elegância e proteção lado a lado.",
          },
        ],
      },
      {
        id: "incensario-religioso",
        nome: "Religiosos",
        produtos: [
          {
            id: "inc-rel-01",
            nome: "Incensário Ervas & Elementos",
            imagem: "assets/religioso-01.png",
            descricao:
              "Pontilhismo em tons de verde com símbolos de ervas ao centro — voltado a rituais de limpeza e cura.",
          },
          {
            id: "inc-rel-02",
            nome: "Incensário Pé de Anjo",
            imagem: "assets/religioso-02.png",
            descricao:
              "Detalhe de pegada pintado à mão sobre fundo violeta — fé e delicadeza em cada ponto.",
          },
          {
            id: "inc-rel-03",
            nome: "Incensário Iemanjá",
            imagem: "assets/religioso-03.png",
            descricao:
              "Ondas em azul e prata com estrela-do-mar — uma homenagem às águas e à Rainha do Mar.",
          },
        ],
      },
      {
        id: "incensario-cimento",
        nome: "Cimento",
        produtos: [
          {
            id: "inc-cimento-01",
            nome: "Incensário Hamsá Ritual",
            imagem: "assets/cimento-01.png",
            descricao:
              "Mão de Hamsá entalhada em madeira, com mandala em azul e branco ao fundo — proteção e boas energias em composição de altar.",
          },
          {
            id: "inc-cimento-02",
            nome: "Incensário Hamsá Lilás",
            imagem: "assets/cimento-02.png",
            descricao:
              "Peça em cimento no formato de mão de Hamsá, pintada em lilás com detalhes em relevo — proteção com um toque delicado de cor.",
          },
          {
            id: "inc-cimento-03",
            nome: "Incensário Hamsá Dourada",
            imagem: "assets/cimento-03.png",
            descricao:
              "A mesma Hamsá em acabamento dourado espelhado — símbolo de proteção com presença luxuosa sobre qualquer superfície.",
          },
        ],
      },
      {
        id: "incensario-horizontal",
        nome: "Horizontal",
        produtos: [
          {
            id: "inc-horiz-01",
            nome: "Incensário Horizontal Om",
            imagem: "assets/horizontal-01.png",
            descricao:
              "Régua em madeira com pontilhismo laranja e símbolo Om entalhado nas pontas — formato clássico para varetas longas.",
          },
          {
            id: "inc-horiz-02",
            nome: "Incensário Horizontal Olhos Protetores",
            imagem: "assets/horizontal-02.png",
            descricao:
              "Base alongada em madeira com olhos gregos pontilhados em azul e branco — proteção discreta para o dia a dia.",
          },
          {
            id: "inc-horiz-03",
            nome: "Incensário Horizontal Coleção Elementos",
            imagem: "assets/horizontal-03.png",
            descricao:
              "Linha de réguas pintadas à mão com temas variados — mandala colorida, corações, raios e folhagem — escolha o seu elemento.",
          },
        ],
      },
      {
        id: "incensario-cigano",
        nome: "Cigano",
        produtos: [
          {
            id: "inc-cigano-01",
            nome: "Incensário Cigano Flor Dourada",
            imagem: "assets/cigano-01.png",
            descricao:
              "Base redonda dourada com flor em pétalas azuis e verdes, rosas pintadas à mão e franjas coloridas — o clássico amuleto cigano da sorte.",
          },
          {
            id: "inc-cigano-02",
            nome: "Incensário Cigano Franjas da Fortuna",
            imagem: "assets/cigano-02.png",
            descricao:
              "Vista frontal do disco dourado com florzinha central e fitas multicoloridas — traz o colorido e a energia cigana para o altar.",
          },
          {
            id: "inc-cigano-03",
            nome: "Incensário Cigano Luz do Sol",
            imagem: "assets/cigano-03.png",
            descricao:
              "Mesma peça em pontilhismo dourado, flores e franjas — aqui à luz natural, realçando o brilho metálico da pintura.",
          },
        ],
      },
    ],
  },
  {
    id: "madalas",
    nome: "Madalas 15cm x 3mm",
    eyebrow: "Mandalas para decoração",
    descricao:
      "Peças pintadas à mão, ponto a ponto, para acender incenso e criar seu altar particular.",
    grupos: [
      {
        id: "mandalas",
        nome: "Reiki",
        produtos: [
          {
            id: "mand-reiki-01",
            nome: "Mandala Reiki DaikoMio",
            imagem: "assets/reiki-01.png",
            descricao:
              "Pétalas em pontilhismo multicolorido sobre base preta — energia e movimento em cada camada de cor.",
          },
          {
            id: "mand-reiki-02",
            nome: "Mandala Reiki SeiHeki",
            imagem: "assets/reiki-02.png",
            descricao:
              "Sete pétalas nas cores dos chakras, unidas ao centro — equilíbrio para o ambiente de meditação.",
          },
          {
            id: "mand-reiki-03",
            nome: "Mandala Reiki ChoKuRei",
            imagem: "assets/reiki-03.png",
            descricao:
              "Traços dourados sobre pontilhismo em tons de terra — um toque solar para compor seu cantinho.",
          },
        ],
      },
      {
        id: "mandalas-trio",
        nome: "Trio Mandalas",
        produtos: [
          {
            id: "mand-trio-01",
            nome: "Trio Mandalas Reiki",
            imagem: "assets/trio-01.png",
            descricao:
              "Olhos protetores em azul profundo emoldurados em dourado — proteção e boas energias para a casa.",
          },
          {
            id: "mand-trio-02",
            nome: "Trio Mandalas Nossa Senhora Aparecida",
            imagem: "assets/trio-02.png",
            descricao:
              "Círculos concêntricos em degradê de azul — o clássico amuleto grego em formato de pontilhismo.",
          },
          {
            id: "mand-trio-03",
            nome: "Trio Mandalas Olho Grego",
            imagem: "assets/trio-03.png",
            descricao:
              "Fundo preto profundo com pétalas em azul turquesa — elegância e proteção lado a lado.",
          },
        ],
      },
      {
        id: "mandalas-outras",
        nome: "Mandalas Diversas",
        produtos: [
          {
            id: "mand-div-01",
            nome: "Mandala Mão de Hamsá com Olho Grego",
            imagem: "assets/diversas-01.png",
            descricao:
              "Fundo preto profundo com mão de Hamsá e olho grego — elegância e proteção lado a lado.",
          },
          {
            id: "mand-div-02",
            nome: "Mandala Flor de Lótus",
            imagem: "assets/diversas-02.png",
            descricao:
              "Pontilhismo em tons de roxo com formato de flor de lótus — paz e delicadeza em cada ponto.",
          },
          {
            id: "mand-div-03",
            nome: "Mandala Arvore da Vida",
            imagem: "assets/diversas-03.png",
            descricao:
              "Arvores da vida em pontilhismo verde e marrom com borda laranja — símbolo de crescimento e conexão com a natureza.",
          },
        ],
      },
    ],
  },
  {
    id: "madalas-maiores",
    nome: "Madalas 30cm x 3mm",
    eyebrow: "Mandalas para decoração",
    descricao:
      "Peças pintadas à mão, ponto a ponto, para acender incenso e criar seu altar particular.",
    grupos: [
      {
        id: "mandalas-nossa-senhora-aparecida",
        nome: " Nossa Senhora Aparecida",
        produtos: [
          {
            id: "mand-nossa-01",
            nome: "Mandala Nossa Senhora Aparecida",
            imagem: "assets/nossa-01.png",
            descricao:
              "Círculos concêntricos em degradê de azul — o clássico amuleto grego em formato de pontilhismo.",
          },
          {
            id: "mand-nossa-02",
            nome: "Mandala Nossa Senhora Aparecida",
            imagem: "assets/nossa-02.png",
            descricao:
              "Círculos concêntricos em degradê de azul — o clássico amuleto grego em formato de pontilhismo.",
          },
          {
            id: "mand-nossa-03",
            nome: "Mandala Nossa Senhora Aparecida",
            imagem: "assets/nossa-03.png",
            descricao:
              "Círculos concêntricos em degradê de azul — o clássico amuleto grego em formato de pontilhismo.",
          },
        ],
      },
      {
        id: "mandalas-culturas",
        nome: "Mandalas de Culturas",
        produtos: [
          {
            id: "mand-cul-01",
            nome: "Mandala Flor",
            imagem: "assets/culturas-01.png",
            descricao:
              "Pontilhismo em tons de azul com formato de flor — delicadeza e harmonia em cada ponto.",
          },
          {
            id: "mand-cul-02",
            nome: "Mandala Iemanja (com areia da praia)",
            imagem: "assets/culturas-02.png",
            descricao:
              "Pontilhismo em tons de azul com formato de Iemanja — delicadeza e harmonia em cada ponto, com areia da praia para trazer a energia do mar.",
          },
          {
            id: "mand-cul-03",
            nome: "Mandala Oxum",
            imagem: "assets/culturas-03.png",
            descricao:
              "Pontilhismo em tons de amarelo com formato de Oxum — força e fertilidade em cada ponto.",
          },
        ],
      },
    ],
  },
];
