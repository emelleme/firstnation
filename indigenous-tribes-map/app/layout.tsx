import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://tribal.seed2sea.org"),
  title: {
    default: "First Nations Living Journal | Seed 2 Sea Foundation",
    template: "%s | First Nations Living Journal",
  },
  description:
    "Living journal honoring Indigenous peoples and tribes across Turtle Island. Explore territories, history, languages, and culture with respectful storytelling.",
  keywords: [
    "Indigenous peoples",
    "Native American tribes",
    "First Nations",
    "tribal history",
    "Seed 2 Sea Foundation",
    "Turtle Island",
    "Indigenous culture",
  ],
  openGraph: {
    title: "First Nations Living Journal | Seed 2 Sea Foundation",
    description:
      "Explore territories, timelines, and living stories of Indigenous nations across Turtle Island. A respectful guide by Seed 2 Sea.",
    url: "https://tribal.seed2sea.org",
    siteName: "First Nations Living Journal",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "First Nations Living Journal by Seed 2 Sea Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "First Nations Living Journal | Seed 2 Sea Foundation",
    description:
      "Living tribute to Indigenous nations: territories, history, languages, and culture across Turtle Island.",
    images: ["/og-default.jpg"],
  },
  alternates: {
    canonical: "https://tribal.seed2sea.org",
  },
  generator: "Seed 2 Sea",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
