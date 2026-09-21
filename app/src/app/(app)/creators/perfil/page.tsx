"use client";

import { useState } from "react";
import Link from "next/link";
import { portfolioVideos, PortfolioCard } from "@/components/creators/perfil-portfolio";

const CAMPANHAS = ["Tênis Aurora Base — prova real", "Coleção de verão — 5 creators", "Criar nova campanha"];
const PRODUTOS = ["Tênis Aurora Base branco · 36", "Tênis Aurora Base branco · 37"];

const TABS = ["Portfólio", "Entregas da plataforma", "Avaliações · 19"] as const;

export default function PerfilCreatorPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Portfólio");
  const [campanha, setCampanha] = useState(CAMPANHAS[0]);
  const [produto, setProduto] = useState(PRODUTOS[0]);
  const [enviado, setEnviado] = useState(false);

  return (
    <>
      <header className="flex h-[70px] flex-shrink-0 items-center gap-3.5 border-b border-line bg-surface px-7">
        <Link
          href="/creators"
          className="flex min-h-[44px] items-center gap-2 rounded-[9px] border border-[#D5CFE7] px-3 text-[12.5px] font-semibold text-ink no-underline"
        >
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9.6 3.4 5 8l4.6 4.6" />
          </svg>
          Voltar
        </Link>
        <span className="flex flex-grow flex-col">
          <span className="font-mono text-[10px] font-semibold tracking-[0.12em] text-ink-tertiary">
            PERFIL DE CREATOR
          </span>
          <span className="font-display text-xl font-bold tracking-[-0.02em] text-ink">Marina B.</span>
        </span>
        <span className="flex items-center gap-[7px] rounded-full bg-success-bg px-3.5 py-2 text-[12.5px] font-semibold text-[#0B4630]">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3.6 8.4 6.4 11.2l6-6.4" />
          </svg>
          Cadastro aprovado na curadoria
        </span>
      </header>

      <div className="flex min-h-0 flex-grow gap-[18px] px-7 py-[22px]">
        <section className="flex min-w-0 flex-grow flex-col gap-4 rounded-2xl border border-line bg-surface p-[22px]">
          <div className="flex items-start gap-6">
            <span className="h-[104px] w-[104px] flex-shrink-0 rounded-full bg-primary p-[3px]">
              <span className="flex h-full w-full items-center justify-center rounded-full border-[3px] border-surface bg-[#DFEBF6] font-display text-[30px] font-extrabold text-primary">
                MB
              </span>
            </span>

            <div className="flex min-w-0 flex-grow flex-col gap-3.5">
              <div className="flex items-center gap-3">
                <span className="font-display text-xl font-bold tracking-[-0.02em] text-ink">
                  @marinab.creator
                </span>
                <span className="rounded-[5px] bg-tint px-2 py-1 font-mono text-[10px] font-semibold tracking-[0.08em] text-tint-fg">
                  TOP 10% DE ENTREGA
                </span>
                <span className="flex-grow" />
                <button
                  onClick={() => setEnviado(true)}
                  className="flex min-h-[44px] items-center rounded-[9px] bg-primary px-5 text-[13.5px] font-semibold text-white hover:bg-primary-hover"
                >
                  Convidar para campanha
                </button>
                <button className="flex min-h-[44px] items-center rounded-[9px] border border-[#D5CFE7] bg-surface px-4 text-[13.5px] font-semibold text-ink">
                  Salvar
                </button>
                <button
                  aria-label="Mensagem"
                  className="flex h-11 w-11 items-center justify-center rounded-[9px] border border-[#D5CFE7] bg-surface"
                >
                  <svg width="17" height="17" viewBox="0 0 16 16" fill="none" stroke="#101826" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M13.6 8.2c0 2.7-2.5 4.8-5.6 4.8-.7 0-1.4-.1-2-.3l-3.2 1 1-2.5c-.9-.8-1.4-1.9-1.4-3 0-2.7 2.5-4.8 5.6-4.8s5.6 2.1 5.6 4.8Z" />
                  </svg>
                </button>
              </div>

              <div className="flex gap-11">
                {[
                  { valor: "23", label: "Vídeos entregues" },
                  { valor: "7", label: "Marcas atendidas" },
                  { valor: "4,9", label: "Nota média", cor: true },
                  { valor: "4 dias", label: "Do envio ao vídeo" },
                  { valor: "R$ 180", label: "Valor por vídeo" },
                ].map((s) => (
                  <span key={s.label} className="flex flex-col">
                    <span
                      className={`font-display text-xl font-extrabold tracking-[-0.025em] ${s.cor ? "text-primary" : "text-ink"}`}
                    >
                      {s.valor}
                    </span>
                    <span className="text-[12.5px] text-ink-tertiary">{s.label}</span>
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-[13.5px] font-semibold text-ink">Marina B. · Belo Horizonte, MG</span>
                <span className="max-w-[66ch] text-[13.5px] leading-[1.55] text-ink-secondary">
                  Faço vídeo de prova real: calço, ando, mostro o pé de perto e falo o que incomoda.
                  Entrego vertical e horizontal no mesmo pedido.
                </span>
              </div>

              <span className="flex flex-wrap gap-1.5">
                <span className="rounded-full bg-tint px-2.5 py-[5px] text-xs text-tint-fg">moda e calçados</span>
                <span className="rounded-full bg-tint px-2.5 py-[5px] text-xs text-tint-fg">lifestyle</span>
                <span className="rounded-full bg-tint px-2.5 py-[5px] text-xs text-tint-fg">grava em casa e em rua</span>
                <span className="rounded-full bg-success-bg px-2.5 py-[5px] text-xs text-[#0B4630]">
                  96% aprovadas de primeira
                </span>
              </span>
            </div>
          </div>

          <div className="flex items-stretch border-y border-line">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex min-h-12 flex-grow items-center justify-center gap-2 font-mono text-[10.5px] font-semibold tracking-[0.1em] ${
                  tab === t
                    ? "-mb-px border-b-2 border-ink text-ink"
                    : "text-[#8A94A6]"
                }`}
              >
                {t.toUpperCase()}
              </button>
            ))}
          </div>

          {tab === "Portfólio" && (
            <div className="grid grid-cols-3 gap-3">
              {portfolioVideos.map((v) => (
                <PortfolioCard key={v.titulo} video={v} />
              ))}
            </div>
          )}

          {tab === "Entregas da plataforma" && (
            <p className="py-10 text-center text-sm text-ink-tertiary">
              Histórico de entregas feitas dentro da plataforma aparece aqui conforme as campanhas
              avançam.
            </p>
          )}

          {tab === "Avaliações · 19" && (
            <p className="py-10 text-center text-sm text-ink-tertiary">
              As 19 avaliações completas aparecem aqui — a mais recente está no painel ao lado.
            </p>
          )}
        </section>

        <section className="flex w-[336px] flex-shrink-0 flex-col gap-3.5">
          <div className="flex flex-col gap-3.5 rounded-2xl border border-line bg-surface p-[18px]">
            <h2 className="m-0 font-display text-[15px] font-bold text-ink">Convidar para campanha</h2>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="camp" className="font-mono text-[9.5px] font-semibold tracking-[0.12em] text-ink-tertiary">
                CAMPANHA
              </label>
              <select
                id="camp"
                value={campanha}
                onChange={(e) => setCampanha(e.target.value)}
                className="min-h-[44px] rounded-lg border border-[#D5CFE7] bg-surface px-2.5 text-[13px] text-ink"
              >
                {CAMPANHAS.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="prod" className="font-mono text-[9.5px] font-semibold tracking-[0.12em] text-ink-tertiary">
                PRODUTO QUE VAI SER ENVIADO
              </label>
              <select
                id="prod"
                value={produto}
                onChange={(e) => setProduto(e.target.value)}
                className="min-h-[44px] rounded-lg border border-[#D5CFE7] bg-surface px-2.5 text-[13px] text-ink"
              >
                {PRODUTOS.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-[7px] border-t border-[#E9EEF4] pt-3">
              <span className="flex justify-between text-[13px]">
                <span className="text-ink-secondary">O creator recebe</span>
                <span className="font-semibold text-ink">R$ 180,00</span>
              </span>
              <span className="flex justify-between text-[13px]">
                <span className="text-ink-secondary">Taxa de serviço da plataforma</span>
                <span className="font-semibold text-ink">R$ 32,40</span>
              </span>
              <span className="flex justify-between text-[13px]">
                <span className="text-ink-secondary">Etiqueta dos Correios</span>
                <span className="font-semibold text-ink">Emitida no fluxo</span>
              </span>
              <span className="flex justify-between border-t border-dashed border-[#D5CFE7] pt-1.5 font-display text-[15px] font-bold text-ink">
                <span>Você paga</span>
                <span>R$ 212,40</span>
              </span>
            </div>

            <button
              onClick={() => setEnviado(true)}
              disabled={enviado}
              className="min-h-[44px] rounded-[9px] bg-primary text-[13.5px] font-semibold text-white hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
            >
              {enviado ? "Convite enviado" : "Enviar convite"}
            </button>
            <p className="m-0 text-[11.5px] leading-[1.5] text-ink-tertiary">
              O valor fica retido. O creator só recebe depois que você aprovar o vídeo, e a taxa de
              serviço é cobrada da marca — o creator fica com 100% do que foi combinado.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 rounded-2xl border border-line bg-surface p-[18px]">
            <h2 className="m-0 font-display text-[15px] font-bold text-ink">Marcas que já atendeu</h2>
            <span className="flex flex-wrap gap-1.5">
              {["Loja de calçados · BH", "Marca de tênis", "Loja de moda", "+4 marcas"].map((m) => (
                <span key={m} className="rounded-lg border border-line px-2.5 py-1.5 text-xs text-ink-secondary">
                  {m}
                </span>
              ))}
            </span>
          </div>

          <div className="mt-auto flex flex-col gap-2.5 rounded-2xl border border-line bg-surface p-[18px]">
            <h2 className="m-0 font-display text-[15px] font-bold text-ink">Última avaliação</h2>
            <p className="m-0 text-[13px] leading-[1.6] text-ink-secondary">
              &ldquo;Entregou em três dias, mostrou o produto de perto como pedimos e regravou uma
              cena sem reclamar. Vamos chamar de novo.&rdquo;
            </p>
            <span className="text-xs text-ink-tertiary">Loja de calçados em Curitiba · nota 5,0</span>
          </div>
        </section>
      </div>
    </>
  );
}
