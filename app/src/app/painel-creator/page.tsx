"use client";

import { useState } from "react";
import PageHeader from "@/components/page-header";
import ProductThumb from "@/components/product-thumb";

type Convite = {
  id: number;
  marca: string;
  produto: string;
  valor: string;
  prazo: string;
  briefing: string;
};

const CONVITES_INICIAIS: Convite[] = [
  {
    id: 1,
    marca: "Aurora Calçados",
    produto: "Tênis Aurora Base branco · 36",
    valor: "R$ 180",
    prazo: "ENTREGA ATÉ 25/09",
    briefing:
      "Vídeo vertical de 30 a 45s calçando e andando na rua, comentando conforto e acabamento. Falar da numeração 34 ao 40, sem mencionar preço.",
  },
  {
    id: 2,
    marca: "Loja de moda no centro",
    produto: "Sandália de festa · 36",
    valor: "R$ 150",
    prazo: "ENTREGA ATÉ 28/09",
    briefing: "Três jeitos de usar a mesma sandália, corte rápido, foco em ocasião de festa e casamento.",
  },
  {
    id: 3,
    marca: "Marca de tênis infantil",
    produto: "Kit dois pares · 28 e 30",
    valor: "R$ 210",
    prazo: "ENTREGA ATÉ 02/10",
    briefing:
      "Vídeo de mãe mostrando o calce e a durabilidade depois de uma semana de escola. Criança pode aparecer só de pés.",
  },
];

const RANKING = [
  { titulo: "Perfil completo", nota: "Bio, cidade, valor e nichos preenchidos", feito: true },
  { titulo: "Responder convite em até 48h", nota: "Sua média hoje é de 9 horas", feito: true },
  { titulo: "5 entregas seguidas sem pedido de ajuste", nota: "Você está em 3 de 5", feito: false },
  { titulo: "Portfólio com 10 vídeos", nota: "Você tem 23 — meta batida", feito: true },
];

