"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useStore } from "@/lib/store-provider";

export type PostStatus = "aguardando" | "agendada" | "publicada";
export type PostTipo = "Estático" | "Carrossel" | "Vídeo";

export type Post = {
  id: string;
  titulo: string;
  imagemUrl: string;
  tipo: PostTipo;
  status: PostStatus;
  quando: string;
  rede: string;
  criadoEm: number;
};

const DIAS_SEMANA = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];

export function formatarQuando(valor: string): string {
  if (!valor) return "Data a definir";
  const data = new Date(valor);
  if (Number.isNaN(data.getTime())) return valor;
  const dia = DIAS_SEMANA[data.getDay()];
  const d = String(data.getDate()).padStart(2, "0");
  const m = String(data.getMonth() + 1).padStart(2, "0");
  const h = String(data.getHours()).padStart(2, "0");
  const min = String(data.getMinutes()).padStart(2, "0");
  return `${dia}, ${d}/${m} às ${h}h${min}`;
}

type NovoPost = {
  titulo: string;
  imagemUrl: string;
  tipo: PostTipo;
};

type PostsContextValue = {
  posts: Post[];
  hidratado: boolean;
  addPosts: (novos: NovoPost[]) => void;
  aprovarPost: (id: string, quando?: string, rede?: string) => void;
  aprovarTodos: () => void;
  removerPost: (id: string) => void;
  reordenarAgendadas: (origemId: string, destinoId: string) => void;
};

const PostsContext = createContext<PostsContextValue | null>(null);

function storageKey(lojaId: string | null) {
  return `wlk-creative-posts-${lojaId ?? "sem-loja"}`;
}

export function PostsProvider({ children }: { children: React.ReactNode }) {
  const { lojaAtiva, hidratado: lojaHidratada } = useStore();
  const lojaId = lojaAtiva?.id ?? null;

  const [posts, setPosts] = useState<Post[]>([]);
  const [hidratado, setHidratado] = useState(false);
  const [lojaCarregadaId, setLojaCarregadaId] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    if (!lojaHidratada) return;
    try {
      const raw = window.localStorage.getItem(storageKey(lojaId));
      setPosts(raw ? JSON.parse(raw) : []);
    } catch {
      setPosts([]);
    }
    setLojaCarregadaId(lojaId);
    setHidratado(true);
  }, [lojaId, lojaHidratada]);

  useEffect(() => {
    if (!hidratado || lojaCarregadaId !== lojaId) return;
    try {
      window.localStorage.setItem(storageKey(lojaId), JSON.stringify(posts));
    } catch {
      // quota excedida ou indisponível — ignora persistência
    }
  }, [posts, hidratado, lojaId, lojaCarregadaId]);

  function addPosts(novos: NovoPost[]) {
    const agora = Date.now();
    setPosts((prev) => [
      ...prev,
      ...novos.map((n, i) => ({
        ...n,
        id: `${agora}-${i}-${Math.random().toString(36).slice(2, 8)}`,
        status: "aguardando" as PostStatus,
        quando: "",
        rede: "IG",
        criadoEm: agora + i,
      })),
    ]);
  }

  function aprovarPost(id: string, quando = "Data a definir", rede = "IG") {
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: "agendada", quando, rede } : p)),
    );
  }

  function aprovarTodos() {
    setPosts((prev) =>
      prev.map((p) =>
        p.status === "aguardando" ? { ...p, status: "agendada", quando: p.quando || "Data a definir" } : p,
      ),
    );
  }

  function removerPost(id: string) {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  }

  function reordenarAgendadas(origemId: string, destinoId: string) {
    setPosts((prev) => {
      const agendadas = prev.filter((p) => p.status === "agendada");
      const resto = prev.filter((p) => p.status !== "agendada");
      const from = agendadas.findIndex((p) => p.id === origemId);
      const to = agendadas.findIndex((p) => p.id === destinoId);
      if (from === -1 || to === -1) return prev;
      const reordenadas = [...agendadas];
      const [moved] = reordenadas.splice(from, 1);
      reordenadas.splice(to, 0, moved);
      return [...resto, ...reordenadas];
    });
  }

  return (
    <PostsContext.Provider
      value={{ posts, hidratado, addPosts, aprovarPost, aprovarTodos, removerPost, reordenarAgendadas }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  const ctx = useContext(PostsContext);
  if (!ctx) throw new Error("usePosts precisa estar dentro de PostsProvider");
  return ctx;
}
