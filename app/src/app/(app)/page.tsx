"use client";

import Link from "next/link";
import PageHeader from "@/components/page-header";
import StatCard from "@/components/stat-card";
import { SparkleIcon } from "@/components/icons";
import { nomeMes, proximasDatasComerciais } from "@/lib/data";
import { usePosts } from "@/lib/posts-store";

export default function InicioPage() {
  const { posts, hidratado } = usePosts();
  const aguardando = posts.filter((p) => p.status === "aguardando");
  const agendadas = posts.filter((p) => p.status === "agendada");
  const proximasDatas = proximasDatasComerciais(4);

  return (
    <>
      <PageHeader eyebrow="PAINEL" title="Bom dia!">
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
          Gerar publicação
        </Link>
      </PageHeader>

      <div className="flex min-h-0 flex-grow flex-col gap-[18px] px-4 py-4 lg:px-7 lg:py-6">
        <div className="grid grid-cols-2 gap-3.5 lg:grid-cols-4">
          <StatCard value={hidratado ? aguardando.length : 0} label="artes esperando sua aprovação" tone="primary" />
          <StatCard value={hidratado ? agendadas.length : 0} label="publicações agendadas" />
          <StatCard value={0} label="vídeos de creator para revisar" />
          <StatCard value={0} label="campanha de UGC em andamento" tone="success" />
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

            {hidratado && aguardando.length === 0 && (
              <div className="flex flex-grow flex-col items-center justify-center gap-2 py-10 text-center">
                <span className="text-sm font-semibold text-ink-secondary">
                  Nada esperando aprovação
                </span>
                <span className="max-w-[36ch] text-xs text-ink-tertiary">
                  Envie suas primeiras artes em &quot;Gerar publicações&quot; para começar.
                </span>
                <Link
                  href="/gerar"
                  className="mt-2 flex min-h-10 items-center rounded-lg bg-primary px-4 text-xs font-semibold text-white no-underline hover:bg-primary-hover"
                >
                  Gerar publicação
                </Link>
              </div>
            )}

            <div className="flex flex-col gap-3.5">
              {aguardando.map((f) => (
                <div
                  key={f.id}
                  className="flex items-center gap-3.5 rounded-[11px] border border-[#E2E8F0] p-3"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={f.imagemUrl}
                    alt={f.titulo}
                    className="h-[54px] w-[54px] flex-shrink-0 rounded-lg border border-line object-cover"
                  />
                  <span className="flex min-w-0 flex-grow flex-col gap-0.5">
                    <span className="text-[13.5px] font-semibold text-ink">{f.titulo}</span>
                    <span className="text-xs text-ink-tertiary">Aguardando aprovação</span>
                  </span>
                  <span className="rounded-[5px] bg-tint px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-primary">
                    {f.tipo}
                  </span>
                  <Link
                    href="/aprovados"
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
                PRÓXIMAS DATAS
              </span>
            </div>

            <div className="flex flex-col">
              {proximasDatas.map((d) => (
                <div
                  key={`${d.mes}-${d.dia}`}
                  className="flex gap-3 border-b border-[#E9EEF4] pb-3 last:border-b-0"
                >
                  <span className="flex w-11 flex-shrink-0 flex-col items-center pt-0.5">
                    <span className="font-display text-[19px] font-extrabold tracking-[-0.03em] text-primary">
                      {String(d.dia).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[9px] font-semibold tracking-[0.1em] text-ink-tertiary">
                      {nomeMes(d.mes)}
                    </span>
                  </span>
                  <span className="flex min-w-0 flex-col gap-0.5">
                    <span className="text-[13.5px] font-semibold text-ink">{d.nome}</span>
                    <span className="text-xs leading-[1.5] text-ink-secondary">{d.sugestao}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-auto rounded-[11px] bg-tint p-3.5">
              <p className="m-0 mb-2 text-[12.5px] leading-[1.5] text-tint-fg">
                Gere o calendário do ano inteiro com IA, com data, nome e sugestão de ação prontos
                antes de qualquer arte existir.
              </p>
              <Link href="/planejamento" className="text-[12.5px] font-semibold no-underline">
                Abrir o planejamento
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
