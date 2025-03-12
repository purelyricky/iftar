import { SiInstagram } from "@icons-pack/react-simple-icons"
import Link from "next/link"

export function ContactCards() {
  return (
    <div className="w-full max-w-md mt-6 grid gap-4">
      <Link
        href="https://instagram.com/rick.machungo"
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md border border-white/10 rounded-lg p-4 flex items-center justify-between hover:shadow-md hover:shadow-pink-500/10 transition-all">
          <p className="text-white/90 text-sm">
            Made with <span className="text-red-500">❤️</span> by Ricky
          </p>
          <div className="text-pink-400 group-hover:text-pink-300 transition-colors">
            <SiInstagram size={20} />
          </div>
        </div>
      </Link>

      <Link
        href="https://instagram.com/tifehh_k"
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md border border-white/10 rounded-lg p-4 flex items-center justify-between hover:shadow-md hover:shadow-pink-500/10 transition-all">
          <p className="text-white/90 text-sm">
            Organized and hosted with <span className="text-red-500">❤️</span> by Kafilat
          </p>
          <div className="text-pink-400 group-hover:text-pink-300 transition-colors">
            <SiInstagram size={20} />
          </div>
        </div>
      </Link>
    </div>
  )
}

