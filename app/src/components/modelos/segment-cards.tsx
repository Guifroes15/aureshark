function ShoeGlyph({ fill, stroke, className }: { fill: string; stroke: string; className?: string }) {
  return (
    <svg viewBox="0 0 120 64" className={className} aria-hidden="true">
      <path
        d="M14 40C16 26 22 18 34 15c10-3 18-1 24 4l14 12c8 6 20 10 32 12 6 1 8 4 8 7v2c0 2-2 3-4 3H18c-4 0-8-3-8-8Z"
        fill={fill}
      />
      <path d="M11 48h101" stroke={stroke} strokeWidth={3} />
      <path d="M34 21l10 6M40 18l10 6M46 16l10 6" stroke={stroke} strokeWidth={2} />
    </svg>
  );
}

function GarmentGlyph({ fill }: { fill: string }) {
  return (
    <svg viewBox="0 0 120 110" className="h-auto w-full" aria-hidden="true">
      <path
        d="M34 18 L54 8 Q60 16 66 8 L86 18 L100 32 L88 44 L80 38 V100 H40 V38 L32 44 L20 32 Z"
        fill={fill}
      />
    </svg>
  );
}

// ---- Calçados / Aurora Calçados ----

export function CalcadosEditorial() {
  return (
    <span className="relative block h-[420px] overflow-hidden rounded-xl bg-[#1A1410]">
      <span className="absolute -left-[30px] -top-10 h-[240px] w-[240px] rounded-full bg-[#4A3322] opacity-55" />
      <span className="absolute bottom-[92px] left-1/2 h-[150px] w-[300px] -ml-[150px] rounded-full bg-[#241C17]" />
      <ShoeGlyph
        fill="#F3EADA"
        stroke="#C9B28A"
        className="absolute bottom-[120px] left-1/2 w-60 -ml-[120px]"
      />
      <span className="absolute inset-x-0 top-[26px] flex flex-col items-center gap-2">
        <span className="font-mono text-[8px] font-semibold tracking-[0.28em] text-[#C9B28A]">
          AURORA CALÇADOS
        </span>
        <span className="text-center font-serif text-[34px] leading-[0.96] tracking-[0.01em] text-[#E8C98C]">
          FESTIVAL
          <br />
          DE OUTONO
        </span>
        <span className="h-px w-[92px] bg-[#8A7250]" />
        <span className="flex items-baseline gap-[5px]">
          <span className="font-serif text-[15px] text-[#E8C98C]">R$</span>
          <span className="font-serif text-[40px] leading-none text-[#F0D9A8]">199</span>
          <span className="font-serif text-[19px] text-[#F0D9A8]">,90</span>
        </span>
      </span>
      <span className="absolute inset-x-0 bottom-[22px] flex flex-col items-center gap-[5px]">
        <span className="font-display text-[13px] font-bold tracking-[0.16em] text-[#F3EADA]">
          UNIDADE IGUATEMI
        </span>
        <span className="h-px w-16 bg-[#6B5940]" />
        <span className="font-mono text-[8px] font-semibold tracking-[0.2em] text-[#A8916C]">
          BELO HORIZONTE
        </span>
      </span>
    </span>
  );
}

export function CalcadosClara() {
  return (
    <span className="relative block h-[420px] overflow-hidden rounded-xl bg-[#F7F1EA]">
      <span className="absolute inset-x-[22px] top-6 flex flex-col gap-3">
        <span className="self-start rounded-full border border-[#D8C9B6] px-3 py-[5px] font-mono text-[8px] font-semibold tracking-[0.22em] text-[#8A7360]">
          CHEGOU NA LOJA
        </span>
        <span className="font-display text-[27px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#241C17]">
          O branco que{" "}
          <span className="bg-[#E8B9AE] px-1.5">aguenta</span> a semana inteira
        </span>
        <span className="text-[13.5px] leading-[1.5] text-[#6B5A4A]">
          Numeração 34 ao 40, com solado que não marca o piso.
        </span>
      </span>
      <ShoeGlyph
        fill="#FFFFFF"
        stroke="#C4553A"
        className="absolute bottom-[74px] -right-3.5 w-[250px]"
      />
      <span className="absolute bottom-[22px] left-[22px] flex min-h-[44px] items-center gap-2.5 rounded-full bg-[#C4553A] px-5 text-[13px] font-bold tracking-[0.04em] text-[#FBF6F0]">
        VER NA LOJA
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 3.4 10.6 8 6 12.6" />
        </svg>
      </span>
    </span>
  );
}

