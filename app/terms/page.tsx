import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Vilkår og Betingelser</h1>
          <p className="text-muted-foreground md:text-xl/relaxed">
            Vennligst les disse vilkårene nøye før du bruker RuneSpark Studio.
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Aksept av vilkår</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Ved å få tilgang til eller bruke RuneSpark Studio, godtar du å være bundet av disse vilkårene og
                betingelsene. Hvis du ikke godtar alle vilkårene og betingelsene, må du ikke bruke plattformen.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Aldersgrense</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Du må være 18 år eller eldre for å bruke FrostPlay Network. Ved å bruke plattformen, bekrefter du at du
                er 18 år eller eldre.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Kun for underholdning</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                RuneSpark Studio er kun en sosial spillplattform for underholdningsformål. Ingen ekte penger er
                involvert, ingen premier eller belønninger, og ingen virtuelle gjenstander har noen reell verdi.
              </p>
              <p>
                Alle spill på plattformen er designet for underholdning og har ingen tilknytning til gambling eller
                pengespill.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Brukeratferd</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Du er ansvarlig for all aktivitet som skjer under din bruk av plattformen. Du godtar å ikke bruke
                plattformen til ulovlige eller uautoriserte formål.
              </p>
              <p>Du godtar å ikke:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Bruke plattformen på en måte som kan skade, deaktivere, overbelaste eller svekke plattformen</li>
                <li>Bruke automatiserte skript eller programmer for å samle data fra plattformen</li>
                <li>Forsøke å få uautorisert tilgang til plattformen eller andre kontoer</li>
                <li>Engasjere deg i atferd som er støtende, truende, ulovlig eller som krenker andres rettigheter</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Immaterielle rettigheter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                FrostPlay Network og alt innhold, funksjoner og funksjonalitet er og vil forbli RuneSpark Studios
                eksklusive eiendom. Plattformen er beskyttet av opphavsrett, varemerke og andre lover.
              </p>
              <p>
                Du godtar å ikke kopiere, modifisere, distribuere, selge eller leie noen del av plattformen uten
                uttrykkelig skriftlig tillatelse fra RuneSpark Studio.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Ansvarsfraskrivelse</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                FrostPlay Network leveres "som den er" og "som tilgjengelig" uten noen garantier av noe slag, enten
                uttrykt eller underforstått.
              </p>
              <p>RuneSpark Studio garanterer ikke at plattformen vil være uavbrutt, rettidig, sikker eller feilfri.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Ansvarsbegrensning</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                I den grad det er tillatt ved lov, skal RuneSpark Studio ikke være ansvarlig for noen indirekte,
                tilfeldige, spesielle, følgeskader eller straffeerstatning.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Endringer i vilkårene</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                RuneSpark Studio forbeholder seg retten til å endre eller erstatte disse vilkårene når som helst. Det er
                ditt ansvar å sjekke vilkårene periodisk for endringer.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Gjeldende lov</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Disse vilkårene skal styres av og tolkes i samsvar med lovene i Norge, uten hensyn til dets
                konfliktlovbestemmelser.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Kontakt</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Hvis du har spørsmål om disse vilkårene, vennligst kontakt oss på:</p>
              <p>
                E-post: info@runesparkstudio.com
                <br />
                Telefon: +47 917 486 021
                <br />
                Adresse: Bryggen 13, 5003 Bergen, Norway
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
