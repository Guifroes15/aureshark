import Link from "next/link";
import PageHeader from "@/components/page-header";

export default function CampanhaPage() {
  return (
    <>
      <PageHeader eyebrow="UGC · MINHAS CAMPANHAS" title="Minhas campanhas">
        <Link
          href="/creators"
          className="flex min-h-[44px] items-center rounded-[9px] bg-primary px-4 text-[13.5px] font-semibold text-white no-underline hover:bg-primary-hover"
        >
          Descobrir creators
        </Link>
      </PageHeader>

      <div className="flex flex-grow flex-col items-center justify-center gap-4 px-7 py-6">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-tint">
          <svg width="26" height="26" viewBox="0 0 16 16" fill="none" stroke="#146B9C" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M2.4 6.6v2.8l8.4 3.2V3.4Z" />
            <path d="M10.8 5.4a2.6 2.6 0 0 1 0 5.2M4.6 9.8v2.6a1 1 0 0 0 2 0v-2" />
          </svg>
        </span>
        <h2 className="m-0 text-center font-display text-xl font-bold text-ink">
          Nenhuma campanha aberta ainda
        </h2>
        <p className="m-0 max-w-[48ch] text-center text-sm leading-[1.6] text-ink-secondary">
          Convide um creator em &quot;Descobrir creators&quot; para abrir sua primeira campanha de
          UGC. O produto real vai pelos Correios, o pagamento fica retido e só é liberado depois
          que você aprovar o vídeo.
        </p>
        <Link
          href="/creators"
          className="mt-2 flex min-h-[48px] items-center rounded-[10px] bg-primary px-6 text-[14px] font-semibold text-white no-underline hover:bg-primary-hover"
        >
          Descobrir creators
        </Link>
      </div>
    </>
  );
}
