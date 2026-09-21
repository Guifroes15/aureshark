import type { FeedGridCell } from "@/lib/data";

function ShoeGlyph({ fill = "#241C17", stroke = "#F7F1EA" }: { fill?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 120 64" className="h-auto w-[76px]" aria-hidden="true">
      <path
        d="M14 40C16 26 22 18 34 15c10-3 18-1 24 4l14 12c8 6 20 10 32 12 6 1 8 4 8 7v2c0 2-2 3-4 3H18c-4 0-8-3-8-8Z"
        fill={fill}
      />
      <path d="M11 48h101" stroke={stroke} strokeWidth={3} />
      <path d="M34 21l10 6M40 18l10 6M46 16l10 6" stroke={stroke} strokeWidth={2} />
    </svg>
  );
}

function ProdutoClaro() {
  return (
    <span className="flex h-full w-full flex-col items-center justify-between bg-[#F7F1EA] px-2.5 py-[11px]">
      <span className="font-mono text-[6.5px] font-semibold tracking-[0.22em] text-[#8A7360]">
        AURORA
      </span>
      <ShoeGlyph />
      <span className="text-center font-serif text-sm leading-[1.1] text-[#241C17]">
        Todo mundo tem um branco
      </span>
    </span>
  );
}

function FraseItalica() {
  return (
    <span className="flex h-full w-full items-center justify-center bg-[#C4553A] p-3">
      <span className="text-center font-serif text-[19px] italic leading-[1.04] text-[#FBF6F0]">
        O seu aguenta a semana?
      </span>
    </span>
  );
}

function FotoCalcada() {
  return (
    <span className="relative block h-full w-full overflow-hidden bg-[#E7D7C6]">
      <svg
        viewBox="0 0 100 112"
        className="absolute bottom-0 left-1/2 w-[92px] -ml-[46px]"
        aria-hidden="true"
      >
        <rect x="26" y="0" width="17" height="86" rx="8.5" fill="#C9AF95" />
        <rect x="56" y="0" width="17" height="86" rx="8.5" fill="#BFA286" />
        <path d="M12 88h30c9 0 15 5 15 11v5H16c-3 0-4-2-4-4Z" fill="#FBF7F2" />
        <path d="M48 88h30c9 0 15 5 15 11v5H52c-3 0-4-2-4-4Z" fill="#FFFFFF" />
      </svg>
      <span className="absolute bottom-[7px] left-2 font-mono text-[6.5px] font-semibold tracking-[0.18em] text-[#5E4A3A]">
        NA CALÇADA
      </span>
    </span>
  );
}

function Solado() {
  return (
    <span className="flex h-full w-full flex-col items-center justify-center gap-[7px] bg-[#241C17] p-3">
      <svg viewBox="0 0 120 90" className="w-[84px] opacity-85" aria-hidden="true">
        <ellipse cx="60" cy="46" rx="42" ry="32" fill="none" stroke="#4A3A2E" strokeWidth={3} />
        <ellipse cx="60" cy="46" rx="28" ry="20" fill="none" stroke="#5E4A3A" strokeWidth={3} />
        <path d="M26 30h68M22 46h76M26 62h68" stroke="#3A2E24" strokeWidth={4} />
      </svg>
      <span className="text-center font-serif text-[13px] leading-[1.1] text-[#F7F1EA]">
        Solado que não marca
      </span>
    </span>
  );
}

function GradeNumeracao() {
  const numeros = [34, 35, 36, 37, 38, 39, 40];
  return (
    <span className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#FBF7F2] p-3">
      <span className="font-serif text-sm text-[#241C17]">Do 34 ao 40</span>
      <span className="grid grid-cols-4 gap-1">
        {numeros.map((n) => (
          <span
            key={n}
            className={`flex h-[21px] w-[21px] items-center justify-center rounded-full font-serif text-[10px] ${
              n === 37 ? "bg-[#C4553A] text-[#FBF6F0]" : "bg-[#241C17] text-[#F7F1EA]"
            }`}
          >
            {n}
          </span>
        ))}
        <span className="flex h-[21px] w-[21px] items-center justify-center rounded-full border border-dashed border-[#C0AE9A] font-mono text-[7px] text-[#8A7360]">
          41
        </span>
      </span>
    </span>
  );
}

function Bastidor() {
  return (
    <span className="relative block h-full w-full overflow-hidden bg-[#E8B9AE]">
      <svg
        viewBox="0 0 80 100"
        className="absolute bottom-0 left-1/2 w-20 -ml-10"
        aria-hidden="true"
      >
        <circle cx="40" cy="34" r="17" fill="#C98376" />
        <path d="M8 100c0-21 14-34 32-34s32 13 32 34Z" fill="#D49488" />
      </svg>
      <span className="absolute bottom-[7px] left-2 font-mono text-[6.5px] font-semibold tracking-[0.18em] text-[#5E2F26]">
        BASTIDOR DE SÁBADO
      </span>
    </span>
  );
}

function Mocassim() {
  return (
    <span className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#E7D7C6] p-3">
      <ShoeGlyph fill="#8A5A46" stroke="#E7D7C6" />
      <span className="text-center font-serif text-sm leading-[1.1] text-[#3A2B22]">
        Look completo com mocassim
      </span>
    </span>
  );
}

function UltimaSemana() {
  return (
    <span className="relative flex h-full w-full items-end bg-[#C4553A] px-2.5 py-3">
      <span className="absolute left-2.5 top-3 font-mono text-[6.5px] font-semibold tracking-[0.18em] text-[#F5D3C6]">
        MEIA-ESTAÇÃO
      </span>
      <span className="font-serif text-xl leading-[1.02] text-[#FBF6F0]">Última semana</span>
    </span>
  );
}

function Depoimento() {
  return (
    <span className="relative block h-full w-full overflow-hidden bg-[#241C17]">
      <svg
        viewBox="0 0 80 100"
        className="absolute bottom-0 left-1/2 w-[78px] -ml-[39px]"
        aria-hidden="true"
      >
        <circle cx="40" cy="34" r="17" fill="#4A3A2E" />
        <path d="M8 100c0-21 14-34 32-34s32 13 32 34Z" fill="#3E3128" />
      </svg>
      <span className="absolute inset-x-2.5 top-3 text-center font-serif text-[13px] italic leading-[1.15] text-[#F7F1EA]">
        &ldquo;Uso todo dia há um mês&rdquo;
      </span>
      <span className="absolute bottom-[7px] left-2 font-mono text-[6.5px] font-semibold tracking-[0.18em] text-[#B09B84]">
        RAFA, CLIENTE
      </span>
    </span>
  );
}

const cells: Record<FeedGridCell, () => React.ReactElement> = {
  "produto-claro": ProdutoClaro,
  "frase-italica": FraseItalica,
  "foto-calcada": FotoCalcada,
  solado: Solado,
  "grade-numeracao": GradeNumeracao,
  bastidor: Bastidor,
  mocassim: Mocassim,
  "ultima-semana": UltimaSemana,
  depoimento: Depoimento,
};

export function FeedGridCellVisual({ cell }: { cell: FeedGridCell }) {
  const Cell = cells[cell];
  return <Cell />;
}
