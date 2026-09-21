import type { ArteTemplate } from "@/lib/data";

function ShoeGlyph({ stroke = "#F7F1EA", fill = "#241C17" }: { stroke?: string; fill?: string }) {
  return (
    <svg width="140" height="76" viewBox="0 0 120 64" aria-hidden="true">
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
    <span className="flex h-full w-full flex-col items-center justify-between bg-[#F7F1EA] px-3.5 py-4">
      <span className="font-mono text-[8.5px] font-semibold tracking-[0.24em] text-[#8A7360]">
        AURORA CALÇADOS
      </span>
      <ShoeGlyph />
      <span className="text-center font-serif text-[25px] leading-[1.12] text-[#241C17]">
        Todo mundo tem um branco
      </span>
    </span>
  );
}

function FotoRodape() {
  return (
    <span className="relative flex h-full w-full flex-col bg-[#E7D7C6]">
      <span className="absolute inset-x-0 top-0 flex h-[176px] items-end justify-center overflow-hidden">
        <svg width="150" height="168" viewBox="0 0 100 112" aria-hidden="true">
          <rect x="26" y="0" width="17" height="86" rx="8.5" fill="#C9AF95" />
          <rect x="56" y="0" width="17" height="86" rx="8.5" fill="#BFA286" />
          <path d="M12 88h30c9 0 15 5 15 11v5H16c-3 0-4-2-4-4Z" fill="#FBF7F2" />
          <path d="M48 88h30c9 0 15 5 15 11v5H52c-3 0-4-2-4-4Z" fill="#FFFFFF" />
          <path d="M12 101h60M48 101h45" stroke="#D8C7B4" strokeWidth={2} />
        </svg>
      </span>
      <span className="absolute inset-x-0 bottom-0 flex flex-col gap-[3px] bg-[#241C17] px-3.5 py-3">
        <span className="font-serif text-[19px] leading-[1.15] text-[#F7F1EA]">
          O seu aguenta a semana inteira?
        </span>
        <span className="font-mono text-[8px] font-semibold tracking-[0.2em] text-[#C4A68C]">
          34 AO 40 · IGUATEMI
        </span>
      </span>
    </span>
  );
}

function FraseGrande() {
  return (
    <span className="flex h-full w-full flex-col items-start justify-center gap-3.5 bg-[#C4553A] px-[18px] py-5 text-left">
      <span className="font-serif text-[34px] italic leading-[1.02] text-[#FBF6F0]">
        Todo mundo tem um branco.
      </span>
      <span className="h-0.5 w-11 bg-[#F0BFAD]" />
      <span className="font-mono text-[9px] font-semibold tracking-[0.2em] text-[#F5D3C6]">
        O SEU AGUENTA?
      </span>
    </span>
  );
}

function AntesDepois() {
  return (
    <span className="flex h-full w-full flex-col bg-[#F7F1EA]">
      <span className="flex flex-grow">
        <span className="flex flex-grow items-center justify-center bg-[#F7F1EA]">
          <ShoeGlyph fill="#FFFFFF" stroke="#CFC0AE" />
        </span>
        <span className="flex flex-grow items-center justify-center bg-[#E7D7C6]">
          <svg width="92" height="50" viewBox="0 0 120 64" aria-hidden="true">
            <path
              d="M14 40C16 26 22 18 34 15c10-3 18-1 24 4l14 12c8 6 20 10 32 12 6 1 8 4 8 7v2c0 2-2 3-4 3H18c-4 0-8-3-8-8Z"
              fill="#EFE6DA"
              stroke="#B09B84"
              strokeWidth={2}
            />
            <path d="M11 48h101" stroke="#B09B84" strokeWidth={2.5} />
            <path d="M30 34c6 3 12 3 17 1M52 38c7 2 13 1 18-1" stroke="#B09B84" strokeWidth={1.6} />
          </svg>
        </span>
      </span>
      <span className="flex flex-col items-center gap-1 px-3 pb-3.5 pt-2.5">
        <span className="font-serif text-[22px] text-[#241C17]">Depois de 30 dias</span>
        <span className="font-mono text-[8px] font-semibold tracking-[0.2em] text-[#8A7360]">
          NOVO &nbsp;·&nbsp; USADO TODO DIA
        </span>
      </span>
    </span>
  );
}

function GradeNumeracao() {
  const numeros = [34, 35, 36, 37, 38, 39, 40];
  return (
    <span className="flex h-full w-full flex-col items-center justify-center gap-3.5 bg-[#FBF7F2] p-[18px]">
      <span className="font-serif text-[21px] text-[#241C17]">Do 34 ao 40</span>
      <span className="grid grid-cols-4 gap-[7px]">
        {numeros.map((n) => (
          <span
            key={n}
            className={`flex h-[38px] w-[38px] items-center justify-center rounded-full font-serif text-[17px] ${
              n === 37 ? "bg-[#C4553A] text-[#FBF6F0]" : "bg-[#241C17] text-[#F7F1EA]"
            }`}
          >
            {n}
          </span>
        ))}
        <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full border-[1.5px] border-dashed border-[#C0AE9A] font-mono text-[10px] text-[#8A7360]">
          41
        </span>
      </span>
      <span className="text-center font-mono text-[8px] font-semibold tracking-[0.2em] text-[#8A7360]">
        37 É O ÚLTIMO PAR · CORRE
      </span>
    </span>
  );
}

function Solado() {
  return (
    <span className="relative flex h-full w-full flex-col items-center justify-end bg-[#241C17] px-4 py-[18px]">
      <svg
        width="200"
        height="150"
        viewBox="0 0 120 90"
        className="absolute left-1/2 top-1.5 -ml-[100px]"
        aria-hidden="true"
      >
        <ellipse cx="60" cy="46" rx="44" ry="34" fill="none" stroke="#4A3A2E" strokeWidth={2} />
        <ellipse cx="60" cy="46" rx="33" ry="25" fill="none" stroke="#5E4A3A" strokeWidth={2} />
        <ellipse cx="60" cy="46" rx="22" ry="16" fill="none" stroke="#7A6250" strokeWidth={2} />
        <path d="M28 30h64M24 46h72M28 62h64" stroke="#3A2E24" strokeWidth={3} />
      </svg>
      <span className="relative flex flex-col items-center gap-[5px]">
        <span className="text-center font-serif text-2xl text-[#F7F1EA]">
          Solado que não marca o piso
        </span>
        <span className="font-mono text-[8px] font-semibold tracking-[0.2em] text-[#B09B84]">
          DETALHE QUE NINGUÉM MOSTRA
        </span>
      </span>
    </span>
  );
}

const backgrounds: Record<ArteTemplate, string> = {
  "produto-claro": "bg-[#F7F1EA]",
  "foto-rodape": "bg-[#E7D7C6]",
  "frase-grande": "bg-[#C4553A]",
  "antes-depois": "bg-[#F7F1EA]",
  "grade-numeracao": "bg-[#FBF7F2]",
  solado: "bg-[#241C17]",
};

const visuals: Record<ArteTemplate, () => React.ReactElement> = {
  "produto-claro": ProdutoClaro,
  "foto-rodape": FotoRodape,
  "frase-grande": FraseGrande,
  "antes-depois": AntesDepois,
  "grade-numeracao": GradeNumeracao,
  solado: Solado,
};

export function arteBackground(template: ArteTemplate) {
  return backgrounds[template];
}

export function ArteVisual({ template }: { template: ArteTemplate }) {
  const Visual = visuals[template];
  return <Visual />;
}
