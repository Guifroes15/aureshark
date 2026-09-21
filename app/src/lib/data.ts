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

export type Aguardando = {
  id: number;
  titulo: string;
  quando: string;
};

export type Agendada = {
  id: number;
  titulo: string;
  quando: string;
  rede: string;
};

export type Publicada = {
  id: number;
  titulo: string;
  metrica: string;
};

export const aguardandoInicial: Aguardando[] = [
  { id: 1, titulo: "Chegada da coleção de verão", quando: "Terça, 22/09 · 18h30 · carrossel" },
  { id: 2, titulo: "Tênis branco — prova social", quando: "Quarta, 23/09 · 12h · estático" },
  { id: 3, titulo: "Última semana da promoção", quando: "Sábado, 27/09 · 10h · estático" },
  { id: 4, titulo: "Bastidor da loja no sábado", quando: "Sábado, 27/09 · 17h · reels" },
];

export const agendadasInicial: Agendada[] = [
  { id: 101, titulo: "Sandália de festa — combinações", quando: "Hoje, 19h", rede: "IG + FB" },
  { id: 102, titulo: "Numeração 34 ao 40 chegou", quando: "Quinta, 24/09 · 11h", rede: "IG" },
  { id: 103, titulo: "Depoimento da cliente Rafa", quando: "Quinta, 24/09 · 20h", rede: "IG" },
  { id: 104, titulo: "Combo dois pares infantil", quando: "Sexta, 25/09 · 13h", rede: "IG + FB" },
  { id: 105, titulo: "Enquete: qual cor primeiro?", quando: "Sexta, 25/09 · 18h", rede: "IG" },
];

export const publicadas: Publicada[] = [
  { id: 201, titulo: "Look completo com mocassim", metrica: "Domingo · 2ª maior taxa de salvamento do mês" },
  { id: 202, titulo: "Chegou tamanho 41", metrica: "Sábado · 19 respostas no direct" },
  { id: 203, titulo: "Promoção de meia-estação", metrica: "Sexta · melhor alcance da semana" },
];

export type FeedGridCell =
  | "produto-claro"
  | "frase-italica"
  | "foto-calcada"
  | "solado"
  | "grade-numeracao"
  | "bastidor"
  | "mocassim"
  | "ultima-semana"
  | "depoimento";

export type FeedGridItem = {
  id: number;
  cell: FeedGridCell;
  status: "agendada" | "publicada";
};

export const feedGrid: FeedGridItem[] = [
  { id: 1, cell: "produto-claro", status: "agendada" },
  { id: 2, cell: "frase-italica", status: "agendada" },
  { id: 3, cell: "foto-calcada", status: "agendada" },
  { id: 4, cell: "solado", status: "agendada" },
  { id: 5, cell: "grade-numeracao", status: "agendada" },
  { id: 6, cell: "bastidor", status: "publicada" },
  { id: 7, cell: "mocassim", status: "publicada" },
  { id: 8, cell: "ultima-semana", status: "publicada" },
  { id: 9, cell: "depoimento", status: "publicada" },
];

export type FeedFilaItem = {
  id: number;
  titulo: string;
  quando: string;
  formato: string;
};

export const feedFilaInicial: FeedFilaItem[] = [
  { id: 1, titulo: "Sandália de festa — combinações", quando: "Hoje às 19h", formato: "CARROSSEL" },
  { id: 2, titulo: "Numeração 34 ao 40 chegou", quando: "Quinta, 24/09 às 11h", formato: "ESTÁTICO" },
  { id: 3, titulo: "Depoimento da cliente Rafa", quando: "Quinta, 24/09 às 20h", formato: "REELS" },
  { id: 4, titulo: "Combo dois pares infantil", quando: "Sexta, 25/09 às 13h", formato: "ESTÁTICO" },
  { id: 5, titulo: "Enquete: qual cor primeiro?", quando: "Sexta, 25/09 às 18h", formato: "ESTÁTICO" },
];

export type FeedMixItem = {
  nome: string;
  valor: string;
  largura: string;
  nivel: "alto" | "medio" | "baixo";
};

export const feedMix: FeedMixItem[] = [
  { nome: "Oferta e preço", valor: "45%", largura: "45%", nivel: "alto" },
  { nome: "Prova social", valor: "25%", largura: "25%", nivel: "medio" },
  { nome: "Produto e coleção", valor: "15%", largura: "15%", nivel: "baixo" },
  { nome: "Bastidor da loja", valor: "15%", largura: "15%", nivel: "baixo" },
];

export type Creator = {
  id: number;
  iniciais: string;
  nome: string;
  cidade: string;
  nichos: string[];
  nota: number;
  entregas: number;
  prazoDias: number;
  valor: number;
};

