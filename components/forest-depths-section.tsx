"use client"

import { motion } from "framer-motion"
import { Compass, Footprints, Eye, Wind } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ForestDepthsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#0F1419] relative overflow-hidden">
      {/* Bakgrunnseffekter */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/forest-dark.png')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1419]/90 to-[#0F1419]"></div>

        {/* Animerte partikler */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-amber-300/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 6,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-2">"Der sporene forsvinner"</h2>
            <p className="text-amber-100/80 italic text-lg md:text-xl">
              "I dypet av den stille skogen finnes ingen tid. Bare du, jordens pust og skritt som ikke høres."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-amber-900/10 border border-amber-800/20 rounded-lg p-6 text-left"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-900/30 flex items-center justify-center">
                  <Wind className="h-5 w-5 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-amber-300">🜁 Skogen kaller ikke</h3>
              </div>
              <div className="space-y-3 text-amber-100/70">
                <p>Skogen kaller ikke — den observerer.</p>
                <p>Ikke alle som går inn, finner veien tilbake.</p>
                <p>Ikke alle som ser, forstår.</p>
                <p>Ikke alle som jakter, overlever.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-amber-900/10 border border-amber-800/20 rounded-lg p-6 text-left"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-900/30 flex items-center justify-center">
                  <Eye className="h-5 w-5 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-amber-300">🎴 Øyeblikk avgjør</h3>
              </div>
              <div className="space-y-3 text-amber-100/70">
                <p>Alt avgjøres av øyeblikk.</p>
                <p>— En skygge som glir forbi.</p>
                <p>— Knitring av en gren.</p>
                <p>— Et blikk du ikke rakk å fange.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="bg-amber-900/10 border border-amber-800/20 rounded-lg p-6 text-left"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-900/30 flex items-center justify-center">
                  <Footprints className="h-5 w-5 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-amber-300">🔗 Etterlat ditt spor</h3>
              </div>
              <div className="space-y-3 text-amber-100/70">
                <p>Etterlat ditt spor.</p>
                <p>Eller bli en del av stillheten.</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="pt-8"
          >
            <Button
              asChild
              className="bg-transparent hover:bg-amber-900/30 text-amber-400 border-2 border-amber-500/50 text-lg px-8 py-6 rounded-full group relative overflow-hidden"
            >
              <Link href="/game" className="flex items-center gap-2">
                <Compass className="h-5 w-5" />
                <span>Utforsk dypet</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  →
                </motion.span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
