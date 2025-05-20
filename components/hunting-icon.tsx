"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type HuntingIconType = "deer" | "boar" | "rabbit" | "duck" | "rifle" | "bow" | "knife" | "hunter" | "target" | "wild"

interface HuntingIconProps {
  type: HuntingIconType
  size?: number
  isMatched?: boolean
  isSpinning?: boolean
  className?: string
}

export function HuntingIcon({ type, size = 80, isMatched = false, isSpinning = false, className }: HuntingIconProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Animasjon basert på type
  useEffect(() => {
    if (!svgRef.current) return

    // Reset animasjoner
    const elements = svgRef.current.querySelectorAll("path, circle, rect, ellipse, polygon")
    elements.forEach((el) => {
      el.style.transition = "transform 0.3s ease, fill 0.3s ease"
      el.style.transform = ""
    })

    // Ikke animer hvis den spinner
    if (isSpinning) return

    // Spesifikke animasjoner basert på type
    if (isMatched || isHovered) {
      switch (type) {
        case "deer":
          // Hjort hopper
          const deerBody = svgRef.current.querySelector(".deer-body")
          if (deerBody) {
            deerBody.animate(
              [{ transform: "translateY(0)" }, { transform: "translateY(-5px)" }, { transform: "translateY(0)" }],
              {
                duration: 1000,
                iterations: Number.POSITIVE_INFINITY,
              },
            )
          }
          break
        case "boar":
          // Villsvin rister på hodet
          const boarHead = svgRef.current.querySelector(".boar-head")
          if (boarHead) {
            boarHead.animate(
              [
                { transform: "rotate(0deg)" },
                { transform: "rotate(-5deg)" },
                { transform: "rotate(5deg)" },
                { transform: "rotate(0deg)" },
              ],
              {
                duration: 1200,
                iterations: Number.POSITIVE_INFINITY,
              },
            )
          }
          break
        case "rabbit":
          // Kanin hopper
          const rabbitBody = svgRef.current.querySelector(".rabbit-body")
          if (rabbitBody) {
            rabbitBody.animate(
              [
                { transform: "translateY(0) scaleY(1)" },
                { transform: "translateY(-8px) scaleY(1.1)" },
                { transform: "translateY(0) scaleY(0.9)" },
                { transform: "translateY(0) scaleY(1)" },
              ],
              {
                duration: 800,
                iterations: Number.POSITIVE_INFINITY,
              },
            )
          }
          break
        case "duck":
          // And flakser med vingene
          const duckWings = svgRef.current.querySelector(".duck-wings")
          if (duckWings) {
            duckWings.animate(
              [
                { transform: "rotate(0deg)" },
                { transform: "rotate(-15deg)" },
                { transform: "rotate(15deg)" },
                { transform: "rotate(0deg)" },
              ],
              {
                duration: 500,
                iterations: Number.POSITIVE_INFINITY,
              },
            )
          }
          break
        case "rifle":
          // Gevær skyter
          const rifleBarrel = svgRef.current.querySelector(".rifle-barrel")
          if (rifleBarrel) {
            rifleBarrel.animate(
              [{ transform: "translateX(0)" }, { transform: "translateX(-3px)" }, { transform: "translateX(0)" }],
              {
                duration: 300,
                iterations: 1,
              },
            )
          }
          break
        case "bow":
          // Bue strekkes og slippes
          const bowString = svgRef.current.querySelector(".bow-string")
          if (bowString) {
            bowString.animate(
              [{ transform: "translateX(0)" }, { transform: "translateX(-5px)" }, { transform: "translateX(0)" }],
              {
                duration: 800,
                iterations: Number.POSITIVE_INFINITY,
              },
            )
          }
          break
        case "knife":
          // Kniv roterer
          const knifeBody = svgRef.current.querySelector(".knife-body")
          if (knifeBody) {
            knifeBody.animate([{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }], {
              duration: 1500,
              iterations: Number.POSITIVE_INFINITY,
            })
          }
          break
        case "hunter":
          // Jeger sikter
          const hunterArm = svgRef.current.querySelector(".hunter-arm")
          if (hunterArm) {
            hunterArm.animate(
              [{ transform: "rotate(0deg)" }, { transform: "rotate(-5deg)" }, { transform: "rotate(0deg)" }],
              {
                duration: 1000,
                iterations: Number.POSITIVE_INFINITY,
              },
            )
          }
          break
        case "target":
          // Blink pulserer
          const targetRings = svgRef.current.querySelectorAll(".target-ring")
          targetRings.forEach((ring, index) => {
            ring.animate(
              [
                { opacity: 0.5, transform: "scale(0.95)" },
                { opacity: 1, transform: "scale(1.05)" },
                { opacity: 0.5, transform: "scale(0.95)" },
              ],
              {
                duration: 1000,
                delay: index * 100,
                iterations: Number.POSITIVE_INFINITY,
              },
            )
          })
          break
        case "wild":
          // Dyrespor pulserer
          const wildTracks = svgRef.current.querySelectorAll(".wild-track")
          wildTracks.forEach((track, index) => {
            track.animate(
              [
                { opacity: 0.5, transform: "scale(0.9)" },
                { opacity: 1, transform: "scale(1.1)" },
                { opacity: 0.5, transform: "scale(0.9)" },
              ],
              {
                duration: 1200,
                delay: index * 150,
                iterations: Number.POSITIVE_INFINITY,
              },
            )
          })
          break
      }
    }
  }, [type, isMatched, isHovered, isSpinning])

  // Render riktig SVG basert på type
  const renderIcon = () => {
    switch (type) {
      case "deer":
        return (
          <svg
            ref={svgRef}
            viewBox="0 0 100 100"
            width={size}
            height={size}
            className={cn("text-amber-800", className)}
            fill="currentColor"
          >
            <g className="deer-body">
              <path
                d="M30,65 Q40,55 50,65 Q60,55 70,65 L65,85 Q50,90 35,85 Z"
                fill="currentColor"
                className="transition-colors duration-300"
              />
              <path
                d="M50,30 L40,55 Q50,60 60,55 L50,30"
                fill="currentColor"
                className="transition-colors duration-300"
              />
              <path
                d="M50,30 L30,15 L35,35 M50,30 L70,15 L65,35"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="transition-colors duration-300"
              />
              <circle cx="43" cy="45" r="2" fill="black" />
              <circle cx="57" cy="45" r="2" fill="black" />
            </g>
          </svg>
        )
      case "boar":
        return (
          <svg
            ref={svgRef}
            viewBox="0 0 100 100"
            width={size}
            height={size}
            className={cn("text-gray-700", className)}
            fill="currentColor"
          >
            <g className="boar-body">
              <ellipse cx="50" cy="60" rx="30" ry="20" fill="currentColor" />
              <g className="boar-head">
                <path
                  d="M25,60 Q15,50 20,40 Q30,30 40,40 L25,60"
                  fill="currentColor"
                  className="transition-colors duration-300"
                />
                <circle cx="25" cy="45" r="2" fill="black" />
                <path
                  d="M15,45 L20,50 M15,50 L20,55"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  className="transition-colors duration-300"
                />
              </g>
              <path
                d="M70,50 L80,40 M70,60 L80,70"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="transition-colors duration-300"
              />
            </g>
          </svg>
        )
      case "rabbit":
        return (
          <svg
            ref={svgRef}
            viewBox="0 0 100 100"
            width={size}
            height={size}
            className={cn("text-gray-300", className)}
            fill="currentColor"
          >
            <g className="rabbit-body">
              <ellipse cx="50" cy="65" rx="20" ry="15" fill="currentColor" />
              <circle cx="50" cy="45" r="12" fill="currentColor" />
              <path
                d="M40,35 L30,15 M60,35 L70,15"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="transition-colors duration-300"
              />
              <circle cx="45" cy="42" r="2" fill="black" />
              <circle cx="55" cy="42" r="2" fill="black" />
              <path
                d="M48,48 L52,48"
                fill="none"
                stroke="black"
                strokeWidth="1"
                className="transition-colors duration-300"
              />
            </g>
          </svg>
        )
      case "duck":
        return (
          <svg
            ref={svgRef}
            viewBox="0 0 100 100"
            width={size}
            height={size}
            className={cn("text-green-700", className)}
            fill="currentColor"
          >
            <g>
              <ellipse cx="50" cy="60" rx="25" ry="15" fill="currentColor" />
              <circle cx="75" cy="50" r="10" fill="currentColor" />
              <path
                d="M80,45 L90,40"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="transition-colors duration-300"
              />
              <circle cx="78" cy="48" r="2" fill="black" />
              <g className="duck-wings">
                <path
                  d="M40,50 Q30,30 50,40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  className="transition-colors duration-300"
                />
                <path
                  d="M60,50 Q70,30 50,40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  className="transition-colors duration-300"
                />
              </g>
            </g>
          </svg>
        )
      case "rifle":
        return (
          <svg
            ref={svgRef}
            viewBox="0 0 100 100"
            width={size}
            height={size}
            className={cn("text-amber-700", className)}
            fill="currentColor"
          >
            <g>
              <path
                d="M10,60 L70,60 L70,55 L10,55 Z"
                className="rifle-barrel transition-colors duration-300"
                fill="currentColor"
              />
              <path
                d="M65,60 L65,70 Q60,75 55,70 L55,60"
                fill="currentColor"
                className="transition-colors duration-300"
              />
              <path d="M55,65 L40,80 L35,75 L50,60" fill="currentColor" className="transition-colors duration-300" />
              <circle cx="75" cy="57.5" r="2.5" fill="black" />
            </g>
          </svg>
        )
      case "bow":
        return (
          <svg
            ref={svgRef}
            viewBox="0 0 100 100"
            width={size}
            height={size}
            className={cn("text-amber-600", className)}
            fill="currentColor"
          >
            <g>
              <path
                d="M40,20 Q60,50 40,80"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                className="transition-colors duration-300"
              />
              <path
                d="M40,20 L40,80"
                fill="none"
                stroke="gray"
                strokeWidth="1"
                className="bow-string transition-colors duration-300"
              />
              <path
                d="M40,50 L60,50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transition-colors duration-300"
              />
              <path d="M60,50 L70,45 L70,55 Z" fill="currentColor" className="transition-colors duration-300" />
            </g>
          </svg>
        )
      case "knife":
        return (
          <svg
            ref={svgRef}
            viewBox="0 0 100 100"
            width={size}
            height={size}
            className={cn("text-gray-400", className)}
            fill="currentColor"
          >
            <g className="knife-body">
              <path
                d="M30,30 L70,70"
                fill="none"
                stroke="silver"
                strokeWidth="5"
                className="transition-colors duration-300"
              />
              <path
                d="M30,30 L20,20"
                fill="none"
                stroke="silver"
                strokeWidth="5"
                className="transition-colors duration-300"
              />
              <path
                d="M70,70 L75,75 Q80,80 75,85 Q70,80 65,75 Z"
                fill="currentColor"
                className="transition-colors duration-300"
              />
            </g>
          </svg>
        )
      case "hunter":
        return (
          <svg
            ref={svgRef}
            viewBox="0 0 100 100"
            width={size}
            height={size}
            className={cn("text-green-800", className)}
            fill="currentColor"
          >
            <g>
              <circle cx="50" cy="35" r="15" fill="currentColor" />
              <path
                d="M40,50 L40,80 M60,50 L60,80 M40,80 L60,80"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                className="transition-colors duration-300"
              />
              <g className="hunter-arm">
                <path
                  d="M60,55 L80,50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  className="transition-colors duration-300"
                />
                <path d="M75,50 L85,45 L85,55 Z" fill="currentColor" className="transition-colors duration-300" />
              </g>
              <circle cx="45" cy="32" r="2" fill="black" />
              <circle cx="55" cy="32" r="2" fill="black" />
              <path
                d="M45,40 L55,40"
                fill="none"
                stroke="black"
                strokeWidth="1"
                className="transition-colors duration-300"
              />
            </g>
          </svg>
        )
      case "target":
        return (
          <svg
            ref={svgRef}
            viewBox="0 0 100 100"
            width={size}
            height={size}
            className={cn("text-red-500", className)}
            fill="currentColor"
          >
            <g>
              <circle cx="50" cy="50" r="40" fill="white" className="target-ring" />
              <circle cx="50" cy="50" r="30" fill="red" className="target-ring" />
              <circle cx="50" cy="50" r="20" fill="white" className="target-ring" />
              <circle cx="50" cy="50" r="10" fill="red" className="target-ring" />
              <path
                d="M50,10 L50,20 M50,80 L50,90 M10,50 L20,50 M80,50 L90,50"
                fill="none"
                stroke="black"
                strokeWidth="2"
                className="transition-colors duration-300"
              />
            </g>
          </svg>
        )
      case "wild":
        return (
          <svg
            ref={svgRef}
            viewBox="0 0 100 100"
            width={size}
            height={size}
            className={cn("text-amber-500", className)}
            fill="currentColor"
          >
            <g>
              <ellipse cx="30" cy="30" rx="10" ry="15" fill="currentColor" className="wild-track" />
              <ellipse cx="70" cy="30" rx="10" ry="15" fill="currentColor" className="wild-track" />
              <ellipse cx="30" cy="70" rx="10" ry="15" fill="currentColor" className="wild-track" />
              <ellipse cx="70" cy="70" rx="10" ry="15" fill="currentColor" className="wild-track" />
              <text
                x="50"
                y="55"
                textAnchor="middle"
                fill="currentColor"
                fontSize="20"
                fontWeight="bold"
                className="transition-colors duration-300"
              >
                WILD
              </text>
            </g>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div
      className={cn(
        "relative transition-transform duration-300",
        isMatched && "animate-bounce",
        isSpinning && "animate-pulse",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {renderIcon()}
    </div>
  )
}
