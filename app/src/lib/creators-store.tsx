"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useStore } from "@/lib/store-provider";

export type CreatorManual = {
  id: string;
  nome: string;
  cidade: string;
  nichos: string[];
  contato: string;
  valorPorVideo: number;
  prazoDias: number;
  notas: string;
  criadoEm: number;
};

type NovoCreator = Omit<CreatorManual, "id" | "criadoEm">;

type CreatorsContextValue = {
  creators: CreatorManual[];
  hidratado: boolean;
  addCreator: (dados: NovoCreator) => void;
  atualizarCreator: (id: string, dados: Partial<NovoCreator>) => void;
  removerCreator: (id: string) => void;
};

const CreatorsContext = createContext<CreatorsContextValue | null>(null);

function storageKey(lojaId: string | null) {
  return `wlk-creative-creators-${lojaId ?? "sem-loja"}`;
}

export function CreatorsProvider({ children }: { children: React.ReactNode }) {
  const { lojaAtiva, hidratado: lojaHidratada } = useStore();
  const lojaId = lojaAtiva?.id ?? null;

  const [creators, setCreators] = useState<CreatorManual[]>([]);
  const [hidratado, setHidratado] = useState(false);
  const [lojaCarregadaId, setLojaCarregadaId] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    if (!lojaHidratada) return;
    try {
      const raw = window.localStorage.getItem(storageKey(lojaId));
      setCreators(raw ? JSON.parse(raw) : []);
    } catch {
      setCreators([]);
    }
    setLojaCarregadaId(lojaId);
    setHidratado(true);
  }, [lojaId, lojaHidratada]);

  useEffect(() => {
    if (!hidratado || lojaCarregadaId !== lojaId) return;
    try {
      window.localStorage.setItem(storageKey(lojaId), JSON.stringify(creators));
    } catch {
      // ignora falha de persistência
    }
  }, [creators, hidratado, lojaId, lojaCarregadaId]);

  function addCreator(dados: NovoCreator) {
    const novo: CreatorManual = { ...dados, id: `creator-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, criadoEm: Date.now() };
    setCreators((prev) => [...prev, novo]);
  }

  function atualizarCreator(id: string, dados: Partial<NovoCreator>) {
    setCreators((prev) => prev.map((c) => (c.id === id ? { ...c, ...dados } : c)));
  }

  function removerCreator(id: string) {
    setCreators((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <CreatorsContext.Provider value={{ creators, hidratado, addCreator, atualizarCreator, removerCreator }}>
      {children}
    </CreatorsContext.Provider>
  );
}

export function useCreators() {
  const ctx = useContext(CreatorsContext);
  if (!ctx) throw new Error("useCreators precisa estar dentro de CreatorsProvider");
  return ctx;
}
