import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WLK Creative",
    short_name: "WLK Creative",
    description: "Gestão de mídia para varejo — planejamento, social media e UGC.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F9FC",
    theme_color: "#0B2A45",
    icons: [
      {
        src: "/icon.jpg",
        sizes: "902x902",
        type: "image/jpeg",
      },
    ],
  };
}
