import { Mountain, Music } from "lucide-react"

export default function LogoIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <Mountain className="h-full w-full text-primary" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-70">
        <Music className="h-1/2 w-1/2 text-accent" />
      </div>
    </div>
  )
}
