"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/page-header";

const OUTROS = [
  {
    iniciais: "RT",
    nome: "Rafael T.",
    valor: "R$ 150 retidos",
    etapa: "Gravando",
    detalhe: "Recebeu o produto em 19/09 · prazo até 26/09",
    chip: "EM PRODUÇÃO",
  },
  {
    iniciais: "JC",
    nome: "Juliana C.",
    valor: "R$ 220 retidos",
    etapa: "Produto em trânsito",
    detalhe: "Etiqueta emitida na plataforma · rastreio atualizado hoje",
    chip: "A CAMINHO",
  },
];

const DOCS = [
  { titulo: "Contrato dos dois lados", nota: "Assinado por marca e creator" },
  { titulo: "Cessão de direito de imagem", nota: "12 meses, uso em anúncio incluído" },
  { titulo: "Nota fiscal do creator", nota: "Emitida na liberação do pagamento" },
  { titulo: "Etiqueta dos Correios", nota: "Gerada no fluxo, sem sair da tela" },
];

const VALOR_MARINA = 180;
const RETIDO_TOTAL = 550;

type Etapa = "entregue" | "aprovado" | "ajuste";

const STEPS = ["Produto enviado", "Gravado", "Vídeo entregue", "Aprovado e pago"];

export default function CampanhaPage() {
  const [etapa, setEtapa] = useState<Etapa>("entregue");

  const liberado = etapa === "aprovado" ? VALOR_MARINA : 0;
  const retido = RETIDO_TOTAL - liberado;
  const doneCount = etapa === "aprovado" ? 4 : 2;
  const currentIndex = 2;
  const reachIndex = etapa === "aprovado" ? 3 : currentIndex;

  return (
    <>
      <PageHeader
        eyebrow="CAMPANHA DE UGC · ABERTA EM 15/09 · 3 CREATORS"
        title="Tênis Aurora Base — prova real"
      >
        {etapa !== "aprovado" && (
          <span className="flex items-center gap-[7px] rounded-full bg-warning-bg px-3.5 py-2 text-[12.5px] font-semibold text-[#4A3714]">
            <span className="h-2 w-2 rounded-full bg-warning" />
            1 vídeo esperando sua aprovação
          </span>
        )}
        <Link
          href="/creators"
          className="flex min-h-[44px] items-center rounded-[9px] border border-[#D5CFE7] px-4 text-[13.5px] font-semibold text-ink no-underline"
        >
          Adicionar creator
        </Link>
      </PageHeader>

      <div className="flex min-h-0 flex-grow gap-[18px] px-7 py-[22px]">
        <section className="flex min-w-0 flex-grow flex-col gap-3.5">
          <div className="flex gap-[22px] rounded-2xl border border-line bg-surface px-5 py-[18px]">
            <span className="flex min-w-0 flex-grow flex-col gap-[7px]">
              <span className="font-mono text-[9.5px] font-semibold tracking-[0.12em] text-ink-tertiary">
                O QUE O PLANEJAMENTO PEDIU
              </span>
              <span className="text-sm leading-[1.6] text-ink-secondary">
                Vídeo vertical de 30 a 45 segundos mostrando o tênis em uso real: calçar, andar na
                rua e comentar conforto e acabamento. Falar da numeração 34 ao 40. Sem menção a
                preço.
              </span>
            </span>
            <span className="w-px flex-shrink-0 bg-[#E9EEF4]" />
            <span className="flex w-[190px] flex-shrink-0 flex-col gap-2.5">
              <span className="flex justify-between text-[12.5px]">
                <span className="text-ink-tertiary">Entregáveis</span>
                <span className="font-semibold text-ink">1 vídeo + 3 fotos</span>
              </span>
              <span className="flex justify-between text-[12.5px]">
                <span className="text-ink-tertiary">Prazo</span>
                <span className="font-semibold text-ink">7 dias</span>
              </span>
              <span className="flex justify-between text-[12.5px]">
                <span className="text-ink-tertiary">Direito de imagem</span>
                <span className="font-semibold text-ink">12 meses</span>
              </span>
            </span>
          </div>

          <div className="flex min-h-0 flex-grow flex-col gap-3">
            <div className="flex flex-col gap-3.5 rounded-2xl border-2 border-primary bg-surface p-[18px]">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#DFEBF6] font-display text-[13px] font-bold text-primary">
                  MB
                </span>
                <span className="flex flex-grow flex-col">
                  <span className="font-display text-[15px] font-bold text-ink">Marina B.</span>
                  <span className="text-xs text-ink-tertiary">
                    Vídeo entregue ontem às 19h42 · 0:34
                  </span>
                </span>
                <span
                  className={`rounded-md px-[9px] py-[5px] font-mono text-[10px] font-semibold tracking-[0.08em] ${
                    etapa === "aprovado"
                      ? "bg-success-bg text-success"
                      : etapa === "ajuste"
                        ? "bg-danger-bg text-danger"
                        : "bg-tint text-tint-fg"
                  }`}
                >
                  {etapa === "aprovado"
                    ? "APROVADO E PAGO"
                    : etapa === "ajuste"
                      ? "AJUSTE SOLICITADO"
                      : "AGUARDA APROVAÇÃO"}
                </span>
              </div>

              <div className="flex items-center">
                {STEPS.map((label, i) => {
                  const done = i < doneCount;
                  const current = !done && i === currentIndex;
                  return (
                    <div key={label} className="flex flex-grow items-center last:flex-grow-0">
                      <span className="flex w-[118px] flex-shrink-0 flex-col items-center gap-1.5">
                        {done ? (
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success">
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="#FFFFFF" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M3.6 8.4 6.4 11.2l6-6.4" />
                            </svg>
                          </span>
                        ) : (
                          <span
                            className={`h-5 w-5 rounded-full ${
                              current
                                ? "border-[3px] border-tint bg-primary"
                                : "border-2 border-[#D5CFE7] bg-surface"
                            }`}
                          />
                        )}
                        <span
                          className={`text-center text-[11px] font-semibold ${
                            done ? "text-success" : current ? "text-primary" : "text-ink-tertiary"
                          }`}
                        >
                          {label}
                        </span>
                      </span>
                      {i < STEPS.length - 1 && (
                        <span
                          className={`h-0.5 flex-grow ${i + 1 <= reachIndex ? "bg-success" : "bg-line"}`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              {etapa !== "aprovado" && (
                <>
                  <div className="flex items-center gap-3.5 rounded-[11px] border border-[#EAE6F4] bg-[#FAFBFD] p-3">
                    <span className="relative flex h-[100px] w-[78px] flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-line bg-[#E7D7C6]">
                      <svg viewBox="0 0 100 112" className="absolute bottom-0 left-1/2 w-[78px] -ml-[39px]" aria-hidden="true">
                        <rect x="26" y="0" width="17" height="86" rx="8.5" fill="#C9AF95" />
                        <rect x="56" y="0" width="17" height="86" rx="8.5" fill="#BFA286" />
                        <path d="M12 88h30c9 0 15 5 15 11v5H16c-3 0-4-2-4-4Z" fill="#FBF7F2" />
                        <path d="M48 88h30c9 0 15 5 15 11v5H52c-3 0-4-2-4-4Z" fill="#FFFFFF" />
                      </svg>
                      <span
                        className="relative -rotate-[32deg] font-mono text-[8px] font-semibold tracking-[0.06em] text-white"
                        style={{ textShadow: "0 1px 3px rgba(36,28,23,0.8)" }}
                      >
                        MARCA D&apos;ÁGUA
                      </span>
                    </span>
                    <span className="flex min-w-0 flex-grow flex-col gap-1.5">
                      <span className="text-[13px] font-semibold text-ink">
                        Você assiste com marca d&apos;água e só baixa depois de aprovar
                      </span>
                      <span className="text-[12.5px] leading-[1.5] text-ink-secondary">
                        Recusar exige justificativa contra o que foi combinado no briefing. Sem
                        resposta em 7 dias, o sistema aprova e paga automaticamente.
                      </span>
                    </span>
                  </div>

                  <div className="flex gap-2.5">
                    <button className="flex min-h-[44px] items-center rounded-[9px] border border-[#D5CFE7] bg-surface px-4 text-[13px] font-semibold text-ink">
                      Assistir com marca d&apos;água
                    </button>
                    <button
                      onClick={() => setEtapa("ajuste")}
                      className="flex min-h-[44px] items-center rounded-[9px] border border-[#E5B7B1] bg-surface px-4 text-[13px] font-semibold text-danger"
                    >
                      Pedir ajuste
                    </button>
                    <span className="flex-grow" />
                    <button
                      onClick={() => setEtapa("aprovado")}
                      className="flex min-h-[44px] items-center rounded-[9px] bg-primary px-[18px] text-[13px] font-semibold text-white hover:bg-primary-hover"
                    >
                      Aprovar e liberar R$ {VALOR_MARINA}
                    </button>
                  </div>
                </>
              )}

              {etapa === "aprovado" && (
                <p className="m-0 rounded-[11px] bg-success-bg px-3.5 py-3 text-[12.5px] text-[#0B4630]">
                  Pagamento de R$ {VALOR_MARINA} liberado para Marina B. O vídeo já pode ser baixado
                  sem marca d&apos;água.
                </p>
              )}
            </div>

            {OUTROS.map((o) => (
              <div
                key={o.nome}
                className="flex items-center gap-3.5 rounded-2xl border border-line bg-surface px-[18px] py-4"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#E9EEF4] font-display text-[13px] font-bold text-ink-secondary">
                  {o.iniciais}
                </span>
                <span className="flex w-[150px] flex-shrink-0 flex-col">
                  <span className="font-display text-[14.5px] font-bold text-ink">{o.nome}</span>
                  <span className="text-xs text-ink-tertiary">{o.valor}</span>
                </span>
                <span className="flex min-w-0 flex-grow flex-col gap-[3px]">
                  <span className="text-[13px] font-semibold text-ink">{o.etapa}</span>
                  <span className="text-xs text-ink-tertiary">{o.detalhe}</span>
                </span>
                <span className="rounded-md bg-[#F1F5F9] px-[9px] py-[5px] font-mono text-[10px] font-semibold tracking-[0.08em] text-ink-secondary">
                  {o.chip}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="flex w-80 flex-shrink-0 flex-col gap-3.5">
          <div className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-[18px]">
            <h2 className="m-0 font-display text-[15px] font-bold text-ink">Pagamento retido</h2>
            <div className="flex flex-col gap-2.5">
              <span className="flex justify-between text-[13px]">
                <span className="text-ink-secondary">Retido na plataforma</span>
                <span className="font-semibold text-ink">
                  R$ {retido.toFixed(2).replace(".", ",")}
                </span>
              </span>
              <span className="flex justify-between text-[13px]">
                <span className="text-ink-secondary">Liberado até agora</span>
                <span className="font-semibold text-success">
                  R$ {liberado.toFixed(2).replace(".", ",")}
                </span>
              </span>
              <span className="flex justify-between text-[13px]">
                <span className="text-ink-secondary">Taxa de serviço (paga pela marca)</span>
                <span className="font-semibold text-ink">18%</span>
              </span>
            </div>
            <div className="rounded-[10px] bg-success-bg p-3">
              <p className="m-0 text-xs leading-[1.55] text-[#0B4630]">
                O creator só recebe depois da sua aprovação. Ele fica com 100% do valor combinado —
                a taxa sai da marca, não dele.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-[18px]">
            <h2 className="m-0 font-display text-[15px] font-bold text-ink">
              Emitido dentro da plataforma
            </h2>
            {DOCS.map((d) => (
              <span key={d.titulo} className="flex items-center gap-2.5">
                <span className="flex h-[19px] w-[19px] flex-shrink-0 items-center justify-center rounded-full bg-success-bg">
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="#0D6B45" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3.6 8.4 6.4 11.2l6-6.4" />
                  </svg>
                </span>
                <span className="flex flex-col">
                  <span className="text-[13px] font-semibold text-ink">{d.titulo}</span>
                  <span className="text-[11.5px] text-ink-tertiary">{d.nota}</span>
                </span>
              </span>
            ))}
          </div>

          <div className="mt-auto rounded-2xl bg-ink p-[18px]">
            <p className="m-0 mb-1.5 font-display text-sm font-bold text-white">
              Contato direto bloqueado
            </p>
            <p className="m-0 text-[12.5px] leading-[1.55] text-[#AFC3D6]">
              Telefone e e-mail ficam ocultos dos dois lados e a conversa acontece aqui. Mas a
              defesa real é que ficar dentro custa menos: retenção, nota fiscal, direito de imagem
              e histórico de avaliação.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
