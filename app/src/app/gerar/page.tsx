"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/page-header";
import OptionCard from "@/components/gerar/option-card";
import { criarOpcoes, gerarBrief, type ArteOpcao } from "@/lib/data";

const SWATCHES = ["#F7F1EA", "#E7D7C6", "#C4553A", "#241C17"];

export default function GerarPage() {
  const [copy, setCopy] = useState(gerarBrief.copyInicial);
  const [opcoes, setOpcoes] = useState<ArteOpcao[]>(() => criarOpcoes(1, 6));
  const [selecionadas, setSelecionadas] = useState<Set<number>>(new Set([1, 4]));

  function toggle(id: number) {
    setSelecionadas((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function refazer(id: number) {
    setOpcoes((prev) =>
      prev.map((o) => (o.id === id ? criarOpcoes(id, 1)[0] : o)),
    );
  }

  function gerarMais() {
    setOpcoes((prev) => {
      if (prev.length >= 20) return prev;
      const proximoId = prev.length ? Math.max(...prev.map((o) => o.id)) + 1 : 1;
      const quantidade = Math.min(6, 20 - prev.length);
      return [...prev, ...criarOpcoes(proximoId, quantidade)];
    });
  }

  function descartarResto() {
    setOpcoes((prev) => prev.filter((o) => selecionadas.has(o.id)));
  }

  return (
    <>
      <PageHeader eyebrow={gerarBrief.eyebrow} title={gerarBrief.titulo}>
        <span className="flex items-center gap-2 text-[12.5px] text-ink-secondary">
          <span className="h-[9px] w-[9px] flex-shrink-0 rounded-full bg-success" />
          Identidade da marca lida do {gerarBrief.identidadeFonte}
        </span>
      </PageHeader>

      <div className="flex min-h-0 flex-grow gap-[18px] px-7 py-[22px]">
        <section className="flex w-[348px] flex-shrink-0 flex-col gap-4 rounded-2xl border border-line bg-surface p-5">
          <h2 className="m-0 font-display text-[15px] font-bold tracking-[-0.01em] text-ink">
            O que a IA recebeu
          </h2>

          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-[9.5px] font-semibold tracking-[0.12em] text-ink-tertiary">
              OBJETIVO DO POST
            </span>
            <div className="rounded-[9px] border border-line bg-[#FAFBFD] px-3 py-2.5 text-[13px] text-ink">
              {gerarBrief.objetivo}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="copy"
              className="font-mono text-[9.5px] font-semibold tracking-[0.12em] text-ink-tertiary"
            >
              COPY APROVADA NO PLANEJAMENTO
            </label>
            <textarea
              id="copy"
              rows={4}
              value={copy}
              onChange={(e) => setCopy(e.target.value)}
              className="resize-none rounded-[9px] border border-line bg-surface px-3 py-2.5 font-sans text-[13px] leading-[1.55] text-ink"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-[9.5px] font-semibold tracking-[0.12em] text-ink-tertiary">
              PRODUTO DO CATÁLOGO
            </span>
            <div className="flex items-center gap-2.5 rounded-[9px] border border-line px-2.5 py-2">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md border border-[#E2D6C7] bg-[#F7F1EA]">
                <svg width="32" height="18" viewBox="0 0 120 64" aria-hidden="true">
                  <path
                    d="M14 40C16 26 22 18 34 15c10-3 18-1 24 4l14 12c8 6 20 10 32 12 6 1 8 4 8 7v2c0 2-2 3-4 3H18c-4 0-8-3-8-8Z"
                    fill="#241C17"
                  />
                  <path d="M11 48h101" stroke="#F7F1EA" strokeWidth={3} />
                  <path d="M34 21l10 6M40 18l10 6M46 16l10 6" stroke="#F7F1EA" strokeWidth={2} />
                </svg>
              </span>
              <span className="flex flex-col">
                <span className="text-[13px] font-semibold text-ink">{gerarBrief.produto.nome}</span>
                <span className="text-[11.5px] text-ink-tertiary">{gerarBrief.produto.origem}</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-mono text-[9.5px] font-semibold tracking-[0.12em] text-ink-tertiary">
              ESTILO DA MARCA
            </span>
            <div className="flex items-center gap-1.5">
              {SWATCHES.map((hex) => (
                <span
                  key={hex}
                  className="h-[26px] w-[26px] rounded-md border border-black/10"
                  style={{ background: hex }}
                />
              ))}
              <span className="pl-1.5 font-serif text-xl text-ink">Aurora</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {gerarBrief.estiloTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#E7F2FC] px-2.5 py-[5px] text-xs text-[#0B3C63]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto rounded-[10px] border border-[#EBD3A6] bg-warning-bg px-3.5 py-3">
            <p className="m-0 text-[12.5px] leading-[1.55] text-[#4A3714]">
              <strong className="font-semibold">Sem briefing.</strong> O cliente conectou o
              Instagram uma vez. Daqui em diante ele só escolhe o objetivo e aprova.
            </p>
          </div>
        </section>

        <section className="flex min-w-0 flex-grow flex-col gap-3">
          <div className="flex items-center gap-3">
            <h2 className="m-0 flex-grow font-display text-[15px] font-bold tracking-[-0.01em] text-ink">
              {opcoes.length} opções geradas · escolha 10
            </h2>
            <button
              onClick={gerarMais}
              disabled={opcoes.length >= 20}
              className="min-h-10 rounded-lg border border-[#D5CFE7] bg-surface px-3.5 text-xs font-semibold text-ink disabled:cursor-not-allowed disabled:opacity-50"
            >
              Gerar mais 6
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3.5">
            {opcoes.map((opcao) => (
              <OptionCard
                key={opcao.id}
                opcao={opcao}
                selected={selecionadas.has(opcao.id)}
                onToggle={() => toggle(opcao.id)}
                onRefazer={() => refazer(opcao.id)}
              />
            ))}
          </div>

          <div className="mt-auto flex items-center gap-4 rounded-xl border border-line bg-surface px-[18px] py-3.5">
            <span className="flex flex-grow flex-col">
              <span className="font-display text-[15px] font-bold tracking-[-0.01em] text-ink">
                {selecionadas.size} de 10 selecionadas
              </span>
              <span className="text-xs text-ink-tertiary">
                As aprovadas vão para o painel com legenda e horário já definidos
              </span>
            </span>
            <button
              onClick={descartarResto}
              className="flex min-h-[44px] items-center rounded-[9px] border border-[#D5CFE7] bg-surface px-4 text-[13.5px] font-semibold text-ink"
            >
              Descartar o resto
            </button>
            <Link
              href="/aprovados"
              className="flex min-h-[44px] items-center rounded-[9px] bg-primary px-[18px] text-[13.5px] font-semibold text-white no-underline hover:bg-primary-hover"
            >
              Aprovar selecionadas
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
