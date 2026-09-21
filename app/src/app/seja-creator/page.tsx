"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HERO_THUMBS = [
  { bg: "#E7D7C6", fill: "#241C17", offset: false },
  { bg: "#F7F1EA", fill: "#C4553A", offset: true },
  { bg: "#C4553A", fill: "#FBF6F0", offset: false },
  { bg: "#241C17", fill: "#D9C3AE", offset: false },
  { bg: "#EFE3D6", fill: "#8A5A46", offset: true },
  { bg: "#F1E4D8", fill: "#241C17", offset: false },
];

const PASSOS = [
  {
    n: "01",
    titulo: "Cadastro e curadoria",
    texto: "Você manda 5 vídeos e 3 marcas que já atendeu. A gente aprova o perfil em até 3 dias úteis.",
  },
  {
    n: "02",
    titulo: "Convite de campanha",
    texto: "A loja escolhe você e manda o produto real pelos Correios. A etiqueta sai da própria plataforma.",
  },
  {
    n: "03",
    titulo: "Você grava e entrega",
    texto: "Segue o briefing que já vem escrito e sobe o vídeo aqui. A marca assiste com marca d'água.",
  },
  {
    n: "04",
    titulo: "Aprovação e pagamento",
    texto: "Aprovado, o dinheiro é liberado com nota fiscal emitida. Sem resposta em 7 dias, libera automático.",
  },
];

const NICHOS = ["Moda e calçados", "Lifestyle", "Infantil", "Casa", "Fitness"];

function ShoeGlyph({ bg, fill }: { bg: string; fill: string }) {
  return (
    <span
      className="flex h-full items-center justify-center rounded-[11px] border border-line"
      style={{ background: bg }}
    >
      <svg viewBox="0 0 120 64" className="h-auto w-[66%]" aria-hidden="true">
        <path
          d="M14 40C16 26 22 18 34 15c10-3 18-1 24 4l14 12c8 6 20 10 32 12 6 1 8 4 8 7v2c0 2-2 3-4 3H18c-4 0-8-3-8-8Z"
          fill={fill}
        />
        <path d="M11 48h101" stroke={bg} strokeWidth={3} />
        <path d="M34 21l10 6M40 18l10 6M46 16l10 6" stroke={bg} strokeWidth={2} />
      </svg>
    </span>
  );
}

