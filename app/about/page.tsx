import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Om GlacierVibe Hub</h1>
          <p className="text-muted-foreground md:text-xl/relaxed">
            GlacierVibe Hub er et norsk spillutviklingsstudio som fokuserer på å skape underholdende og avslappende
            sosiale spill for alle aldre.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Vår Visjon</h2>
            <p className="text-muted-foreground">
              Vår visjon er å skape en sosial spillplattform som gir spillere en avslappende og underholdende opplevelse
              uten stress eller press. Vi tror på at spill skal være en kilde til glede og avslapning, ikke en kilde til
              stress eller avhengighet.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Vår Misjon</h2>
            <p className="text-muted-foreground">
              Vår misjon er å utvikle spill som er enkle å lære, men som gir en dypere opplevelse jo mer du spiller. Vi
              fokuserer på å skape spill som er tilgjengelige for alle, uavhengig av alder eller erfaring med spill.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Kontakt Oss</h2>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>GlacierVibe Hub</p>
              <p>Torget 7, 5014 Bergen, Norway</p>
              <p>
                <a href="mailto:info@glaciervibehub.com" className="hover:text-foreground">
                  info@glaciervibehub.com
                </a>
              </p>
              <p>
                <a href="tel:+4792173985" className="hover:text-foreground">
                  +47 921 739 856
                </a>
              </p>
              <p>
                <a href="https://glaciervibehub.com" className="hover:text-foreground">
                  glaciervibehub.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="space-y-8">
          <Image
            src="/norwegian-game-studio.png"
            alt="GlacierVibe Hub kontor"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full"
          />

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Ansvarlig Spilling</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Vi er forpliktet til å fremme ansvarlig spilling. Alle våre spill er designet for underholdning, uten
                  ekte penger eller premier involvert.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sosial Opplevelse</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Vi tror på at spill skal bringe folk sammen. Våre spill er designet for å skape en sosial og
                  inkluderende opplevelse for alle spillere.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Norsk Arv</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Våre spill er inspirert av norsk natur, kultur og tradisjoner, og vi er stolte av å dele denne arven
                  med spillere over hele verden.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kvalitet og Innovasjon</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Vi streber etter å levere spill av høyeste kvalitet, med innovative spillmekanikker og engasjerende
                  innhold for alle våre spillere.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-24 text-center">
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          <strong>MERK:</strong> GlacierVibe Hub er kun en sosial spillplattform for underholdningsformål. Ingen ekte
          penger er involvert, ingen premier eller belønninger, og ingen virtuelle gjenstander har noen reell verdi. Du
          må være 18 år eller eldre for å bruke denne plattformen.
        </p>
      </div>
    </div>
  )
}