export default function PainelCreatorPage() {
  const [convites, setConvites] = useState(CONVITES_INICIAIS);
  const [emAndamento, setEmAndamento] = useState(2);

  function responder(id: number, aceitar: boolean) {
    setConvites((prev) => prev.filter((c) => c.id !== id));
    if (aceitar) setEmAndamento((v) => v + 1);
  }

  return (
    <>
      <PageHeader eyebrow="QUINTA, 18 DE SETEMBRO" title="Olá, Marina">
        <span className="flex items-center gap-[7px] rounded-full bg-tint px-3.5 py-2 text-[12.5px] font-semibold text-tint-fg">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M8 2.4l1.7 3.5 3.9.6-2.8 2.7.7 3.8L8 11.2l-3.5 1.8.7-3.8L2.4 6.5l3.9-.6Z" />
          </svg>
          Top 10% de entrega
        </span>
      </PageHeader>

      <div className="flex min-h-0 flex-grow flex-col gap-[18px] px-7 py-6">
        <div className="grid grid-cols-4 gap-3.5">
          <div className="flex flex-col gap-0.5 rounded-xl border border-line bg-surface px-[18px] py-4">
            <span className="font-display text-2xl font-extrabold tracking-[-0.03em] text-primary">
              {convites.length}
            </span>
            <span className="text-[12.5px] text-ink-secondary">convites esperando resposta</span>
          </div>
          <div className="flex flex-col gap-0.5 rounded-xl border border-line bg-surface px-[18px] py-4">
            <span className="font-display text-2xl font-extrabold tracking-[-0.03em] text-ink">
              {emAndamento}
            </span>
            <span className="text-[12.5px] text-ink-secondary">entregas em andamento</span>
          </div>
          <div className="flex flex-col gap-0.5 rounded-xl border border-line bg-surface px-[18px] py-4">
            <span className="font-display text-2xl font-extrabold tracking-[-0.03em] text-success">
              R$ 540
            </span>
            <span className="text-[12.5px] text-ink-secondary">liberado em setembro</span>
          </div>
          <div className="flex flex-col gap-0.5 rounded-xl border border-line bg-surface px-[18px] py-4">
            <span className="font-display text-2xl font-extrabold tracking-[-0.03em] text-ink">
              4,9
            </span>
            <span className="text-[12.5px] text-ink-secondary">nota média em 23 entregas</span>
          </div>
        </div>

        <div className="flex min-h-0 flex-grow gap-[18px]">
          <section className="flex min-w-0 flex-grow flex-col gap-3.5 rounded-2xl border border-line bg-surface p-5">
            <div className="flex items-baseline gap-2.5">
              <h2 className="m-0 flex-grow font-display text-base font-bold text-ink">
                Convites abertos
              </h2>
              <span className="text-xs text-ink-tertiary">
                Responda em até 48h para manter o ranking
              </span>
            </div>

            {convites.map((c) => (
              <div key={c.id} className="flex flex-col gap-3 rounded-xl border border-[#E2E8F0] p-4">
                <div className="flex items-center gap-3">
                  <ProductThumb size={44} />
                  <span className="flex min-w-0 flex-grow flex-col gap-0.5">
                    <span className="font-display text-[14.5px] font-bold text-ink">{c.marca}</span>
                    <span className="text-[12.5px] text-ink-tertiary">{c.produto}</span>
                  </span>
                  <span className="flex flex-col items-end">
                    <span className="font-display text-[17px] font-extrabold tracking-[-0.02em] text-success">
                      {c.valor}
                    </span>
                    <span className="font-mono text-[9px] font-semibold tracking-[0.08em] text-ink-tertiary">
                      100% PARA VOCÊ
                    </span>
                  </span>
                </div>

                <p className="m-0 text-[13px] leading-[1.55] text-ink-secondary">{c.briefing}</p>

                <div className="flex items-center gap-2.5">
                  <span className="rounded-md bg-[#F1F5F9] px-[9px] py-[5px] font-mono text-[10px] font-semibold tracking-[0.08em] text-ink-secondary">
                    {c.prazo}
                  </span>
                  <span className="flex-grow" />
                  <button
                    onClick={() => responder(c.id, false)}
                    className="flex min-h-[44px] items-center rounded-lg border border-line bg-surface px-3.5 text-[12.5px] font-semibold text-ink-secondary"
                  >
                    Recusar
                  </button>
                  <button
                    onClick={() => responder(c.id, true)}
                    className="flex min-h-[44px] items-center rounded-lg bg-primary px-4 text-[12.5px] font-semibold text-white hover:bg-primary-hover"
                  >
                    Aceitar e receber produto
                  </button>
                </div>
              </div>
            ))}

            {convites.length === 0 && (
              <p className="py-8 text-center text-sm text-ink-tertiary">
                Nenhum convite em aberto agora. Boas entregas trazem os próximos mais rápido.
              </p>
            )}
          </section>

          <section className="flex w-[330px] flex-shrink-0 flex-col gap-3.5">
            <div className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-[18px]">
              <h2 className="m-0 font-display text-[15px] font-bold text-ink">Seus ganhos</h2>
              <div className="flex flex-col gap-2.5">
                <span className="flex justify-between text-[13px]">
                  <span className="text-ink-secondary">Retido aguardando aprovação</span>
                  <span className="font-semibold text-ink">R$ 180,00</span>
                </span>
                <span className="flex justify-between text-[13px]">
                  <span className="text-ink-secondary">Liberado em setembro</span>
                  <span className="font-semibold text-success">R$ 540,00</span>
                </span>
                <span className="flex justify-between text-[13px]">
                  <span className="text-ink-secondary">Próximo pagamento</span>
                  <span className="font-semibold text-ink">Sexta, 19/09</span>
                </span>
              </div>
              <div className="rounded-[10px] bg-warning-bg p-3">
                <p className="m-0 text-xs leading-[1.55] text-[#4A3714]">
                  A marca tem 7 dias para responder o vídeo que você entregou ontem. Sem resposta, o
                  sistema aprova e libera o pagamento automaticamente.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-[18px]">
              <h2 className="m-0 font-display text-[15px] font-bold text-ink">Suba no ranqueamento</h2>
              {RANKING.map((r) => (
                <span key={r.titulo} className="flex items-start gap-2.5">
                  {r.feito ? (
                    <span className="mt-px flex h-[19px] w-[19px] flex-shrink-0 items-center justify-center rounded-full bg-success-bg">
                      <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="#0D6B45" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M3.6 8.4 6.4 11.2l6-6.4" />
                      </svg>
                    </span>
                  ) : (
                    <span className="mt-px h-[19px] w-[19px] flex-shrink-0 rounded-full border-[1.5px] border-[#D5CFE7]" />
                  )}
                  <span className="flex flex-col">
                    <span className="text-[13px] font-semibold text-ink">{r.titulo}</span>
                    <span className="text-[11.5px] leading-[1.5] text-ink-tertiary">{r.nota}</span>
                  </span>
                </span>
              ))}
            </div>

            <div className="mt-auto rounded-2xl bg-ink p-[18px]">
              <p className="m-0 mb-1.5 font-display text-sm font-bold text-white">
                Seu ranking é seu ativo
              </p>
              <p className="m-0 text-[12.5px] leading-[1.55] text-[#AFC3D6]">
                Quem entrega bem aparece primeiro na busca das lojas. Fechar por fora significa
                começar de novo do zero em outro lugar.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
