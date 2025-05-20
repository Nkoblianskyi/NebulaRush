"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import { HuntingIcon } from "@/components/hunting-icon"

// Symboltyper for spillet med jakttema
type SymbolType = "deer" | "boar" | "rabbit" | "duck" | "rifle" | "bow" | "knife" | "hunter" | "target" | "wild"

interface Symbol {
  type: SymbolType
  isSpinning: boolean
  isMatched: boolean
}

// Symbolnavn
const symbolNames: Record<SymbolType, string> = {
  deer: "Hjort",
  boar: "Villsvin",
  rabbit: "Hare",
  duck: "And",
  rifle: "Gevær",
  bow: "Pil og Bue",
  knife: "Jaktkniv",
  hunter: "Jeger",
  target: "Blink",
  wild: "Wild",
}

// Symbolverdier
const symbolValues: Record<SymbolType, number> = {
  deer: 25,
  boar: 20,
  rabbit: 15,
  duck: 12,
  rifle: 18,
  bow: 16,
  knife: 10,
  hunter: 50, // Høyeste verdi
  target: 14,
  wild: 30,
}

export default function HuntingSlotMachine() {
  const [grid, setGrid] = useState<Symbol[][]>([])
  const [isSpinning, setIsSpinning] = useState(false)
  const [balance, setBalance] = useState(100000) // Start med 100,000 poeng
  const [message, setMessage] = useState("")
  const [lastWin, setLastWin] = useState<number | null>(null)
  const [highScore, setHighScore] = useState(100000)
  const [spinCount, setSpinCount] = useState(0)
  const [bonusPool, setBonusPool] = useState(1000)

  // Innsatsinnstillinger
  const [lines, setLines] = useState(20)
  const [lineBet, setLineBet] = useState(1)
  const [totalBet, setTotalBet] = useState(lines * lineBet)
  const [autoPlay, setAutoPlay] = useState(false)

  // Gevinstlinjer
  const [winningLines, setWinningLines] = useState<number[]>([])

  // Initialiser spillet
  useEffect(() => {
    initializeGrid()

    // Last inn lagret høyeste poengsum
    const savedHighScore = localStorage.getItem("huntingSlotHighScore")
    if (savedHighScore) {
      setHighScore(Number.parseInt(savedHighScore))
    }
  }, [])

  // Oppdater totalinnsats når linjer eller innsats per linje endres
  useEffect(() => {
    setTotalBet(lines * lineBet)
  }, [lines, lineBet])

  // Lagre høyeste poengsum
  useEffect(() => {
    if (balance > highScore) {
      setHighScore(balance)
      localStorage.setItem("huntingSlotHighScore", balance.toString())
    }
  }, [balance, highScore])

  // Øk bonuspool for hvert spinn
  useEffect(() => {
    if (isSpinning) {
      setBonusPool((prev) => prev + Math.floor(totalBet * 0.01))
    }
  }, [spinCount, isSpinning, totalBet])

  // Initialiser rutenett
  const initializeGrid = () => {
    const types: SymbolType[] = ["deer", "boar", "rabbit", "duck", "rifle", "bow", "knife", "hunter", "target", "wild"]

    const newGrid: Symbol[][] = []

    // Opprett et 5x3 rutenett
    for (let i = 0; i < 3; i++) {
      const row: Symbol[] = []
      for (let j = 0; j < 5; j++) {
        // Gjør hunter og wild sjeldnere
        const random = Math.random()
        let randomType: SymbolType

        if (random < 0.03) {
          // 3% sjanse for hunter
          randomType = "hunter"
        } else if (random < 0.08) {
          // 5% sjanse for wild
          randomType = "wild"
        } else {
          // Velg tilfeldig fra de vanlige symbolene
          const regularTypes = types.filter((t) => t !== "hunter" && t !== "wild")
          randomType = regularTypes[Math.floor(Math.random() * regularTypes.length)]
        }

        row.push({
          type: randomType,
          isSpinning: false,
          isMatched: false,
        })
      }
      newGrid.push(row)
    }

    setGrid(newGrid)
  }

  // Endre antall linjer
  const changeLines = (increment: boolean) => {
    if (isSpinning) return

    if (increment && lines < 20) {
      setLines((prev) => prev + 1)
    } else if (!increment && lines > 1) {
      setLines((prev) => prev - 1)
    }
  }

  // Endre innsats per linje
  const changeLineBet = (increment: boolean) => {
    if (isSpinning) return

    if (increment && lineBet < 10) {
      setLineBet((prev) => prev + 1)
    } else if (!increment && lineBet > 1) {
      setLineBet((prev) => prev - 1)
    }
  }

  // Maksimal innsats
  const setMaxBet = () => {
    if (isSpinning) return
    setLines(20)
    setLineBet(10)
  }

  // Spinn hjulene
  const spinReels = () => {
    if (isSpinning) return

    // Sjekk om spilleren har nok poeng
    if (balance < totalBet) {
      setMessage("Ikke nok poeng til å satse!")
      return
    }

    // Trekk innsats fra saldo
    setBalance((prev) => prev - totalBet)

    setIsSpinning(true)
    setMessage("")
    setLastWin(null)
    setWinningLines([])
    setSpinCount((prev) => prev + 1)

    // Merk alle symboler som spinner
    setGrid((prev) => prev.map((row) => row.map((symbol) => ({ ...symbol, isSpinning: true, isMatched: false }))))

    // Simuler spinneanimasjon
    const spinDuration = 2000
    const spinInterval = 100
    let elapsed = 0

    const spinTimer = setInterval(() => {
      elapsed += spinInterval

      // Oppdater rutenett med tilfeldige symboler under spinning
      setGrid((prev) =>
        prev.map((row) =>
          row.map((symbol) => {
            if (!symbol.isSpinning) return symbol

            const types: SymbolType[] = [
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
            ]

            // Gjør hunter og wild sjeldnere under spinning
            const random = Math.random()
            let randomType: SymbolType

            if (random < 0.01) {
              // 1% sjanse for hunter under spinning
              randomType = "hunter"
            } else if (random < 0.05) {
              // 4% sjanse for wild under spinning
              randomType = "wild"
            } else {
              // Velg tilfeldig fra de vanlige symbolene
              const regularTypes = types.filter((t) => t !== "hunter" && t !== "wild")
              randomType = regularTypes[Math.floor(Math.random() * regularTypes.length)]
            }

            return {
              ...symbol,
              type: randomType,
            }
          }),
        ),
      )

      // Avslutt spinning
      if (elapsed >= spinDuration) {
        clearInterval(spinTimer)

        // Generer endelig rutenett
        const types: SymbolType[] = [
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
        ]

        const finalGrid: Symbol[][] = []

        // Opprett et 5x3 rutenett med endelige symboler
        for (let i = 0; i < 3; i++) {
          const row: Symbol[] = []
          for (let j = 0; j < 5; j++) {
            // Gjør hunter og wild sjeldnere
            const random = Math.random()
            let randomType: SymbolType

            if (random < 0.03) {
              // 3% sjanse for hunter
              randomType = "hunter"
            } else if (random < 0.08) {
              // 5% sjanse for wild
              randomType = "wild"
            } else {
              // Velg tilfeldig fra de vanlige symbolene
              const regularTypes = types.filter((t) => t !== "hunter" && t !== "wild")
              randomType = regularTypes[Math.floor(Math.random() * regularTypes.length)]
            }

            row.push({
              type: randomType,
              isSpinning: false,
              isMatched: false,
            })
          }
          finalGrid.push(row)
        }

        setGrid(finalGrid)
        checkWinningLines(finalGrid)
        setIsSpinning(false)

        // Fortsett med autoplay hvis aktivert
        if (autoPlay) {
          setTimeout(() => {
            if (balance >= totalBet) {
              spinReels()
            } else {
              setAutoPlay(false)
              setMessage("Autoplay stoppet: Ikke nok poeng!")
            }
          }, 1000)
        }
      }
    }, spinInterval)
  }

  // Sjekk gevinstlinjer
  const checkWinningLines = (currentGrid: Symbol[][]) => {
    const newGrid = JSON.parse(JSON.stringify(currentGrid))
    let totalWin = 0
    const activeWinningLines: number[] = []

    // Definer gevinstlinjer (20 linjer totalt)
    const paylines = [
      // Horisontale linjer (3)
      [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
      ], // Linje 1: Øverste rad
      [
        [1, 0],
        [1, 1],
        [1, 2],
        [1, 3],
        [1, 4],
      ], // Linje 2: Midtre rad
      [
        [2, 0],
        [2, 1],
        [2, 2],
        [2, 3],
        [2, 4],
      ], // Linje 3: Nederste rad

      // V-formede linjer (4)
      [
        [0, 0],
        [1, 1],
        [2, 2],
        [1, 3],
        [0, 4],
      ], // Linje 4
      [
        [2, 0],
        [1, 1],
        [0, 2],
        [1, 3],
        [2, 4],
      ], // Linje 5

      // Sikksakk-linjer (6)
      [
        [0, 0],
        [0, 1],
        [1, 2],
        [0, 3],
        [0, 4],
      ], // Linje 6
      [
        [2, 0],
        [2, 1],
        [1, 2],
        [2, 3],
        [2, 4],
      ], // Linje 7
      [
        [1, 0],
        [0, 1],
        [0, 2],
        [0, 3],
        [1, 4],
      ], // Linje 8
      [
        [1, 0],
        [2, 1],
        [2, 2],
        [2, 3],
        [1, 4],
      ], // Linje 9
      [
        [0, 0],
        [1, 1],
        [1, 2],
        [1, 3],
        [0, 4],
      ], // Linje 10
      [
        [2, 0],
        [1, 1],
        [1, 2],
        [1, 3],
        [2, 4],
      ], // Linje 11

      // Diagonale linjer (4)
      [
        [0, 0],
        [1, 1],
        [1, 2],
        [1, 3],
        [2, 4],
      ], // Linje 12
      [
        [2, 0],
        [1, 1],
        [1, 2],
        [1, 3],
        [0, 4],
      ], // Linje 13
      [
        [1, 0],
        [1, 1],
        [0, 2],
        [1, 3],
        [1, 4],
      ], // Linje 14
      [
        [1, 0],
        [1, 1],
        [2, 2],
        [1, 3],
        [1, 4],
      ], // Linje 15

      // Komplekse linjer (5)
      [
        [0, 0],
        [2, 1],
        [0, 2],
        [2, 3],
        [0, 4],
      ], // Linje 16
      [
        [2, 0],
        [0, 1],
        [2, 2],
        [0, 3],
        [2, 4],
      ], // Linje 17
      [
        [1, 0],
        [0, 1],
        [1, 2],
        [2, 3],
        [1, 4],
      ], // Linje 18
      [
        [1, 0],
        [2, 1],
        [1, 2],
        [0, 3],
        [1, 4],
      ], // Linje 19
      [
        [0, 0],
        [2, 1],
        [1, 2],
        [0, 3],
        [2, 4],
      ], // Linje 20
    ]

    // Sjekk hver gevinstlinje
    for (let i = 0; i < Math.min(lines, paylines.length); i++) {
      const line = paylines[i]
      const lineSymbols: Symbol[] = []

      // Hent symboler på linjen
      for (const [row, col] of line) {
        lineSymbols.push(currentGrid[row][col])
      }

      // Sjekk for minst 3 like symboler i rad fra venstre
      let matchCount = 1
      let matchType = lineSymbols[0].type
      let wildCount = matchType === "wild" ? 1 : 0

      for (let j = 1; j < lineSymbols.length; j++) {
        const currentType = lineSymbols[j].type

        // Wild-symboler kan erstatte alle andre symboler
        if (currentType === "wild") {
          wildCount++
          matchCount++
        } else if (currentType === matchType || matchType === "wild") {
          // Hvis nåværende symbol matcher eller første symbol er wild
          if (matchType === "wild") {
            matchType = currentType // Wild erstatter med nåværende symbol
          }
          matchCount++
        } else {
          break // Stopp telling ved første ikke-match
        }
      }

      // Gevinst hvis minst 3 like symboler
      if (matchCount >= 3) {
        // Merk matchede symboler
        for (let j = 0; j < matchCount; j++) {
          const [row, col] = line[j]
          newGrid[row][col].isMatched = true
        }

        // Beregn gevinst
        const symbolValue =
          matchType === "wild" && wildCount < matchCount
            ? symbolValues[lineSymbols[wildCount].type] // Bruk verdien av første ikke-wild symbol
            : symbolValues[matchType]

        // Multiplikatorer basert på antall symboler
        const multipliers = {
          3: 1, // 3 symboler = 1x
          4: 2, // 4 symboler = 2x
          5: 5, // 5 symboler = 5x
        }

        // Beregn gevinst basert på symbolverdi, antall symboler og innsats
        const win = lineBet * symbolValue * multipliers[matchCount as keyof typeof multipliers]

        // Bonus for wild-symboler
        const wildBonus = wildCount > 0 ? wildCount * 0.5 : 0 // 50% bonus per wild
        const totalLineWin = Math.round(win * (1 + wildBonus))

        totalWin += totalLineWin
        activeWinningLines.push(i + 1) // Linjenummer (1-basert)

        // Sjekk for stor bonus (5 hunter-symboler)
        if (matchType === "hunter" && matchCount === 5) {
          totalWin += bonusPool
          setMessage(`STOR BONUS! Du fikk ${bonusPool} ekstra poeng!`)
          setBonusPool(1000) // Tilbakestill bonuspool
        }
      }
    }

    setGrid(newGrid)
    setWinningLines(activeWinningLines)

    // Oppdater melding og gevinst
    if (totalWin > 0) {
      if (activeWinningLines.length > 1) {
        setMessage(`Gevinst på ${activeWinningLines.length} linjer! Du fikk ${totalWin} poeng!`)
      } else {
        setMessage(`Gevinst på linje ${activeWinningLines[0]}! Du fikk ${totalWin} poeng!`)
      }
      setBalance((prev) => prev + totalWin)
      setLastWin(totalWin)
    } else {
      setMessage("Ingen gevinst denne gangen. Prøv igjen!")
    }
  }

  // Tilbakestill spillet
  const resetGame = () => {
    if (window.confirm("Er du sikker på at du vil starte på nytt? Du vil få 100 000 poeng.")) {
      setBalance(100000)
      setSpinCount(0)
      setBonusPool(1000)
      setMessage("Spillet er tilbakestilt. Lykke til!")
      initializeGrid()
      setLines(20)
      setLineBet(1)
      setAutoPlay(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Bakgrunn og ramme */}
      <div className="relative w-full max-w-4xl rounded-xl overflow-hidden">
        {/* Toppbanner med bonuspool */}
        <div className="relative w-full h-16 bg-gradient-to-r from-green-800 to-green-900 flex items-center justify-center">
          <div className="absolute inset-0">
            {/* Kamuflasje-mønster */}
            <div className="flex w-full">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className={`h-16 flex-1 ${i % 2 === 0 ? "bg-green-700" : "bg-green-800"}`} />
              ))}
            </div>
          </div>

          {/* Bonuspool-display */}
          <div className="relative z-10 bg-amber-300 rounded-full px-12 py-2 border-4 border-amber-500 shadow-lg flex items-center justify-center">
            <span className="text-green-900 font-bold text-xl mr-2">BONUS</span>
            <span className="text-red-600 font-bold text-2xl">{bonusPool}</span>
          </div>
        </div>

        {/* Spilleområde */}
        <div className="bg-green-100 p-6 relative">
          {/* Linjenumre på venstre side */}
          <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-around">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-10 w-10 rounded-full bg-amber-300 text-green-900 font-bold text-sm mx-auto"
              >
                {i + 1}
              </div>
            ))}
          </div>

          {/* Linjenumre på høyre side */}
          <div className="absolute right-0 top-0 bottom-0 w-12 flex flex-col justify-around">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-10 w-10 rounded-full bg-amber-300 text-green-900 font-bold text-sm mx-auto"
              >
                {i + 11}
              </div>
            ))}
          </div>

          {/* Spillerutenett */}
          <div className="grid grid-cols-5 gap-2 mx-16">
            {grid.map((row, rowIndex) =>
              row.map((symbol, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={cn(
                    "relative h-32 w-full flex items-center justify-center transition-all duration-200 rounded-lg border-2",
                    symbol.isMatched
                      ? "border-amber-400 bg-amber-100 shadow-[0_0_15px_rgba(255,215,0,0.7)]"
                      : "border-green-500 bg-green-200",
                  )}
                >
                  {/* Animert symbol */}
                  <div className="relative h-24 w-24 flex items-center justify-center">
                    <HuntingIcon
                      type={symbol.type}
                      isMatched={symbol.isMatched}
                      isSpinning={symbol.isSpinning}
                      size={80}
                    />

                    {/* Glitter-effekt på matchede symboler */}
                    {symbol.isMatched && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Sparkles className="h-8 w-8 text-amber-400 animate-pulse" />
                      </div>
                    )}
                  </div>
                </div>
              )),
            )}
          </div>
        </div>

        {/* Kontrollpanel */}
        <div className="bg-gradient-to-r from-amber-300 to-amber-400 p-4 rounded-b-xl">
          <div className="grid grid-cols-6 gap-4 items-center">
            {/* Linjer */}
            <div className="flex flex-col items-center">
              <span className="text-green-900 font-bold text-sm mb-1">LINES</span>
              <div className="flex items-center bg-amber-200 rounded-full p-1 border-2 border-amber-500">
                <button
                  onClick={() => changeLines(false)}
                  disabled={isSpinning || lines <= 1}
                  className="h-8 w-8 flex items-center justify-center rounded-full bg-green-700 text-white disabled:opacity-50"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <span className="mx-2 text-green-900 font-bold">{lines}</span>
                <button
                  onClick={() => changeLines(true)}
                  disabled={isSpinning || lines >= 20}
                  className="h-8 w-8 flex items-center justify-center rounded-full bg-green-700 text-white disabled:opacity-50"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Innsats per linje */}
            <div className="flex flex-col items-center">
              <span className="text-green-900 font-bold text-sm mb-1">LINE BET</span>
              <div className="flex items-center bg-amber-200 rounded-full p-1 border-2 border-amber-500">
                <button
                  onClick={() => changeLineBet(false)}
                  disabled={isSpinning || lineBet <= 1}
                  className="h-8 w-8 flex items-center justify-center rounded-full bg-green-700 text-white disabled:opacity-50"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <span className="mx-2 text-green-900 font-bold">{lineBet}</span>
                <button
                  onClick={() => changeLineBet(true)}
                  disabled={isSpinning || lineBet >= 10}
                  className="h-8 w-8 flex items-center justify-center rounded-full bg-green-700 text-white disabled:opacity-50"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Maks innsats */}
            <div className="flex flex-col items-center">
              <span className="text-green-900 font-bold text-sm mb-1">MAX BET</span>
              <button
                onClick={setMaxBet}
                disabled={isSpinning}
                className="h-10 w-full rounded-full bg-green-700 text-white font-bold disabled:opacity-50"
              >
                MAX
              </button>
            </div>

            {/* Spinn-knapp */}
            <div className="flex flex-col items-center col-span-1">
              <Button
                onClick={spinReels}
                disabled={isSpinning || balance < totalBet}
                className="h-16 w-32 rounded-full bg-gradient-to-r from-green-600 to-green-800 text-amber-300 font-bold text-xl border-4 border-green-400 shadow-lg disabled:opacity-50"
              >
                {isSpinning ? "..." : "SPIN"}
              </Button>
            </div>

            {/* Auto-knapp */}
            <div className="flex flex-col items-center">
              <span className="text-green-900 font-bold text-sm mb-1">AUTO</span>
              <button
                onClick={() => setAutoPlay(!autoPlay)}
                disabled={isSpinning || balance < totalBet}
                className={`h-10 w-full rounded-full font-bold disabled:opacity-50 ${
                  autoPlay ? "bg-red-500 text-white" : "bg-amber-200 text-green-900 border-2 border-amber-500"
                }`}
              >
                {autoPlay ? "STOP" : "AUTO"}
              </button>
            </div>

            {/* Saldo */}
            <div className="flex flex-col items-center">
              <span className="text-green-900 font-bold text-sm mb-1">BALANCE</span>
              <div className="bg-amber-200 rounded-full py-2 px-4 border-2 border-amber-500 w-full text-center">
                <span className="text-green-800 font-bold">{balance}</span>
              </div>
            </div>
          </div>

          {/* Nederste rad */}
          <div className="grid grid-cols-3 gap-4 mt-4 items-center">
            {/* Gevinst */}
            <div className="flex flex-col items-center">
              <span className="text-green-900 font-bold text-sm mb-1">WIN</span>
              <div className="bg-amber-200 rounded-full py-2 px-4 border-2 border-amber-500 w-full text-center">
                <span className="text-green-800 font-bold">{lastWin || 0}</span>
              </div>
            </div>

            {/* Melding */}
            <div className="flex items-center justify-center min-h-10">
              <p className="text-green-900 font-bold text-center">{message}</p>
            </div>

            {/* Total innsats */}
            <div className="flex flex-col items-center">
              <span className="text-green-900 font-bold text-sm mb-1">TOTAL BET</span>
              <div className="bg-amber-200 rounded-full py-2 px-4 border-2 border-amber-500 w-full text-center">
                <span className="text-green-800 font-bold">{totalBet}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
