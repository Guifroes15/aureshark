"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useStore } from "@/lib/store-provider";

export type EtapaCampanha =
  | "convidado"
  | "aceito"
  | "produto_enviado"
  | "gravando"
  | "entregue"
  | "aprovado_pago";

export const ETAPAS: { id: EtapaCampanha; label: string }[] = [
  { id: "convidado", label: "Convidado" },
  { id: "aceito", label: "Aceitou" },
  { id: "produto_enviado", label: "Produto enviado" },
  { id: "gravando", label: "Gravando" },
  { id: "entregue", label: "Vídeo entregue" },
  { id: "aprovado_pago", label: "Aprovado e pago" },
];

export type Campanha = {
  id: string;
  titulo: string;
  creatorId: string | null;
  creatorNome: string;
  valor: number;
  prazoDias: number;
  etapa: EtapaCampanha;
  criadoEm: number;
};

type NovaCampanha = {
  titulo: string;
  creatorId: string | null;
  creatorNome: string;
  valor: number;
  prazoDias: number;
};

type CampanhasContextValue = {
  campanhas: Campanha[];
  hidratado: boolean;
  addCampanha: (dados: NovaCampanha) => void;
  avancarEtapa: (id: string) => void;
  removerCampanha: (id: string) => void;
};

const CampanhasContext = createContext<CampanhasContextValue | null>(null);

function storageKey(lojaId: string | null) {
  return `wlk-creative-campanhas-${lojaId ?? "sem-loja"}`;
}

export function CampanhasProvider({ children }: { children: React.ReactNode }) {
  const { lojaAtiva, hidratado: lojaHidratada } = useStore();
  const lojaId = lojaAtiva?.id ?? null;

  const [campanhas, setCampanhas] = useState<Campanha[]>([]);
  const [hidratado, setHidratado] = useState(false);
  const [lojaCarregadaId, setLojaCarregadaId] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    if (!lojaHidratada) return;
    try {
      const raw = window.localStorage.getItem(storageKey(lojaId));
      setCampanhas(raw ? JSON.parse(raw) : []);
    } catch {
      setCampanhas([]);
    }
    setLojaCarregadaId(lojaId);
    setHidratado(true);
  }, [lojaId, lojaHidratada]);

  useEffect(() => {
    if (!hidratado || lojaCarregadaId !== lojaId) return;
    try {
      window.localStorage.setItem(storageKey(lojaId), JSON.stringify(campanhas));
    } catch {
      // ignora falha de persistência
    }
  }, [campanhas, hidratado, lojaId, lojaCarregadaId]);

  function addCampanha(dados: NovaCampanha) {
    const nova: Campanha = { ...dados, id: `campanha-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, etapa: "convidado", criadoEm: Date.now() };
    setCampanhas((prev) => [nova, ...prev]);
  }

  function avancarEtapa(id: string) {
    setCampanhas((prev) =>
      prev.map((c) => {
        if (c.id !== id) return c;
        const idx = ETAPAS.findIndex((e) => e.id === c.etapa);
        const proxima = ETAPAS[Math.min(idx + 1, ETAPAS.length - 1)];
        return { ...c, etapa: proxima.id };
      }),
    );
  }

  function removerCampanha(id: string) {
    setCampanhas((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <CampanhasContext.Provider value={{ campanhas, hidratado, addCampanha, avancarEtapa, removerCampanha }}>
      {children}
    </CampanhasContext.Provider>
  );
}

export function useCampanhas() {
  const ctx = useContext(CampanhasContext);
  if (!ctx) throw new Error("useCampanhas precisa estar dentro de CampanhasProvider");
  return ctx;
}
