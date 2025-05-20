import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield } from "lucide-react"

export default function DisclaimerPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ansvarsfraskrivelse</h1>
          <p className="text-muted-foreground md:text-xl/relaxed">Viktig informasjon om bruk av NebulaRush Games</p>
        </div>

        <div className="rounded-lg bg-gradient-to-r from-amber-800 to-amber-900 p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-700/50 flex items-center justify-center">
              <Shield className="h-6 w-6 text-amber-300" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-amber-100">Viktig melding</h2>
              <p className="mt-2 text-amber-200">
                Hunter's Fortune er kun en sosial spillplattform for underholdningsformål. Ingen ekte penger er
                involvert, ingen premier eller belønninger, og ingen virtuelle gjenstander har noen reell verdi. Du må
                være 18 år eller eldre for å bruke denne plattformen. Hvis det slutter å være gøy, ta et skritt tilbake.
                Du kan også besøke hjelpesider som{" "}
                <a
                  href="https://hjelpelinjen.no"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded bg-amber-700 px-1.5 py-0.5 font-medium text-amber-100 transition-colors hover:bg-amber-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-1"
                >
                  Hjelpelinjen.no
                </a>
                ,{" "}
                <a
                  href="https://gamcare.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded bg-amber-700 px-1.5 py-0.5 font-medium text-amber-100 transition-colors hover:bg-amber-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-1"
                >
                  GamCare
                </a>{" "}
                eller{" "}
                <a
                  href="https://www.gambleaware.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded bg-amber-700 px-1.5 py-0.5 font-medium text-amber-100 transition-colors hover:bg-amber-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-1"
                >
                  GambleAware
                </a>{" "}
                for støtte og råd.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Aksept av ansvarsfraskrivelse</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Ved å bruke NebulaRush Games, godtar du fullt ut og aksepterer denne ansvarsfraskrivelsen. Hvis du ikke
                godtar noen del av denne ansvarsfraskrivelsen, må du ikke bruke vår plattform.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Kun for underholdning</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                NebulaRush Games og alle spill på plattformen er kun for underholdningsformål. Alle poeng, nivåer,
                virtuelle gjenstander eller andre elementer i spillene har ingen reell verdi og kan ikke byttes mot
                penger eller andre verdier.
              </p>
              <p>
                Vi tilbyr ingen gambling-tjenester, og ingen av våre spill involverer ekte penger eller gir mulighet for
                å vinne ekte penger eller premier.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Aldersgrense</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                NebulaRush Games er kun for personer som er 18 år eller eldre. Ved å bruke vår plattform bekrefter du at
                du er 18 år eller eldre. Vi tar ikke ansvar for mindreårige som får tilgang til plattformen ved å oppgi
                falsk informasjon om sin alder.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Ingen garantier</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                NebulaRush Games leveres "som den er" og "som tilgjengelig" uten noen garantier av noe slag, enten
                uttrykt eller underforstått. Vi garanterer ikke at plattformen vil være uavbrutt, rettidig, sikker eller
                feilfri.
              </p>
              <p>
                Vi garanterer ikke at resultatene som kan oppnås ved bruk av plattformen vil være nøyaktige eller
                pålitelige, eller at kvaliteten på produkter, tjenester, informasjon eller annet materiale som kjøpes
                eller oppnås av deg gjennom plattformen vil møte dine forventninger.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Ansvarsbegrensning</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                I den grad det er tillatt ved lov, skal NebulaRush Games ikke være ansvarlig for noen direkte,
                indirekte, tilfeldige, spesielle, følgeskader eller straffeerstatning som følge av din bruk av eller
                manglende evne til å bruke plattformen.
              </p>
              <p>
                Dette inkluderer, men er ikke begrenset til, skader for tap av fortjeneste, goodwill, bruk, data eller
                andre immaterielle tap, selv om vi har blitt informert om muligheten for slike skader.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Ansvarlig spilling</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Vi oppfordrer til ansvarlig spilling og anbefaler at du tar regelmessige pauser fra skjermen. Hvis du
                føler at du bruker for mye tid på våre spill eller hvis det påvirker ditt daglige liv negativt,
                anbefaler vi at du søker hjelp.
              </p>
              <p>
                Ressurser for støtte inkluderer{" "}
                <a
                  href="https://hjelpelinjen.no"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Hjelpelinjen.no
                </a>
                ,{" "}
                <a
                  href="https://gamcare.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GamCare
                </a>{" "}
                og{" "}
                <a
                  href="https://www.gambleaware.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GambleAware
                </a>
                .
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Endringer i ansvarsfraskrivelsen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Vi forbeholder oss retten til å endre eller oppdatere denne ansvarsfraskrivelsen når som helst uten
                forvarsel. Fortsatt bruk av plattformen etter slike endringer utgjør din aksept av den reviderte
                ansvarsfraskrivelsen.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Kontakt</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Hvis du har spørsmål om denne ansvarsfraskrivelsen, vennligst kontakt oss på:</p>
              <p>
                NebulaRush Games
                <br />
                nebularushgames.com
                <br />
                +47 918 224 187
                <br />
                Kirkegata 20, 7012 Trondheim, Norway
                <br />
                info@nebularushgames.com
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">Sist oppdatert: 20. mai 2025</p>
        </div>
      </div>
    </div>
  )
}
