"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import PageHeader from "@/components/page-header";
import { usePosts, type PostTipo } from "@/lib/posts-store";
import { resizeImageToDataUrl } from "@/lib/image-utils";

type Rascunho = {
  id: string;
  titulo: string;
  imagemUrl: string;
  tipo: PostTipo;
  selecionado: boolean;
};

const TIPOS: PostTipo[] = ["Estático", "Carrossel", "Vídeo"];

export default function GerarPage() {
  const router = useRouter();
  const { addPosts } = usePosts();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [objetivo, setObjetivo] = useState("");
  const [copy, setCopy] = useState("");
  const [produto, setProduto] = useState("");
  const [rascunhos, setRascunhos] = useState<Rascunho[]>([]);
  const [carregando, setCarregando] = useState(false);

  const selecionados = rascunhos.filter((r) => r.selecionado).length;

  async function onFilesSelected(files: FileList | null) {
    if (!files || files.length === 0) return;
    setCarregando(true);
    const novos: Rascunho[] = [];
    for (const file of Array.from(files)) {
      if (!file.type.startsWith("image/")) continue;
      const url = await resizeImageToDataUrl(file);
      novos.push({
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        titulo: file.name.replace(/\.[^.]+$/, ""),
        imagemUrl: url,
        tipo: "Estático",
        selecionado: true,
      });
    }
    setRascunhos((prev) => [...prev, ...novos]);
    setCarregando(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function toggleSelecionado(id: string) {
    setRascunhos((prev) => prev.map((r) => (r.id === id ? { ...r, selecionado: !r.selecionado } : r)));
  }

  function atualizarTitulo(id: string, titulo: string) {
    setRascunhos((prev) => prev.map((r) => (r.id === id ? { ...r, titulo } : r)));
  }

  function atualizarTipo(id: string, tipo: PostTipo) {
    setRascunhos((prev) => prev.map((r) => (r.id === id ? { ...r, tipo } : r)));
  }

  function removerRascunho(id: string) {
    setRascunhos((prev) => prev.filter((r) => r.id !== id));
  }

  function descartarNaoSelecionados() {
    setRascunhos((prev) => prev.filter((r) => r.selecionado));
  }

  function enviarParaAprovacao() {
    const selecionadosList = rascunhos.filter((r) => r.selecionado);
    if (selecionadosList.length === 0) return;
    addPosts(
      selecionadosList.map((r) => ({ titulo: r.titulo || "Publicação sem título", imagemUrl: r.imagemUrl, tipo: r.tipo })),
    );
    setRascunhos((prev) => prev.filter((r) => !r.selecionado));
    router.push("/aprovados");
  }

  return (
    <>
      <PageHeader eyebrow="SOCIAL MEDIA · NOVA PUBLICAÇÃO" title="Gerar publicações">
        <span className="flex items-center gap-2 text-[12.5px] text-ink-secondary">
          <span className="h-[9px] w-[9px] flex-shrink-0 rounded-full border-2 border-[#D5CFE7]" />
          Instagram ainda não conectado
        </span>
      </PageHeader>

      <div className="flex min-h-0 flex-grow gap-[18px] px-7 py-[22px]">
        <section className="flex w-[348px] flex-shrink-0 flex-col gap-4 rounded-2xl border border-line bg-surface p-5">
          <h2 className="m-0 font-display text-[15px] font-bold tracking-[-0.01em] text-ink">
            Sobre esta publicação
          </h2>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="objetivo" className="font-mono text-[9.5px] font-semibold tracking-[0.12em] text-ink-tertiary">
              OBJETIVO DO POST
            </label>
            <input
              id="objetivo"
              value={objetivo}
              onChange={(e) => setObjetivo(e.target.value)}
              placeholder="Ex: converter quem visitou a loja e não comprou"
              className="rounded-[9px] border border-line bg-surface px-3 py-2.5 text-[13px] text-ink"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="copy" className="font-mono text-[9.5px] font-semibold tracking-[0.12em] text-ink-tertiary">
              COPY DA PUBLICAÇÃO
            </label>
            <textarea
              id="copy"
              rows={4}
              value={copy}
              onChange={(e) => setCopy(e.target.value)}
              placeholder="Escreva a legenda desta publicação"
              className="resize-none rounded-[9px] border border-line bg-surface px-3 py-2.5 font-sans text-[13px] leading-[1.55] text-ink"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="produto" className="font-mono text-[9.5px] font-semibold tracking-[0.12em] text-ink-tertiary">
              PRODUTO (OPCIONAL)
            </label>
            <input
              id="produto"
              value={produto}
              onChange={(e) => setProduto(e.target.value)}
              placeholder="Nome do produto"
              className="rounded-[9px] border border-line bg-surface px-3 py-2.5 text-[13px] text-ink"
            />
          </div>

          <div className="mt-auto rounded-[10px] border border-[#EBD3A6] bg-warning-bg px-3.5 py-3">
            <p className="m-0 text-[12.5px] leading-[1.55] text-[#4A3714]">
              <strong className="font-semibold">Sem briefing, no futuro.</strong> Assim que você
              conectar o Instagram, a IA passa a ler produtos, paleta e tom de voz sozinha. Por
              enquanto, preencha à mão e envie sua própria arte.
            </p>
          </div>
        </section>

        <section className="flex min-w-0 flex-grow flex-col gap-3">
          <div className="flex items-center gap-3">
            <h2 className="m-0 flex-grow font-display text-[15px] font-bold tracking-[-0.01em] text-ink">
              Suas artes
            </h2>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => onFilesSelected(e.target.files)}
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={carregando}
              className="min-h-10 rounded-lg border border-[#D5CFE7] bg-surface px-3.5 text-xs font-semibold text-ink disabled:opacity-50"
            >
              {carregando ? "Carregando..." : "Enviar imagens"}
            </button>
          </div>

          {rascunhos.length === 0 ? (
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex flex-grow flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-[#C7D6E3] bg-surface text-ink-tertiary"
            >
              <svg width="32" height="32" viewBox="0 0 16 16" fill="none" stroke="#8FA6BA" strokeWidth={1.4} strokeLinecap="round" aria-hidden="true">
                <path d="M8 3.6v8.8M3.6 8h8.8" />
              </svg>
              <span className="text-sm font-semibold text-ink-secondary">
                Nenhuma arte enviada ainda
              </span>
              <span className="max-w-[36ch] text-center text-xs text-ink-tertiary">
                Clique aqui ou em &quot;Enviar imagens&quot; para adicionar as artes desta
                publicação.
              </span>
            </button>
          ) : (
            <>
              <div className="grid grid-cols-3 gap-3.5 overflow-y-auto">
                {rascunhos.map((r) => (
                  <div key={r.id} className="flex flex-col gap-2">
                    <div className="relative">
                      <button
                        onClick={() => toggleSelecionado(r.id)}
                        aria-label={r.selecionado ? "Remover seleção" : "Selecionar"}
                        className="block h-[200px] w-full cursor-pointer overflow-hidden rounded-xl border border-line bg-[#F1F5F9] p-0"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={r.imagemUrl} alt={r.titulo} className="h-full w-full object-cover" />
                      </button>
                      {r.selecionado && (
                        <>
                          <span className="pointer-events-none absolute -inset-[3px] rounded-[15px] border-[3px] border-primary" />
                          <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary">
                            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="#FFFFFF" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M3.6 8.4 6.4 11.2l6-6.4" />
                            </svg>
                          </span>
                        </>
                      )}
                      <button
                        onClick={() => removerRascunho(r.id)}
                        aria-label="Remover imagem"
                        className="absolute left-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(16,24,38,0.72)] text-white"
                      >
                        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
                          <path d="M4 4l8 8M12 4l-8 8" />
                        </svg>
                      </button>
                    </div>
                    <input
                      value={r.titulo}
                      onChange={(e) => atualizarTitulo(r.id, e.target.value)}
                      className="rounded-lg border border-line bg-surface px-2.5 py-2 text-xs text-ink"
                      placeholder="Título da publicação"
                    />
                    <select
                      value={r.tipo}
                      onChange={(e) => atualizarTipo(r.id, e.target.value as PostTipo)}
                      className="rounded-lg border border-line bg-surface px-2.5 py-2 text-xs text-ink"
                    >
                      {TIPOS.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-4 rounded-xl border border-line bg-surface px-[18px] py-3.5">
                <span className="flex flex-grow flex-col">
                  <span className="font-display text-[15px] font-bold tracking-[-0.01em] text-ink">
                    {selecionados} selecionada{selecionados === 1 ? "" : "s"}
                  </span>
                  <span className="text-xs text-ink-tertiary">
                    As aprovadas vão para o painel de aprovação e agenda
                  </span>
                </span>
                <button
                  onClick={descartarNaoSelecionados}
                  className="flex min-h-[44px] items-center rounded-[9px] border border-[#D5CFE7] bg-surface px-4 text-[13.5px] font-semibold text-ink"
                >
                  Descartar não selecionadas
                </button>
                <button
                  onClick={enviarParaAprovacao}
                  disabled={selecionados === 0}
                  className="flex min-h-[44px] items-center rounded-[9px] bg-primary px-[18px] text-[13.5px] font-semibold text-white hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Enviar para aprovação
                </button>
              </div>
            </>
          )}
        </section>
      </div>
    </>
  );
}
