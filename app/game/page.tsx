"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, ArrowLeft } from "lucide-react"
import HuntingSlotMachine from "@/components/forest-game-grid"

export default function GamePage() {
  const [isVerified, setIsVerified] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if the user has verified their age in this session
    const sessionVerified = sessionStorage.getItem("ageVerified")
    if (sessionVerified === "true") {
      setIsVerified(true)
    } else {
      // If not verified, redirect to home page
      router.push("/")
    }
  }, [router])

  if (!isVerified) {
    return null // Don't render anything while checking or redirecting
  }

  return (
    <div className="container py-8 md:py-12 bg-gradient-to-b from-green-50 to-amber-50">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
            Hunter's Fortune
          </h1>
          <p className="max-w-[600px] text-green-700 md:text-xl/relaxed">
            Spinn hjulene og match jakt-symboler for å vinne store gevinster i dette spennende jaktspillet!
          </p>
        </div>

        <div className="w-full max-w-5xl">
          <HuntingSlotMachine />
        </div>

        <div className="mt-8 w-full max-w-3xl">
          <div className="bg-gradient-to-r from-amber-800 to-amber-900 rounded-lg p-4 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-700/50 flex items-center justify-center">
                <Shield className="h-6 w-6 text-amber-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-amber-100 mb-2">Kun for underholdning</h3>
                <p className="text-amber-200 text-sm">
                  Dette spillet er <strong>kun for underholdningsformål</strong>. Ingen ekte penger er involvert, ingen
                  premier eller belønninger, og ingen virtuelle gjenstander har noen reell verdi. Spill ansvarlig og ta
                  pauser regelmessig.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Button
          asChild
          variant="outline"
          className="border-green-700 text-green-800 hover:bg-green-50 flex items-center gap-2"
        >
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Tilbake til Hjem
          </Link>
        </Button>
      </div>
    </div>
  )
}
