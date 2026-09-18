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
