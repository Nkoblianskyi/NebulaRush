"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookie-consent")

    // If no choice has been made, show the banner
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const acceptNecessary = () => {
    localStorage.setItem("cookie-consent", "necessary")
    setIsVisible(false)
  }

  const openSettings = () => {
    // Redirect to cookies page for detailed settings
    window.location.href = "/cookies"
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t shadow-lg animate-in slide-in-from-bottom-10 duration-300">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 pr-8">
            <h3 className="text-lg font-semibold mb-1">Vi bruker informasjonskapsler (cookies)</h3>
            <p className="text-sm text-muted-foreground">
              Vi bruker informasjonskapsler for å forbedre din opplevelse, huske dine preferanser og analysere trafikk.
              Ved å klikke "Godta alle" samtykker du til vår bruk av informasjonskapsler. Du kan også velge å tilpasse
              dine preferanser. Les mer i vår{" "}
              <Link href="/cookies" className="text-primary hover:underline">
                informasjonskapsel-policy
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 min-w-fit">
            <Button variant="outline" size="sm" onClick={acceptNecessary}>
              Kun nødvendige
            </Button>
            <Button variant="outline" size="sm" onClick={openSettings}>
              Tilpass
            </Button>
            <Button size="sm" onClick={acceptAll}>
              Godta alle
            </Button>
          </div>
          <button
            onClick={acceptNecessary}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            aria-label="Lukk cookie-banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