export function CalcadosGrade() {
  const atributos = [
    { label: "Couro legítimo", d: "M3 9c1-4 3-6 5-6s4 2 5 6M2.6 11.4h10.8" },
    { label: "Solado antiderrapante", d: "M2.6 10.4h10.8M4 7.6h8" },
    { label: "Palmilha em gel", d: "" },
    { label: "Do 34 ao 40", d: "" },
  ];
  return (
    <span className="flex h-[420px] flex-col rounded-xl bg-[#FBF7F2] p-[22px]">
      <span className="font-serif text-[27px] leading-[1.08] text-[#241C17]">
        Feito pra andar
        <br />o dia inteiro.
      </span>
      <span className="my-3.5 h-0.5 w-[54px] bg-[#C4553A]" />
      <span className="flex h-[108px] items-center justify-center">
        <ShoeGlyph fill="#241C17" stroke="#FBF7F2" className="w-[210px]" />
      </span>
      <span className="grid grid-cols-2 gap-x-2.5 gap-y-3 border-t border-[#E5D9C9] pt-3.5">
        {atributos.map((a) => (
          <span key={a.label} className="flex items-center gap-2">
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#EFE3D6]">
              {a.label === "Palmilha em gel" ? (
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="#8A5A46" strokeWidth={1.5} strokeLinecap="round" aria-hidden="true">
                  <circle cx="8" cy="8" r="5" />
                  <path d="M8 5.4v3l2 1.2" />
                </svg>
              ) : a.label === "Do 34 ao 40" ? (
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="#8A5A46" strokeWidth={1.5} strokeLinecap="round" aria-hidden="true">
                  <path d="M2.6 4.6h10.8v6.8H2.6Z" />
                  <path d="M5.4 4.6v2M8 4.6v3M10.6 4.6v2" />
                </svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="#8A5A46" strokeWidth={1.5} strokeLinecap="round" aria-hidden="true">
                  <path d={a.d} />
                </svg>
              )}
            </span>
            <span className="text-xs leading-[1.3] text-[#4A3C31]">{a.label}</span>
          </span>
        ))}
      </span>
      <span className="mt-auto flex min-h-[44px] items-center justify-center rounded-full bg-[#241C17] font-serif text-[19px] text-[#F7F1EA]">
        Ver a coleção
      </span>
    </span>
  );
}

// ---- Moda / Ateliê Norte ----

export function ModaEditorial() {
  return (
    <span className="relative block h-[420px] overflow-hidden rounded-xl bg-[#21252B]">
      <span className="absolute inset-x-0 bottom-0 h-[250px] bg-[#2A2F36]" />
      <span className="absolute bottom-[86px] left-1/2 w-[210px] -ml-[105px]">
        <GarmentGlyph fill="#EFEDE6" />
      </span>
      <span className="absolute inset-x-0 top-7 flex flex-col items-center gap-[9px]">
        <span className="font-mono text-[8px] font-semibold tracking-[0.28em] text-[#A8794F]">
          ATELIÊ NORTE
        </span>
        <span className="text-center font-serif text-4xl leading-[0.98] text-[#EFEDE6]">
          NOVA
          <br />
          ESTAÇÃO
        </span>
        <span className="h-px w-[92px] bg-[#5C636C]" />
        <span className="font-display text-[13px] font-bold tracking-[0.14em] text-[#C89C6A]">
          ATÉ 40% OFF
        </span>
      </span>
      <span className="absolute inset-x-0 bottom-[22px] flex flex-col items-center gap-[5px]">
        <span className="font-display text-[12.5px] font-bold tracking-[0.16em] text-[#EFEDE6]">
          LOJA DA SAVASSI
        </span>
        <span className="h-px w-16 bg-[#4C535B]" />
        <span className="font-mono text-[8px] font-semibold tracking-[0.2em] text-[#8D949C]">
          BELO HORIZONTE
        </span>
      </span>
    </span>
  );
}

