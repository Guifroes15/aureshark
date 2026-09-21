"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/page-header";
import PortfolioPreview from "@/components/creators/portfolio-preview";
import { creators } from "@/lib/data";

const NICHOS: { label: string; keywords: string[] }[] = [
  { label: "Moda e calçados", keywords: ["moda", "calçados"] },
  { label: "Lifestyle", keywords: ["lifestyle"] },
  { label: "Infantil", keywords: ["infantil"] },
  { label: "Fitness", keywords: ["esporte"] },
];

const CIDADES = ["Todas as cidades", "Belo Horizonte", "Curitiba", "Florianópolis"];

export default function CreatorsPage() {
  const [busca, setBusca] = useState("");
  const [nichosAtivos, setNichosAtivos] = useState<Set<string>>(
    new Set(["Moda e calçados", "Lifestyle"]),
  );
  const [cidade, setCidade] = useState(CIDADES[0]);
  const [notaMinima, setNotaMinima] = useState(4.5);
  const [entrega7dias, setEntrega7dias] = useState(true);
  const [jaGravouCalcados, setJaGravouCalcados] = useState(false);
  const [ordem, setOrdem] = useState<"ranking" | "nota" | "valor">("ranking");

  function toggleNicho(label: string) {
    setNichosAtivos((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  }

  const filtrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    const keywordsAtivas = NICHOS.filter((n) => nichosAtivos.has(n.label)).flatMap(
      (n) => n.keywords,
    );

    let lista = creators.filter((c) => {
      if (termo) {
        const alvo = `${c.nome} ${c.cidade} ${c.nichos.join(" ")}`.toLowerCase();
        if (!alvo.includes(termo)) return false;
      }
      if (keywordsAtivas.length > 0 && !c.nichos.some((n) => keywordsAtivas.includes(n))) {
        return false;
      }
      if (cidade !== "Todas as cidades" && !c.cidade.startsWith(cidade)) return false;
      if (c.nota < notaMinima) return false;
      if (entrega7dias && c.prazoDias > 7) return false;
      if (jaGravouCalcados && !c.nichos.includes("calçados")) return false;
      return true;
    });

    lista = [...lista].sort((a, b) => {
      if (ordem === "nota") return b.nota - a.nota;
      if (ordem === "valor") return a.valor - b.valor;
      return b.entregas - a.entregas;
    });

    return lista;
  }, [busca, nichosAtivos, cidade, notaMinima, entrega7dias, jaGravouCalcados, ordem]);

  return (
    <>
      <PageHeader eyebrow="MARKETPLACE · 312 CREATORS APROVADOS" title="Descobrir creators">
        <div className="flex min-h-[44px] w-[300px] items-center gap-2 rounded-[9px] border border-[#D5CFE7] bg-surface px-3.5">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#6B7A8C" strokeWidth={1.7} strokeLinecap="round" aria-hidden="true">
            <circle cx="7.2" cy="7.2" r="4.4" />
            <path d="M10.6 10.6 13.6 13.6" />
          </svg>
          <label htmlFor="busca" className="sr-only">
            Buscar creator
          </label>
          <input
            id="busca"
            type="search"
            placeholder="Nicho, cidade ou nome"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="flex-grow border-none bg-transparent text-[13px] text-ink outline-none"
          />
        </div>
        <Link
          href="/campanha"
          className="flex min-h-[44px] items-center rounded-[9px] bg-primary px-4 text-[13.5px] font-semibold text-white no-underline hover:bg-primary-hover"
        >
          Abrir campanha
        </Link>
      </PageHeader>

      <div className="flex min-h-0 flex-grow gap-[18px] px-7 py-[22px]">
        <section className="flex w-[244px] flex-shrink-0 flex-col gap-[18px] rounded-2xl border border-line bg-surface p-[18px]">
          <h2 className="m-0 font-display text-sm font-bold text-ink">Filtros</h2>

          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-[9.5px] font-semibold tracking-[0.12em] text-ink-tertiary">
              NICHO
            </span>
            {NICHOS.map((n) => (
              <span key={n.label} className="flex items-center gap-2.5">
                <input
                  id={`n-${n.label}`}
                  type="checkbox"
                  checked={nichosAtivos.has(n.label)}
                  onChange={() => toggleNicho(n.label)}
                  className="h-4 w-4 accent-primary"
                />
                <label htmlFor={`n-${n.label}`} className="text-[13px] text-ink">
                  {n.label}
                </label>
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-[7px]">
            <label htmlFor="cidade" className="font-mono text-[9.5px] font-semibold tracking-[0.12em] text-ink-tertiary">
              CIDADE
            </label>
            <select
              id="cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              className="min-h-[44px] rounded-lg border border-[#D5CFE7] bg-surface px-2.5 text-[13px] text-ink"
            >
              {CIDADES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-[7px]">
            <label htmlFor="nota" className="font-mono text-[9.5px] font-semibold tracking-[0.12em] text-ink-tertiary">
              NOTA MÍNIMA
            </label>
            <select
              id="nota"
              value={notaMinima}
              onChange={(e) => setNotaMinima(Number(e.target.value))}
              className="min-h-[44px] rounded-lg border border-[#D5CFE7] bg-surface px-2.5 text-[13px] text-ink"
            >
              <option value={4.5}>4,5 ou mais</option>
              <option value={4.0}>4,0 ou mais</option>
              <option value={0}>Qualquer nota</option>
            </select>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-[9.5px] font-semibold tracking-[0.12em] text-ink-tertiary">
              ENTREGA
            </span>
            <span className="flex items-center gap-2.5">
              <input
                id="e1"
                type="checkbox"
                checked={entrega7dias}
                onChange={(e) => setEntrega7dias(e.target.checked)}
                className="h-4 w-4 accent-primary"
              />
              <label htmlFor="e1" className="text-[13px] text-ink">
                Entrega em até 7 dias
              </label>
            </span>
            <span className="flex items-center gap-2.5">
              <input
                id="e2"
                type="checkbox"
                checked={jaGravouCalcados}
                onChange={(e) => setJaGravouCalcados(e.target.checked)}
                className="h-4 w-4 accent-primary"
              />
              <label htmlFor="e2" className="text-[13px] text-ink">
                Já gravou para calçados
              </label>
            </span>
          </div>

          <div className="mt-auto rounded-[10px] bg-success-bg px-3 py-3">
            <p className="m-0 text-xs leading-[1.55] text-[#0B4630]">
              Para entrar no marketplace o creator precisa de{" "}
              <strong className="font-semibold">5 vídeos no portfólio e 3 marcas</strong>, mais a
              curadoria na aprovação do cadastro.
            </p>
          </div>
        </section>

        <section className="flex min-w-0 flex-grow flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="flex-grow text-[13px] text-ink-secondary">
              {filtrados.length} creators combinam com o seu produto
            </span>
            <span className="flex items-center gap-2">
              <label htmlFor="ordem" className="text-xs text-ink-tertiary">
                Ordenar por
              </label>
              <select
                id="ordem"
                value={ordem}
                onChange={(e) => setOrdem(e.target.value as typeof ordem)}
                className="min-h-10 rounded-lg border border-[#D5CFE7] bg-surface px-2.5 text-xs text-ink"
              >
                <option value="ranking">Ranking de entrega</option>
                <option value="nota">Nota</option>
                <option value="valor">Menor valor</option>
              </select>
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3.5">
            {filtrados.map((c) => (
              <div key={c.id} className="flex flex-col gap-3 rounded-[13px] border border-line bg-surface p-[15px]">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#DFEBF6] font-display text-sm font-bold text-primary">
                    {c.iniciais}
                  </span>
                  <span className="flex min-w-0 flex-col gap-px">
                    <span className="font-display text-sm font-bold tracking-[-0.01em] text-ink">
                      {c.nome}
                    </span>
                    <span className="text-[11.5px] text-ink-tertiary">{c.cidade}</span>
                  </span>
                </div>

                <PortfolioPreview />

                <div className="flex flex-wrap gap-1.5">
                  {c.nichos.map((n) => (
                    <span key={n} className="rounded-full bg-tint px-2 py-[3px] text-[11px] text-tint-fg">
                      {n}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2.5 border-t border-[#E9EEF4] pt-0.5">
                  <span className="flex flex-grow flex-col pt-2">
                    <span className="text-[12.5px] font-semibold text-ink">
                      {c.nota.toFixed(1).replace(".", ",")} · {c.entregas} entregas
                    </span>
                    <span className="text-[11.5px] text-ink-tertiary">
                      Entrega em {c.prazoDias} dias
                    </span>
                  </span>
                  <span className="flex flex-col items-end pt-2">
                    <span className="font-display text-sm font-bold text-ink">R$ {c.valor}</span>
                    <span className="font-mono text-[9px] font-semibold tracking-[0.08em] text-ink-tertiary">
                      POR VÍDEO
                    </span>
                  </span>
                </div>

                <div className="flex gap-2">
                  <Link
                    href="/creators/perfil"
                    className="flex min-h-[44px] flex-grow items-center justify-center rounded-lg border border-[#D5CFE7] text-[12.5px] font-semibold text-ink no-underline"
                  >
                    Ver portfólio
                  </Link>
                  <button className="min-h-[44px] flex-grow rounded-lg bg-ink text-[12.5px] font-semibold text-white">
                    Convidar
                  </button>
                </div>
              </div>
            ))}

            {filtrados.length === 0 && (
              <p className="col-span-3 py-8 text-center text-sm text-ink-tertiary">
                Nenhum creator combina com esses filtros. Tente ampliar a busca.
              </p>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
