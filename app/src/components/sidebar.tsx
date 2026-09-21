"use client";

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
  GridStackIcon,
  HomeIcon,
  SparkleIcon,
  UsersIcon,
} from "@/components/icons";

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
      { label: "Planejamento", href: "#", icon: CalendarIcon },
    ],
  },
  {
    label: "SOCIAL MEDIA",
    items: [
      { label: "Gerar publicações", href: "/gerar", icon: SparkleIcon },
      { label: "Modelos", href: "/modelos", icon: GridStackIcon },
      { label: "Aprovadas e agenda", href: "/aprovados", icon: CheckSquareIcon },
      { label: "Prévia do feed", href: "/feed", icon: GridFeedIcon },
      { label: "Métricas", href: "/metricas", icon: BarsIcon },
    ],
  },
  {
    label: "UGC",
    items: [
      { label: "Descobrir creators", href: "/creators", icon: UsersIcon },
      { label: "Minhas campanhas", href: "/campanha", icon: BriefcaseIcon },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-[250px] flex-shrink-0 flex-col gap-[22px] border-r border-line bg-sidebar-bg px-[14px] py-5">
      <div className="flex items-center gap-2.5 px-2 py-1">
        <Image
          src="/logo-wlk-creative.jpg"
          alt="WLK Creative"
          width={902}
          height={902}
          className="block h-auto w-11"
          priority
        />
        <span className="flex flex-col leading-tight">
          <span className="font-display text-[13.5px] font-bold tracking-[-0.01em] text-ink">
            WLK
          </span>
          <span className="font-mono text-[9px] font-semibold tracking-[0.18em] text-ink-tertiary">
            CREATIVE
          </span>
        </span>
      </div>

      <nav className="flex flex-col gap-[18px]">
        {groups.map((group) => (
          <div key={group.label} className="flex flex-col gap-0.5">
            <span className="px-2.5 pb-1.5 font-mono text-[9.5px] font-semibold tracking-[0.14em] text-ink-tertiary">
              {group.label}
            </span>
            {group.items.map((item) => {
              const active = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex min-h-[44px] items-center gap-2.5 rounded-[9px] px-2.5 text-[13.5px] no-underline ${
                    active
                      ? "bg-sidebar-active font-semibold text-primary"
                      : "font-normal text-sidebar-text hover:bg-[#F2F7FC] hover:text-primary"
                  }`}
                >
                  <Icon className="shrink-0" />
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
          className="flex min-h-[44px] items-center gap-[9px] rounded-[9px] border border-line px-3 text-[12.5px] font-medium text-ink-secondary no-underline"
        >
          <ExternalArrowIcon className="h-[15px] w-[15px] shrink-0" />
          Portal do creator
        </Link>
        <div className="flex items-center gap-2.5 border-t border-line p-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-display text-[12.5px] font-bold text-white">
            AC
          </span>
          <span className="flex flex-grow flex-col">
            <span className="text-[12.5px] font-semibold text-ink">Aurora Calçados</span>
            <span className="text-[11px] text-ink-tertiary">Plano Completo</span>
          </span>
        </div>
      </div>
    </aside>
  );
}
