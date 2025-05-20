"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Shield, Cookie, Info, Settings, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function CookiesPage() {
  const { toast } = useToast()
  const [preferences, setPreferences] = useState({
    necessary: true, // Alltid aktivert
    preferences: false,
    statistics: false,
  })

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
    <div className="container py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 min-h-screen">
      <div className="mx-auto max-w-3xl">
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-amber-200 dark:bg-amber-800 p-3 rounded-full">
              <Cookie className="h-8 w-8 text-amber-700 dark:text-amber-300" />
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-900 dark:text-amber-100">
            Informasjonskapsler (Cookies)
          </h1>
          <p className="text-muted-foreground md:text-xl/relaxed max-w-2xl mx-auto text-amber-700 dark:text-amber-300">
            Hvordan vi bruker informasjonskapsler på Skogens Vokter
          </p>
        </div>

        {/* Hovedkort med preferanser */}
        <Card className="mb-12 border-amber-300 dark:border-amber-700 bg-white/80 dark:bg-amber-950/80 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-amber-200 to-amber-300 dark:from-amber-800 dark:to-amber-700 rounded-lg">
            <div className="flex items-center gap-3">
              <Settings className="h-6 w-6 text-amber-700 dark:text-amber-200" />
              <CardTitle className="text-amber-900 dark:text-amber-100">
                Administrer dine preferanser for informasjonskapsler
              </CardTitle>
            </div>
          </CardHeader>
        </Card>

        <div className="space-y-8">
          <Card className="border-amber-300 dark:border-amber-700 bg-white/80 dark:bg-amber-950/80 shadow-md">
            <CardHeader>
              <CardTitle className="text-amber-900 dark:text-amber-100 flex items-center gap-2">
                <Info className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                Hva er informasjonskapsler?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-amber-700 dark:text-amber-300">
              <p>
                Informasjonskapsler (cookies) er små tekstfiler som lagres på din datamaskin, nettbrett eller
                mobiltelefon når du besøker en nettside. De gjør det mulig for nettsiden å huske dine handlinger og
                preferanser over en tidsperiode, slik at du ikke trenger å oppgi disse hver gang du besøker nettsiden
                eller navigerer fra en side til en annen.
              </p>
              <p>
                Informasjonskapsler hjelper oss med å forbedre din opplevelse på vår nettside, og de kan også hjelpe oss
                med å forstå hvordan nettsiden brukes, slik at vi kan gjøre den bedre for deg og andre besøkende.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-300 dark:border-amber-700 bg-white/80 dark:bg-amber-950/80 shadow-md">
            <CardHeader>
              <CardTitle className="text-amber-900 dark:text-amber-100 flex items-center gap-2">
                <Cookie className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                Typer informasjonskapsler vi bruker
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-amber-700 dark:text-amber-300">
              <p>Vi bruker følgende typer informasjonskapsler på Skogens Vokter:</p>

              <Table>
                <TableHeader>
                  <TableRow className="border-amber-300 dark:border-amber-700">
                    <TableHead className="w-[250px] text-amber-900 dark:text-amber-100">Type</TableHead>
                    <TableHead className="text-amber-900 dark:text-amber-100">Beskrivelse</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-amber-200 dark:border-amber-800">
                    <TableCell className="font-medium text-amber-800 dark:text-amber-200">
                      Nødvendige informasjonskapsler
                    </TableCell>
                    <TableCell>
                      Disse er nødvendige for at nettsiden skal fungere og kan ikke slås av i våre systemer. De settes
                      vanligvis bare som svar på handlinger du gjør som tilsvarer en forespørsel om tjenester, for
                      eksempel å sette personvernpreferanser, logge inn eller fylle ut skjemaer.
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-amber-200 dark:border-amber-800">
                    <TableCell className="font-medium text-amber-800 dark:text-amber-200">
                      Preferanse-informasjonskapsler
                    </TableCell>
                    <TableCell>
                      Disse informasjonskapslene gjør det mulig for nettsiden å huske valg du har gjort (som brukernavn,
                      språk eller regionen du befinner deg i) og gi forbedrede, mer personlige funksjoner. For eksempel
                      kan en nettside gi deg lokale værmeldinger eller trafikknyheter ved å lagre din nåværende
                      plassering.
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-amber-200 dark:border-amber-800">
                    <TableCell className="font-medium text-amber-800 dark:text-amber-200">
                      Statistikk-informasjonskapsler
                    </TableCell>
                    <TableCell>
                      Disse informasjonskapslene hjelper oss å forstå hvordan besøkende samhandler med nettsiden ved å
                      samle inn og rapportere informasjon anonymt. De hjelper oss med å forbedre hvordan nettsiden
                      fungerer.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="border-amber-300 dark:border-amber-700 bg-white/80 dark:bg-amber-950/80 shadow-md">
            <CardHeader>
              <CardTitle className="text-amber-900 dark:text-amber-100 flex items-center gap-2">
                <Check className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                Spesifikke informasjonskapsler vi bruker
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-amber-700 dark:text-amber-300">
              <Table>
                <TableHeader>
                  <TableRow className="border-amber-300 dark:border-amber-700">
                    <TableHead className="text-amber-900 dark:text-amber-100">Navn</TableHead>
                    <TableHead className="text-amber-900 dark:text-amber-100">Formål</TableHead>
                    <TableHead className="text-amber-900 dark:text-amber-100">Utløp</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-amber-200 dark:border-amber-800">
                    <TableCell className="font-medium text-amber-800 dark:text-amber-200">hasVerifiedAge</TableCell>
                    <TableCell>
                      Brukes til å huske at du har bekreftet at du er 18 år eller eldre, slik at du ikke trenger å
                      bekrefte dette hver gang du besøker nettsiden.
                    </TableCell>
                    <TableCell>30 dager</TableCell>
                  </TableRow>
                  <TableRow className="border-amber-200 dark:border-amber-800">
                    <TableCell className="font-medium text-amber-800 dark:text-amber-200">theme</TableCell>
                    <TableCell>Lagrer din preferanse for lyst eller mørkt tema på nettsiden.</TableCell>
                    <TableCell>1 år</TableCell>
                  </TableRow>
                  <TableRow className="border-amber-200 dark:border-amber-800">
                    <TableCell className="font-medium text-amber-800 dark:text-amber-200">
                      forestGameHighScore
                    </TableCell>
                    <TableCell>
                      Lagrer din høyeste poengsum i Skogens Vokter-spillet, slik at du kan se din fremgang over tid.
                    </TableCell>
                    <TableCell>Permanent (til manuell sletting)</TableCell>
                  </TableRow>
                  <TableRow className="border-amber-200 dark:border-amber-800">
                    <TableCell className="font-medium text-amber-800 dark:text-amber-200">ageVerified</TableCell>
                    <TableCell>
                      Brukes til å huske at du har bekreftet din alder for å spille spill på nettsiden.
                    </TableCell>
                    <TableCell>Økt (forsvinner når nettleseren lukkes)</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="border-amber-300 dark:border-amber-700 bg-white/80 dark:bg-amber-950/80 shadow-md">
            <CardHeader>
              <CardTitle className="text-amber-900 dark:text-amber-100 flex items-center gap-2">
                <Settings className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                Hvordan administrere informasjonskapsler
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-amber-700 dark:text-amber-300">
              <p>
                De fleste nettlesere lar deg kontrollere informasjonskapsler gjennom innstillingene. Du kan vanligvis
                finne disse innstillingene i "Alternativer" eller "Preferanser"-menyen i nettleseren din.
              </p>

              <p>
                Du kan også slette informasjonskapsler som allerede er lagret på enheten din. Hvordan du gjør dette
                avhenger av hvilken nettleser du bruker.
              </p>

              <p className="mt-4">
                Vær oppmerksom på at hvis du velger å blokkere informasjonskapsler, kan det påvirke funksjonaliteten til
                vår nettside, og noen funksjoner kan ikke være tilgjengelige for deg.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-300 dark:border-amber-700 bg-white/80 dark:bg-amber-950/80 shadow-md">
            <CardHeader>
              <CardTitle className="text-amber-900 dark:text-amber-100 flex items-center gap-2">
                <Shield className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                Ansvarlig bruk av informasjonskapsler
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-amber-700 dark:text-amber-300">
              <p>
                Vi tar personvern på alvor og bruker informasjonskapsler på en ansvarlig måte. Vi samler kun inn data
                som er nødvendig for å forbedre din opplevelse på vår nettside.
              </p>

              <p>
                Vi selger aldri dine personopplysninger til tredjeparter, og vi bruker kun informasjonskapsler for de
                formålene som er beskrevet på denne siden.
              </p>

              <p>
                Hvis du har spørsmål om vår bruk av informasjonskapsler, kan du kontakte oss via kontaktskjemaet på vår
                nettside.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground text-amber-700 dark:text-amber-400">
            Sist oppdatert: 20. mai 2025
          </p>
        </div>
      </div>
    </div>
  )
}
