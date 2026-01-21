import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Tracking } from "./Tracking";

import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: {
    default: "Tech Start Summit | Evento de tecnologia para iniciantes",
    template: "%s | Tech Start Summit",
  },

  description:
    "O Tech Start Summit é um evento de tecnologia pensado para calouros e iniciantes em TI. Aprenda com especialistas e dê o primeiro passo na carreira.",

  metadataBase: new URL("https://www.techstartsummit.com.br"),
  alternates: {
    canonical: "https://www.techstartsummit.com.br/",
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${inter.variable} font-sans antialiased`}>
        <Tracking />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
