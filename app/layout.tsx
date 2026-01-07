import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Tech Start Summit | Evento de tecnologia para iniciantes",
    template: "%s | Tech Start Summit",
  },

  description:
    "O Tech Start Summit é um evento de tecnologia pensado para calouros e iniciantes em TI. Aprenda com especialistas e dê o primeiro passo na carreira.",

  metadataBase: new URL("https://techstartsummit.com.br"),

  openGraph: {
    title: "Tech Start Summit",
    description:
      "Evento de tecnologia focado em calouros e iniciantes em TI.",
    url: "https://techstartsummit.com.br",
    siteName: "Tech Start Summit",
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tech Start Summit",
    description:
      "Evento de tecnologia para quem está começando na área de TI.",
  },

  robots: {
    index: true,
    follow: true,
  },
}
