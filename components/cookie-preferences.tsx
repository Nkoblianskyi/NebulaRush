"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export default function CookiePreferences() {
  const { toast } = useToast()
  const [preferences, setPreferences] = useState({
    necessary: true, // Always enabled
    preferences: false,
    statistics: false,
  })

  useEffect(() => {
    // Load saved preferences
    const savedConsent = localStorage.getItem("cookie-consent")
    if (savedConsent === "accepted") {
      setPreferences({
        necessary: true,
        preferences: true,
        statistics: true,
      })
    } else if (savedConsent === "customized") {
      const savedPreferences = localStorage.getItem("cookie-preferences")
      if (savedPreferences) {
        try {
          setPreferences({ ...JSON.parse(savedPreferences), necessary: true })
        } catch (e) {
          // If parsing fails, use default
          console.error("Failed to parse saved preferences", e)
        }
      }
    }
  }, [])

  const handleChange = (type: "preferences" | "statistics") => {
    setPreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }))
  }

  const savePreferences = () => {
    localStorage.setItem("cookie-consent", "customized")
    localStorage.setItem("cookie-preferences", JSON.stringify(preferences))

    toast({
      title: "Preferanser lagret",
      description: "Dine preferanser for informasjonskapsler er nå lagret.",
    })
  }

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      preferences: true,
      statistics: true,
    }
    setPreferences(allAccepted)
    localStorage.setItem("cookie-consent", "accepted")
    localStorage.setItem("cookie-preferences", JSON.stringify(allAccepted))

    toast({
      title: "Alle informasjonskapsler godtatt",
      description: "Du har godtatt alle informasjonskapsler.",
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-start space-x-3 pt-2">
          <Checkbox id="necessary" checked={true} disabled />
          <div className="grid gap-1.5">
            <Label htmlFor="necessary" className="font-medium">
              Nødvendige informasjonskapsler
            </Label>
            <p className="text-sm text-muted-foreground">
              Disse er nødvendige for at nettsiden skal fungere og kan ikke slås av. De brukes for å huske dine
              preferanser og for å sikre at nettsiden fungerer som den skal.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3 pt-2">
          <Checkbox
            id="preferences"
            checked={preferences.preferences}
            onCheckedChange={() => handleChange("preferences")}
          />
          <div className="grid gap-1.5">
            <Label htmlFor="preferences" className="font-medium">
              Preferanse-informasjonskapsler
            </Label>
            <p className="text-sm text-muted-foreground">
              Disse informasjonskapslene gjør det mulig for nettsiden å huske valg du har gjort og gi forbedrede, mer
              personlige funksjoner.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3 pt-2">
          <Checkbox
            id="statistics"
            checked={preferences.statistics}
            onCheckedChange={() => handleChange("statistics")}
          />
          <div className="grid gap-1.5">
            <Label htmlFor="statistics" className="font-medium">
              Statistikk-informasjonskapsler
            </Label>
            <p className="text-sm text-muted-foreground">
              Disse informasjonskapslene hjelper oss å forstå hvordan besøkende samhandler med nettsiden ved å samle inn
              og rapportere informasjon anonymt.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 justify-end">
        <Button variant="outline" onClick={savePreferences}>
          Lagre preferanser
        </Button>
        <Button onClick={acceptAll}>Godta alle</Button>
      </div>
    </div>
  )
}
