export type DataComercial = {
  mes: number;
  dia: number;
  nome: string;
  sugestao: string;
};

export const calendarioComercial: DataComercial[] = [
  { mes: 1, dia: 1, nome: "Ano Novo", sugestao: "Post de recomeço e metas do ano, sem oferta agressiva logo na virada." },
  { mes: 1, dia: 15, nome: "Liquidação de verão", sugestao: "Anunciar a liquidação de fim de coleção de verão." },
  { mes: 1, dia: 25, nome: "Volta às aulas", sugestao: "Abrir a campanha de material e uniformes duas semanas antes." },
  { mes: 2, dia: 14, nome: "Carnaval", sugestao: "Horário de funcionamento especial e produtos de viagem ou verão." },
  { mes: 3, dia: 8, nome: "Dia Internacional da Mulher", sugestao: "Homenagem e oferta voltada ao público feminino." },
  { mes: 4, dia: 5, nome: "Páscoa", sugestao: "Produtos e ofertas temáticas, ação voltada à família." },
  { mes: 4, dia: 21, nome: "Tiradentes", sugestao: "Feriado prolongado: horário especial e post de aviso." },
  { mes: 5, dia: 10, nome: "Dia das Mães", sugestao: "Maior data do primeiro semestre: campanha com 3 semanas de antecedência." },
  { mes: 6, dia: 12, nome: "Dia dos Namorados", sugestao: "Kits e combos para presente, segunda maior data do semestre." },
  { mes: 6, dia: 24, nome: "Festa Junina", sugestao: "Ambientação temática e ofertas de inverno." },
  { mes: 7, dia: 20, nome: "Dia do Amigo", sugestao: "Promoção \"traga um amigo\" ou combo para duas pessoas." },
  { mes: 8, dia: 9, nome: "Dia dos Pais", sugestao: "Campanha com 3 semanas de antecedência, foco em presente prático." },
  { mes: 9, dia: 7, nome: "Independência do Brasil", sugestao: "Post de feriado, horário especial de funcionamento." },
  { mes: 9, dia: 15, nome: "Dia do Cliente", sugestao: "Oferta exclusiva pra quem já comprou, agradecimento à base." },
  { mes: 10, dia: 12, nome: "Dia das Crianças", sugestao: "Abrir a campanha de infantil uma semana antes." },
  { mes: 10, dia: 15, nome: "Dia do Professor", sugestao: "Oferta relâmpago de um dia, público local." },
  { mes: 11, dia: 2, nome: "Dia de Finados", sugestao: "Feriado: aviso de horário de funcionamento." },
  { mes: 11, dia: 20, nome: "Consciência Negra", sugestao: "Conteúdo de marca e representatividade, se fizer sentido pro negócio." },
  { mes: 11, dia: 27, nome: "Black Friday", sugestao: "Maior data do ano: lista de espera e teaser duas semanas antes." },
  { mes: 11, dia: 30, nome: "Cyber Monday", sugestao: "Extensão digital da Black Friday." },
  { mes: 12, dia: 25, nome: "Natal", sugestao: "Campanha com 4 semanas de antecedência, sugestões por faixa de preço." },
  { mes: 12, dia: 31, nome: "Véspera de Ano Novo", sugestao: "Balanço do ano e agradecimento aos clientes." },
];

const NOMES_MES = [
  "JAN", "FEV", "MAR", "ABR", "MAI", "JUN",
  "JUL", "AGO", "SET", "OUT", "NOV", "DEZ",
];

export function nomeMes(mes: number) {
  return NOMES_MES[mes - 1];
}

export type DataComercialComOcorrencia = DataComercial & { ocorreEm: Date };

export function proximasDatasComerciais(
  quantidade: number,
  apartirDe: Date = new Date(),
): DataComercialComOcorrencia[] {
  const hoje = new Date(apartirDe.getFullYear(), apartirDe.getMonth(), apartirDe.getDate());
  const comOcorrencia = calendarioComercial.map((item) => {
    let ano = hoje.getFullYear();
    let ocorreEm = new Date(ano, item.mes - 1, item.dia);
    if (ocorreEm < hoje) {
      ano += 1;
      ocorreEm = new Date(ano, item.mes - 1, item.dia);
    }
    return { ...item, ocorreEm };
  });
  comOcorrencia.sort((a, b) => a.ocorreEm.getTime() - b.ocorreEm.getTime());
  return comOcorrencia.slice(0, quantidade);
}

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

export const creators: Creator[] = [];
