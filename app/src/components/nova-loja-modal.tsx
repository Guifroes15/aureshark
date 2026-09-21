"use client";

import { useRef, useState } from "react";
import { useStore } from "@/lib/store-provider";
import { resizeImageToDataUrl } from "@/lib/image-utils";

export default function NovaLojaModal({ onClose }: { onClose: () => void }) {
  const { criarLoja } = useStore();
  const [nome, setNome] = useState("");
  const [instagramHandle, setInstagramHandle] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [erro, setErro] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function onLogoSelected(files: FileList | null) {
    const file = files?.[0];
    if (!file) return;
    const url = await resizeImageToDataUrl(file, 200, 0.85);
    setLogoUrl(url);
  }

  function criar() {
    if (!nome.trim()) {
      setErro("Dê um nome pra loja.");
      return;
    }
    criarLoja({ nome: nome.trim(), instagramHandle: instagramHandle.trim().replace(/^@/, ""), logoUrl });
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 px-4">
      <div className="flex w-full max-w-[420px] flex-col gap-4 rounded-2xl border border-line bg-surface p-6">
        <div className="flex items-center gap-2.5">
          <h2 className="m-0 flex-grow font-display text-lg font-bold text-ink">Nova loja</h2>
          <button onClick={onClose} aria-label="Fechar" className="flex h-8 w-8 items-center justify-center rounded-full text-ink-tertiary hover:bg-app">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
              <path d="M4 4l8 8M12 4l-8 8" />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-3.5">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-[#C7D6E3] bg-app text-ink-tertiary"
          >
            {logoUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={logoUrl} alt="Logo da loja" className="h-full w-full object-cover" />
            ) : (
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#8FA6BA" strokeWidth={1.4} strokeLinecap="round" aria-hidden="true">
                <path d="M8 3.6v8.8M3.6 8h8.8" />
              </svg>
            )}
          </button>
          <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={(e) => onLogoSelected(e.target.files)} />
          <span className="text-xs text-ink-tertiary">Logo (opcional)</span>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="nl-nome" className="text-[12.5px] font-semibold text-ink-secondary">
            Nome da loja
          </label>
          <input
            id="nl-nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Ex: Loja da Maria"
            className="min-h-[46px] rounded-[9px] border border-[#D5CFE7] px-3 text-[13.5px] text-ink"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="nl-insta" className="text-[12.5px] font-semibold text-ink-secondary">
            @ do Instagram
          </label>
          <input
            id="nl-insta"
            value={instagramHandle}
            onChange={(e) => setInstagramHandle(e.target.value)}
            placeholder="@sua_loja"
            className="min-h-[46px] rounded-[9px] border border-[#D5CFE7] px-3 text-[13.5px] text-ink"
          />
        </div>

        {erro && <p className="m-0 text-[13px] font-semibold text-danger">{erro}</p>}

        <button onClick={criar} className="min-h-[46px] rounded-[9px] bg-primary text-[13.5px] font-semibold text-white hover:bg-primary-hover">
          Criar loja
        </button>
      </div>
    </div>
  );
}
