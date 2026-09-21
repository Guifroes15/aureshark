"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import PageHeader from "@/components/page-header";
import { useCreators, type CreatorManual } from "@/lib/creators-store";
import { useCampanhas } from "@/lib/campanhas-store";

type FormState = {
  nome: string;
  cidade: string;
  nichos: string;
  contato: string;
  valorPorVideo: string;
  prazoDias: string;
  notas: string;
};

const FORM_VAZIO: FormState = { nome: "", cidade: "", nichos: "", contato: "", valorPorVideo: "", prazoDias: "", notas: "" };

export default function CreatorsPage() {
  const router = useRouter();
  const { creators, hidratado, addCreator, atualizarCreator, removerCreator } = useCreators();
  const { addCampanha } = useCampanhas();
  const [busca, setBusca] = useState("");
  const [mostrarForm, setMostrarForm] = useState(false);
  const [editandoId, setEditandoId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(FORM_VAZIO);

  const filtrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    if (!termo) return creators;
    return creators.filter((c) =>
      `${c.nome} ${c.cidade} ${c.nichos.join(" ")}`.toLowerCase().includes(termo),
    );
  }, [creators, busca]);

  function abrirNovo() {
    setForm(FORM_VAZIO);
    setEditandoId(null);
    setMostrarForm(true);
  }

  function abrirEdicao(c: CreatorManual) {
    setForm({
      nome: c.nome,
      cidade: c.cidade,
      nichos: c.nichos.join(", "),
      contato: c.contato,
      valorPorVideo: String(c.valorPorVideo),
      prazoDias: String(c.prazoDias),
      notas: c.notas,
    });
    setEditandoId(c.id);
    setMostrarForm(true);
  }

  function salvar() {
    if (!form.nome.trim()) return;
    const dados = {
      nome: form.nome.trim(),
      cidade: form.cidade.trim(),
      nichos: form.nichos.split(",").map((n) => n.trim()).filter(Boolean),
      contato: form.contato.trim(),
      valorPorVideo: Number(form.valorPorVideo) || 0,
      prazoDias: Number(form.prazoDias) || 0,
      notas: form.notas.trim(),
    };
    if (editandoId) atualizarCreator(editandoId, dados);
    else addCreator(dados);
    setMostrarForm(false);
  }

  function convidarParaCampanha(c: CreatorManual) {
    addCampanha({
      titulo: `Campanha com ${c.nome}`,
      creatorId: c.id,
      creatorNome: c.nome,
      valor: c.valorPorVideo,
      prazoDias: c.prazoDias,
    });
    router.push("/campanha");
  }

  return (
    <>
      <PageHeader eyebrow="UGC · SEUS CREATORS" title="Meus creators">
        <div className="flex min-h-[44px] w-full items-center gap-2 rounded-[9px] border border-[#D5CFE7] bg-surface px-3.5 sm:w-[260px]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#6B7A8C" strokeWidth={1.7} strokeLinecap="round" aria-hidden="true">
            <circle cx="7.2" cy="7.2" r="4.4" />
            <path d="M10.6 10.6 13.6 13.6" />
          </svg>
          <label htmlFor="busca" className="sr-only">Buscar creator</label>
          <input
            id="busca"
            type="search"
            placeholder="Nome, cidade ou nicho"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="flex-grow border-none bg-transparent text-[13px] text-ink outline-none"
          />
        </div>
        <button
          onClick={abrirNovo}
          className="flex min-h-[44px] items-center gap-2 rounded-[9px] bg-primary px-4 text-[13.5px] font-semibold text-white hover:bg-primary-hover"
        >
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
            <path d="M8 3.6v8.8M3.6 8h8.8" />
          </svg>
          Adicionar creator
        </button>
      </PageHeader>

      <div className="flex min-h-0 flex-grow flex-col gap-4 px-4 py-4 lg:px-7 lg:py-[22px]">
        {mostrarForm && (
          <div className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-5">
            <div className="flex items-center gap-2.5">
              <h2 className="m-0 flex-grow font-display text-[15px] font-bold text-ink">
                {editandoId ? "Editar creator" : "Novo creator"}
              </h2>
              <button onClick={() => setMostrarForm(false)} aria-label="Fechar" className="flex h-8 w-8 items-center justify-center rounded-full text-ink-tertiary hover:bg-app">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
                  <path d="M4 4l8 8M12 4l-8 8" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input value={form.nome} onChange={(e) => setForm((p) => ({ ...p, nome: e.target.value }))} placeholder="Nome" className="min-h-[44px] rounded-lg border border-line px-3 text-[13px] text-ink" />
              <input value={form.cidade} onChange={(e) => setForm((p) => ({ ...p, cidade: e.target.value }))} placeholder="Cidade" className="min-h-[44px] rounded-lg border border-line px-3 text-[13px] text-ink" />
              <input value={form.nichos} onChange={(e) => setForm((p) => ({ ...p, nichos: e.target.value }))} placeholder="Nichos (separados por vírgula)" className="min-h-[44px] rounded-lg border border-line px-3 text-[13px] text-ink" />
              <input value={form.contato} onChange={(e) => setForm((p) => ({ ...p, contato: e.target.value }))} placeholder="WhatsApp ou @ do Instagram" className="min-h-[44px] rounded-lg border border-line px-3 text-[13px] text-ink" />
              <input type="number" value={form.valorPorVideo} onChange={(e) => setForm((p) => ({ ...p, valorPorVideo: e.target.value }))} placeholder="Valor por vídeo (R$)" className="min-h-[44px] rounded-lg border border-line px-3 text-[13px] text-ink" />
              <input type="number" value={form.prazoDias} onChange={(e) => setForm((p) => ({ ...p, prazoDias: e.target.value }))} placeholder="Prazo de entrega (dias)" className="min-h-[44px] rounded-lg border border-line px-3 text-[13px] text-ink" />
            </div>
            <textarea value={form.notas} onChange={(e) => setForm((p) => ({ ...p, notas: e.target.value }))} placeholder="Notas (opcional): como esse creator trabalha, exemplos de entregas, etc." rows={2} className="resize-none rounded-lg border border-line px-3 py-2 text-[13px] text-ink" />
            <button onClick={salvar} className="self-start rounded-lg bg-primary px-4 py-2.5 text-[13px] font-semibold text-white hover:bg-primary-hover">
              {editandoId ? "Salvar alterações" : "Adicionar"}
            </button>
          </div>
        )}

        {hidratado && creators.length === 0 && !mostrarForm && (
          <div className="flex flex-grow flex-col items-center justify-center gap-3 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-tint">
              <svg width="26" height="26" viewBox="0 0 16 16" fill="none" stroke="#146B9C" strokeWidth={1.5} strokeLinecap="round" aria-hidden="true">
                <circle cx="6.2" cy="6" r="2.6" />
                <path d="M2.4 13.4c0-2.3 1.7-3.9 3.8-3.9s3.8 1.6 3.8 3.9" />
              </svg>
            </span>
            <h2 className="m-0 font-display text-lg font-bold text-ink">Nenhum creator ainda</h2>
            <p className="m-0 max-w-[44ch] text-sm text-ink-secondary">
              Adicione creators que você já conhece ou já trabalhou — nome, contato e valor. Depois
              é só convidar pra uma campanha.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-3">
          {filtrados.map((c) => (
            <div key={c.id} className="flex flex-col gap-3 rounded-[13px] border border-line bg-surface p-[15px]">
              <div className="flex items-center gap-2.5">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#DFEBF6] font-display text-sm font-bold text-primary">
                  {c.nome.slice(0, 2).toUpperCase()}
                </span>
                <span className="flex min-w-0 flex-grow flex-col gap-px">
                  <span className="font-display text-sm font-bold tracking-[-0.01em] text-ink">{c.nome}</span>
                  <span className="text-[11.5px] text-ink-tertiary">{c.cidade || "Cidade não informada"}</span>
                </span>
              </div>

              {c.nichos.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {c.nichos.map((n) => (
                    <span key={n} className="rounded-full bg-tint px-2 py-[3px] text-[11px] text-tint-fg">{n}</span>
                  ))}
                </div>
              )}

              {c.notas && <p className="m-0 text-xs leading-[1.5] text-ink-secondary">{c.notas}</p>}

              <div className="flex items-center gap-2.5 border-t border-[#E9EEF4] pt-2.5">
                <span className="flex flex-grow flex-col">
                  <span className="text-[12.5px] font-semibold text-ink">{c.contato || "Sem contato salvo"}</span>
                  <span className="text-[11.5px] text-ink-tertiary">Entrega em {c.prazoDias || "?"} dias</span>
                </span>
                <span className="flex flex-col items-end">
                  <span className="font-display text-sm font-bold text-ink">R$ {c.valorPorVideo}</span>
                  <span className="font-mono text-[9px] font-semibold tracking-[0.08em] text-ink-tertiary">POR VÍDEO</span>
                </span>
              </div>

              <div className="flex gap-2">
                <button onClick={() => abrirEdicao(c)} className="flex min-h-10 flex-grow items-center justify-center rounded-lg border border-[#D5CFE7] text-[12.5px] font-semibold text-ink">
                  Editar
                </button>
                <button onClick={() => convidarParaCampanha(c)} className="flex min-h-10 flex-grow items-center justify-center rounded-lg bg-ink text-[12.5px] font-semibold text-white">
                  Convidar
                </button>
                <button onClick={() => removerCreator(c.id)} aria-label="Remover" className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-ink-tertiary hover:bg-app hover:text-danger">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
                    <path d="M4 4l8 8M12 4l-8 8" />
                  </svg>
                </button>
              </div>
            </div>
          ))}

          {hidratado && creators.length > 0 && filtrados.length === 0 && (
            <p className="col-span-full py-8 text-center text-sm text-ink-tertiary">
              Nenhum creator combina com essa busca.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
