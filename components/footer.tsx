"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter, Youtube, Shield, AlertTriangle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#1A2530] to-[#0F1419] text-amber-200">
      {/* Naturlig separator */}
      <div className="w-full h-16 relative overflow-hidden">
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,100 C240,140 480,60 720,100 C960,140 1200,60 1440,100 L1440,0 L0,0 Z" fill="#1A2530"></path>
          </svg>
        </div>
      </div>

      <div className="container py-12 md:py-16">
        {/* Hovedinnhold */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Kolonne 1: Om oss */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="absolute inset-0 bg-amber-500 rounded-full opacity-20"
                ></motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-amber-400" />
                </div>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-amber-300">NEBULARUSH GAMES</h2>
            </div>

            <p className="text-amber-300/80 text-sm">
              NebulaRush Games er en sosial spillplattform for underholdning. Ingen ekte penger er involvert, ingen
              premier eller belønninger. Opplev spenningen ved jakt - helt uten risiko!
            </p>

            <div className="flex items-center space-x-2">
              <div className="border border-red-500 bg-red-900/30 text-red-300 rounded px-2 py-1 text-sm font-bold">
                18+
              </div>
              <span className="text-sm text-amber-300/80">Kun for voksne</span>
            </div>

          </div>

          {/* Kolonne 2: Juridisk */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-amber-300">
              <Shield className="h-5 w-5 text-amber-400" />
              Juridisk
            </h3>

            <div className="grid grid-cols-1 gap-2">
              <Link
                href="/vilkar"
                className="text-amber-300/80 hover:text-amber-300 transition-colors flex items-center gap-2 text-sm group"
              >
                <motion.div
                  className="w-1 h-1 bg-amber-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                ></motion.div>
                <span className="group-hover:translate-x-1 transition-transform">Vilkår og betingelser</span>
              </Link>
              <Link
                href="/personvern"
                className="text-amber-300/80 hover:text-amber-300 transition-colors flex items-center gap-2 text-sm group"
              >
                <motion.div
                  className="w-1 h-1 bg-amber-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: 0.2,
                  }}
                ></motion.div>
                <span className="group-hover:translate-x-1 transition-transform">Personvern</span>
              </Link>
              <Link
                href="/ansvarsfraskrivelse"
                className="text-amber-300/80 hover:text-amber-300 transition-colors flex items-center gap-2 text-sm group"
              >
                <motion.div
                  className="w-1 h-1 bg-amber-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: 0.4,
                  }}
                ></motion.div>
                <span className="group-hover:translate-x-1 transition-transform">Ansvarsfraskrivelse</span>
              </Link>
              <Link
                href="/cookies"
                className="text-amber-300/80 hover:text-amber-300 transition-colors flex items-center gap-2 text-sm group"
              >
                <motion.div
                  className="w-1 h-1 bg-amber-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: 0.6,
                  }}
                ></motion.div>
                <span className="group-hover:translate-x-1 transition-transform">Informasjonskapsler</span>
              </Link>
            </div>
          </div>

          {/* Kolonne 3: Advarsel */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-amber-300">
              <AlertTriangle className="h-5 w-5 text-amber-400" />
              Advarsel
            </h3>

            <div className="bg-gradient-to-r from-amber-900/40 to-amber-800/40 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-700/50 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-amber-300" />
                </div>
                <div>
                  <h4 className="text-amber-100 font-bold">Kun for underholdning</h4>
                  <p className="mt-1 text-sm text-amber-200">
                    Dette spillet er <strong>kun for underholdningsformål</strong>. Ingen ekte penger er involvert,
                    ingen premier eller belønninger, og ingen virtuelle gjenstander har noen reell verdi.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-900/40 to-red-800/40 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-700/50 flex items-center justify-center">
                  <span className="text-xl font-bold text-red-300">18+</span>
                </div>
                <div>
                  <h4 className="text-red-100 font-bold">Aldersgrense</h4>
                  <p className="mt-1 text-sm text-red-200">
                    Dette spillet er kun for personer som er 18 år eller eldre. Ved å bruke denne plattformen bekrefter
                    du at du er 18 år eller eldre.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kolonne 4: Støtte */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-amber-300">
              <Shield className="h-5 w-5 text-amber-400" />
              Støtte
            </h3>

            <div className="space-y-3">
              <div className="flex flex-col gap-4">
                <a
                  href="https://www.hjelpelinjen.no"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground bg-black w-40 p-4 rounded-md transition-transform hover:scale-105"
                >
                  <Image src="/aware.webp" alt="Hjelpelinjen logo" width={100} height={30} className="h-14 w-auto" />
                </a>
                <a
                  href="https://www.gamcare.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground bg-black w-40 p-4 rounded-md transition-transform hover:scale-105"
                >
                  <Image src="/aware2.png" alt="GamCare logo" width={100} height={30} className="h-10 w-auto" />
                </a>
                <a
                  href="https://www.begambleaware.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground bg-black w-40 p-4 rounded-md transition-transform hover:scale-105"
                >
                  <Image src="/aware1.webp" alt="GambleAware logo" width={100} height={30} className="h-18 w-40" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bunntekst */}
        <div className="mt-12 pt-8 border-t border-amber-800/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-amber-400">
              &copy; {new Date().getFullYear()} NebulaRush Games. Alle rettigheter reservert.
            </p>

            <div className="flex items-center gap-6">

              <div className="text-xs text-amber-400">Sist oppdatert: 20. mai 2025</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
