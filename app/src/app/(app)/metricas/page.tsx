"use client";

import { useState } from "react";
import PageHeader from "@/components/page-header";
import ProductThumb from "@/components/product-thumb";
import BarChart from "@/components/metricas/bar-chart";
import {
  metricasPorPeriodo,
  metricasTop,
  metricasFormatos,
  type PeriodoMetricas,
} from "@/lib/data";

const PERIODOS: PeriodoMetricas[] = ["30 dias", "7 dias", "Este ano"];

function exportarCsv(periodo: PeriodoMetricas) {
  const dados = metricasPorPeriodo[periodo];
  const linhas = [
    ["Métrica", "Valor", "Variação", "Base de comparação"],
    ...dados.kpis.map((k) => [k.nome, k.valor, k.delta, k.base]),
  ];
  const csv = linhas.map((l) => l.map((c) => `"${c}"`).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `metricas-${periodo.replace(" ", "-")}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function MetricasPage() {
  const [periodo, setPeriodo] = useState<PeriodoMetricas>("30 dias");
  const dados = metricasPorPeriodo[periodo];
  const maxFormato = Math.max(...metricasFormatos.map((f) => f.valor));

  return (
    <>
      <PageHeader
        eyebrow="INSTAGRAM E FACEBOOK · COMPARADO COM O PERÍODO ANTERIOR"
        title="Métricas"
      >
        <label htmlFor="periodo" className="sr-only">
          Período
        </label>
        <select
          id="periodo"
          value={periodo}
          onChange={(e) => setPeriodo(e.target.value as PeriodoMetricas)}
          className="min-h-[44px] rounded-[9px] border border-[#D5CFE7] bg-surface px-3 text-[13px] text-ink"
        >
          {PERIODOS.map((p) => (
            <option key={p} value={p}>
              {p === "30 dias" ? "Últimos 30 dias" : p === "7 dias" ? "Últimos 7 dias" : "Este ano"}
            </option>
          ))}
        </select>
        <button
          onClick={() => exportarCsv(periodo)}
          className="flex min-h-[44px] items-center rounded-[9px] border border-[#D5CFE7] bg-surface px-4 text-[13.5px] font-semibold text-ink"
        >
          Exportar relatório
        </button>
      </PageHeader>

      <div className="flex min-h-0 flex-grow flex-col gap-4 px-7 py-[22px]">
        <div className="grid grid-cols-4 gap-3.5">
          {dados.kpis.map((k) => (
            <div key={k.nome} className="flex flex-col gap-1 rounded-xl border border-line bg-surface px-[18px] py-[15px]">
              <span className="text-[12.5px] text-ink-secondary">{k.nome}</span>
              <span className="flex items-baseline gap-2.5">
                <span className="font-display text-2xl font-extrabold tracking-[-0.03em] text-ink">
                  {k.valor}
                </span>
                <span className="flex items-center gap-[3px] text-[12.5px] font-semibold text-success">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M8 12.6V3.8M4.4 7.4 8 3.8l3.6 3.6" />
                  </svg>
                  {k.delta}
                </span>
              </span>
              <span className="text-[11.5px] text-ink-tertiary">{k.base}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <section className="flex min-w-0 flex-grow flex-col gap-1 rounded-2xl border border-line bg-surface px-5 py-[18px]">
            <h2 className="m-0 font-display text-[15px] font-bold text-ink">Alcance por semana</h2>
            <p className="m-0 mb-1.5 text-[12.5px] text-ink-tertiary">{dados.legendaAlcance}</p>
            <BarChart data={dados.alcance} />
          </section>

          <section className="flex w-[352px] flex-shrink-0 flex-col gap-3 rounded-2xl border border-line bg-surface p-[18px]">
            <h2 className="m-0 font-display text-[15px] font-bold text-ink">O que mais performou</h2>
            {metricasTop.map((t) => (
              <div key={t.titulo} className="flex items-center gap-3 rounded-[11px] border border-[#E2E8F0] p-2.5">
                <ProductThumb size={46} />
                <span className="flex min-w-0 flex-col gap-0.5">
                  <span className="text-[13px] font-semibold leading-[1.35] text-ink">{t.titulo}</span>
                  <span className="text-[11.5px] text-ink-tertiary">{t.origem}</span>
                  <span className="text-xs font-semibold text-primary">{t.metrica}</span>
                </span>
              </div>
            ))}
          </section>
        </div>

        <div className="flex min-h-0 flex-grow gap-4">
          <section className="flex w-[432px] flex-shrink-0 flex-col gap-3 rounded-2xl border border-line bg-surface px-5 py-[18px]">
            <h2 className="m-0 font-display text-[15px] font-bold text-ink">
              Salvamentos por post, por formato
            </h2>
            {metricasFormatos.map((f) => (
              <span key={f.nome} className="flex items-center gap-3">
                <span className="w-[132px] flex-shrink-0 text-[12.5px] text-ink-secondary">
                  {f.nome}
                </span>
                <span className="h-2.5 flex-grow overflow-hidden rounded-full bg-[#E9EEF4]">
                  <span
                    className="block h-full rounded-full bg-primary"
                    style={{ width: `${(f.valor / maxFormato) * 100}%` }}
                  />
                </span>
                <span className="w-[30px] flex-shrink-0 text-right font-mono text-[12.5px] font-semibold">
                  {f.valor}
                </span>
              </span>
            ))}
            <div className="mt-auto rounded-[10px] bg-tint px-3.5 py-3">
              <p className="m-0 text-[12.5px] leading-[1.55] text-tint-fg">
                Prova social salva quase 3x mais que oferta. O planejamento da próxima semana já
                vem com dois posts a mais desse formato.
              </p>
            </div>
          </section>

          <section className="flex min-w-0 flex-grow flex-col gap-3.5 rounded-2xl border border-line bg-surface px-5 py-[18px]">
            <div className="flex items-center gap-4">
              <h2 className="m-0 flex-grow font-display text-[15px] font-bold text-ink">
                Arte de IA x vídeo de creator
              </h2>
              <span className="flex items-center gap-1.5 text-xs text-ink-secondary">
                <span className="h-2.5 w-2.5 rounded-[3px] bg-primary" />
                arte de IA
              </span>
              <span className="flex items-center gap-1.5 text-xs text-ink-secondary">
                <span className="h-2.5 w-2.5 rounded-[3px] bg-[#B45309]" />
                vídeo de creator
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[12.5px] text-ink-secondary">Alcance médio por post</span>
              <span className="flex items-center gap-3">
                <span className="h-3.5 flex-grow overflow-hidden rounded-full bg-[#E9EEF4]">
                  <span className="block h-full w-[53%] rounded-full bg-primary" />
                </span>
                <span className="w-[74px] flex-shrink-0 text-right font-mono text-[12.5px] font-semibold">
                  4.180
                </span>
              </span>
              <span className="flex items-center gap-3">
                <span className="h-3.5 flex-grow overflow-hidden rounded-full bg-[#E9EEF4]">
                  <span className="block h-full w-full rounded-full bg-[#B45309]" />
                </span>
                <span className="w-[74px] flex-shrink-0 text-right font-mono text-[12.5px] font-semibold">
                  7.940
                </span>
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[12.5px] text-ink-secondary">Salvamentos por post</span>
              <span className="flex items-center gap-3">
                <span className="h-3.5 flex-grow overflow-hidden rounded-full bg-[#E9EEF4]">
                  <span className="block h-full w-[45%] rounded-full bg-primary" />
                </span>
                <span className="w-[74px] flex-shrink-0 text-right font-mono text-[12.5px] font-semibold">
                  37
                </span>
              </span>
              <span className="flex items-center gap-3">
                <span className="h-3.5 flex-grow overflow-hidden rounded-full bg-[#E9EEF4]">
                  <span className="block h-full w-full rounded-full bg-[#B45309]" />
                </span>
                <span className="w-[74px] flex-shrink-0 text-right font-mono text-[12.5px] font-semibold">
                  83
                </span>
              </span>
            </div>

            <div className="mt-auto rounded-[11px] bg-ink px-4 py-3.5">
              <p className="m-0 text-[12.5px] leading-[1.6] text-[#AFC3D6]">
                A arte de IA custa centavos e sustenta o volume. O vídeo de creator custa mais e
                entrega mais.{" "}
                <span className="font-semibold text-white">
                  Só quem tem os dois módulos consegue mostrar essa conta na mesma tela.
                </span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
