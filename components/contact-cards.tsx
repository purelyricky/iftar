import { SiInstagram } from "@icons-pack/react-simple-icons"
import Link from "next/link"

export function ContactCards() {
  return (
    <div className="w-full max-w-md mt-6 grid gap-4">
      <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-lg p-4 flex items-center justify-between">
        <p className="text-white/90 text-sm">
          Made with <span className="text-red-500">❤️</span> by Ricky
        </p>
        <Link
          href="https://instagram.com/rick.machungo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/90 hover:text-white transition-colors"
        >
          <SiInstagram size={20} />
        </Link>
      </div>

      <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-lg p-4 flex items-center justify-between">
        <p className="text-white/90 text-sm">
          Organized and hosted with <span className="text-red-500">❤️</span> by Kafilat
        </p>
        <Link
          href="https://instagram.com/tifehh_k"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/90 hover:text-white transition-colors"
        >
          <SiInstagram size={20} />
        </Link>
      </div>
    </div>
  )
}

