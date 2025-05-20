"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import { Trophy, Target, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Hjem", href: "/" },
    { name: "Om oss", href: "/om-oss" },
    { name: "Kontakt", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#1E2A38]/95 backdrop-blur supports-[backdrop-filter]:bg-[#1E2A38]/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10 overflow-hidden">
              <Trophy className="h-6 w-6 text-amber-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              <Target className="h-10 w-10 text-amber-400 animate-pulse" />
            </div>
            <span className="font-bold text-xl md:text-2xl text-amber-300">NEBULARUSH GAMES</span>
          </Link>

          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-amber-400",
                  pathname === item.href ? "text-amber-500" : "text-amber-300/80",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <ModeToggle />

          <button
            className="md:hidden text-amber-300 hover:text-amber-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobil meny */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1E2A38] border-t border-amber-900/20 py-4">
          <nav className="container flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-amber-400 px-4 py-2 rounded-md",
                  pathname === item.href ? "bg-amber-900/20 text-amber-500" : "text-amber-300/80",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Spill nå-knappen er fjernet */}
          </nav>
        </div>
      )}
    </header>
  )
}
