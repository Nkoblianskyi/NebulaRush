"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { AlertCircle, Shield } from "lucide-react"

export default function AgeVerificationModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasVerifiedAge = localStorage.getItem("hasVerifiedAge")
    if (!hasVerifiedAge) {
      setIsOpen(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("hasVerifiedAge", "true")
    setIsOpen(false)
  }

  const handleReject = () => {
    window.location.href = "https://www.google.com"
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-gradient-to-b from-amber-900 to-amber-950 text-amber-100 border-amber-700 p-4">
        <DialogHeader className="space-y-1">
          <div className="flex items-center gap-2 justify-center">
            <div className="bg-amber-700/50 p-1.5 rounded-full">
              <AlertCircle className="h-4 w-4 text-amber-300" />
            </div>
            <DialogTitle className="text-amber-300 text-base">18+ Ansvarlig Sosialt Spill</DialogTitle>
          </div>
          <DialogDescription className="text-center text-amber-200 text-xs">
            Velkommen til Skogens Vokter!
          </DialogDescription>
        </DialogHeader>

        <div className="py-2 space-y-2">
          <div className="bg-amber-800/30 p-3 rounded-lg border border-amber-700/50">
            <p className="text-amber-100 text-xs font-medium mb-1">
              Nettstedet er utelukkende utviklet for gratis underholding:
            </p>
            <ul className="space-y-1 text-xs">
              <li className="flex items-start gap-1">
                <Shield className="h-3 w-3 text-amber-300 flex-shrink-0 mt-0.5" />
                <span>Alle spillene på siden er egenutviklede og laget kun for underholdningsformål</span>
              </li>
              <li className="flex items-start gap-1">
                <Shield className="h-3 w-3 text-amber-300 flex-shrink-0 mt-0.5" />
                <span>Våre sosiale kasinospill innebærer ingen bruk av ekte penger</span>
              </li>
              <li className="flex items-start gap-1">
                <Shield className="h-3 w-3 text-amber-300 flex-shrink-0 mt-0.5" />
                <span>Det er ingen mulighet for å vinne gevinster eller kontantpremier</span>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-amber-500 text-sm font-bold text-black">
              18+
            </div>
          </div>

          <p className="text-center text-amber-200 text-xs">
            Vi fremmer ansvarlig spill, og understreker at spillene på Skogens Vokter er ment utelukkende som
            underholdning.
          </p>
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-2 pt-2">
          <Button
            type="button"
            variant="outline"
            onClick={handleReject}
            className="border-zinc-700 text-gray-300 hover:bg-zinc-800 hover:text-white h-8 text-xs"
          >
            Avvis
          </Button>
          <Button
            type="button"
            onClick={handleAccept}
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold h-8 text-xs"
          >
            Godta Personvern
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