export default function SejaCreatorPage() {
  const [nome, setNome] = useState("");
  const [insta, setInsta] = useState("");
  const [cidade, setCidade] = useState("");
  const [whats, setWhats] = useState("");
  const [nichos, setNichos] = useState<Set<string>>(new Set());
  const [valor, setValor] = useState("");
  const [prazo, setPrazo] = useState("Até 3 dias depois de receber");
  const [aceite1, setAceite1] = useState(false);
  const [aceite2, setAceite2] = useState(false);
  const [videosEnviados, setVideosEnviados] = useState(3);
  const [marcas, setMarcas] = useState(["Loja de calçados em BH", "Marca de tênis", ""]);
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState("");

  function toggleNicho(n: string) {
    setNichos((prev) => {
      const next = new Set(prev);
      if (next.has(n)) next.delete(n);
      else next.add(n);
      return next;
    });
  }

  function enviarCadastro() {
    if (!nome || !insta || !cidade || !whats) {
      setErro("Preencha todos os seus dados antes de enviar.");
      return;
    }
    if (videosEnviados < 5) {
      setErro("Envie os 5 vídeos de portfólio antes de mandar para curadoria.");
      return;
    }
    if (marcas.filter((m) => m.trim()).length < 3) {
      setErro("Informe as 3 marcas que você já atendeu.");
      return;
    }
    if (!aceite1 || !aceite2) {
      setErro("Aceite os dois termos para continuar.");
      return;
    }
    setErro("");
    setEnviado(true);
  }

  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <header className="flex h-[74px] flex-shrink-0 items-center gap-6 border-b border-line px-[60px]">
        <Image src="/logo-wlk-creative.jpg" alt="WLK Creative" width={40} height={40} className="h-10 w-10 rounded-full" />
        <span className="flex-grow" />
        <a href="#como" className="text-[13.5px] font-medium text-ink-secondary no-underline">
          Como funciona
        </a>
        <a href="#cadastro" className="text-[13.5px] font-medium text-ink-secondary no-underline">
          Quanto você ganha
        </a>
        <Link href="/" className="text-[13.5px] font-medium text-ink-secondary no-underline">
          Sou loja
        </Link>
        <Link
          href="/painel-creator"
          className="flex min-h-[44px] items-center rounded-[9px] border border-[#D5CFE7] px-4 text-[13.5px] font-semibold text-ink no-underline"
        >
          Entrar
        </Link>
      </header>

      <section className="flex flex-shrink-0 items-center gap-14 border-b border-line bg-[#FAFBFD] px-[60px] py-14">
        <div className="flex min-w-0 flex-grow flex-col gap-5">
          <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-primary">
            PARA QUEM GRAVA VÍDEO
          </span>
          <h1 className="m-0 max-w-[19ch] font-display text-[50px] font-extrabold leading-[1.04] tracking-[-0.03em] text-ink">
            Grave em casa. Receba 100% do combinado.
          </h1>
          <p className="m-0 max-w-[54ch] text-[17px] leading-[1.6] text-ink-secondary">
            Lojas de todo o Brasil abrem campanhas aqui e mandam o produto na sua casa. Você grava,
            entrega pela plataforma e recebe quando a marca aprova. A taxa de serviço é cobrada da
            loja, não de você.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Sem comissão em cima do seu cachê",
              "Produto real, enviado pelos Correios",
              "Contrato e nota fiscal emitidos aqui",
            ].map((t) => (
              <span
                key={t}
                className="flex items-center gap-[7px] rounded-full border border-line bg-surface px-3.5 py-2 text-[13px] font-medium text-ink"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#0D6B45" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3.6 8.4 6.4 11.2l6-6.4" />
                </svg>
                {t}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3 pt-1.5">
            <a
              href="#cadastro"
              className="flex min-h-[52px] items-center rounded-[10px] bg-primary px-[26px] text-[15px] font-semibold text-white no-underline hover:bg-primary-hover"
            >
              Quero me cadastrar
            </a>
            <span className="text-[13px] text-ink-tertiary">
              Cadastro gratuito · curadoria em até 3 dias úteis
            </span>
          </div>
        </div>

        <div className="grid w-[430px] flex-shrink-0 grid-cols-3 gap-2.5">
          {HERO_THUMBS.map((t, i) => (
            <span key={i} className={`h-[190px] ${t.offset ? "mt-6" : ""}`}>
              <ShoeGlyph bg={t.bg} fill={t.fill} />
            </span>
          ))}
        </div>
      </section>

      <section id="como" className="flex flex-shrink-0 flex-col gap-5 px-[60px] py-11">
        <h2 className="m-0 font-display text-[26px] font-bold tracking-[-0.02em] text-ink">
          Como funciona
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {PASSOS.map((p) => (
            <div key={p.n} className="flex flex-col gap-2.5 rounded-[13px] border border-line p-5">
              <span className="font-mono text-[11px] font-semibold tracking-[0.1em] text-primary">
                {p.n}
              </span>
              <span className="font-display text-base font-bold tracking-[-0.01em] text-ink">
                {p.titulo}
              </span>
              <span className="text-[13.5px] leading-[1.6] text-ink-secondary">{p.texto}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="grid flex-shrink-0 grid-cols-3 gap-4 px-[60px] pb-11">
        <div className="flex flex-col gap-1 rounded-[13px] bg-tint p-[22px]">
          <span className="font-display text-[30px] font-extrabold tracking-[-0.03em] text-tint-fg">
            Você define
          </span>
          <span className="text-[13.5px] leading-[1.55] text-tint-fg">
            Seu valor por vídeo fica no seu perfil. A loja vê antes de convidar.
          </span>
        </div>
        <div className="flex flex-col gap-1 rounded-[13px] bg-success-bg p-[22px]">
          <span className="font-display text-[30px] font-extrabold tracking-[-0.03em] text-[#0B4630]">
            100%
          </span>
          <span className="text-[13.5px] leading-[1.55] text-[#0B4630]">
            Do combinado cai para você. A taxa de serviço é paga pela marca.
          </span>
        </div>
        <div className="flex flex-col gap-1 rounded-[13px] border border-line bg-[#FAFBFD] p-[22px]">
          <span className="font-display text-[30px] font-extrabold tracking-[-0.03em] text-ink">
            7 dias
          </span>
          <span className="text-[13.5px] leading-[1.55] text-ink-secondary">
            Prazo máximo da marca para responder. Sem resposta, o sistema aprova e paga.
          </span>
        </div>
      </section>

      <section id="cadastro" className="flex flex-grow flex-col gap-5 border-t border-line bg-[#FAFBFD] px-[60px] py-11">
        <div className="flex items-baseline gap-3.5">
          <h2 className="m-0 font-display text-[26px] font-bold tracking-[-0.02em] text-ink">
            Cadastro de creator
          </h2>
          <span className="text-[13.5px] text-ink-tertiary">
            Leva uns 6 minutos. Tudo passa por curadoria antes de entrar no marketplace.
          </span>
        </div>

        {enviado ? (
          <div className="flex flex-col items-start gap-2 rounded-2xl border border-line bg-surface p-9">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-success-bg">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#0D6B45" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3.6 8.4 6.4 11.2l6-6.4" />
              </svg>
            </span>
            <h3 className="m-0 font-display text-xl font-bold text-ink">Cadastro enviado para curadoria</h3>
            <p className="m-0 max-w-[60ch] text-sm leading-[1.6] text-ink-secondary">
              Em até 3 dias úteis você recebe a resposta pelo WhatsApp {whats || "informado"}. Se
              aprovado, seu perfil entra no marketplace e as lojas já podem te convidar.
            </p>
          </div>
        ) : (
          <div className="flex items-stretch gap-5">
            <div className="flex min-w-0 flex-grow flex-col gap-[18px] rounded-2xl border border-line bg-surface p-6">
              <h3 className="m-0 font-display text-[15px] font-bold text-ink">Seus dados</h3>

              <div className="grid grid-cols-2 gap-3.5">
                <span className="flex flex-col gap-1.5">
                  <label htmlFor="nome" className="text-[12.5px] font-semibold text-ink-secondary">
                    Nome completo
                  </label>
                  <input
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Como está no documento"
                    className="min-h-[46px] rounded-[9px] border border-[#D5CFE7] px-3 text-[13.5px] text-ink"
                  />
                </span>
                <span className="flex flex-col gap-1.5">
                  <label htmlFor="insta" className="text-[12.5px] font-semibold text-ink-secondary">
                    Seu @ no Instagram
                  </label>
                  <input
                    id="insta"
                    value={insta}
                    onChange={(e) => setInsta(e.target.value)}
                    placeholder="@seuperfil"
                    className="min-h-[46px] rounded-[9px] border border-[#D5CFE7] px-3 text-[13.5px] text-ink"
                  />
                </span>
                <span className="flex flex-col gap-1.5">
                  <label htmlFor="cidade2" className="text-[12.5px] font-semibold text-ink-secondary">
                    Cidade e estado
                  </label>
                  <input
                    id="cidade2"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                    placeholder="Onde você grava"
                    className="min-h-[46px] rounded-[9px] border border-[#D5CFE7] px-3 text-[13.5px] text-ink"
                  />
                </span>
                <span className="flex flex-col gap-1.5">
                  <label htmlFor="zap" className="text-[12.5px] font-semibold text-ink-secondary">
                    WhatsApp
                  </label>
                  <input
                    id="zap"
                    type="tel"
                    value={whats}
                    onChange={(e) => setWhats(e.target.value)}
                    placeholder="Só a plataforma usa"
                    className="min-h-[46px] rounded-[9px] border border-[#D5CFE7] px-3 text-[13.5px] text-ink"
                  />
                </span>
              </div>

              <div className="flex flex-col gap-2.5">
                <span className="text-[12.5px] font-semibold text-ink-secondary">
                  Em que você grava bem
                </span>
                <div className="flex flex-wrap gap-3.5">
                  {NICHOS.map((n) => (
                    <span key={n} className="flex items-center gap-2">
                      <input
                        id={`nc-${n}`}
                        type="checkbox"
                        checked={nichos.has(n)}
                        onChange={() => toggleNicho(n)}
                        className="h-[17px] w-[17px] accent-primary"
                      />
                      <label htmlFor={`nc-${n}`} className="text-[13.5px] text-ink">
                        {n}
                      </label>
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <span className="flex flex-col gap-1.5">
                  <label htmlFor="valor" className="text-[12.5px] font-semibold text-ink-secondary">
                    Seu valor por vídeo
                  </label>
                  <input
                    id="valor"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    placeholder="R$ 0,00"
                    className="min-h-[46px] rounded-[9px] border border-[#D5CFE7] px-3 text-[13.5px] text-ink"
                  />
                </span>
                <span className="flex flex-col gap-1.5">
                  <label htmlFor="prazo2" className="text-[12.5px] font-semibold text-ink-secondary">
                    Prazo que você consegue cumprir
                  </label>
                  <select
                    id="prazo2"
                    value={prazo}
                    onChange={(e) => setPrazo(e.target.value)}
                    className="min-h-[46px] rounded-[9px] border border-[#D5CFE7] bg-surface px-3 text-[13.5px] text-ink"
                  >
                    <option>Até 3 dias depois de receber</option>
                    <option>Até 5 dias depois de receber</option>
                    <option>Até 7 dias depois de receber</option>
                  </select>
                </span>
              </div>

              <div className="flex flex-col gap-2.5 border-t border-[#E9EEF4] pt-4">
                <span className="flex items-start gap-2.5">
                  <input
                    id="t1"
                    type="checkbox"
                    checked={aceite1}
                    onChange={(e) => setAceite1(e.target.checked)}
                    className="mt-0.5 h-[17px] w-[17px] accent-primary"
                  />
                  <label htmlFor="t1" className="text-[13px] leading-[1.55] text-ink-secondary">
                    Aceito receber o produto em casa e devolver quando a campanha pedir.
                  </label>
                </span>
                <span className="flex items-start gap-2.5">
                  <input
                    id="t2"
                    type="checkbox"
                    checked={aceite2}
                    onChange={(e) => setAceite2(e.target.checked)}
                    className="mt-0.5 h-[17px] w-[17px] accent-primary"
                  />
                  <label htmlFor="t2" className="text-[13px] leading-[1.55] text-ink-secondary">
                    Concordo com o contrato de prestação e com a cessão de direito de imagem por
                    campanha.
                  </label>
                </span>
              </div>

              {erro && <p className="m-0 text-[13px] font-semibold text-danger">{erro}</p>}

              <button
                type="button"
                onClick={enviarCadastro}
                className="min-h-[52px] rounded-[10px] bg-primary text-[15px] font-semibold text-white hover:bg-primary-hover"
              >
                Enviar para curadoria
              </button>
            </div>

            <div className="flex w-[396px] flex-shrink-0 flex-col gap-4">
              <div className="flex flex-col gap-3.5 rounded-2xl border border-line bg-surface p-[22px]">
                <h3 className="m-0 font-display text-[15px] font-bold text-ink">
                  Portfólio — mínimo 5 vídeos
                </h3>
                <div className="grid grid-cols-5 gap-1.5">
                  {Array.from({ length: 5 }, (_, i) => i).map((i) => {
                    const preenchido = i < videosEnviados;
                    const cores = [
                      { bg: "#E7D7C6", fill: "#241C17" },
                      { bg: "#F7F1EA", fill: "#C4553A" },
                      { bg: "#C4553A", fill: "#FBF6F0" },
                    ][i % 3];
                    return preenchido ? (
                      <span key={i} className="h-[74px]">
                        <ShoeGlyph bg={cores.bg} fill={cores.fill} />
                      </span>
                    ) : (
                      <button
                        key={i}
                        onClick={() => setVideosEnviados((v) => Math.max(v, i + 1))}
                        aria-label="Adicionar vídeo ao portfólio"
                        className="flex h-[74px] items-center justify-center rounded-lg border-[1.5px] border-dashed border-[#C0B7DC]"
                      >
                        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#8578A8" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
                          <path d="M8 3.6v8.8M3.6 8h8.8" />
                        </svg>
                      </button>
                    );
                  })}
                </div>
                <p className="m-0 text-xs leading-[1.55] text-ink-tertiary">
                  {videosEnviados} de 5 enviados. Vertical, som do celular serve. É esse feed que a
                  loja vê no seu perfil.
                </p>
              </div>

              <div className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-[22px]">
                <h3 className="m-0 font-display text-[15px] font-bold text-ink">
                  Marcas para quem já gravou — mínimo 3
                </h3>
                <span className="flex flex-col gap-2">
                  {marcas.map((m, i) => (
                    <input
                      key={i}
                      value={m}
                      onChange={(e) =>
                        setMarcas((prev) => prev.map((x, xi) => (xi === i ? e.target.value : x)))
                      }
                      placeholder={i === 2 ? "Terceira marca" : undefined}
                      aria-label={`Marca ${i + 1}`}
                      className={`min-h-[44px] rounded-[9px] px-3 text-[13.5px] text-ink ${
                        m ? "border border-[#D5CFE7]" : "border border-dashed border-[#C0B7DC]"
                      }`}
                    />
                  ))}
                </span>
              </div>

              <div className="mt-auto rounded-2xl bg-ink p-5">
                <p className="m-0 mb-2 font-display text-[14.5px] font-bold text-white">
                  Por que existe curadoria
                </p>
                <p className="m-0 text-[13px] leading-[1.6] text-[#AFC3D6]">
                  A loja precisa confiar que o vídeo vai vir bom. Quem entrega bem sobe no ranking e
                  aparece primeiro na busca — o ranking é o seu ativo aqui dentro.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
