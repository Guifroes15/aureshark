function Duracao({ children }: { children: string }) {
  return (
    <span className="absolute bottom-[5px] left-[5px] rounded-[3px] bg-[rgba(16,24,38,0.82)] px-[5px] py-[2px] font-mono text-[8.5px] font-semibold text-white">
      {children}
    </span>
  );
}

export default function PortfolioPreview() {
  return (
    <div className="grid grid-cols-3 gap-[7px]">
      <span className="block rounded-xl border-2 border-primary bg-surface p-0.5">
        <span className="relative block h-24 overflow-hidden rounded-[9px] bg-[#E7D7C6]">
          <svg viewBox="0 0 100 112" className="absolute bottom-0 left-1/2 w-[88px] -ml-11" aria-hidden="true">
            <rect x="26" y="0" width="17" height="86" rx="8.5" fill="#C9AF95" />
            <rect x="56" y="0" width="17" height="86" rx="8.5" fill="#BFA286" />
            <path d="M12 88h30c9 0 15 5 15 11v5H16c-3 0-4-2-4-4Z" fill="#FBF7F2" />
            <path d="M48 88h30c9 0 15 5 15 11v5H52c-3 0-4-2-4-4Z" fill="#FFFFFF" />
          </svg>
          <Duracao>0:28</Duracao>
        </span>
      </span>
      <span className="block rounded-xl border-2 border-primary bg-surface p-0.5">
        <span className="relative block h-24 overflow-hidden rounded-[9px] bg-[#241C17]">
          <svg viewBox="0 0 80 100" className="absolute bottom-0 left-1/2 w-[72px] -ml-9" aria-hidden="true">
            <circle cx="40" cy="32" r="17" fill="#4A3A2E" />
            <path d="M8 100c0-21 14-34 32-34s32 13 32 34Z" fill="#3E3128" />
          </svg>
          <Duracao>0:41</Duracao>
        </span>
      </span>
      <span className="block rounded-xl border-2 border-primary bg-surface p-0.5">
        <span className="relative flex h-24 items-center justify-center overflow-hidden rounded-[9px] bg-[#F7F1EA]">
          <svg width="76" height="41" viewBox="0 0 120 64" aria-hidden="true">
            <path
              d="M14 40C16 26 22 18 34 15c10-3 18-1 24 4l14 12c8 6 20 10 32 12 6 1 8 4 8 7v2c0 2-2 3-4 3H18c-4 0-8-3-8-8Z"
              fill="#C4553A"
            />
            <path d="M11 48h101" stroke="#F7F1EA" strokeWidth={3} />
          </svg>
          <Duracao>0:19</Duracao>
        </span>
      </span>
    </div>
  );
}
