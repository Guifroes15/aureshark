"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/page-header";
import { usePosts, formatarQuando } from "@/lib/posts-store";

export default function FeedPage() {
  const { posts, hidratado, reordenarAgendadas } = usePosts();
  const [dragId, setDragId] = useState<string | null>(null);
  const [salvo, setSalvo] = useState(false);

  const agendadas = posts
    .filter((p) => p.status === "agendada")
    .sort((a, b) => b.criadoEm - a.criadoEm);

  const grade = agendadas.slice(0, 9);
  const vazios = Math.max(0, 9 - grade.length);

  const porTipo = agendadas.reduce<Record<string, number>>((acc, p) => {
    acc[p.tipo] = (acc[p.tipo] || 0) + 1;
    return acc;
  }, {});

  function onDrop(targetId: string) {
    if (dragId === null || dragId === targetId) return;
    reordenarAgendadas(dragId, targetId);
    setDragId(null);
    setSalvo(false);
  }

  function salvarOrdem() {
    setSalvo(true);
    setTimeout(() => setSalvo(false), 2000);
  }

  return (
    <>
      <PageHeader eyebrow="INSTAGRAM AINDA NÃO CONECTADO" title="Prévia do feed">
        <button
          onClick={salvarOrdem}
          disabled={agendadas.length === 0}
          className="flex min-h-[44px] items-center gap-2 rounded-[9px] bg-primary px-4 text-[13.5px] font-semibold text-white hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50"
        >
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5.4 2.8 2.8 5.4l2.6 2.6M2.8 5.4h7.4a3 3 0 0 1 3 3v4.8" />
          </svg>
          {salvo ? "Ordem salva" : "Salvar nova ordem"}
        </button>
      </PageHeader>

      <div className="flex min-h-0 flex-grow flex-col gap-6 px-4 py-4 lg:flex-row lg:px-7 lg:py-[22px]">
        <section className="flex w-full flex-shrink-0 flex-col items-center gap-2.5 lg:w-[392px]">
          <div className="flex h-[840px] w-full max-w-[392px] flex-col overflow-hidden rounded-[40px] border-[9px] border-ink bg-surface">
            <div className="flex flex-shrink-0 items-center gap-3 px-4 pb-2.5 pt-3.5">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#101826" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9.6 3.4 5 8l4.6 4.6" />
              </svg>
              <span className="flex-grow text-[14.5px] font-semibold text-ink-tertiary">sua_loja</span>
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#101826" strokeWidth={1.6} strokeLinecap="round" aria-hidden="true">
                <path d="M12 6.4a4 4 0 0 0-8 0c0 3.4-1.4 4.4-1.4 4.4h10.8S12 9.8 12 6.4ZM6.8 12.8a1.4 1.4 0 0 0 2.4 0" />
              </svg>
              <svg width="18" height="18" viewBox="0 0 16 16" fill="#101826" aria-hidden="true">
                <circle cx="3.4" cy="8" r="1.2" />
                <circle cx="8" cy="8" r="1.2" />
                <circle cx="12.6" cy="8" r="1.2" />
              </svg>
            </div>

            <div className="flex flex-shrink-0 items-center gap-[18px] px-4 pb-3 pt-1.5">
              <span className="flex h-[74px] w-[74px] flex-shrink-0 items-center justify-center rounded-full bg-[#DFEBF6] text-accent">
                <svg width="30" height="30" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2.4 6.6 8 2.8l5.6 3.8v6.4a.6.6 0 0 1-.6.6H3a.6.6 0 0 1-.6-.6Z" />
                  <path d="M6 13.6V9.4h4v4.2" />
                </svg>
              </span>
              <span className="flex flex-grow justify-around">
                <span className="flex flex-col items-center">
                  <span className="font-display text-base font-bold text-ink-tertiary">—</span>
                  <span className="text-xs text-ink-secondary">publicações</span>
                </span>
                <span className="flex flex-col items-center">
                  <span className="font-display text-base font-bold text-ink-tertiary">—</span>
                  <span className="text-xs text-ink-secondary">seguidores</span>
                </span>
                <span className="flex flex-col items-center">
                  <span className="font-display text-base font-bold text-ink-tertiary">—</span>
                  <span className="text-xs text-ink-secondary">seguindo</span>
                </span>
              </span>
            </div>

            <div className="flex flex-shrink-0 flex-col gap-0.5 px-4 pb-3">
              <span className="text-[13.5px] font-semibold text-ink-tertiary">Sua loja</span>
              <span className="text-[13px] leading-[1.45] text-ink-tertiary">
                Conecte o Instagram para trazer sua bio de verdade aqui.
              </span>
            </div>

            <div className="flex flex-shrink-0 gap-1.5 px-4 pb-3.5">
              <button className="min-h-[34px] flex-grow rounded-lg bg-[#EFEBF7] text-[12.5px] font-semibold text-ink">
                Seguindo
              </button>
              <button className="min-h-[34px] flex-grow rounded-lg bg-[#EFEBF7] text-[12.5px] font-semibold text-ink">
                Mensagem
              </button>
              <button className="min-h-[34px] flex-grow rounded-lg bg-[#EFEBF7] text-[12.5px] font-semibold text-ink">
                E-mail
              </button>
            </div>

            <div className="flex flex-shrink-0 border-t border-line">
              <span className="flex h-[42px] flex-grow items-center justify-center border-b-2 border-ink">
                <svg width="19" height="19" viewBox="0 0 16 16" fill="none" stroke="#101826" strokeWidth={1.5} aria-hidden="true">
                  <rect x="2.4" y="2.4" width="4.8" height="4.8" />
                  <rect x="8.8" y="2.4" width="4.8" height="4.8" />
                  <rect x="2.4" y="8.8" width="4.8" height="4.8" />
                  <rect x="8.8" y="8.8" width="4.8" height="4.8" />
                </svg>
              </span>
              <span className="flex h-[42px] flex-grow items-center justify-center">
                <svg width="19" height="19" viewBox="0 0 16 16" fill="none" stroke="#8A94A6" strokeWidth={1.5} strokeLinejoin="round" aria-hidden="true">
                  <rect x="2.4" y="2.8" width="11.2" height="10.4" rx="2" />
                  <path d="M2.4 6.2h11.2M6 2.8 7.6 6.2M9.8 2.8l1.6 3.4" />
                  <path d="M6.8 8.4 10 9.9l-3.2 1.5Z" />
                </svg>
              </span>
              <span className="flex h-[42px] flex-grow items-center justify-center">
                <svg width="19" height="19" viewBox="0 0 16 16" fill="none" stroke="#8A94A6" strokeWidth={1.5} strokeLinecap="round" aria-hidden="true">
                  <path d="M2.6 4.2h10.8v7.6H2.6Z" />
                  <circle cx="8" cy="7.4" r="1.6" />
                </svg>
              </span>
            </div>

            <div className="grid flex-grow grid-cols-3 content-start gap-0.5 bg-surface p-0.5">
              {hidratado &&
                grade.map((g) => (
                  <span key={g.id} className="relative block h-[152px] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={g.imagemUrl} alt={g.titulo} className="h-full w-full object-cover" />
                    <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary" />
                  </span>
                ))}
              {hidratado &&
                Array.from({ length: vazios }, (_, i) => (
                  <span
                    key={`vazio-${i}`}
                    className="flex h-[152px] items-center justify-center border border-dashed border-[#D5E1EA] bg-[#FAFBFD]"
                  >
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C2D2DD" strokeWidth={1.3} strokeLinecap="round" aria-hidden="true">
                      <rect x="2.4" y="2.4" width="11.2" height="11.2" rx="1.6" />
                      <circle cx="6" cy="6.4" r="1.2" />
                      <path d="M2.6 11.4l3.4-3.4 2.4 2.2 3-3.4 1.9 1.9" />
                    </svg>
                  </span>
                ))}
            </div>
          </div>
          <span className="text-xs text-ink-tertiary">
            Prévia real da grade · arraste um post na lista ao lado para trocar de lugar
          </span>
        </section>

        <section className="flex min-w-0 flex-grow flex-col gap-3.5">
          <div className="flex items-center gap-[22px] rounded-2xl border border-line bg-surface px-5 py-[18px]">
            <span className="flex flex-grow flex-col gap-[3px]">
              <span className="font-display text-[15px] font-bold text-ink">
                O lojista vê o feed antes de ir ao ar
              </span>
              <span className="text-[12.5px] text-ink-secondary">
                Aprovar um post é fácil. O que ninguém mostra é como os posts ficam juntos na
                grade.
              </span>
            </span>
          </div>

          <div className="flex min-h-0 flex-grow flex-col gap-3 rounded-2xl border border-line bg-surface px-5 py-[18px]">
            <div className="flex items-baseline gap-2.5">
              <h2 className="m-0 flex-grow font-display text-base font-bold text-ink">
                Ordem das próximas publicações
              </h2>
              <Link href="/aprovados" className="text-[12.5px] font-semibold no-underline">
                Ver o painel de aprovação
              </Link>
            </div>

            {hidratado && agendadas.length === 0 && (
              <p className="px-1 text-xs text-ink-tertiary">
                Nada agendado ainda. Aprove publicações em &quot;Aprovadas e agenda&quot; para
                verem aqui.
              </p>
            )}

            {agendadas.map((f) => (
              <div
                key={f.id}
                draggable
                onDragStart={() => setDragId(f.id)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => onDrop(f.id)}
                className={`flex cursor-grab items-center gap-3 rounded-[11px] border border-line px-3 py-2.5 active:cursor-grabbing ${
                  dragId === f.id ? "opacity-50" : ""
                }`}
              >
                <svg width="15" height="15" viewBox="0 0 16 16" fill="#B7C6D6" aria-hidden="true">
                  <circle cx="6" cy="3.6" r="1.2" />
                  <circle cx="10" cy="3.6" r="1.2" />
                  <circle cx="6" cy="8" r="1.2" />
                  <circle cx="10" cy="8" r="1.2" />
                  <circle cx="6" cy="12.4" r="1.2" />
                  <circle cx="10" cy="12.4" r="1.2" />
                </svg>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={f.imagemUrl} alt={f.titulo} className="h-11 w-11 flex-shrink-0 rounded-lg border border-line object-cover" />
                <span className="flex min-w-0 flex-grow flex-col gap-0.5">
                  <span className="text-[13.5px] font-semibold text-ink">{f.titulo}</span>
                  <span className="text-xs text-ink-tertiary">{formatarQuando(f.quando)}</span>
                </span>
                <span className="rounded-md bg-[#F1F5F9] px-2 py-1 font-mono text-[9.5px] font-semibold uppercase tracking-[0.08em] text-ink-secondary">
                  {f.tipo}
                </span>
                <span className="h-[9px] w-[9px] flex-shrink-0 rounded-full bg-primary" />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-line bg-surface px-5 py-[18px]">
            <div className="flex items-baseline gap-2.5">
              <h2 className="m-0 flex-grow font-display text-base font-bold text-ink">
                Equilíbrio do feed por formato
              </h2>
            </div>
            {agendadas.length === 0 ? (
              <p className="px-1 text-xs text-ink-tertiary">
                Aparece assim que houver publicações agendadas suficientes para comparar.
              </p>
            ) : (
              Object.entries(porTipo).map(([tipo, qtd]) => (
                <span key={tipo} className="flex items-center gap-3">
                  <span className="w-[118px] flex-shrink-0 text-[12.5px] text-ink-secondary">
                    {tipo}
                  </span>
                  <span className="h-[9px] flex-grow overflow-hidden rounded-full bg-[#E9EEF4]">
                    <span
                      className="block h-full rounded-full bg-primary"
                      style={{ width: `${(qtd / agendadas.length) * 100}%` }}
                    />
                  </span>
                  <span className="w-11 flex-shrink-0 text-right font-mono text-xs font-semibold">
                    {qtd}
                  </span>
                </span>
              ))
            )}
          </div>
        </section>
      </div>
    </>
  );
}
