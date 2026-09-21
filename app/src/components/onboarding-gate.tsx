"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useStore } from "@/lib/store-provider";
import { resizeImageToDataUrl } from "@/lib/image-utils";

export default function OnboardingGate({ children }: { children: React.ReactNode }) {
  const { lojas, hidratado, criarLoja } = useStore();
  const [nome, setNome] = useState("");
  const [instagramHandle, setInstagramHandle] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [erro, setErro] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!hidratado) return null;
  if (lojas.length > 0) return <>{children}</>;

  async function onLogoSelected(files: FileList | null) {
    const file = files?.[0];
    if (!file) return;
    const url = await resizeImageToDataUrl(file, 200, 0.85);
    setLogoUrl(url);
  }

  function criar() {
    if (!nome.trim()) {
      setErro("Dê um nome pra sua loja.");
      return;
    }
    setErro("");
    criarLoja({
      nome: nome.trim(),
      instagramHandle: instagramHandle.trim().replace(/^@/, ""),
      logoUrl,
    });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-app px-4">
      <div className="flex w-full max-w-[480px] flex-col gap-5 rounded-2xl border border-line bg-surface p-8">
        <Image src="/logo-wlk-creative.jpg" alt="WLK Creative" width={56} height={56} className="h-14 w-14 rounded-full" />
        <div className="flex flex-col gap-1.5">
          <h1 className="m-0 font-display text-xl font-bold text-ink">Configure sua loja</h1>
          <p className="m-0 text-sm text-ink-secondary">
            Leva menos de um minuto. Você pode editar isso depois.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-[#C7D6E3] bg-app text-ink-tertiary"
          >
            {logoUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={logoUrl} alt="Logo da loja" className="h-full w-full object-cover" />
            ) : (
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#8FA6BA" strokeWidth={1.4} strokeLinecap="round" aria-hidden="true">
                <path d="M8 3.6v8.8M3.6 8h8.8" />
              </svg>
            )}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => onLogoSelected(e.target.files)}
          />
          <span className="text-xs text-ink-tertiary">
            Envie o logo da loja (opcional)
          </span>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="ob-nome" className="text-[12.5px] font-semibold text-ink-secondary">
            Nome da loja
          </label>
          <input
            id="ob-nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Ex: Loja da Maria"
            className="min-h-[46px] rounded-[9px] border border-[#D5CFE7] px-3 text-[13.5px] text-ink"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="ob-insta" className="text-[12.5px] font-semibold text-ink-secondary">
            @ do Instagram (opcional por enquanto)
          </label>
          <input
            id="ob-insta"
            value={instagramHandle}
            onChange={(e) => setInstagramHandle(e.target.value)}
            placeholder="@sua_loja"
            className="min-h-[46px] rounded-[9px] border border-[#D5CFE7] px-3 text-[13.5px] text-ink"
          />
        </div>

        {erro && <p className="m-0 text-[13px] font-semibold text-danger">{erro}</p>}

        <button
          onClick={criar}
          className="min-h-[48px] rounded-[10px] bg-primary text-[14px] font-semibold text-white hover:bg-primary-hover"
        >
          Começar
        </button>
      </div>
    </div>
  );
}
