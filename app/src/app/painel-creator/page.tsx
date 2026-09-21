import Link from "next/link";
import PageHeader from "@/components/page-header";

const RANKING = [
  { titulo: "Perfil completo", nota: "Bio, cidade, valor e nichos preenchidos" },
  { titulo: "Portfólio com 5 vídeos", nota: "Mínimo para entrar no marketplace" },
  { titulo: "3 marcas atendidas", nota: "Referências de trabalhos anteriores" },
  { titulo: "Responder convites em até 48h", nota: "Ainda sem convites respondidos" },
];

export default function PainelCreatorPage() {
  return (
    <>
      <PageHeader eyebrow="PORTAL DO CREATOR" title="Olá!">
        <Link
          href="/creators/perfil"
          className="flex min-h-[44px] items-center rounded-[9px] bg-primary px-4 text-[13.5px] font-semibold text-white no-underline hover:bg-primary-hover"
        >
          Completar cadastro
        </Link>
      </PageHeader>

      <div className="flex min-h-0 flex-grow flex-col gap-[18px] px-7 py-6">
        <div className="grid grid-cols-4 gap-3.5">
          <div className="flex flex-col gap-0.5 rounded-xl border border-line bg-surface px-[18px] py-4">
            <span className="font-display text-2xl font-extrabold tracking-[-0.03em] text-ink-tertiary">0</span>
            <span className="text-[12.5px] text-ink-secondary">convites esperando resposta</span>
          </div>
          <div className="flex flex-col gap-0.5 rounded-xl border border-line bg-surface px-[18px] py-4">
            <span className="font-display text-2xl font-extrabold tracking-[-0.03em] text-ink-tertiary">0</span>
            <span className="text-[12.5px] text-ink-secondary">entregas em andamento</span>
          </div>
          <div className="flex flex-col gap-0.5 rounded-xl border border-line bg-surface px-[18px] py-4">
            <span className="font-display text-2xl font-extrabold tracking-[-0.03em] text-ink-tertiary">R$ 0</span>
            <span className="text-[12.5px] text-ink-secondary">liberado até agora</span>
          </div>
          <div className="flex flex-col gap-0.5 rounded-xl border border-line bg-surface px-[18px] py-4">
            <span className="font-display text-2xl font-extrabold tracking-[-0.03em] text-ink-tertiary">—</span>
            <span className="text-[12.5px] text-ink-secondary">nota média</span>
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

            <p className="py-8 text-center text-sm text-ink-tertiary">
              Nenhum convite ainda. Complete seu cadastro e portfólio para começar a aparecer nas
              buscas das lojas.
            </p>
          </section>

          <section className="flex w-[330px] flex-shrink-0 flex-col gap-3.5">
            <div className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-[18px]">
              <h2 className="m-0 font-display text-[15px] font-bold text-ink">Seus ganhos</h2>
              <div className="flex flex-col gap-2.5">
                <span className="flex justify-between text-[13px]">
                  <span className="text-ink-secondary">Retido aguardando aprovação</span>
                  <span className="font-semibold text-ink">R$ 0,00</span>
                </span>
                <span className="flex justify-between text-[13px]">
                  <span className="text-ink-secondary">Liberado até agora</span>
                  <span className="font-semibold text-ink">R$ 0,00</span>
                </span>
                <span className="flex justify-between text-[13px]">
                  <span className="text-ink-secondary">Próximo pagamento</span>
                  <span className="font-semibold text-ink">—</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-[18px]">
              <h2 className="m-0 font-display text-[15px] font-bold text-ink">Suba no ranqueamento</h2>
              {RANKING.map((r) => (
                <span key={r.titulo} className="flex items-start gap-2.5">
                  <span className="mt-px h-[19px] w-[19px] flex-shrink-0 rounded-full border-[1.5px] border-[#D5CFE7]" />
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