export function ModaClara() {
  return (
    <span className="relative block h-[420px] overflow-hidden rounded-xl bg-[#EFEDE6]">
      <span className="absolute inset-x-[22px] top-6 flex flex-col gap-3">
        <span className="self-start rounded-full border border-[#C8CCBC] px-3 py-[5px] font-mono text-[8px] font-semibold tracking-[0.22em] text-[#6E7A5E]">
          PEÇA-CHAVE
        </span>
        <span className="font-display text-[27px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#23282E]">
          Uma camisa, <span className="bg-[#C9D4B4] px-1.5">quatro</span> jeitos de usar
        </span>
        <span className="text-[13.5px] leading-[1.5] text-[#5A6169]">
          Do escritório ao happy hour sem passar em casa.
        </span>
      </span>
      <span className="absolute bottom-[70px] -right-2.5 w-[190px]">
        <GarmentGlyph fill="#A8794F" />
      </span>
      <span className="absolute bottom-[22px] left-[22px] flex min-h-[44px] items-center gap-2.5 rounded-full bg-[#23282E] px-5 text-[13px] font-bold tracking-[0.04em] text-[#EFEDE6]">
        VER OS QUATRO LOOKS
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 3.4 10.6 8 6 12.6" />
        </svg>
      </span>
    </span>
  );
}

