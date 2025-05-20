"use client"

import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedIconProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  animation: "pulse" | "bounce" | "spin" | "wave" | "float"
}

export function AnimatedIcon({ children, animation, className, ...props }: AnimatedIconProps) {
  const animationClasses = {
    pulse: "animate-pulse",
    bounce: "animate-bounce",
    spin: "animate-spin",
    wave: "animate-wave-medium",
    float: "animate-float-medium",
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
        animationClasses[animation],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