export const creators: Creator[] = [
  { id: 1, iniciais: "MB", nome: "Marina B.", cidade: "Belo Horizonte, MG", nichos: ["moda", "calçados"], nota: 4.9, entregas: 23, prazoDias: 4, valor: 180 },
  { id: 2, iniciais: "RT", nome: "Rafael T.", cidade: "Curitiba, PR", nichos: ["lifestyle", "calçados"], nota: 4.8, entregas: 17, prazoDias: 5, valor: 150 },
  { id: 3, iniciais: "JC", nome: "Juliana C.", cidade: "Florianópolis, SC", nichos: ["moda", "praia"], nota: 4.9, entregas: 31, prazoDias: 3, valor: 220 },
  { id: 4, iniciais: "DL", nome: "Diego L.", cidade: "Goiânia, GO", nichos: ["lifestyle", "esporte"], nota: 4.7, entregas: 12, prazoDias: 6, valor: 140 },
  { id: 5, iniciais: "PS", nome: "Paula S.", cidade: "Recife, PE", nichos: ["moda", "infantil"], nota: 5.0, entregas: 9, prazoDias: 5, valor: 165 },
  { id: 6, iniciais: "AV", nome: "André V.", cidade: "Campinas, SP", nichos: ["calçados", "unboxing"], nota: 4.6, entregas: 28, prazoDias: 4, valor: 195 },
];

export type PeriodoMetricas = "30 dias" | "7 dias" | "Este ano";

export type Kpi = { nome: string; valor: string; delta: string; base: string };
export type PontoAlcance = { label: string; valor: number };

export type DadosMetricas = {
  kpis: Kpi[];
  alcance: PontoAlcance[];
  legendaAlcance: string;
};

export const metricasPorPeriodo: Record<PeriodoMetricas, DadosMetricas> = {
  "30 dias": {
    kpis: [
      { nome: "Alcance", valor: "84,2 mil", delta: "18%", base: "contra 71,4 mil no período anterior" },
      { nome: "Interações", valor: "6.410", delta: "24%", base: "contra 5.170 no período anterior" },
      { nome: "Salvamentos", valor: "1.208", delta: "61%", base: "contra 750 no período anterior" },
      { nome: "Visitas ao perfil", valor: "3.940", delta: "12%", base: "contra 3.517 no período anterior" },
    ],
    alcance: [
      { label: "28/07", valor: 12100 },
      { label: "04/08", valor: 14900 },
      { label: "11/08", valor: 13300 },
      { label: "18/08", valor: 16800 },
      { label: "25/08", valor: 15400 },
      { label: "01/09", valor: 18800 },
      { label: "08/09", valor: 21400 },
      { label: "15/09", valor: 24300 },
    ],
    legendaAlcance:
      "Oito semanas. A virada é a semana em que a plataforma passou a montar o calendário.",
  },
  "7 dias": {
    kpis: [
      { nome: "Alcance", valor: "21,6 mil", delta: "9%", base: "contra 19,8 mil na semana anterior" },
      { nome: "Interações", valor: "1.540", delta: "14%", base: "contra 1.350 na semana anterior" },
      { nome: "Salvamentos", valor: "312", delta: "22%", base: "contra 256 na semana anterior" },
      { nome: "Visitas ao perfil", valor: "980", delta: "6%", base: "contra 924 na semana anterior" },
    ],
    alcance: [
      { label: "Seg", valor: 2600 },
      { label: "Ter", valor: 3100 },
      { label: "Qua", valor: 2900 },
      { label: "Qui", valor: 3400 },
      { label: "Sex", valor: 3800 },
      { label: "Sáb", valor: 2700 },
      { label: "Dom", valor: 3100 },
    ],
    legendaAlcance: "Últimos 7 dias contra os 7 dias anteriores.",
  },
  "Este ano": {
    kpis: [
      { nome: "Alcance", valor: "612 mil", delta: "34%", base: "contra 457 mil no ano anterior" },
      { nome: "Interações", valor: "48.900", delta: "41%", base: "contra 34.700 no ano anterior" },
      { nome: "Salvamentos", valor: "8.760", delta: "77%", base: "contra 4.950 no ano anterior" },
      { nome: "Visitas ao perfil", valor: "31.200", delta: "19%", base: "contra 26.200 no ano anterior" },
    ],
    alcance: [
      { label: "JAN", valor: 34000 },
      { label: "FEV", valor: 38000 },
      { label: "MAR", valor: 41000 },
      { label: "ABR", valor: 45000 },
      { label: "MAI", valor: 52000 },
      { label: "JUN", valor: 58000 },
      { label: "JUL", valor: 61000 },
      { label: "AGO", valor: 74000 },
      { label: "SET", valor: 89000 },
    ],
    legendaAlcance: "Mês a mês desde janeiro. A plataforma entrou em operação em julho.",
  },
};

export const metricasTop = [
  {
    titulo: "Calço e ando na rua",
    origem: "Vídeo de creator · Marina B.",
    metrica: "9.120 de alcance · 104 salvos",
  },
  {
    titulo: "Look completo com mocassim",
    origem: "Arte de IA · prova social",
    metrica: "6.480 de alcance · 71 salvos",
  },
  {
    titulo: "Chegou tamanho 41",
    origem: "Arte de IA · produto",
    metrica: "5.930 de alcance · 44 salvos",
  },
];

export const metricasFormatos = [
  { nome: "Prova social", valor: 96 },
  { nome: "Vídeo de creator", valor: 83 },
  { nome: "Bastidor da loja", valor: 52 },
  { nome: "Oferta e preço", valor: 37 },
];
