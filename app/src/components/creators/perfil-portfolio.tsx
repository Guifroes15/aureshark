type PortfolioVideo = {
  tag: string;
  tempo: string;
  titulo: string;
  marca: string;
  visual: React.ReactElement;
};

function ShoeGlyph({ fill, stroke }: { fill: string; stroke: string }) {
  return (
    <svg viewBox="0 0 120 64" className="h-auto w-[104px]" aria-hidden="true">
      <path
        d="M14 40C16 26 22 18 34 15c10-3 18-1 24 4l14 12c8 6 20 10 32 12 6 1 8 4 8 7v2c0 2-2 3-4 3H18c-4 0-8-3-8-8Z"
        fill={fill}
      />
      <path d="M11 48h101" stroke={stroke} strokeWidth={3} />
    </svg>
  );
}

const ProvaReal = (
  <span className="relative block h-full overflow-hidden rounded-[15px] bg-[#E7D7C6]">
    <svg viewBox="0 0 100 112" className="absolute bottom-14 left-1/2 w-[156px] -ml-[78px]" aria-hidden="true">
      <rect x="26" y="0" width="17" height="86" rx="8.5" fill="#C9AF95" />
      <rect x="56" y="0" width="17" height="86" rx="8.5" fill="#BFA286" />
      <path d="M12 88h30c9 0 15 5 15 11v5H16c-3 0-4-2-4-4Z" fill="#FBF7F2" />
      <path d="M48 88h30c9 0 15 5 15 11v5H52c-3 0-4-2-4-4Z" fill="#FFFFFF" />
    </svg>
  </span>
);

const Unboxing = (
  <span className="relative block h-full overflow-hidden rounded-[15px] bg-[#F7F1EA]">
    <svg viewBox="0 0 120 90" className="absolute left-1/2 top-[74px] w-40 -ml-20" aria-hidden="true">
      <path d="M16 40h88v40a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4Z" fill="#C4553A" />
      <path d="M10 26h100v16H10Z" fill="#D9694D" />
      <path d="M46 26h28v16H46Z" fill="#F7F1EA" />
      <path d="M32 58h24M32 66h40" stroke="#F2C9C0" strokeWidth={3} />
    </svg>
  </span>
);

const Looks = (
  <span className="relative block h-full overflow-hidden rounded-[15px] bg-[#E8B9AE]">
    <span className="absolute inset-x-0 top-[60px] flex flex-col items-center gap-2.5">
      <ShoeGlyph fill="#FBF7F2" stroke="#E8B9AE" />
      <ShoeGlyph fill="#241C17" stroke="#E8B9AE" />
      <ShoeGlyph fill="#C4553A" stroke="#E8B9AE" />
    </span>
  </span>
);

const Depoimento = (
  <span className="relative block h-full overflow-hidden rounded-[15px] bg-[#241C17]">
    <svg viewBox="0 0 80 100" className="absolute bottom-14 left-1/2 w-[132px] -ml-[66px]" aria-hidden="true">
      <circle cx="40" cy="32" r="17" fill="#4A3A2E" />
      <path d="M8 100c0-21 14-34 32-34s32 13 32 34Z" fill="#3E3128" />
    </svg>
    <span className="absolute inset-x-3.5 top-[46px] font-serif text-[19px] italic leading-[1.16] text-[#F7F1EA]">
      &ldquo;Um mês de uso e continua branco&rdquo;
    </span>
  </span>
);

const Detalhe = (
  <span className="relative block h-full overflow-hidden rounded-[15px] bg-[#C4553A]">
    <svg viewBox="0 0 120 90" className="absolute left-1/2 top-[72px] w-[168px] -ml-[84px]" aria-hidden="true">
      <ellipse cx="60" cy="46" rx="48" ry="36" fill="none" stroke="#A8432C" strokeWidth={4} />
      <ellipse cx="60" cy="46" rx="34" ry="25" fill="none" stroke="#B94C33" strokeWidth={4} />
      <ellipse cx="60" cy="46" rx="20" ry="14" fill="none" stroke="#D3705A" strokeWidth={4} />
      <path d="M16 28h88M10 46h100M16 64h88" stroke="#A8432C" strokeWidth={5} />
    </svg>
  </span>
);

const Comparativo = (
  <span className="relative block h-full overflow-hidden rounded-[15px]">
    <span className="absolute inset-x-0 top-0 flex h-[127px] items-center justify-center bg-[#F7F1EA]">
      <svg viewBox="0 0 120 64" className="w-[116px]" aria-hidden="true">
        <path
          d="M14 40C16 26 22 18 34 15c10-3 18-1 24 4l14 12c8 6 20 10 32 12 6 1 8 4 8 7v2c0 2-2 3-4 3H18c-4 0-8-3-8-8Z"
          fill="#FFFFFF"
          stroke="#CFC0AE"
          strokeWidth={3}
        />
        <path d="M11 48h101" stroke="#CFC0AE" strokeWidth={3} />
      </svg>
    </span>
    <span className="absolute inset-x-0 top-[127px] flex h-[127px] items-center justify-center bg-[#E7D7C6]">
      <svg viewBox="0 0 120 64" className="w-[116px]" aria-hidden="true">
        <path
          d="M14 40C16 26 22 18 34 15c10-3 18-1 24 4l14 12c8 6 20 10 32 12 6 1 8 4 8 7v2c0 2-2 3-4 3H18c-4 0-8-3-8-8Z"
          fill="#8A5A46"
        />
        <path d="M11 48h101" stroke="#E7D7C6" strokeWidth={3} />
      </svg>
    </span>
  </span>
);

export const portfolioVideos: PortfolioVideo[] = [
  { tag: "PROVA REAL", tempo: "0:28", titulo: "Calço e ando na rua", marca: "Loja de calçados · BH", visual: ProvaReal },
  { tag: "UNBOXING", tempo: "0:41", titulo: "Unboxing sem corte", marca: "Marca de tênis", visual: Unboxing },
  { tag: "LOOKS", tempo: "0:19", titulo: "Três jeitos de usar", marca: "Loja de moda", visual: Looks },
  { tag: "DEPOIMENTO", tempo: "0:34", titulo: "Depois de 30 dias de uso", marca: "Marca de tênis", visual: Depoimento },
  { tag: "DETALHE", tempo: "0:22", titulo: "Close no solado", marca: "Loja de calçados · BH", visual: Detalhe },
  { tag: "COMPARATIVO", tempo: "0:47", titulo: "Comparando dois modelos", marca: "Loja de moda", visual: Comparativo },
];

export function PortfolioCard({ video }: { video: PortfolioVideo }) {
  return (
    <span className="block rounded-[20px] border-[3px] border-primary bg-surface p-1">
      <span className="relative block h-[310px] overflow-hidden rounded-[15px]">
        {video.visual}
        <span className="absolute left-[9px] top-[9px] rounded-[4px] bg-primary px-[7px] py-[3px] font-mono text-[9.5px] font-semibold tracking-[0.06em] text-white">
          {video.tag}
        </span>
        <span className="absolute right-[9px] top-[9px] rounded-[4px] bg-[rgba(16,24,38,0.82)] px-1.5 py-[3px] font-mono text-[10px] font-semibold text-white">
          {video.tempo}
        </span>
        <span className="absolute inset-x-0 bottom-0 flex flex-col gap-[3px] border-t border-line bg-surface p-[11px]">
          <span className="text-[12.5px] font-semibold text-ink">{video.titulo}</span>
          <span className="text-[11px] text-ink-tertiary">{video.marca}</span>
        </span>
      </span>
    </span>
  );
}
