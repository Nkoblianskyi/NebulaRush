"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Shield, Trophy } from "lucide-react"
import { HuntingIcon } from "@/components/hunting-icon"

export default function GamePreview() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [animationFrame, setAnimationFrame] = useState(0)
  const router = useRouter()

  // Animasjon for spillforhåndsvisningen
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationFrame((prev) => (prev + 1) % 5)
    }, 800)

    return () => clearInterval(interval)
  }, [])

  const handlePlayClick = () => {
    setIsModalOpen(true)
  }

  const handleConfirm = () => {
    // Set a session storage flag to indicate age verification
    sessionStorage.setItem("ageVerified", "true")
    setIsModalOpen(false)
    router.push("/game")
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Card className="overflow-hidden border-2 border-amber-600 shadow-xl">
        <div className="relative aspect-video bg-gradient-to-b from-green-800 to-green-900">
          {/* Animert spillforhåndsvisning */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-video">
              {/* Bakgrunn med kamuflasje-mønster */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div
                      key={i}
                      className={`${i % 3 === 0 ? "bg-green-700" : i % 3 === 1 ? "bg-green-800" : "bg-green-900"}`}
                    />
                  ))}
                </div>
              </div>

              {/* Spillrutenett */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-5 grid-rows-3 gap-1 p-4 bg-green-800/80 rounded-lg border-2 border-amber-600">
                  {Array.from({ length: 15 }).map((_, i) => {
                    // Bestem hvilke symboler som skal "matche" basert på animasjonsrammen
                    const isMatched =
                      (animationFrame === 1 && [0, 1, 2, 3, 4].includes(i)) ||
                      (animationFrame === 2 && [5, 6, 7, 8, 9].includes(i)) ||
                      (animationFrame === 3 && [10, 11, 12, 13, 14].includes(i)) ||
                      (animationFrame === 4 && [0, 6, 12, 8, 4].includes(i))

                    // Velg symbol basert på posisjon
                    const symbolTypes: (
                      | "deer"
                      | "boar"
                      | "rabbit"
                      | "duck"
                      | "rifle"
                      | "bow"
                      | "knife"
                      | "hunter"
                      | "target"
                      | "wild"
                    )[] = [
                      "deer",
                      "boar",
                      "rabbit",
                      "duck",
                      "rifle",
                      "bow",
                      "knife",
                      "hunter",
                      "target",
                      "wild",
                      "deer",
                      "boar",
                      "rabbit",
                      "duck",
                      "rifle",
                    ]

                    return (
                      <div
                        key={i}
                        className={`flex items-center justify-center p-1 rounded ${
                          isMatched ? "bg-amber-300/30" : "bg-green-700/50"
                        }`}
                      >
                        <HuntingIcon type={symbolTypes[i]} size={32} isMatched={isMatched} />
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Spilltittel */}
              <div className="absolute top-2 left-0 right-0 text-center">
                <h3 className="text-amber-300 font-bold text-xl flex items-center justify-center gap-2">
                  <Trophy className="h-5 w-5" />
                  HUNTER'S FORTUNE
                  <Trophy className="h-5 w-5" />
                </h3>
              </div>

              {/* Spillkontroller */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                <div className="bg-amber-600 rounded-full px-4 py-1 text-amber-950 font-bold text-sm animate-pulse">
                  SPINN NÅ!
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
            <Button
              onClick={handlePlayClick}
              size="lg"
              className="font-bold bg-amber-600 hover:bg-amber-700 text-white"
            >
              Spill Nå
            </Button>
          </div>
        </div>
        <CardContent className="p-6 text-center bg-gradient-to-r from-amber-50 to-amber-100">
          <p className="text-amber-900">
            Opplev spenningen ved jakt i vårt sosiale spillunivers! Spinn hjulene på vårt 5x3 rutenett, match
            jaktsymboler på linjene, og samle poeng for å låse opp nye nivåer og bonusfunksjoner. Nyt all moroa - helt
            uten ekte penger!
          </p>
        </CardContent>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-amber-600" />
            </div>
            <DialogTitle className="text-center">Aldersbekreftelse</DialogTitle>
            <DialogDescription className="text-center">
              Dette sosiale spillet er kun for personer som er 18 år eller eldre. Innholdet er kun for
              underholdningsformål, uten ekte penger.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="rounded-md bg-gradient-to-r from-amber-800 to-amber-900 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-amber-300" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-amber-100">Viktig informasjon</h3>
                  <div className="mt-2 text-sm text-amber-200">
                    <p>
                      Hunter's Fortune er kun en sosial spillplattform for underholdningsformål. Ingen ekte penger er
                      involvert, ingen premier eller belønninger, og ingen virtuelle gjenstander har noen reell verdi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter className="flex flex-col sm:flex-row sm:justify-between sm:space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="border-amber-300 text-amber-800 hover:bg-amber-50"
            >
              Jeg er under 18 år
            </Button>
            <Button type="button" onClick={handleConfirm} className="bg-amber-600 hover:bg-amber-700 text-white">
              Jeg er 18 år eller eldre
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
