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
      "Peças pintadas à mão, ponto a ponto, para acender vareta e criar seu altar particular.",
    grupos: [
      {
        id: "incensario-mandala",
        nome: "Formato Mandala",
        produtos: [
          {
            id: "inc-mandala-01",
            nome: "Incensário Mandala Arco-Íris",
            imagem: "assets/images/incensarios/mandala-01.jpg",
            descricao:
              "Pétalas em pontilhismo multicolorido sobre base preta — energia e movimento em cada camada de cor.",
          },
          {
            id: "inc-mandala-02",
            nome: "Incensário Mandala Chakras",
            imagem: "assets/images/incensarios/mandala-02.jpg",
            descricao:
              "Sete pétalas nas cores dos chakras, unidas ao centro — equilíbrio para o ambiente de meditação.",
          },
          {
            id: "inc-mandala-03",
            nome: "Incensário Mandala Dourada",
            imagem: "assets/images/incensarios/mandala-03.jpg",
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
            imagem: "assets/images/incensarios/olho-grego-01.jpg",
            descricao:
              "Olhos protetores em azul profundo emoldurados em dourado — proteção e boas energias para a casa.",
          },
          {
            id: "inc-olho-02",
            nome: "Incensário Olho Grego Azul Royal",
            imagem: "assets/images/incensarios/olho-grego-02.jpg",
            descricao:
              "Círculos concêntricos em degradê de azul — o clássico amuleto grego em formato de pontilhismo.",
          },
          {
            id: "inc-olho-03",
            nome: "Incensário Olho Grego Noite",
            imagem: "assets/images/incensarios/olho-grego-03.jpg",
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
            imagem: "assets/images/incensarios/religioso-01.jpg",
            descricao:
              "Pontilhismo em tons de verde com símbolos de ervas ao centro — voltado a rituais de limpeza e cura.",
          },
          {
            id: "inc-rel-02",
            nome: "Incensário Pé de Anjo",
            imagem: "assets/images/incensarios/religioso-02.jpg",
            descricao:
              "Detalhe de pegada pintado à mão sobre fundo violeta — fé e delicadeza em cada ponto.",
          },
          {
            id: "inc-rel-03",
            nome: "Incensário Iemanjá",
            imagem: "assets/images/incensarios/religioso-03.jpg",
            descricao:
              "Ondas em azul e prata com estrela-do-mar — uma homenagem às águas e à Rainha do Mar.",
          },
        ],
      },
    ],
  },
];
