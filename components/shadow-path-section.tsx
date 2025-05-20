"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useRouter } from "next/navigation"
import { AlertCircle, Check, X } from "lucide-react"

export default function ShadowPathSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const handleConfirm = () => {
    sessionStorage.setItem("ageVerified", "true")
    setIsModalOpen(false)
    router.push("/game")
  }

  return (
    <section className="w-full py-20 relative overflow-hidden bg-[#0F1419]">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/forest-dark.png')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1419]/90 to-[#0F1419]"></div>

        {/* Animated leaves/fog */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute top-2/3 right-1/4 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-3xl"></div>
        </motion.div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          {/* Title */}
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center justify-center gap-3"
            >
              <span className="text-amber-400 text-3xl">🜂</span>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-300 tracking-wider">"Skyggestien"</h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-amber-100/80 italic text-lg md:text-xl"
            >
              "Stillheten puster. Noe beveger seg i tykkelsen. Dette er ikke bare et spill. Det er instinkt."
            </motion.p>
          </div>

          {/* Content blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="flex justify-center">
                <span className="text-amber-400 text-3xl">🪵</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-200">Villmarkens puls:</h3>
              <div className="space-y-3 text-amber-100/70">
                <p>En test av kropp — og ro.</p>
                <p>Stier som ikke kan ses. Lyder som bare de utvalgte hører.</p>
                <p>Usynlig rovdyr eller byttets skygge — hva vil du være?</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex justify-center">
                <span className="text-amber-400 text-3xl">🌘</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-200">Alt begynner med stillhet...</h3>
              <div className="space-y-3 text-amber-100/70">
                <p>Ingen kart. Bare lukt, hørsel, følelse.</p>
                <p>Forstyrr harmonien — eller bli en del av den.</p>
                <p>Velg ikke våpenet, men tilnærmingen. Ikke målet, men øyeblikket.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="space-y-4"
            >
              <div className="flex justify-center">
                <span className="text-amber-400 text-3xl">🌀</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-200">Design og visuelle ideer:</h3>
              <div className="space-y-3 text-amber-100/70">
                <p>Dyp mørk bakgrunn med lette bevegelser av blader/tåke.</p>
                <p>Abstrakte symboler (tegn, totemer, dyrs skygger).</p>
                <p>Lydspor i ambient stil: dempet skogpust, fjerne fugleskrik.</p>
              </div>
            </motion.div>
          </div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="pt-8"
          >
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-transparent hover:bg-amber-900/30 text-amber-400 border-2 border-amber-500/50 text-lg px-8 py-6 rounded-full group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                🜃 Tre inn i skyggen
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  →
                </motion.span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-900/0 via-amber-700/20 to-amber-900/0 -translate-x-full group-hover:animate-shimmer" />
            </Button>
          </motion.div>

          {/* Abstract symbols */}
          <div className="absolute top-1/4 left-10 opacity-20">
            <motion.div
              animate={{
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.05, 1, 0.95, 1],
              }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
              className="text-amber-500 text-6xl"
            >
              ᛏ
            </motion.div>
          </div>
          <div className="absolute bottom-1/4 right-10 opacity-20">
            <motion.div
              animate={{
                rotate: [0, -10, 0, 10, 0],
                scale: [1, 0.95, 1, 1.05, 1],
              }}
              transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
              className="text-amber-500 text-6xl"
            >
              ᛉ
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
            <DialogDescription className="text-center text-gray-300">Velkommen til "Skyggestien"!</DialogDescription>
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
              onClick={() => setIsModalOpen(false)}
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
