"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalArrowIcon } from "@/components/icons";

type NavItem = {
  label: string;
  href: string;
  badge?: string;
  icon: React.ReactElement;
};

const NAV: NavItem[] = [
  {
    label: "Início",
    href: "/painel-creator",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2.5 7.2 8 2.8l5.5 4.4V13a.6.6 0 0 1-.6.6H3.1a.6.6 0 0 1-.6-.6Z" />
      </svg>
    ),
  },
  {
    label: "Convites",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2.4 4.2h11.2v7.6H2.4Z" />
        <path d="M2.4 4.2 8 8.6l5.6-4.4" />
      </svg>
    ),
  },
  {
    label: "Minhas entregas",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2.4" y="3.2" width="11.2" height="9.6" rx="1.6" />
        <path d="M6.6 6.6 9.8 8 6.6 9.4Z" />
      </svg>
    ),
  },
  {
    label: "Meu portfólio",
    href: "/creators/perfil",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" aria-hidden="true">
        <rect x="2.4" y="2.4" width="4.8" height="4.8" rx="1" />
        <rect x="8.8" y="2.4" width="4.8" height="4.8" rx="1" />
        <rect x="2.4" y="8.8" width="4.8" height="4.8" rx="1" />
        <rect x="8.8" y="8.8" width="4.8" height="4.8" rx="1" />
      </svg>
    ),
  },
  {
    label: "Ganhos",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" aria-hidden="true">
        <circle cx="8" cy="8" r="5.6" />
        <path d="M9.8 6.2c-.5-.6-1.2-.9-1.9-.9-1 0-1.6.5-1.6 1.2 0 .8.7 1 1.7 1.2 1.2.2 1.9.5 1.9 1.4 0 .8-.7 1.4-1.9 1.4-.8 0-1.6-.3-2.1-1M8 4.2v7.6" />
      </svg>
    ),
  },
  {
    label: "Meu perfil",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" aria-hidden="true">
        <circle cx="8" cy="5.8" r="2.8" />
        <path d="M3 13.4c0-2.4 2.2-4 5-4s5 1.6 5 4" />
      </svg>
    ),
  },
];

export default function CreatorSidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

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
        <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-sidebar-muted">
          PORTAL DO CREATOR
        </span>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[250px] flex-shrink-0 flex-col gap-[22px] bg-sidebar-bg px-[14px] py-5 transition-transform duration-200 lg:static lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-1.5 px-2 py-1">
          <Image
            src="/logo-wlk-creative.jpg"
            alt="WLK Creative"
            width={902}
            height={902}
            className="block h-auto w-11 rounded-full"
            priority
          />
          <span className="pl-0.5 font-mono text-[9px] font-semibold tracking-[0.14em] text-sidebar-muted">
            PORTAL DO CREATOR
          </span>
        </div>

        <nav className="flex flex-col gap-0.5 overflow-y-auto">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex min-h-[44px] items-center gap-2.5 rounded-[9px] px-2.5 text-[13.5px] no-underline ${
                  active
                    ? "bg-sidebar-active font-semibold text-white"
                    : "font-normal text-sidebar-text hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="text-accent">{item.icon}</span>
                <span className="flex-grow">{item.label}</span>
                {item.badge && (
                  <span className="rounded-full bg-accent px-1.5 py-0.5 font-mono text-[10px] font-semibold text-white">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto flex flex-col gap-3">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex min-h-[44px] items-center gap-[9px] rounded-[9px] border border-white/15 px-3 text-[12.5px] font-medium text-sidebar-text no-underline"
          >
            <ExternalArrowIcon className="h-[15px] w-[15px] shrink-0" />
            Ver o lado da loja
          </Link>
          <div className="flex items-center gap-2.5 border-t border-white/10 p-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-accent">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" aria-hidden="true">
                <circle cx="8" cy="5.8" r="2.8" />
                <path d="M3 13.4c0-2.4 2.2-4 5-4s5 1.6 5 4" />
              </svg>
            </span>
            <span className="flex flex-grow flex-col">
              <span className="text-[12.5px] font-semibold text-white">Meu perfil</span>
              <span className="text-[11px] text-sidebar-muted">Cadastro incompleto</span>
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}
