"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckSquareIcon,
  BarsIcon,
  ExternalArrowIcon,
  GridFeedIcon,
  HomeIcon,
  SparkleIcon,
  UsersIcon,
} from "@/components/icons";
import { useStore } from "@/lib/store-provider";
import NovaLojaModal from "@/components/nova-loja-modal";

type NavItem = {
  label: string;
  href: string;
  icon: (props: { className?: string }) => React.ReactElement;
};

type NavGroup = {
  label: string;
  items: NavItem[];
};

const groups: NavGroup[] = [
  {
    label: "GERAL",
    items: [
      { label: "Início", href: "/", icon: HomeIcon },
      { label: "Planejamento", href: "/planejamento", icon: CalendarIcon },
    ],
  },
  {
    label: "SOCIAL MEDIA",
    items: [
      { label: "Gerar publicações", href: "/gerar", icon: SparkleIcon },
      { label: "Aprovadas e agenda", href: "/aprovados", icon: CheckSquareIcon },
      { label: "Prévia do feed", href: "/feed", icon: GridFeedIcon },
      { label: "Métricas", href: "/metricas", icon: BarsIcon },
    ],
  },
  {
    label: "UGC",
    items: [
      { label: "Meus creators", href: "/creators", icon: UsersIcon },
      { label: "Minhas campanhas", href: "/campanha", icon: BriefcaseIcon },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { lojas, lojaAtiva, selecionarLoja } = useStore();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [switcherOpen, setSwitcherOpen] = useState(false);
  const [novaLojaOpen, setNovaLojaOpen] = useState(false);

  function fecharMobile() {
    setMobileOpen(false);
  }

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-30 flex h-14 items-center gap-3 border-b border-white/10 bg-sidebar-bg px-4 lg:hidden">
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Abrir menu"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-sidebar-text"
        >
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" aria-hidden="true">
            <path d="M2.4 4.4h11.2M2.4 8h11.2M2.4 11.6h11.2" />
          </svg>
        </button>
        <Image src="/logo-wlk-creative.jpg" alt="WLK Creative" width={902} height={902} className="h-8 w-8 rounded-full" priority />
        <span className="font-display text-[13.5px] font-bold text-white">WLK Creative</span>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[250px] flex-shrink-0 flex-col gap-[22px] bg-sidebar-bg px-[14px] py-5 transition-transform duration-200 lg:static lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center gap-2.5 px-2 py-1">
          <Image
            src="/logo-wlk-creative.jpg"
            alt="WLK Creative"
            width={902}
            height={902}
            className="block h-auto w-11 rounded-full"
            priority
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-[13.5px] font-bold tracking-[-0.01em] text-white">
              WLK
            </span>
            <span className="font-mono text-[9px] font-semibold tracking-[0.18em] text-sidebar-muted">
              CREATIVE
            </span>
          </span>
        </div>

        <nav className="flex flex-col gap-[18px] overflow-y-auto">
          {groups.map((group) => (
            <div key={group.label} className="flex flex-col gap-0.5">
              <span className="px-2.5 pb-1.5 font-mono text-[9.5px] font-semibold tracking-[0.14em] text-sidebar-muted">
                {group.label}
              </span>
              {group.items.map((item) => {
                const active = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={fecharMobile}
                    className={`flex min-h-[44px] items-center gap-2.5 rounded-[9px] px-2.5 text-[13.5px] no-underline ${
                      active
                        ? "bg-sidebar-active font-semibold text-white"
                        : "font-normal text-sidebar-text hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span className="shrink-0 text-accent">
                      <Icon className="shrink-0" />
                    </span>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-3">
          <Link
            href="/seja-creator"
            onClick={fecharMobile}
            className="flex min-h-[44px] items-center gap-[9px] rounded-[9px] border border-white/15 px-3 text-[12.5px] font-medium text-sidebar-text no-underline"
          >
            <ExternalArrowIcon className="h-[15px] w-[15px] shrink-0" />
            Portal do creator
          </Link>

          <div className="relative">
            <button
              onClick={() => setSwitcherOpen((v) => !v)}
              className="flex w-full items-center gap-2.5 rounded-[9px] border-t border-white/10 p-2 pt-3 text-left"
            >
              {lojaAtiva?.logoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={lojaAtiva.logoUrl} alt={lojaAtiva.nome} className="h-8 w-8 flex-shrink-0 rounded-full object-cover" />
              ) : (
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-accent">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2.4 6.6 8 2.8l5.6 3.8v6.4a.6.6 0 0 1-.6.6H3a.6.6 0 0 1-.6-.6Z" />
                    <path d="M6 13.6V9.4h4v4.2" />
                  </svg>
                </span>
              )}
              <span className="flex min-w-0 flex-grow flex-col">
                <span className="truncate text-[12.5px] font-semibold text-white">
                  {lojaAtiva?.nome ?? "Minha loja"}
                </span>
                <span className="truncate text-[11px] text-sidebar-muted">
                  {lojaAtiva?.instagramHandle ? `@${lojaAtiva.instagramHandle}` : "Conectar Instagram"}
                </span>
              </span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-sidebar-muted" aria-hidden="true">
                <path d="M4.4 6.4 8 10l3.6-3.6" />
              </svg>
            </button>

            {switcherOpen && (
              <div className="absolute bottom-full left-0 z-10 mb-2 w-full rounded-xl border border-line bg-surface p-1.5 shadow-lg">
                {lojas.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => {
                      selecionarLoja(l.id);
                      setSwitcherOpen(false);
                    }}
                    className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[13px] ${
                      l.id === lojaAtiva?.id ? "bg-tint font-semibold text-tint-fg" : "text-ink hover:bg-app"
                    }`}
                  >
                    {l.logoUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={l.logoUrl} alt={l.nome} className="h-6 w-6 flex-shrink-0 rounded-full object-cover" />
                    ) : (
                      <span className="h-6 w-6 flex-shrink-0 rounded-full bg-tint" />
                    )}
                    <span className="truncate">{l.nome}</span>
                  </button>
                ))}
                <button
                  onClick={() => {
                    setSwitcherOpen(false);
                    setNovaLojaOpen(true);
                  }}
                  className="mt-1 flex w-full items-center gap-2.5 rounded-lg border-t border-line px-2.5 py-2 pt-2.5 text-left text-[13px] font-semibold text-primary"
                >
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-tint">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
                      <path d="M8 3.6v8.8M3.6 8h8.8" />
                    </svg>
                  </span>
                  Nova loja
                </button>
              </div>
            )}
          </div>
        </div>
      </aside>

      {novaLojaOpen && <NovaLojaModal onClose={() => setNovaLojaOpen(false)} />}
    </>
  );
}
