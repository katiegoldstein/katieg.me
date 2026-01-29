import type { Metadata } from "next"
import { Archivo_Black, Montserrat } from "next/font/google"
import "./globals.css"

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Katie's Website",
  description: "Katie Goldstein - BizOps, Venture Scout, and Children's Book Author",
  icons: {
    icon: "/media/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${archivoBlack.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  )
}
