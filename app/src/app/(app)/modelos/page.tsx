import Link from "next/link";
import PageHeader from "@/components/page-header";

export default function ModelosPage() {
  return (
    <>
      <PageHeader eyebrow="SOCIAL MEDIA · BIBLIOTECA DE MODELOS" title="Modelos">
        <Link
          href="/gerar"
          className="flex min-h-[44px] items-center rounded-[9px] bg-primary px-4 text-[13.5px] font-semibold text-white no-underline hover:bg-primary-hover"
        >
          Gerar publicação
        </Link>
      </PageHeader>

      <div className="flex flex-grow flex-col items-center justify-center gap-4 px-4 py-4 lg:px-7 lg:py-6">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-tint">
          <svg width="26" height="26" viewBox="0 0 16 16" fill="none" stroke="#146B9C" strokeWidth={1.5} strokeLinecap="round" aria-hidden="true">
            <rect x="2.4" y="2.4" width="11.2" height="7" rx="1.4" />
            <path d="M2.4 12h6.4M2.4 14.2h4" />
          </svg>
        </span>
        <h2 className="m-0 text-center font-display text-xl font-bold text-ink">
          Nenhum modelo ainda
        </h2>
        <p className="m-0 max-w-[48ch] text-center text-sm leading-[1.6] text-ink-secondary">
          Assim que você gerar e aprovar publicações, as estruturas de peça mais usadas pela sua
          loja aparecem aqui como modelos reutilizáveis.
        </p>
      </div>
    </>
  );
}
