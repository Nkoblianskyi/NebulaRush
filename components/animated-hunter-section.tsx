"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Target, Crosshair, Compass, ArrowRight, AlertCircle, Check, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useRouter } from "next/navigation"

export default function AnimatedHunterSection() {
  const [animationState, setAnimationState] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleConfirm = () => {
    sessionStorage.setItem("ageVerified", "true")
    setIsModalOpen(false)
    router.push("/game")
  }

  const handleReject = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full py-16 bg-gradient-to-b from-[#1A2530] to-[#0F1419] relative overflow-hidden">
      {/* Bakgrunnseffekter */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/hunting-pattern.png')] bg-repeat opacity-5"></div>

        {/* Animerte tåkeeffekter */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-900/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber-800/5 rounded-full blur-3xl"></div>
        </motion.div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Venstre side - Animert jeger */}
          <div className="relative h-[500px] flex items-center justify-center">
            <div className="relative w-full max-w-md h-full">
              {/* Bakgrunnsskog */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <Image src="/forest-dark.png" alt="Skog bakgrunn" fill className="object-cover opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1419] via-transparent to-transparent"></div>
              </div>

              {/* Jeger */}
              <motion.div
                className="absolute left-1/2 bottom-0 transform -translate-x-1/2"
                animate={{
                  y: animationState === 1 ? -10 : 0,
                }}
                transition={{ duration: 1 }}
              >
                <Image src="/hunter-character.png" alt="Jeger" width={300} height={400} className="object-contain" />
              </motion.div>

              {/* Animerte elementer */}
              <motion.div
                className="absolute top-1/4 left-1/4"
                animate={{
                  opacity: animationState === 0 ? 1 : 0,
                  scale: animationState === 0 ? 1 : 0.8,
                }}
                transition={{ duration: 0.5 }}
              >
                <Target className="h-12 w-12 text-amber-500/70" />
              </motion.div>

              <motion.div
                className="absolute top-1/3 right-1/4"
                animate={{
                  opacity: animationState === 2 ? 1 : 0,
                  scale: animationState === 2 ? 1 : 0.8,
                }}
                transition={{ duration: 0.5 }}
              >
                <Crosshair className="h-10 w-10 text-amber-500/70" />
              </motion.div>

              {/* Siktelinje */}
              {animationState === 3 && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "50%", opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-1/2 right-0 h-0.5 bg-red-500 origin-right"
                ></motion.div>
              )}

              {/* Partikler */}
              {Array.from({ length: 15 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-amber-400/40"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    y: [0, -20],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 5,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Høyre side - Tekst */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-2">Skogens Vokter</h2>
              <div className="w-20 h-1 bg-amber-500/50 rounded-full mb-6"></div>
              <p className="text-amber-100/90 text-lg">
                Tre inn i en mystisk verden hvor jegerens instinkter møter skogens hemmeligheter. I dette spillet blir
                du skogens vokter, en jeger som må balansere mellom å være predator og beskytter.
              </p>
            </motion.div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-amber-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-300 mb-1">Presisjon og tålmodighet</h3>
                  <p className="text-amber-100/70">
                    Perfeksjoner dine ferdigheter som jeger gjennom presisjon og tålmodighet. Vent på det perfekte
                    øyeblikket for å fange byttet ditt.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-amber-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <Compass className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-300 mb-1">Utforsk det ukjente</h3>
                  <p className="text-amber-100/70">
                    Naviger gjennom tette skoger, åpne sletter og mystiske daler. Hvert miljø byr på unike utfordringer
                    og bytter.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="pt-4"
            >
              <Button
                onClick={handleOpenModal}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-3 rounded-md"
              >
                <span className="flex items-center gap-2">
                  Start jakten
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Disclaimer Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md bg-zinc-900 text-white border-zinc-700">
          <DialogHeader>
            <div className="flex items-center gap-2 justify-center mb-2">
              <AlertCircle className="h-6 w-6 text-amber-400" />
              <DialogTitle className="text-amber-400 text-xl">Før du fortsetter</DialogTitle>
            </div>
            <DialogDescription className="text-center text-gray-300">Velkommen til Skogens Vokter!</DialogDescription>
          </DialogHeader>

          <div className="py-4 space-y-4">
            <p className="text-gray-300 text-center">
              Denne sosiale spillopplevelsen er utviklet kun for underholdning.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <X className="h-5 w-5 text-red-500" />
                <span className="text-gray-200">Ingen ekte penger involvert</span>
              </div>
              <div className="flex items-center gap-2">
                <X className="h-5 w-5 text-red-500" />
                <span className="text-gray-200">Ingen premier eller belønninger</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-gray-200">100% underholdning</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center h-5 w-5 rounded-full bg-amber-500 text-xs font-bold text-black">
                  18
                </span>
                <span className="text-gray-200">Kun for brukere over 18 år</span>
              </div>
            </div>

            <div className="rounded-md bg-zinc-800 p-4 mt-4">
              <p className="text-sm text-gray-300">
                Ved å klikke på "Bekreft", bekrefter du at du er over 18 år og samtykker til våre:
              </p>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="/ansvarsfraskrivelse" className="text-amber-400 hover:underline text-sm">
                    • Ansvarsfraskrivelse
                  </a>
                </li>
                <li>
                  <a href="/vilkar" className="text-amber-400 hover:underline text-sm">
                    • Ansvarlig spill
                  </a>
                </li>
                <li>
                  <a href="/personvern" className="text-amber-400 hover:underline text-sm">
                    • Personvernerklæring
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleReject}
              className="border-zinc-700 text-gray-300 hover:bg-zinc-800 hover:text-white"
            >
              Avvis
            </Button>
            <Button
              type="button"
              onClick={handleConfirm}
              className="bg-amber-500 hover:bg-amber-600 text-black font-bold"
            >
              Bekreft
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}
