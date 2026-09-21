export type FilaItem = {
  titulo: string;
  meta: string;
  tipo: string;
};

export type DataComercialItem = {
  dia: string;
  data: string;
  acao: string;
};

export const fila: FilaItem[] = [
  {
    titulo: "Chegada da coleção de verão",
    meta: "Publicar terça, 22/09 às 18h30",
    tipo: "Carrossel",
  },
  {
    titulo: "Tênis branco — prova social",
    meta: "Publicar quarta, 23/09 às 12h",
    tipo: "Estático",
  },
  {
    titulo: "Roteiro: 3 jeitos de usar",
    meta: "Roteiro pronto, aguarda gravação",
    tipo: "Vídeo",
  },
  {
    titulo: "Última semana da promoção",
    meta: "Publicar sábado, 27/09 às 10h",
    tipo: "Estático",
  },
];

export type ArteTemplate =
  | "produto-claro"
  | "foto-rodape"
  | "frase-grande"
  | "antes-depois"
  | "grade-numeracao"
  | "solado";

export type ArteOpcao = {
  id: number;
  template: ArteTemplate;
  legenda: string;
};

export const gerarBrief = {
  eyebrow: "PLANEJAMENTO · 23 DE SETEMBRO · ESTÁTICO",
  titulo: "Tênis branco — prova social",
  identidadeFonte: "@auroracalcados",
  objetivo: "Converter quem já visitou a loja e não comprou",
  copyInicial:
    "Todo mundo tem um branco. O seu aguenta a semana inteira? Numeração 34 ao 40 na loja do Iguatemi.",
  produto: {
    nome: "Tênis Aurora Base branco",
    origem: "Puxado do ERP · 38 pares em estoque",
  },
  estiloTags: ["tipografia serifada", "foto em ambiente real", "tom direto, sem gíria"],
};

const legendasPorTemplate: Record<ArteTemplate, string> = {
  "produto-claro": "Produto em fundo claro",
  "foto-rodape": "Pé na calçada, luz natural",
  "frase-grande": "Frase grande, produto pequeno",
  "antes-depois": "Antes e depois de uso",
  "grade-numeracao": "Grade de numeração",
  solado: "Detalhe do solado",
};

const ordemTemplates: ArteTemplate[] = [
  "produto-claro",
  "foto-rodape",
  "frase-grande",
  "antes-depois",
  "grade-numeracao",
  "solado",
];

export function criarOpcoes(inicioId: number, quantidade: number): ArteOpcao[] {
  return Array.from({ length: quantidade }, (_, i) => {
    const id = inicioId + i;
    const template = ordemTemplates[(id - 1) % ordemTemplates.length];
    return { id, template, legenda: legendasPorTemplate[template] };
  });
}

export const datasComerciais: DataComercialItem[] = [
  {
    dia: "05",
    data: "Dia das Crianças — aquecimento",
    acao: "Abrir a campanha de infantil uma semana antes",
  },
  {
    dia: "12",
    data: "Dia das Crianças",
    acao: "Post principal + stories com o combo de dois pares",
  },
  {
    dia: "15",
    data: "Dia do Professor",
    acao: "Oferta relâmpago de um dia, público local",
  },
  {
    dia: "31",
    data: "Entrada da Black Friday",
    acao: "Começar a lista de espera pelo direct",
  },
];
