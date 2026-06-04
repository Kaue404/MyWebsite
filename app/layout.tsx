import { Geist, Geist_Mono, Outfit } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const outfitHeading = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
})

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable,
        outfitHeading.variable
      )}
    >
      <title>Kauê Website</title>
      <body>
        <ThemeProvider>
          <Header />
          <main className="pt-16 md:pt-22">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
