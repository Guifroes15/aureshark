"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Loja = {
  id: string;
  nome: string;
  instagramHandle: string;
  logoUrl: string;
  criadoEm: number;
};

type NovaLoja = {
  nome: string;
  instagramHandle: string;
  logoUrl: string;
};

type StoreContextValue = {
  lojas: Loja[];
  lojaAtiva: Loja | null;
  hidratado: boolean;
  criarLoja: (dados: NovaLoja) => void;
  atualizarLoja: (id: string, dados: Partial<NovaLoja>) => void;
  removerLoja: (id: string) => void;
  selecionarLoja: (id: string) => void;
};

const StoreContext = createContext<StoreContextValue | null>(null);

const LOJAS_KEY = "wlk-creative-lojas";
const LOJA_ATIVA_KEY = "wlk-creative-loja-ativa";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [lojas, setLojas] = useState<Loja[]>([]);
  const [lojaAtivaId, setLojaAtivaId] = useState<string | null>(null);
  const [hidratado, setHidratado] = useState(false);

  useEffect(() => {
    try {
      const rawLojas = window.localStorage.getItem(LOJAS_KEY);
      const rawAtiva = window.localStorage.getItem(LOJA_ATIVA_KEY);
      const lojasCarregadas: Loja[] = rawLojas ? JSON.parse(rawLojas) : [];
      setLojas(lojasCarregadas);
      const ativa = rawAtiva && lojasCarregadas.some((l) => l.id === rawAtiva) ? rawAtiva : lojasCarregadas[0]?.id ?? null;
      setLojaAtivaId(ativa);
    } catch {
      // localStorage indisponível
    }
    setHidratado(true);
  }, []);

  useEffect(() => {
    if (!hidratado) return;
    try {
      window.localStorage.setItem(LOJAS_KEY, JSON.stringify(lojas));
    } catch {
      // ignora falha de persistência
    }
  }, [lojas, hidratado]);

  useEffect(() => {
    if (!hidratado) return;
    try {
      if (lojaAtivaId) window.localStorage.setItem(LOJA_ATIVA_KEY, lojaAtivaId);
    } catch {
      // ignora falha de persistência
    }
  }, [lojaAtivaId, hidratado]);

  function criarLoja(dados: NovaLoja) {
    const nova: Loja = { ...dados, id: `loja-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, criadoEm: Date.now() };
    setLojas((prev) => [...prev, nova]);
    setLojaAtivaId(nova.id);
  }

  function atualizarLoja(id: string, dados: Partial<NovaLoja>) {
    setLojas((prev) => prev.map((l) => (l.id === id ? { ...l, ...dados } : l)));
  }

  function removerLoja(id: string) {
    setLojas((prev) => {
      const restante = prev.filter((l) => l.id !== id);
      if (lojaAtivaId === id) setLojaAtivaId(restante[0]?.id ?? null);
      return restante;
    });
    try {
      window.localStorage.removeItem(`wlk-creative-posts-${id}`);
    } catch {
      // ignora
    }
  }

  function selecionarLoja(id: string) {
    setLojaAtivaId(id);
  }

  const lojaAtiva = lojas.find((l) => l.id === lojaAtivaId) ?? null;

  return (
    <StoreContext.Provider
      value={{ lojas, lojaAtiva, hidratado, criarLoja, atualizarLoja, removerLoja, selecionarLoja }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore precisa estar dentro de StoreProvider");
  return ctx;
}
