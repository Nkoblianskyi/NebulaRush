import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Disclaimer from "@/components/disclaimer"
import AgeVerificationModal from "@/components/age-verification-modal"
import CookieConsentBanner from "@/components/cookie-consent-banner"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "GlacierVibe Hub - Skogens Vokter",
  description: "Et sosialt spill for underholdningsformål. Ingen ekte penger involvert.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="no" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Disclaimer />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <AgeVerificationModal />
            <CookieConsentBanner />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
