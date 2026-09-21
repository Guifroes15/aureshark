import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans, Instrument_Serif } from "next/font/google";
import Sidebar from "@/components/sidebar";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-archivo",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-plex-mono",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "WLK Creative",
  description: "Gestão de mídia para varejo — planejamento, social media e UGC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable} ${instrumentSerif.variable} font-sans antialiased`}
      >
        <div className="flex h-screen min-h-screen overflow-hidden bg-app">
          <Sidebar />
          <div className="flex min-w-0 flex-1 flex-col overflow-y-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