export function ModaConversa() {
  return (
    <span className="relative flex h-[420px] flex-col gap-3 overflow-hidden rounded-xl bg-[#F4F3EE] p-[22px]">
      <span className="flex items-start gap-2.5">
        <span className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-full bg-[#D8D5CB]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#6C7078" strokeWidth={1.5} strokeLinecap="round" aria-hidden="true">
            <circle cx="8" cy="5.8" r="2.6" />
            <path d="M3 13.4c0-2.4 2.2-4 5-4s5 1.6 5 4" />
          </svg>
        </span>
        <span className="rounded-2xl bg-[#E6E4DC] px-3.5 py-3 text-[13.5px] font-semibold leading-[1.45] text-[#23282E]">
          Compro numa loja que nunca vi de perto?
        </span>
      </span>
      <span className="flex items-start gap-2.5">
        <span className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-full bg-[#C9D4B4]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#4A5540" strokeWidth={1.6} strokeLinejoin="round" aria-hidden="true">
            <path d="M8 2.6l1.6 3.6 3.8.5-2.8 2.6.7 3.7L8 11.2l-3.3 1.8.7-3.7L2.6 6.7l3.8-.5Z" />
          </svg>
        </span>
        <span className="rounded-2xl bg-[#DCE4CC] px-3.5 py-3 text-[13px] leading-[1.5] text-[#2E3830]">
          Prova em casa por <strong className="font-bold">7 dias</strong>. Não serviu, a gente
          busca — <strong className="font-bold">sem custo</strong>.
        </span>
      </span>
      <span className="absolute bottom-[84px] -left-1.5 w-[150px]">
        <GarmentGlyph fill="#6E7A5E" />
      </span>
      <span className="absolute bottom-[92px] right-5 flex flex-col items-end">
        <span className="font-display text-[44px] font-extrabold leading-[0.9] tracking-[-0.04em] text-[#23282E]">
          7
        </span>
        <span className="text-right text-[12.5px] leading-[1.25] text-[#5A6169]">
          dias para
          <br />
          provar em casa
        </span>
      </span>
      <span className="mt-auto flex min-h-[44px] items-center justify-center rounded-full bg-[#6E7A5E] text-[13px] font-bold tracking-[0.04em] text-[#F4F3EE]">
        QUERO PROVAR EM CASA
      </span>
    </span>
  );
}

// ---- Restaurante / Cantina Salvato ----

function RisottoGlyph() {
  return (
    <svg viewBox="0 0 160 110" className="h-auto w-full" aria-hidden="true">
      <ellipse cx="80" cy="66" rx="74" ry="38" fill="#2A2019" />
      <ellipse cx="80" cy="62" rx="70" ry="34" fill="#C9BCA6" />
      <ellipse cx="80" cy="60" rx="52" ry="24" fill="#E8DCC0" />
      <ellipse cx="80" cy="59" rx="44" ry="19" fill="#DFCFA8" />
      <path d="M62 54c6-3 12-3 17 0M88 62c7-2 12-2 16 1M70 64c5 2 10 2 15 0" stroke="#C0AC7E" strokeWidth={2.4} strokeLinecap="round" />
      <path d="M74 50l6-7 5 5-5 6z" fill="#F4EEDF" />
      <path d="M92 52l7-5 3 6-7 3z" fill="#F4EEDF" />
      <circle cx="66" cy="60" r="2.4" fill="#5E7A3A" />
      <circle cx="97" cy="57" r="2.2" fill="#5E7A3A" />
    </svg>
  );
}

export function RestauranteEditorial1() {
  return (
    <span className="relative block h-[420px] overflow-hidden rounded-xl bg-[#15100C]">
      <span className="absolute -left-10 top-[60px] h-[150px] w-[150px] rounded-full bg-[#4A3116] opacity-50" />
      <span className="absolute -right-[30px] top-10 h-[110px] w-[110px] rounded-full bg-[#3A2A14] opacity-60" />
      <span className="absolute bottom-[82px] left-1/2 w-[250px] -ml-[125px]">
        <RisottoGlyph />
      </span>
      <span className="absolute inset-x-0 top-[26px] flex flex-col items-center gap-2">
        <span className="font-mono text-[8px] font-semibold tracking-[0.28em] text-[#C9A86A]">
          CANTINA SALVATO
        </span>
        <span className="font-serif text-[26px] leading-none tracking-[0.06em] text-[#E8C98C]">
          FESTIVAL DE
        </span>
        <span className="font-serif text-[45px] leading-[0.92] tracking-[0.02em] text-[#F0D9A8]">
          RISOTOS
        </span>
        <span className="h-px w-24 bg-[#8A7250]" />
        <span className="flex items-baseline gap-[5px]">
          <span className="font-serif text-[15px] text-[#E8C98C]">R$</span>
          <span className="font-serif text-[40px] leading-none text-[#F0D9A8]">69</span>
          <span className="font-serif text-[19px] text-[#F0D9A8]">,90</span>
        </span>
      </span>
      <span className="absolute inset-x-0 bottom-[22px] flex flex-col items-center gap-[5px]">
        <span className="font-display text-[12.5px] font-bold tracking-[0.16em] text-[#F3EADA]">
          UNIDADE SANTO ANTÔNIO
        </span>
        <span className="h-px w-16 bg-[#6B5940]" />
        <span className="font-mono text-[8px] font-semibold tracking-[0.2em] text-[#A8916C]">
          BELO HORIZONTE
        </span>
      </span>
    </span>
  );
}

function FeijoadaGlyph() {
  return (
    <svg viewBox="0 0 160 120" className="h-auto w-full" aria-hidden="true">
      <path d="M28 52h76c0 30-17 50-38 50S28 82 28 52Z" fill="#3A2A20" />
      <ellipse cx="66" cy="52" rx="38" ry="14" fill="#4A1C14" />
      <circle cx="52" cy="50" r="4.5" fill="#1C1410" />
      <circle cx="64" cy="54" r="4.5" fill="#1C1410" />
      <circle cx="78" cy="49" r="4.5" fill="#1C1410" />
      <path d="M56 44h13v8H56z" fill="#7A3A22" />
      <path d="M70 52h12v6H70z" fill="#8A4126" />
      <circle cx="120" cy="66" r="20" fill="#2A2019" />
      <circle cx="120" cy="64" r="17" fill="#EDE6D6" />
      <circle cx="138" cy="94" r="16" fill="#2A2019" />
      <circle cx="138" cy="92" r="13" fill="#4E7A2E" />
    </svg>
  );
}

export function RestauranteEditorial2() {
  return (
    <span className="relative block h-[420px] overflow-hidden rounded-xl bg-[#15100C]">
      <span className="absolute bottom-[74px] left-1/2 w-64 -ml-32">
        <FeijoadaGlyph />
      </span>
      <span className="absolute inset-x-0 top-[30px] flex flex-col items-center gap-[7px]">
        <span className="font-mono text-[8px] font-semibold tracking-[0.28em] text-[#C9A86A]">
          CANTINA SALVATO
        </span>
        <span className="font-serif text-[44px] leading-[0.94] tracking-[0.02em] text-[#F0D9A8]">
          FEIJOADA
        </span>
        <span className="h-px w-24 bg-[#8A7250]" />
        <span className="flex items-baseline gap-[5px]">
          <span className="font-serif text-sm text-[#E8C98C]">R$</span>
          <span className="font-serif text-[34px] leading-none text-[#F0D9A8]">49</span>
          <span className="font-serif text-[17px] text-[#F0D9A8]">,90</span>
        </span>
        <span className="font-display text-[13px] font-bold tracking-[0.18em] text-[#E8C98C]">
          TODA SEXTA-FEIRA
        </span>
      </span>
      <span className="absolute inset-x-0 bottom-[22px] flex flex-col items-center gap-[5px]">
        <span className="font-display text-[12.5px] font-bold tracking-[0.16em] text-[#F3EADA]">
          UNIDADE LOURDES
        </span>
        <span className="h-px w-16 bg-[#6B5940]" />
        <span className="font-mono text-[8px] font-semibold tracking-[0.2em] text-[#A8916C]">
          BELO HORIZONTE
        </span>
      </span>
    </span>
  );
}

export function RestauranteGrade() {
  const atributos = [
    { label: "Arroz branco ou integral" },
    { label: "Legumes orgânicos" },
    { label: "Purê de grão-de-bico" },
    { label: "Patinho moído" },
  ];
  return (
    <span className="flex h-[420px] flex-col rounded-xl bg-[#F3F0E4] px-5 py-[22px]">
      <span className="font-serif text-[26px] leading-[1.06] text-[#1F3322]">
        Comida de verdade,
        <br />
        preparada com cuidado.
      </span>
      <span className="my-3 h-0.5 w-[54px] bg-[#2F5636]" />
      <span className="flex h-[104px] items-center justify-center">
        <svg viewBox="0 0 160 110" className="w-[200px]" aria-hidden="true">
          <rect x="18" y="18" width="124" height="80" rx="9" fill="#26231F" />
          <rect x="26" y="26" width="52" height="64" rx="5" fill="#F0EDE4" />
          <rect x="84" y="26" width="50" height="30" rx="5" fill="#6B4A2C" />
          <rect x="84" y="60" width="50" height="30" rx="5" fill="#3E5B2C" />
          <ellipse cx="52" cy="52" rx="19" ry="13" fill="#E3C98E" />
          <circle cx="96" cy="70" r="4" fill="#C0452C" />
          <circle cx="110" cy="76" r="4" fill="#E08A2E" />
          <circle cx="122" cy="68" r="4" fill="#7FA24A" />
        </svg>
      </span>
      <span className="grid grid-cols-2 gap-x-2.5 gap-y-[11px] border-t border-[#DAD6C6] pt-3">
        {atributos.map((a) => (
          <span key={a.label} className="flex items-center gap-2">
            <span className="flex h-[27px] w-[27px] flex-shrink-0 items-center justify-center rounded-full bg-[#DFE6D4]">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#2F5636" strokeWidth={1.5} strokeLinecap="round" aria-hidden="true">
                <circle cx="8" cy="8" r="5" />
              </svg>
            </span>
            <span className="text-[11.5px] leading-[1.3] text-[#33402F]">{a.label}</span>
          </span>
        ))}
      </span>
      <span className="mt-auto flex min-h-[44px] items-center justify-center rounded-full bg-[#2F5636] font-serif text-[19px] text-[#F3F0E4]">
        Peça pelo delivery
      </span>
    </span>
  );
}
