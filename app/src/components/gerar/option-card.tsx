"use client";

import type { ArteOpcao } from "@/lib/data";
import { ArteVisual, arteBackground } from "@/components/gerar/arte-visuals";

type OptionCardProps = {
  opcao: ArteOpcao;
  selected: boolean;
  onToggle: () => void;
  onRefazer: () => void;
};

export default function OptionCard({ opcao, selected, onToggle, onRefazer }: OptionCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <button
          onClick={onToggle}
          aria-label={`Selecionar opção ${opcao.id}`}
          aria-pressed={selected}
          className={`block h-[248px] w-full cursor-pointer overflow-hidden rounded-xl border border-line p-0 ${arteBackground(
            opcao.template,
          )}`}
        >
          <ArteVisual template={opcao.template} />
        </button>
        {selected && (
          <>
            <span className="pointer-events-none absolute -inset-[3px] rounded-[15px] border-[3px] border-primary" />
            <span className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-primary">
              <svg
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3.6 8.4 6.4 11.2l6-6.4" />
              </svg>
            </span>
          </>
        )}
      </div>
      <div className="flex items-center gap-2">
        <span className="min-w-0 flex-grow text-xs text-ink-tertiary">{opcao.legenda}</span>
        <button
          onClick={onRefazer}
          className="flex min-h-[44px] items-center rounded-lg border border-line bg-surface px-3 text-xs font-semibold text-ink-secondary"
        >
          Refazer
        </button>
      </div>
    </div>
  );
}
