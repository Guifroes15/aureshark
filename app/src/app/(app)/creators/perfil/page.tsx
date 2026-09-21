"use client";

import { useState } from "react";
import Link from "next/link";

const TABS = ["Portfólio", "Entregas da plataforma", "Avaliações"] as const;

export default function PerfilCreatorPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Portfólio");

  return (
    <>
      <header className="flex h-[70px] flex-shrink-0 items-center gap-3.5 border-b border-line bg-surface px-7">
        <Link
          href="/painel-creator"
          className="flex min-h-[44px] items-center gap-2 rounded-[9px] border border-[#D5CFE7] px-3 text-[12.5px] font-semibold text-ink no-underline"
        >
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9.6 3.4 5 8l4.6 4.6" />
          </svg>
          Voltar
        </Link>
        <span className="flex flex-grow flex-col">
          <span className="font-mono text-[10px] font-semibold tracking-[0.12em] text-ink-tertiary">
            MEU PORTFÓLIO
          </span>
          <span className="font-display text-xl font-bold tracking-[-0.02em] text-ink">
            Complete seu cadastro
          </span>
        </span>
      </header>

      <div className="flex min-h-0 flex-grow gap-[18px] px-7 py-[22px]">
        <section className="flex min-w-0 flex-grow flex-col gap-4 rounded-2xl border border-line bg-surface p-[22px]">
          <div className="flex items-start gap-6">
            <span className="flex h-[104px] w-[104px] flex-shrink-0 items-center justify-center rounded-full bg-tint text-accent">
              <svg width="34" height="34" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" aria-hidden="true">
                <circle cx="8" cy="5.8" r="2.8" />
                <path d="M3 13.4c0-2.4 2.2-4 5-4s5 1.6 5 4" />
              </svg>
            </span>

            <div className="flex min-w-0 flex-grow flex-col gap-3.5">
              <div className="flex items-center gap-3">
                <span className="font-display text-xl font-bold tracking-[-0.02em] text-ink">
                  @seu-usuario
                </span>
                <span className="flex-grow" />
                <button className="flex min-h-[44px] items-center rounded-[9px] border border-[#D5CFE7] bg-surface px-4 text-[13.5px] font-semibold text-ink">
                  Editar perfil
                </button>
              </div>

              <div className="flex gap-11">
                {[
                  { valor: "0", label: "Vídeos entregues" },
                  { valor: "0", label: "Marcas atendidas" },
                  { valor: "—", label: "Nota média" },
                  { valor: "—", label: "Valor por vídeo" },
                ].map((s) => (
                  <span key={s.label} className="flex flex-col">
                    <span className="font-display text-xl font-extrabold tracking-[-0.025em] text-ink-tertiary">
                      {s.valor}
                    </span>
                    <span className="text-[12.5px] text-ink-tertiary">{s.label}</span>
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-[13.5px] leading-[1.55] text-ink-tertiary">
                  Escreva uma bio curta contando como você grava, e adicione cidade e nichos no seu
                  perfil.
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-stretch border-y border-line">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex min-h-12 flex-grow items-center justify-center gap-2 font-mono text-[10.5px] font-semibold tracking-[0.1em] ${
                  tab === t ? "-mb-px border-b-2 border-ink text-ink" : "text-[#8A94A6]"
                }`}
              >
                {t.toUpperCase()}
              </button>
            ))}
          </div>

          {tab === "Portfólio" && (
            <div className="grid grid-cols-5 gap-3">
              {Array.from({ length: 5 }, (_, i) => (
                <button
                  key={i}
                  className="flex h-[150px] flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[#C7D6E3] text-ink-tertiary"
                >
                  <svg width="22" height="22" viewBox="0 0 16 16" fill="none" stroke="#8FA6BA" strokeWidth={1.4} strokeLinecap="round" aria-hidden="true">
                    <path d="M8 3.6v8.8M3.6 8h8.8" />
                  </svg>
                  <span className="text-[11px]">Enviar vídeo</span>
                </button>
              ))}
              <p className="col-span-5 m-0 text-xs text-ink-tertiary">
                0 de 5 vídeos enviados. O mínimo pra entrar no marketplace é 5 vídeos e 3 marcas
                atendidas.
              </p>
            </div>
          )}

          {tab === "Entregas da plataforma" && (
            <p className="py-10 text-center text-sm text-ink-tertiary">
              Nenhuma entrega ainda. O histórico aparece aqui conforme as campanhas avançam.
            </p>
          )}

          {tab === "Avaliações" && (
            <p className="py-10 text-center text-sm text-ink-tertiary">
              Nenhuma avaliação ainda.
            </p>
          )}
        </section>

        <section className="flex w-[336px] flex-shrink-0 flex-col gap-3.5">
          <div className="flex flex-col gap-2.5 rounded-2xl border border-line bg-surface p-[18px]">
            <h2 className="m-0 font-display text-[15px] font-bold text-ink">Marcas que já atendeu</h2>
            <p className="m-0 text-xs text-ink-tertiary">
              Nenhuma marca ainda. Elas aparecem aqui depois da sua primeira entrega aprovada.
            </p>
          </div>

          <div className="mt-auto rounded-2xl bg-ink p-[18px]">
            <p className="m-0 mb-1.5 font-display text-sm font-bold text-white">
              Por que existe curadoria
            </p>
            <p className="m-0 text-[12.5px] leading-[1.55] text-[#AFC3D6]">
              A loja precisa confiar que o vídeo vai vir bom. Quem entrega bem sobe no ranking e
              aparece primeiro na busca.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
