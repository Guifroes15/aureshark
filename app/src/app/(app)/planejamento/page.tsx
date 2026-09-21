"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/page-header";
import { calendarioComercial, nomeMes } from "@/lib/data";
import { useStore } from "@/lib/store-provider";

const NOMES_MES_LONGO = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];

type Extra = { id: string; mes: number; dia: number; nome: string; sugestao: string };

type PlanejamentoData = {
  sugestoesEditadas: Record<string, string>;
  extras: Extra[];
  noPlano: string[];
};

const VAZIO: PlanejamentoData = { sugestoesEditadas: {}, extras: [], noPlano: [] };

function storageKey(lojaId: string | null) {
  return `wlk-creative-planejamento-${lojaId ?? "sem-loja"}`;
}

export default function PlanejamentoPage() {
  const { lojaAtiva, hidratado: lojaHidratada } = useStore();
  const lojaId = lojaAtiva?.id ?? null;

  const [gerado, setGerado] = useState(false);
  const [gerando, setGerando] = useState(false);
  const [dados, setDados] = useState<PlanejamentoData>(VAZIO);
  const [hidratado, setHidratado] = useState(false);
  const [editandoChave, setEditandoChave] = useState<string | null>(null);
  const [rascunhoEdicao, setRascunhoEdicao] = useState("");
  const [novaDataMes, setNovaDataMes] = useState<number | null>(null);
  const [novaData, setNovaData] = useState({ dia: "", nome: "", sugestao: "" });

  useEffect(() => {
    if (!lojaHidratada) return;
    try {
      const raw = window.localStorage.getItem(storageKey(lojaId));
      setDados(raw ? JSON.parse(raw) : VAZIO);
      setGerado(!!raw);
    } catch {
      setDados(VAZIO);
    }
    setHidratado(true);
  }, [lojaId, lojaHidratada]);

  useEffect(() => {
    if (!hidratado || !gerado) return;
    try {
      window.localStorage.setItem(storageKey(lojaId), JSON.stringify(dados));
    } catch {
      // ignora falha de persistência
    }
  }, [dados, hidratado, gerado, lojaId]);

  const porMes = useMemo(() => {
    const grupos: Record<number, { chave: string; mes: number; dia: number; nome: string; sugestao: string; custom: boolean; id?: string }[]> = {};
    for (const item of calendarioComercial) {
      const chave = `${item.mes}-${item.dia}`;
      grupos[item.mes] = grupos[item.mes] || [];
      grupos[item.mes].push({
        chave,
        mes: item.mes,
        dia: item.dia,
        nome: item.nome,
        sugestao: dados.sugestoesEditadas[chave] ?? item.sugestao,
        custom: false,
      });
    }
    for (const extra of dados.extras) {
      grupos[extra.mes] = grupos[extra.mes] || [];
      grupos[extra.mes].push({
        chave: `extra-${extra.id}`,
        mes: extra.mes,
        dia: extra.dia,
        nome: extra.nome,
        sugestao: extra.sugestao,
        custom: true,
        id: extra.id,
      });
    }
    return Object.entries(grupos)
      .map(([mes, itens]) => ({ mes: Number(mes), itens: [...itens].sort((a, b) => a.dia - b.dia) }))
      .sort((a, b) => a.mes - b.mes);
  }, [dados]);

  function gerar() {
    setGerando(true);
    setTimeout(() => {
      setGerando(false);
      setGerado(true);
      setDados(VAZIO);
    }, 700);
  }

  function toggleNoPlano(chave: string) {
    setDados((prev) => {
      const jaTem = prev.noPlano.includes(chave);
      return { ...prev, noPlano: jaTem ? prev.noPlano.filter((c) => c !== chave) : [...prev.noPlano, chave] };
    });
  }

  function iniciarEdicao(chave: string, sugestaoAtual: string) {
    setEditandoChave(chave);
    setRascunhoEdicao(sugestaoAtual);
  }

  function salvarEdicao(chave: string) {
    setDados((prev) => ({ ...prev, sugestoesEditadas: { ...prev.sugestoesEditadas, [chave]: rascunhoEdicao } }));
    setEditandoChave(null);
  }

  function removerExtra(id: string) {
    setDados((prev) => ({ ...prev, extras: prev.extras.filter((e) => e.id !== id) }));
  }

  function adicionarData(mes: number) {
    const dia = Number(novaData.dia);
    if (!dia || dia < 1 || dia > 31 || !novaData.nome.trim()) return;
    const extra: Extra = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      mes,
      dia,
      nome: novaData.nome.trim(),
      sugestao: novaData.sugestao.trim() || "Defina a ação para esta data.",
    };
    setDados((prev) => ({ ...prev, extras: [...prev.extras, extra] }));
    setNovaDataMes(null);
    setNovaData({ dia: "", nome: "", sugestao: "" });
  }

  return (
    <>
      <PageHeader eyebrow="GERAL · CALENDÁRIO COMERCIAL" title="Planejamento">
        {gerado && (
          <span className="flex items-center gap-2 text-[12.5px] text-ink-secondary">
            <span className="h-[9px] w-[9px] flex-shrink-0 rounded-full bg-success" />
            {dados.noPlano.length} data{dados.noPlano.length === 1 ? "" : "s"} no plano
          </span>
        )}
      </PageHeader>

      {!gerado ? (
        <div className="flex flex-grow flex-col items-center justify-center gap-4 px-4 py-4 lg:px-7 lg:py-6">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-tint">
            <svg width="26" height="26" viewBox="0 0 16 16" fill="none" stroke="#146B9C" strokeWidth={1.5} strokeLinecap="round" aria-hidden="true">
              <rect x="2.3" y="3.4" width="11.4" height="10.2" rx="1.4" />
              <path d="M2.3 6.6h11.4M5.6 2.2v2.2M10.4 2.2v2.2" />
            </svg>
          </span>
          <h2 className="m-0 max-w-[36ch] text-center font-display text-xl font-bold text-ink">
            Gere o calendário comercial do ano
          </h2>
          <p className="m-0 max-w-[52ch] text-center text-sm leading-[1.6] text-ink-secondary">
            As principais datas do varejo brasileiro, mês a mês, já com uma sugestão de ação para
            cada uma. Você pode editar qualquer sugestão e adicionar suas próprias datas depois.
          </p>
          <button
            onClick={gerar}
            disabled={gerando}
            className="mt-2 flex min-h-[48px] items-center gap-2 rounded-[10px] bg-primary px-6 text-[14px] font-semibold text-white hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-70"
          >
            {gerando ? "Gerando calendário..." : "Gerar calendário do ano"}
          </button>
        </div>
      ) : (
        <div className="flex min-h-0 flex-grow flex-col gap-4 overflow-y-auto px-4 py-4 lg:px-7 lg:py-[22px]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {porMes.map(({ mes, itens }) => (
              <section key={mes} className="flex flex-col gap-2.5 rounded-2xl border border-line bg-surface p-4">
                <div className="flex items-center gap-2">
                  <h2 className="m-0 flex-grow font-display text-sm font-bold text-ink">
                    {NOMES_MES_LONGO[mes - 1]}
                  </h2>
                  <button
                    onClick={() => {
                      setNovaDataMes(mes);
                      setNovaData({ dia: "", nome: "", sugestao: "" });
                    }}
                    className="flex items-center gap-1 rounded-md px-2 py-1 text-[10.5px] font-semibold text-primary hover:bg-tint"
                  >
                    <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
                      <path d="M8 3.6v8.8M3.6 8h8.8" />
                    </svg>
                    Adicionar data
                  </button>
                </div>

                {itens.map((item) => {
                  const emEdicao = editandoChave === item.chave;
                  const ativo = dados.noPlano.includes(item.chave);
                  return (
                    <div key={item.chave} className="flex gap-2.5 rounded-[11px] border border-[#E2E8F0] p-2.5">
                      <span className="flex w-9 flex-shrink-0 flex-col items-center pt-0.5">
                        <span className="font-display text-[15px] font-extrabold tracking-[-0.02em] text-primary">
                          {String(item.dia).padStart(2, "0")}
                        </span>
                        <span className="font-mono text-[8px] font-semibold tracking-[0.1em] text-ink-tertiary">
                          {nomeMes(item.mes)}
                        </span>
                      </span>
                      <span className="flex min-w-0 flex-grow flex-col gap-1">
                        <span className="flex items-center gap-1.5">
                          <span className="text-[12.5px] font-semibold leading-[1.3] text-ink">
                            {item.nome}
                          </span>
                          {item.custom && (
                            <span className="rounded bg-tint px-1.5 py-px font-mono text-[8px] font-semibold text-tint-fg">
                              SUA DATA
                            </span>
                          )}
                        </span>

                        {emEdicao ? (
                          <div className="flex flex-col gap-1.5">
                            <textarea
                              value={rascunhoEdicao}
                              onChange={(e) => setRascunhoEdicao(e.target.value)}
                              rows={3}
                              className="resize-none rounded-lg border border-line bg-surface px-2 py-1.5 text-[11.5px] text-ink"
                            />
                            <span className="flex gap-2">
                              <button
                                onClick={() => salvarEdicao(item.chave)}
                                className="rounded-md bg-primary px-2.5 py-1 text-[10.5px] font-semibold text-white"
                              >
                                Salvar
                              </button>
                              <button
                                onClick={() => setEditandoChave(null)}
                                className="rounded-md border border-line px-2.5 py-1 text-[10.5px] font-semibold text-ink-secondary"
                              >
                                Cancelar
                              </button>
                            </span>
                          </div>
                        ) : (
                          <span className="text-[11.5px] leading-[1.45] text-ink-secondary">
                            {item.sugestao}
                          </span>
                        )}

                        {!emEdicao && (
                          <span className="mt-1 flex flex-wrap items-center gap-2">
                            <button
                              onClick={() => toggleNoPlano(item.chave)}
                              className={`rounded-md px-2 py-1 text-[10.5px] font-semibold ${
                                ativo ? "bg-success-bg text-success" : "border border-line text-ink-secondary"
                              }`}
                            >
                              {ativo ? "No plano ✓" : "Adicionar ao plano"}
                            </button>
                            <button
                              onClick={() => iniciarEdicao(item.chave, item.sugestao)}
                              className="text-[10.5px] font-semibold text-ink-secondary underline decoration-dotted"
                            >
                              Editar ação
                            </button>
                            <Link href="/gerar" className="text-[10.5px] font-semibold no-underline">
                              Criar publicação
                            </Link>
                            {item.custom && item.id && (
                              <button
                                onClick={() => removerExtra(item.id!)}
                                className="text-[10.5px] font-semibold text-danger"
                              >
                                Remover
                              </button>
                            )}
                          </span>
                        )}
                      </span>
                    </div>
                  );
                })}

                {novaDataMes === mes && (
                  <div className="flex flex-col gap-2 rounded-[11px] border border-dashed border-[#B9CEDD] bg-app p-2.5">
                    <div className="flex gap-2">
                      <input
                        type="number"
                        min={1}
                        max={31}
                        value={novaData.dia}
                        onChange={(e) => setNovaData((p) => ({ ...p, dia: e.target.value }))}
                        placeholder="Dia"
                        className="w-16 rounded-lg border border-line bg-surface px-2 py-1.5 text-[12px] text-ink"
                      />
                      <input
                        value={novaData.nome}
                        onChange={(e) => setNovaData((p) => ({ ...p, nome: e.target.value }))}
                        placeholder="Nome da data"
                        className="flex-grow rounded-lg border border-line bg-surface px-2 py-1.5 text-[12px] text-ink"
                      />
                    </div>
                    <textarea
                      value={novaData.sugestao}
                      onChange={(e) => setNovaData((p) => ({ ...p, sugestao: e.target.value }))}
                      placeholder="Ação sugerida para essa data"
                      rows={2}
                      className="resize-none rounded-lg border border-line bg-surface px-2 py-1.5 text-[11.5px] text-ink"
                    />
                    <span className="flex gap-2">
                      <button
                        onClick={() => adicionarData(mes)}
                        className="rounded-md bg-primary px-2.5 py-1 text-[10.5px] font-semibold text-white"
                      >
                        Adicionar
                      </button>
                      <button
                        onClick={() => setNovaDataMes(null)}
                        className="rounded-md border border-line px-2.5 py-1 text-[10.5px] font-semibold text-ink-secondary"
                      >
                        Cancelar
                      </button>
                    </span>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
