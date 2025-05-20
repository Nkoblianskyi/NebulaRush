"use client"

import { useState } from "react"
import { AlertTriangle, X, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Disclaimer() {
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) return null

  return (
    <div className="w-full bg-gradient-to-r from-amber-900 to-amber-800 text-amber-100 py-2 border-b border-amber-700 shadow-md">
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="bg-amber-700/50 p-1.5 rounded-full">
                <AlertTriangle className="h-4 w-4 text-amber-300" />
              </div>
              <h2 className="text-amber-300 font-bold text-sm">18+ Ansvarlig Sosialt Spill</h2>
            </div>

            <div className="flex-1">
              <p className="text-amber-100 text-xs">
                Nettstedet er utelukkende utviklet for gratis underholding. Alle spillene på siden er egenutviklede og
                laget kun for underholdningsformål.
              </p>

              <div className="flex flex-wrap gap-2 mt-1">
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="bg-amber-700 hover:bg-amber-600 text-amber-100 border-amber-600 h-7 text-xs px-2"
                >
                  <Link href="/ansvarsfraskrivelse" className="flex items-center gap-1">
                    <ExternalLink className="h-3 w-3" />
                    GÅ TIL ANSVARLIG SOSIALT SPILL
                  </Link>
                </Button>
                <a
                  href="https://hjelpelinjen.no"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded bg-amber-800/70 px-2 py-0.5 text-xs font-medium text-amber-200 transition-colors hover:bg-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-500"
                >
                  Hjelpelinjen.no
                </a>
                <a
                  href="https://gamcare.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded bg-amber-800/70 px-2 py-0.5 text-xs font-medium text-amber-200 transition-colors hover:bg-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-500"
                >
                  GamCare
                </a>
                <a
                  href="https://www.gambleaware.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded bg-amber-800/70 px-2 py-0.5 text-xs font-medium text-amber-200 transition-colors hover:bg-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-500"
                >
                  GambleAware
                </a>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-0 right-0 text-amber-400 hover:text-amber-300"
            aria-label="Lukk advarsel"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
