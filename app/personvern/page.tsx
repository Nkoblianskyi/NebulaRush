import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Personvernpolicy</h1>
          <p className="text-muted-foreground md:text-xl/relaxed">
            Hvordan vi beskytter og behandler dine personopplysninger
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Introduksjon</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                GlacierVibe Hub respekterer ditt personvern og er forpliktet til å beskytte dine personopplysninger.
                Denne personvernpolicyen vil informere deg om hvordan vi behandler dine personopplysninger når du
                besøker vår nettside og fortelle deg om dine personvernrettigheter.
              </p>
              <p>
                Det er viktig at du leser denne personvernpolicyen sammen med andre personvernerklæringer vi kan gi ved
                spesifikke anledninger når vi samler inn eller behandler personopplysninger om deg, slik at du er fullt
                klar over hvordan og hvorfor vi bruker dataene dine.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Dataansvarlig</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                GlacierVibe Hub er dataansvarlig og ansvarlig for dine personopplysninger (kollektivt referert til som
                "GlacierVibe Hub", "vi", "oss" eller "vår" i denne personvernpolicyen).
              </p>
              <p>
                Vi har utnevnt en personvernansvarlig som er ansvarlig for å overvåke spørsmål i forbindelse med denne
                personvernpolicyen. Hvis du har spørsmål om denne personvernpolicyen, inkludert eventuelle forespørsler
                om å utøve dine juridiske rettigheter, vennligst kontakt personvernansvarlig ved hjelp av detaljene
                nedenfor.
              </p>
              <p>
                <strong>Kontaktdetaljer:</strong>
                <br />
                GlacierVibe Hub
                <br />
                glaciervibehub.com
                <br />
                +47 921 739 856
                <br />
                Torget 7, 5014 Bergen, Norway
                <br />
                info@glaciervibehub.com
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Informasjonen vi samler inn om deg</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Vi kan samle inn, bruke, lagre og overføre forskjellige typer personopplysninger om deg, inkludert:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Identitetsdata:</strong> inkluderer fornavn, etternavn, brukernavn eller lignende
                  identifikator.
                </li>
                <li>
                  <strong>Kontaktdata:</strong> inkluderer e-postadresse og telefonnumre.
                </li>
                <li>
                  <strong>Tekniske data:</strong> inkluderer IP-adresse, påloggingsdata, nettlesertype og versjon,
                  tidssoneinnstilling og plassering, nettlesertillegg, operativsystem og plattform, og annen teknologi
                  på enhetene du bruker for å få tilgang til denne nettsiden.
                </li>
                <li>
                  <strong>Bruksdata:</strong> inkluderer informasjon om hvordan du bruker vår nettside og tjenester.
                </li>
                <li>
                  <strong>Markedsførings- og kommunikasjonsdata:</strong> inkluderer dine preferanser for å motta
                  markedsføring fra oss og våre tredjeparter, og dine kommunikasjonspreferanser.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Hvordan vi bruker dine personopplysninger</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Vi vil bare bruke dine personopplysninger når loven tillater det. Mest vanlig vil vi bruke dine
                personopplysninger i følgende omstendigheter:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Der vi trenger å utføre kontrakten vi er i ferd med å inngå eller har inngått med deg.</li>
                <li>
                  Der det er nødvendig for våre legitime interesser (eller de til en tredjepart) og dine interesser og
                  grunnleggende rettigheter ikke overstyrer disse interessene.
                </li>
                <li>Der vi må overholde en juridisk eller regulatorisk forpliktelse.</li>
              </ul>
              <p>
                Generelt sett stoler vi ikke på samtykke som et juridisk grunnlag for å behandle dine personopplysninger
                annet enn i forhold til å sende direkte markedsføringskommunikasjon til deg via e-post eller
                tekstmelding. Du har rett til å trekke tilbake samtykke til markedsføring når som helst ved å kontakte
                oss.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Dataoppbevaring</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Vi vil bare beholde dine personopplysninger så lenge som nødvendig for å oppfylle formålene vi samlet
                dem inn for, inkludert for å tilfredsstille eventuelle juridiske, regnskapsmessige eller
                rapporteringskrav.
              </p>
              <p>
                For å bestemme den passende oppbevaringsperioden for personopplysninger, vurderer vi mengden, arten og
                sensitiviteten til personopplysningene, den potensielle risikoen for skade fra uautorisert bruk eller
                avsløring av dine personopplysninger, formålene som vi behandler dine personopplysninger for og om vi
                kan oppnå disse formålene gjennom andre midler, og de gjeldende juridiske kravene.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Dine juridiske rettigheter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Under visse omstendigheter har du rettigheter under databeskyttelseslover i forhold til dine
                personopplysninger, inkludert retten til å:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Be om tilgang til dine personopplysninger.</li>
                <li>Be om korrigering av dine personopplysninger.</li>
                <li>Be om sletting av dine personopplysninger.</li>
                <li>Protestere mot behandling av dine personopplysninger.</li>
                <li>Be om begrensning av behandling av dine personopplysninger.</li>
                <li>Be om overføring av dine personopplysninger.</li>
                <li>Rett til å trekke tilbake samtykke.</li>
              </ul>
              <p>
                Hvis du ønsker å utøve noen av rettighetene som er angitt ovenfor, vennligst kontakt vår
                personvernansvarlig.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Kontakt oss</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Hvis du har spørsmål om vår bruk av informasjonskapsler eller denne informasjonskapsel-policyen,
                vennligst kontakt oss på:
              </p>
              <p>
                GlacierVibe Hub
                <br />
                glaciervibehub.com
                <br />
                +47 921 739 856
                <br />
                Torget 7, 5014 Bergen, Norway
                <br />
                info@glaciervibehub.com
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
