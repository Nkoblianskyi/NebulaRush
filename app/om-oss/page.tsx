import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Target, Gamepad2, Users, Check, Info } from "lucide-react"

export default function OmOssPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 to-amber-100/50 dark:from-amber-950/30 dark:to-amber-900/30">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 overflow-hidden bg-[#1E2A38]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/hunting-pattern.png')] bg-repeat opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E2A38]/90 to-[#1E2A38]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-amber-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-300">Om oss</h1>
            <p className="text-xl md:text-2xl text-amber-100/80 max-w-2xl mx-auto">
              Vi gjør spilling gøy, gratis og ansvarlig.
            </p>
            <div className="w-24 h-1 bg-amber-500/50 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <div className="mb-16">
            <div className="bg-white dark:bg-amber-950/40 rounded-xl p-8 shadow-lg border border-amber-200 dark:border-amber-800">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="relative h-64 w-64 mx-auto">
                    <div className="absolute inset-0 bg-amber-500/20 rounded-full"></div>
                    <div className="absolute inset-2 bg-amber-500/30 rounded-full"></div>
                    <div className="absolute inset-4 bg-amber-500/40 rounded-full"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Target className="h-32 w-32 text-amber-500" />
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-amber-800 dark:text-amber-300">
                    NebulaRush Games
                  </h2>
                  <p className="text-lg text-amber-700 dark:text-amber-200">
                    NebulaRush Games er en norsk plattform for sosiale casinospill – laget for deg som elsker spill, men
                    ønsker en trygg og pengeløs opplevelse.
                  </p>
                  <p className="text-lg text-amber-700 dark:text-amber-200">
                    Vår visjon er å skape en sosial spillplattform som gir spillere en avslappende og underholdende
                    opplevelse uten stress eller press. Vi tror på at spill skal være en kilde til glede og avslapning.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hva vi tilbyr */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-amber-800 dark:text-amber-300 inline-flex items-center gap-2">
                <Info className="h-6 w-6 text-amber-500" />
                Hva vi tilbyr
              </h2>
              <div className="w-24 h-1 bg-amber-500/50 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-amber-950/40 rounded-xl p-6 shadow-md border border-amber-200 dark:border-amber-800 flex items-start gap-4">
                <div className="bg-amber-100 dark:bg-amber-900/50 w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                  🆓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300 mb-2">100% gratis å spille</h3>
                  <p className="text-amber-700 dark:text-amber-200">
                    Alle våre spill er helt gratis å spille. Du trenger aldri å betale for å nyte spillopplevelsen.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-amber-950/40 rounded-xl p-6 shadow-md border border-amber-200 dark:border-amber-800 flex items-start gap-4">
                <div className="bg-amber-100 dark:bg-amber-900/50 w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                  🎲
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300 mb-2">
                    For underholdningsformål
                  </h3>
                  <p className="text-amber-700 dark:text-amber-200">
                    Våre spill er designet for å underholde og gi en morsom spillopplevelse uten stress eller press.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-amber-950/40 rounded-xl p-6 shadow-md border border-amber-200 dark:border-amber-800 flex items-start gap-4">
                <div className="bg-amber-100 dark:bg-amber-900/50 w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                  ❌
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300 mb-2">Uten ekte penger</h3>
                  <p className="text-amber-700 dark:text-amber-200">
                    Ingen ekte penger er involvert, ingen innsats, ingen premier eller belønninger med reell verdi.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-amber-950/40 rounded-xl p-6 shadow-md border border-amber-200 dark:border-amber-800 flex items-start gap-4">
                <div className="bg-amber-100 dark:bg-amber-900/50 w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                  🎯
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300 mb-2">
                    Fokus på spillopplevelsen
                  </h3>
                  <p className="text-amber-700 dark:text-amber-200">
                    Vi fokuserer på å skape engasjerende og underholdende spill med høy kvalitet og god grafikk.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hva vi står for */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-amber-800 dark:text-amber-300 inline-flex items-center gap-2">
                <Target className="h-6 w-6 text-amber-500" />
                Hva vi står for
              </h2>
              <div className="w-24 h-1 bg-amber-500/50 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-white to-amber-50 dark:from-amber-950/60 dark:to-amber-900/60 border-amber-200 dark:border-amber-800 overflow-hidden">
                <div className="h-2 bg-amber-500"></div>
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div className="bg-amber-100 dark:bg-amber-900/50 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
                      <Gamepad2 className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300">Spill uten press</h3>
                    <p className="text-amber-700 dark:text-amber-200">
                      Vi tror at spilling skal være morsomt – ikke knyttet til risiko, tap eller pengebruk.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white to-amber-50 dark:from-amber-950/60 dark:to-amber-900/60 border-amber-200 dark:border-amber-800 overflow-hidden">
                <div className="h-2 bg-amber-500"></div>
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div className="bg-amber-100 dark:bg-amber-900/50 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
                      <div className="text-xl font-bold text-amber-600 dark:text-amber-400">18+</div>
                    </div>
                    <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300">For voksne (18+)</h3>
                    <p className="text-amber-700 dark:text-amber-200">
                      Plattformen er kun ment for voksne. Vi promoterer ansvarlig bruk og har ingen elementer av
                      pengespill.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white to-amber-50 dark:from-amber-950/60 dark:to-amber-900/60 border-amber-200 dark:border-amber-800 overflow-hidden">
                <div className="h-2 bg-amber-500"></div>
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div className="bg-amber-100 dark:bg-amber-900/50 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
                      <Shield className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300">Trygghet og åpenhet</h3>
                    <p className="text-amber-700 dark:text-amber-200">
                      Vi samler ikke inn personlig betalingsinformasjon. All data som behandles er anonym og i tråd med
                      GDPR og norsk lovgivning.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Våre verdier */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-amber-800 dark:text-amber-300">Våre verdier</h2>
              <div className="w-24 h-1 bg-amber-500/50 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="bg-white dark:bg-amber-950/40 rounded-xl p-8 shadow-lg border border-amber-200 dark:border-amber-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image src="/norwegian-game-studio.png" alt="NebulaRush Games kontor" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent flex items-end">
                    <p className="text-white p-4 font-medium">Vårt kreative team i aksjon</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-amber-500 flex-shrink-0" />
                      <h3 className="font-bold text-amber-800 dark:text-amber-300">Kvalitet fremfor kvantitet</h3>
                    </div>
                    <p className="text-amber-700 dark:text-amber-200 pl-7">
                      Vi fokuserer på å lage færre, men bedre spill med høy kvalitet og god spillopplevelse.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-amber-500 flex-shrink-0" />
                      <h3 className="font-bold text-amber-800 dark:text-amber-300">Ansvarlig spilling</h3>
                    </div>
                    <p className="text-amber-700 dark:text-amber-200 pl-7">
                      Vi promoterer ansvarlig spilling og oppmuntrer til sunne spillvaner.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-amber-500 flex-shrink-0" />
                      <h3 className="font-bold text-amber-800 dark:text-amber-300">Innovasjon</h3>
                    </div>
                    <p className="text-amber-700 dark:text-amber-200 pl-7">
                      Vi streber etter å være innovative og skape nye, spennende spillopplevelser.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-amber-500 flex-shrink-0" />
                      <h3 className="font-bold text-amber-800 dark:text-amber-300">Fellesskap</h3>
                    </div>
                    <p className="text-amber-700 dark:text-amber-200 pl-7">
                      Vi verdsetter vårt fellesskap av spillere og lytter til deres tilbakemeldinger.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-gradient-to-r from-amber-800 to-amber-900 rounded-xl p-6 text-amber-100">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-700/50 flex items-center justify-center">
                <Shield className="h-6 w-6 text-amber-300" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-amber-300 mb-2">Viktig informasjon</h3>
                <p className="text-amber-200">
                  NebulaRush Games er kun en sosial spillplattform for underholdningsformål. Ingen ekte penger er
                  involvert, ingen premier eller belønninger, og ingen virtuelle gjenstander har noen reell verdi. Du må
                  være 18 år eller eldre for å bruke denne plattformen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
