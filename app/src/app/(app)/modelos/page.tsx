"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/page-header";
import {
  CalcadosEditorial,
  CalcadosClara,
  CalcadosGrade,
  ModaEditorial,
  ModaClara,
  ModaConversa,
  RestauranteEditorial1,
  RestauranteEditorial2,
  RestauranteGrade,
} from "@/components/modelos/segment-cards";

type Segmento = "todos" | "calcados" | "moda" | "restaurante";

const SEGMENTOS: { id: Segmento; label: string }[] = [
  { id: "todos", label: "Todos os segmentos" },
  { id: "calcados", label: "Calçados" },
  { id: "moda", label: "Moda" },
  { id: "restaurante", label: "Restaurante" },
];

export default function ModelosPage() {
  const [segmento, setSegmento] = useState<Segmento>("todos");

  const mostrarCalcados = segmento === "todos" || segmento === "calcados";
  const mostrarModa = segmento === "todos" || segmento === "moda";
  const mostrarRestaurante = segmento === "todos" || segmento === "restaurante";

  return (
    <>
      <PageHeader eyebrow="A MESMA ENGRENAGEM, TRÊS SEGMENTOS" title="Modelos">
        <label htmlFor="segmento" className="sr-only">
          Filtrar por segmento
        </label>
        <select
          id="segmento"
          value={segmento}
          onChange={(e) => setSegmento(e.target.value as Segmento)}
          className="min-h-[44px] rounded-[9px] border border-[#D5CFE7] bg-surface px-3.5 text-[13.5px] font-semibold text-ink"
        >
          {SEGMENTOS.map((s) => (
            <option key={s.id} value={s.id}>
              {s.id === "todos" ? "Filtrar por segmento" : s.label}
            </option>
          ))}
        </select>
        <Link
          href="/gerar"
          className="flex min-h-[44px] items-center rounded-[9px] bg-primary px-4 text-[13.5px] font-semibold text-white no-underline hover:bg-primary-hover"
        >
          Gerar com este modelo
        </Link>
      </PageHeader>

      <div className="flex min-h-0 flex-grow flex-col gap-5 px-7 py-[22px]">
        <div className="flex items-center gap-5 rounded-[13px] border border-line bg-surface px-5 py-4">
          <span className="flex flex-grow flex-col gap-[3px]">
            <span className="font-display text-[15px] font-bold text-ink">
              O modelo é o mesmo. O que muda é o contexto que a IA leu da marca.
            </span>
            <span className="text-[12.5px] text-ink-secondary">
              Cada segmento herda a paleta, a tipografia e o tom de voz do próprio Instagram do
              cliente. A estrutura da peça — manchete, preço, chamada, assinatura da unidade — não
              muda.
            </span>
          </span>
          <span className="flex flex-shrink-0 gap-2">
            {["CALÇADOS", "MODA", "RESTAURANTE"].map((s) => (
              <span
                key={s}
                className="rounded-md bg-tint px-2.5 py-1.5 font-mono text-[10px] font-semibold tracking-[0.08em] text-tint-fg"
              >
                {s}
              </span>
            ))}
          </span>
        </div>

        {mostrarCalcados && (
          <div className="flex flex-col gap-2.5">
            <div className="flex items-baseline gap-2.5">
              <h2 className="m-0 font-display text-[15px] font-bold text-ink">Calçados</h2>
              <span className="flex-grow text-[12.5px] text-ink-tertiary">
                Aurora Calçados · off-white, terracota e serifada
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <CalcadosEditorial />
              <CalcadosClara />
              <CalcadosGrade />
            </div>
          </div>
        )}

        {mostrarModa && (
          <div className="flex flex-col gap-2.5">
            <div className="flex items-baseline gap-2.5">
              <h2 className="m-0 font-display text-[15px] font-bold text-ink">Moda</h2>
              <span className="flex-grow text-[12.5px] text-ink-tertiary">
                Ateliê Norte · grafite, osso e argila
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <ModaEditorial />
              <ModaClara />
              <ModaConversa />
            </div>
          </div>
        )}

        {mostrarRestaurante && (
          <div className="flex flex-col gap-2.5">
            <div className="flex items-baseline gap-2.5">
              <h2 className="m-0 font-display text-[15px] font-bold text-ink">Restaurante</h2>
              <span className="flex-grow text-[12.5px] text-ink-tertiary">
                Cantina Salvato · quase preto, dourado e serifada
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <RestauranteEditorial1 />
              <RestauranteEditorial2 />
              <RestauranteGrade />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
