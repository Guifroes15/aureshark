import Link from "next/link";
import PageHeader from "@/components/page-header";

const KPIS = ["Alcance", "Interações", "Salvamentos", "Visitas ao perfil"];

export default function MetricasPage() {
  return (
    <>
      <PageHeader eyebrow="INSTAGRAM AINDA NÃO CONECTADO" title="Métricas">
        <Link
          href="/gerar"
          className="flex min-h-[44px] items-center rounded-[9px] bg-primary px-4 text-[13.5px] font-semibold text-white no-underline hover:bg-primary-hover"
        >
          Gerar publicação
        </Link>
      </PageHeader>

      <div className="flex min-h-0 flex-grow flex-col gap-4 px-4 py-4 lg:px-7 lg:py-[22px]">
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4">
          {KPIS.map((k) => (
            <div key={k} className="flex flex-col gap-1 rounded-xl border border-line bg-surface px-[18px] py-[15px]">
              <span className="text-[12.5px] text-ink-secondary">{k}</span>
              <span className="font-display text-2xl font-extrabold tracking-[-0.03em] text-ink-tertiary">
                —
              </span>
              <span className="text-[11.5px] text-ink-tertiary">Sem dados ainda</span>
            </div>
          ))}
        </div>

        <div className="flex flex-grow items-center justify-center rounded-2xl border border-line bg-surface px-7 py-6">
          <div className="flex flex-col items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-tint">
              <svg width="26" height="26" viewBox="0 0 16 16" fill="none" stroke="#146B9C" strokeWidth={1.5} strokeLinecap="round" aria-hidden="true">
                <path d="M2.6 13.4V9.6M6.2 13.4V4.2M9.8 13.4V7.4M13.4 13.4V2.6" />
              </svg>
            </span>
            <h2 className="m-0 text-center font-display text-xl font-bold text-ink">
              Nenhuma métrica ainda
            </h2>
            <p className="m-0 max-w-[48ch] text-center text-sm leading-[1.6] text-ink-secondary">
              As métricas de alcance, interações e salvamentos aparecem aqui assim que você
              conectar o Instagram e tiver publicações no ar.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
