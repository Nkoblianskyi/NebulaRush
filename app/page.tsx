import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { HuntingIcon } from "@/components/hunting-icon"
import { Trophy, Target, Shield, Check } from "lucide-react"
import ShadowPathSection from "@/components/shadow-path-section"
import ForestDepthsSection from "@/components/forest-depths-section"
import AnimatedHunterSection from "@/components/animated-hunter-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Jakt-tema */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden bg-[#2C3E50]">
        {/* Bakgrunnseffekter */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hunting-background.png')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C3E50]/80 to-[#2C3E50]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Venstre side - Jeger */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/hunter-character.png"
                alt="Jeger karakter"
                width={400}
                height={500}
                className="relative z-10"
              />

              {/* Flytende trofeer og ikoner */}
              <div className="absolute top-10 left-0 animate-float-slow">
                <HuntingIcon type="deer" size={60} />
              </div>
              <div className="absolute top-20 right-0 animate-float-medium">
                <HuntingIcon type="boar" size={50} />
              </div>
              <div className="absolute bottom-40 left-10 animate-float-fast">
                <HuntingIcon type="target" size={40} />
              </div>
              <div className="absolute bottom-60 right-10 animate-float-medium">
                <HuntingIcon type="rifle" size={55} />
              </div>
              <div className="absolute top-40 right-20 animate-float-slow">
                <Trophy className="h-12 w-12 text-amber-400" />
              </div>
            </div>
          </div>

          {/* Høyre side - Tekst */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-block bg-amber-500 px-4 py-1 rounded-full text-amber-900 font-bold text-sm">
                #1 JAKTOPPLEVELSE
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                SKOGENS <span className="text-amber-500">VOKTER</span>
              </h1>
              <p className="text-xl text-amber-100 max-w-md mx-auto lg:mx-0">
                Opplev spenningen ved jakt i vårt sosiale spillunivers. Spor byttet, samle troféer og bli den ultimate
                jegeren!
              </p>
              <p className="text-amber-300 text-sm">KLAR FOR Å JAKTE? — HELT GRATIS OG BARE FOR MORO SKYLD!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ny seksjon med animert jeger */}
      <AnimatedHunterSection />

      {/* Skyggestien seksjon */}
      <ShadowPathSection />

      {/* Ny seksjon "Der sporene forsvinner" */}
      <ForestDepthsSection />

      {/* Spillbeskrivelse */}
      <section className="w-full py-16 bg-[#2C3E50]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-amber-300">SPILLBESKRIVELSE</h2>
              <p className="text-amber-100 mt-4 max-w-2xl mx-auto">
                Skogens Vokter er et spennende eventyrspill som tar deg med på en autentisk jaktopplevelse gjennom
                Norges vakre skoger. Utforsk naturen, spor dyr og opplev spenningen ved jakt - helt uten risiko!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1E2A38] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-amber-300 mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Spillopplevelse
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-amber-100">
                      Utforsk detaljerte skogsmiljøer med realistiske dyrelyder og natureffekter
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-amber-100">Lær om forskjellige dyrearter og deres naturlige habitat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-amber-100">Opplev realistiske jaktscenarier med varierte utfordringer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-amber-100">Forbedre dine ferdigheter som virtuell jeger gjennom spillet</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#1E2A38] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-amber-300 mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Spillets Mål
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-amber-100">Bli en dyktig virtuell jeger gjennom øvelse og tålmodighet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-amber-100">Lær om bærekraftig jakt og respekt for naturen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-amber-100">Dokumenter dine opplevelser i en digital jaktdagbok</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-amber-100">Del dine jakthistorier med andre spillere i fellesskapet</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spillfunksjoner */}
      <section className="w-full py-16 bg-[#2C3E50]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">JAKTFUNKSJONER</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#1E2A38] p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto bg-amber-600 rounded-full flex items-center justify-center mb-4">
                <HuntingIcon type="deer" size={40} />
              </div>
              <h3 className="text-xl font-bold text-amber-400 mb-2">Eksotiske Dyr</h3>
              <p className="text-amber-200">Match forskjellige dyrearter for å samle unike troféer og bonuser.</p>
            </div>

            <div className="bg-[#1E2A38] p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto bg-amber-600 rounded-full flex items-center justify-center mb-4">
                <HuntingIcon type="rifle" size={40} />
              </div>
              <h3 className="text-xl font-bold text-amber-400 mb-2">Jaktutstyr</h3>
              <p className="text-amber-200">Samle jaktutstyr-symboler for å aktivere spesielle bonusfunksjoner.</p>
            </div>

            <div className="bg-[#1E2A38] p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto bg-amber-600 rounded-full flex items-center justify-center mb-4">
                <HuntingIcon type="target" size={40} />
              </div>
              <h3 className="text-xl font-bold text-amber-400 mb-2">Presisjonsbonuser</h3>
              <p className="text-amber-200">Få bonuspoeng for presisjon og nøyaktighet i spesielle bonusrunder.</p>
            </div>

            <div className="bg-[#1E2A38] p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto bg-amber-600 rounded-full flex items-center justify-center mb-4">
                <Trophy className="h-8 w-8 text-amber-300" />
              </div>
              <h3 className="text-xl font-bold text-amber-400 mb-2">Trofésamling</h3>
              <p className="text-amber-200">Bygg din egen trofésamling med sjeldne og verdifulle jakttrofeer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="w-full py-6 bg-amber-900 text-center">
        <div className="container mx-auto px-4">
          <p className="text-amber-300 text-sm max-w-3xl mx-auto">
            <strong>MERK:</strong> Dette spillet er kun for underholdningsformål. Ingen ekte penger er involvert, ingen
            premier eller belønninger, og ingen virtuelle gjenstander har noen reell verdi. Du må være 18 år eller eldre
            for å spille.
          </p>
        </div>
      </section>
    </div>
  )
}
