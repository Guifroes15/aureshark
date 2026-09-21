import Link from "next/link";
import PageHeader from "@/components/page-header";
import StatCard from "@/components/stat-card";
import ProductThumb from "@/components/product-thumb";
import { SparkleIcon } from "@/components/icons";
import { datasComerciais, fila } from "@/lib/data";

export default function InicioPage() {
  return (
    <>
      <PageHeader eyebrow="SEMANA DE 21 A 27 DE SETEMBRO" title="Bom dia, Aurora">
        <Link
          href="/creators"
          className="flex min-h-[44px] items-center rounded-[9px] border border-[#D5CFE7] bg-surface px-4 text-[13.5px] font-semibold text-ink no-underline"
        >
          Contratar creator
        </Link>
        <Link
          href="/gerar"
          className="flex min-h-[44px] items-center gap-2 rounded-[9px] bg-primary px-4 text-[13.5px] font-semibold text-white no-underline hover:bg-primary-hover"
        >
          <SparkleIcon />
          Gerar a semana
        </Link>
      </PageHeader>

      <div className="flex min-h-0 flex-grow flex-col gap-[18px] px-7 py-6">
        <div className="grid grid-cols-2 gap-3.5 lg:grid-cols-4">
          <StatCard value={4} label="artes esperando sua aprovação" tone="primary" />
          <StatCard value={6} label="publicações agendadas" />
          <StatCard value={2} label="vídeos de creator para revisar" />
          <StatCard value={1} label="campanha de UGC em andamento" tone="success" />
        </div>

        <div className="flex min-h-0 flex-grow flex-col gap-4 lg:flex-row">
          <section className="flex min-w-0 flex-grow flex-col gap-3.5 rounded-2xl border border-line bg-surface p-5">
            <div className="flex items-baseline gap-2.5">
              <h2 className="m-0 flex-grow font-display text-base font-bold tracking-[-0.01em] text-ink">
                Precisa da sua aprovação
              </h2>
              <Link href="/aprovados" className="text-[12.5px] font-semibold no-underline">
                Ver tudo
              </Link>
            </div>

            <div className="flex flex-col gap-3.5">
              {fila.map((f) => (
                <div
                  key={f.titulo}
                  className="flex items-center gap-3.5 rounded-[11px] border border-[#E2E8F0] p-3"
                >
                  <ProductThumb />
                  <span className="flex min-w-0 flex-grow flex-col gap-0.5">
                    <span className="text-[13.5px] font-semibold text-ink">{f.titulo}</span>
                    <span className="text-xs text-ink-tertiary">{f.meta}</span>
                  </span>
                  <span className="rounded-[5px] bg-tint px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-primary">
                    {f.tipo}
                  </span>
                  <Link
                    href="/gerar"
                    className="flex min-h-[44px] items-center rounded-lg bg-ink px-3.5 text-[12.5px] font-semibold text-white no-underline"
                  >
                    Revisar
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section className="flex w-full flex-shrink-0 flex-col gap-3.5 rounded-2xl border border-line bg-surface p-5 lg:w-[392px]">
            <div className="flex items-baseline gap-2.5">
              <h2 className="m-0 flex-grow font-display text-base font-bold tracking-[-0.01em] text-ink">
                Calendário comercial
              </h2>
              <span className="font-mono text-[10px] font-semibold tracking-[0.1em] text-ink-tertiary">
                OUTUBRO
              </span>
            </div>

            <div className="flex flex-col">
              {datasComerciais.map((d) => (
                <div
                  key={d.dia + d.data}
                  className="flex gap-3 border-b border-[#E9EEF4] pb-3 last:border-b-0"
                >
                  <span className="flex w-11 flex-shrink-0 flex-col items-center pt-0.5">
                    <span className="font-display text-[19px] font-extrabold tracking-[-0.03em] text-primary">
                      {d.dia}
                    </span>
                    <span className="font-mono text-[9px] font-semibold tracking-[0.1em] text-ink-tertiary">
                      OUT
                    </span>
                  </span>
                  <span className="flex min-w-0 flex-col gap-0.5">
                    <span className="text-[13.5px] font-semibold text-ink">{d.data}</span>
                    <span className="text-xs leading-[1.5] text-ink-secondary">{d.acao}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-auto rounded-[11px] bg-tint p-3.5">
              <p className="m-0 mb-2 text-[12.5px] leading-[1.5] text-tint-fg">
                O calendário do ano inteiro já está montado. Cada data vem com a copy e a
                ação definidas antes de qualquer arte existir.
              </p>
              <Link href="#" className="text-[12.5px] font-semibold no-underline">
                Abrir o ano completo
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
