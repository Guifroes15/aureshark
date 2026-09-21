"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/page-header";
import { useCampanhas, ETAPAS } from "@/lib/campanhas-store";
import { useCreators } from "@/lib/creators-store";

export default function CampanhaPage() {
  const { campanhas, hidratado, addCampanha, avancarEtapa, removerCampanha } = useCampanhas();
  const { creators } = useCreators();
  const [mostrarForm, setMostrarForm] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [creatorId, setCreatorId] = useState("");
  const [creatorNomeLivre, setCreatorNomeLivre] = useState("");
  const [valor, setValor] = useState("");
  const [prazoDias, setPrazoDias] = useState("");

  function salvar() {
    if (!titulo.trim()) return;
    const creator = creators.find((c) => c.id === creatorId);
    addCampanha({
      titulo: titulo.trim(),
      creatorId: creator?.id ?? null,
      creatorNome: creator?.nome ?? creatorNomeLivre.trim() ?? "Creator não definido",
      valor: Number(valor) || creator?.valorPorVideo || 0,
      prazoDias: Number(prazoDias) || creator?.prazoDias || 0,
    });
    setTitulo("");
    setCreatorId("");
    setCreatorNomeLivre("");
    setValor("");
    setPrazoDias("");
    setMostrarForm(false);
  }

  return (
    <>
      <PageHeader eyebrow="UGC · MINHAS CAMPANHAS" title="Minhas campanhas">
        <button
          onClick={() => setMostrarForm((v) => !v)}
          className="flex min-h-[44px] items-center gap-2 rounded-[9px] bg-primary px-4 text-[13.5px] font-semibold text-white hover:bg-primary-hover"
        >
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
            <path d="M8 3.6v8.8M3.6 8h8.8" />
          </svg>
          Nova campanha
        </button>
      </PageHeader>

      <div className="flex min-h-0 flex-grow flex-col gap-4 px-4 py-4 lg:px-7 lg:py-[22px]">
        {mostrarForm && (
          <div className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-5">
            <h2 className="m-0 font-display text-[15px] font-bold text-ink">Nova campanha</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Título (ex: Tênis branco — prova real)"
                className="min-h-[44px] rounded-lg border border-line px-3 text-[13px] text-ink sm:col-span-2"
              />
              {creators.length > 0 ? (
                <select
                  value={creatorId}
                  onChange={(e) => setCreatorId(e.target.value)}
                  className="min-h-[44px] rounded-lg border border-line bg-surface px-3 text-[13px] text-ink"
                >
                  <option value="">Selecione um creator cadastrado</option>
                  {creators.map((c) => (
                    <option key={c.id} value={c.id}>{c.nome}</option>
                  ))}
                </select>
              ) : (
                <input
                  value={creatorNomeLivre}
                  onChange={(e) => setCreatorNomeLivre(e.target.value)}
                  placeholder="Nome do creator"
                  className="min-h-[44px] rounded-lg border border-line px-3 text-[13px] text-ink"
                />
              )}
              <input
                type="number"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                placeholder="Valor combinado (R$)"
                className="min-h-[44px] rounded-lg border border-line px-3 text-[13px] text-ink"
              />
              <input
                type="number"
                value={prazoDias}
                onChange={(e) => setPrazoDias(e.target.value)}
                placeholder="Prazo (dias)"
                className="min-h-[44px] rounded-lg border border-line px-3 text-[13px] text-ink"
              />
            </div>
            <div className="flex gap-2">
              <button onClick={salvar} className="rounded-lg bg-primary px-4 py-2.5 text-[13px] font-semibold text-white hover:bg-primary-hover">
                Criar campanha
              </button>
              <button onClick={() => setMostrarForm(false)} className="rounded-lg border border-line px-4 py-2.5 text-[13px] font-semibold text-ink-secondary">
                Cancelar
              </button>
            </div>
          </div>
        )}

        {hidratado && campanhas.length === 0 && !mostrarForm && (
          <div className="flex flex-grow flex-col items-center justify-center gap-3 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-tint">
              <svg width="26" height="26" viewBox="0 0 16 16" fill="none" stroke="#146B9C" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2.4 6.6v2.8l8.4 3.2V3.4Z" />
                <path d="M10.8 5.4a2.6 2.6 0 0 1 0 5.2M4.6 9.8v2.6a1 1 0 0 0 2 0v-2" />
              </svg>
            </span>
            <h2 className="m-0 font-display text-lg font-bold text-ink">Nenhuma campanha ainda</h2>
            <p className="m-0 max-w-[46ch] text-sm text-ink-secondary">
              Crie uma campanha e acompanhe as etapas com o creator — do convite até o pagamento —
              manualmente, no seu ritmo.
            </p>
            <Link href="/creators" className="mt-1 text-sm font-semibold text-primary no-underline">
              Ver meus creators
            </Link>
          </div>
        )}

        <div className="flex flex-col gap-3">
          {campanhas.map((camp) => {
            const idx = ETAPAS.findIndex((e) => e.id === camp.etapa);
            const ultima = idx === ETAPAS.length - 1;
            return (
              <div key={camp.id} className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex flex-grow flex-col">
                    <span className="font-display text-[15px] font-bold text-ink">{camp.titulo}</span>
                    <span className="text-xs text-ink-tertiary">
                      {camp.creatorNome} · R$ {camp.valor} · prazo {camp.prazoDias} dias
                    </span>
                  </span>
                  <span className="rounded-md bg-tint px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.08em] text-tint-fg">
                    {ETAPAS[idx].label.toUpperCase()}
                  </span>
                  <button
                    onClick={() => removerCampanha(camp.id)}
                    aria-label="Remover campanha"
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-ink-tertiary hover:bg-app hover:text-danger"
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
                      <path d="M4 4l8 8M12 4l-8 8" />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center overflow-x-auto">
                  {ETAPAS.map((etapa, i) => (
                    <div key={etapa.id} className="flex flex-shrink-0 items-center last:flex-shrink">
                      <span className="flex w-[100px] flex-shrink-0 flex-col items-center gap-1.5">
                        <span
                          className={`flex h-5 w-5 items-center justify-center rounded-full ${
                            i < idx ? "bg-success" : i === idx ? "border-[3px] border-tint bg-primary" : "border-2 border-[#D5CFE7] bg-surface"
                          }`}
                        >
                          {i < idx && (
                            <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="#FFFFFF" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M3.6 8.4 6.4 11.2l6-6.4" />
                            </svg>
                          )}
                        </span>
                        <span className={`text-center text-[10.5px] font-semibold ${i <= idx ? "text-ink" : "text-ink-tertiary"}`}>
                          {etapa.label}
                        </span>
                      </span>
                      {i < ETAPAS.length - 1 && <span className={`h-0.5 w-6 flex-shrink-0 ${i < idx ? "bg-success" : "bg-line"}`} />}
                    </div>
                  ))}
                </div>

                {!ultima && (
                  <button
                    onClick={() => avancarEtapa(camp.id)}
                    className="self-start rounded-lg bg-ink px-4 py-2 text-[12.5px] font-semibold text-white"
                  >
                    Avançar para &quot;{ETAPAS[idx + 1].label}&quot;
                  </button>
                )}
                {ultima && (
                  <p className="m-0 text-[12.5px] font-semibold text-success">Campanha concluída e paga.</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
