"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/page-header";
import ProductThumb from "@/components/product-thumb";
import {
  agendadasInicial,
  aguardandoInicial,
  publicadas,
  type Agendada,
  type Aguardando,
} from "@/lib/data";

export default function AprovadosPage() {
  const [view, setView] = useState<"quadro" | "calendario">("quadro");
  const [aguardando, setAguardando] = useState<Aguardando[]>(aguardandoInicial);
  const [agendadas, setAgendadas] = useState<Agendada[]>(agendadasInicial);

  function aprovar(item: Aguardando) {
    setAguardando((prev) => prev.filter((a) => a.id !== item.id));
    setAgendadas((prev) => [
      { id: item.id, titulo: item.titulo, quando: item.quando, rede: "IG" },
      ...prev,
    ]);
  }

  function aprovarSemana() {
    if (aguardando.length === 0) return;
    setAgendadas((prev) => [
      ...aguardando.map((a) => ({ id: a.id, titulo: a.titulo, quando: a.quando, rede: "IG" })),
      ...prev,
    ]);
    setAguardando([]);
  }

  return (
    <>
      <PageHeader eyebrow="21 A 27 DE SETEMBRO · INSTAGRAM E FACEBOOK" title="Aprovadas e agenda">
        <div className="flex items-center overflow-hidden rounded-[9px] border border-[#D5CFE7]">
          <button
            onClick={() => setView("quadro")}
            className={`min-h-10 px-3.5 text-[12.5px] font-semibold ${
              view === "quadro" ? "bg-ink text-white" : "bg-surface text-ink-secondary"
            }`}
          >
            Quadro
          </button>
          <button
            onClick={() => setView("calendario")}
            className={`min-h-10 border-l border-[#D5CFE7] px-3.5 text-[12.5px] font-medium ${
              view === "calendario" ? "bg-ink text-white" : "bg-surface text-ink-secondary"
            }`}
          >
            Calendário
          </button>
        </div>
        <button
          onClick={aprovarSemana}
          disabled={aguardando.length === 0}
          className="flex min-h-[44px] items-center gap-2 rounded-[9px] bg-primary px-4 text-[13.5px] font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3.6 8.4 6.4 11.2l6-6.4" />
          </svg>
          Aprovar a semana inteira
        </button>
      </PageHeader>

      {view === "calendario" ? (
        <div className="flex flex-grow items-center justify-center px-7 py-6">
          <p className="text-sm text-ink-tertiary">A visão de calendário chega numa próxima etapa.</p>
        </div>
      ) : (
        <div className="flex min-h-0 flex-grow flex-col gap-4 px-7 py-[22px]">
          <div className="flex flex-grow gap-4">
            <section className="flex min-w-0 flex-grow flex-col gap-2.5 rounded-2xl border border-line bg-surface p-4">
              <div className="flex items-center gap-2 border-b border-[#E9EEF4] pb-2.5">
                <span className="h-2 w-2 rounded-full bg-warning" />
                <h2 className="m-0 flex-grow font-display text-sm font-bold text-ink">
                  Esperando você
                </h2>
                <span className="rounded-md bg-warning-bg px-2 py-[3px] font-mono text-[11px] font-semibold text-warning">
                  {aguardando.length}
                </span>
              </div>

              {aguardando.map((a) => (
                <div key={a.id} className="flex flex-col gap-2.5 rounded-[11px] border border-line p-3">
                  <div className="flex gap-2.5">
                    <ProductThumb size={58} />
                    <span className="flex min-w-0 flex-col gap-[3px]">
                      <span className="text-[13px] font-semibold leading-[1.35] text-ink">
                        {a.titulo}
                      </span>
                      <span className="text-[11.5px] text-ink-tertiary">{a.quando}</span>
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => aprovar(a)}
                      className="min-h-10 flex-grow rounded-lg bg-ink text-[12.5px] font-semibold text-white"
                    >
                      Aprovar
                    </button>
                    <Link
                      href="/gerar"
                      className="flex min-h-10 items-center rounded-lg border border-line px-3 text-[12.5px] font-semibold text-ink-secondary no-underline"
                    >
                      Refazer
                    </Link>
                  </div>
                </div>
              ))}

              {aguardando.length === 0 && (
                <p className="px-1 text-xs text-ink-tertiary">Tudo revisado por aqui.</p>
              )}
            </section>

            <section className="flex min-w-0 flex-grow flex-col gap-2.5 rounded-2xl border border-line bg-surface p-4">
              <div className="flex items-center gap-2 border-b border-[#E9EEF4] pb-2.5">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <h2 className="m-0 flex-grow font-display text-sm font-bold text-ink">
                  Aprovadas e agendadas
                </h2>
                <span className="rounded-md bg-tint px-2 py-[3px] font-mono text-[11px] font-semibold text-primary">
                  {agendadas.length}
                </span>
              </div>

              {agendadas.map((g) => (
                <div key={g.id} className="flex gap-2.5 rounded-[11px] border border-line p-2.5">
                  <ProductThumb size={52} bg="#F7F1EA" fill="#C4553A" />
                  <span className="flex min-w-0 flex-grow flex-col gap-[3px]">
                    <span className="text-[13px] font-semibold leading-[1.35] text-ink">
                      {g.titulo}
                    </span>
                    <span className="flex items-center gap-1.5 text-[11.5px] text-ink-tertiary">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.8}
                        strokeLinecap="round"
                        aria-hidden="true"
                      >
                        <circle cx="8" cy="8" r="5.8" />
                        <path d="M8 5.2V8l2 1.6" />
                      </svg>
                      {g.quando}
                    </span>
                  </span>
                  <span className="h-fit rounded-md bg-tint px-[7px] py-[3px] font-mono text-[9.5px] font-semibold tracking-[0.08em] text-tint-fg">
                    {g.rede}
                  </span>
                </div>
              ))}
            </section>

            <section className="flex min-w-0 flex-grow flex-col gap-2.5 rounded-2xl border border-line bg-surface p-4">
              <div className="flex items-center gap-2 border-b border-[#E9EEF4] pb-2.5">
                <span className="h-2 w-2 rounded-full bg-success" />
                <h2 className="m-0 flex-grow font-display text-sm font-bold text-ink">Publicadas</h2>
                <span className="rounded-md bg-success-bg px-2 py-[3px] font-mono text-[11px] font-semibold text-success">
                  {publicadas.length}
                </span>
              </div>

              {publicadas.map((p) => (
                <div key={p.id} className="flex gap-2.5 rounded-[11px] border border-line p-2.5">
                  <ProductThumb size={52} bg="#C4553A" fill="#FBF6F0" />
                  <span className="flex min-w-0 flex-col gap-[3px]">
                    <span className="text-[13px] font-semibold leading-[1.35] text-ink">
                      {p.titulo}
                    </span>
                    <span className="text-[11.5px] text-ink-tertiary">{p.metrica}</span>
                  </span>
                </div>
              ))}

              <div className="mt-auto rounded-[11px] bg-tint p-3.5">
                <p className="m-0 mb-1.5 font-display text-[13px] font-bold text-ink">
                  O que performou volta para o planejamento
                </p>
                <p className="m-0 text-xs leading-[1.5] text-tint-fg">
                  Prova social salvou 3x mais que vitrine. A próxima semana já vem com mais desse
                  formato.
                </p>
              </div>
            </section>
          </div>

          <div className="flex flex-shrink-0 items-center gap-5 rounded-xl bg-ink px-5 py-4">
            <span className="flex flex-grow flex-col">
              <span className="font-display text-[15px] font-bold tracking-[-0.01em] text-white">
                Nada vai ao ar sem aprovação
              </span>
              <span className="text-[12.5px] text-[#AFC3D6]">
                Uma passada por dia libera a semana inteira em poucos segundos. Publicar sem
                aprovar é dano de marca, não bug.
              </span>
            </span>
            <span className="flex flex-col items-end">
              <span className="font-display text-[22px] font-extrabold tracking-[-0.03em] text-accent">
                38 s
              </span>
              <span className="font-mono text-[9.5px] font-semibold tracking-[0.1em] text-[#7C93A8]">
                TEMPO MÉDIO DE APROVAÇÃO
              </span>
            </span>
          </div>
        </div>
      )}
    </>
  );
}
