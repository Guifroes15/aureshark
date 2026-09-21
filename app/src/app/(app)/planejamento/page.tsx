"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/page-header";
import { calendarioComercial, nomeMes } from "@/lib/data";

const NOMES_MES_LONGO = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];

export default function PlanejamentoPage() {
  const [gerado, setGerado] = useState(false);
  const [gerando, setGerando] = useState(false);
  const [noPlano, setNoPlano] = useState<Set<string>>(new Set());

  const porMes = useMemo(() => {
    const grupos: Record<number, typeof calendarioComercial> = {};
    for (const item of calendarioComercial) {
      grupos[item.mes] = grupos[item.mes] || [];
      grupos[item.mes].push(item);
    }
    return Object.entries(grupos)
      .map(([mes, itens]) => ({ mes: Number(mes), itens: [...itens].sort((a, b) => a.dia - b.dia) }))
      .sort((a, b) => a.mes - b.mes);
  }, []);

  function gerar() {
    setGerando(true);
    setTimeout(() => {
      setGerando(false);
      setGerado(true);
    }, 700);
  }

  function toggleNoPlano(chave: string) {
    setNoPlano((prev) => {
      const next = new Set(prev);
      if (next.has(chave)) next.delete(chave);
      else next.add(chave);
      return next;
    });
  }

  return (
    <>
      <PageHeader eyebrow="GERAL · CALENDÁRIO COMERCIAL COM IA" title="Planejamento">
        {gerado && (
          <span className="flex items-center gap-2 text-[12.5px] text-ink-secondary">
            <span className="h-[9px] w-[9px] flex-shrink-0 rounded-full bg-success" />
            {noPlano.size} data{noPlano.size === 1 ? "" : "s"} no plano
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
            Gere o calendário comercial do ano com IA
          </h2>
          <p className="m-0 max-w-[52ch] text-center text-sm leading-[1.6] text-ink-secondary">
            A IA lê as principais datas do varejo brasileiro mês a mês e já sugere uma ação para
            cada uma — antes de qualquer arte existir.
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
                <h2 className="m-0 font-display text-sm font-bold text-ink">
                  {NOMES_MES_LONGO[mes - 1]}
                </h2>
                {itens.map((item) => {
                  const chave = `${item.mes}-${item.dia}`;
                  const ativo = noPlano.has(chave);
                  return (
                    <div key={chave} className="flex gap-2.5 rounded-[11px] border border-[#E2E8F0] p-2.5">
                      <span className="flex w-9 flex-shrink-0 flex-col items-center pt-0.5">
                        <span className="font-display text-[15px] font-extrabold tracking-[-0.02em] text-primary">
                          {String(item.dia).padStart(2, "0")}
                        </span>
                        <span className="font-mono text-[8px] font-semibold tracking-[0.1em] text-ink-tertiary">
                          {nomeMes(item.mes)}
                        </span>
                      </span>
                      <span className="flex min-w-0 flex-grow flex-col gap-1">
                        <span className="text-[12.5px] font-semibold leading-[1.3] text-ink">
                          {item.nome}
                        </span>
                        <span className="text-[11.5px] leading-[1.45] text-ink-secondary">
                          {item.sugestao}
                        </span>
                        <span className="mt-1 flex items-center gap-2">
                          <button
                            onClick={() => toggleNoPlano(chave)}
                            className={`rounded-md px-2 py-1 text-[10.5px] font-semibold ${
                              ativo ? "bg-success-bg text-success" : "border border-line text-ink-secondary"
                            }`}
                          >
                            {ativo ? "No plano ✓" : "Adicionar ao plano"}
                          </button>
                          <Link href="/gerar" className="text-[10.5px] font-semibold no-underline">
                            Criar publicação
                          </Link>
                        </span>
                      </span>
                    </div>
                  );
                })}
              </section>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
