'use client'

import MapEmbed from './components/MapEmbed'
import { motion } from 'framer-motion'



export default function LocationPage() {
  return (
   
   <motion.section
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative flex-center min-h-screen bg-gradient-to-b from-[#A48F6C] via-[#A58958] to-[#9D7C42] text-white font-balham py-16 px-4"
>
    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-12">
        
        {/* Left: Text Content */}
        <div className="text-center md:text-left max-w-xl space-y-6">
          <h2 className="text-2xl md:text-4xl font-extrabold drop-shadow-md">
            Find Our Location
          </h2>
          <p className="text-gray-200 text-sm md:text-lg leading-relaxed">
            Discover the exact location of Savoy Residences through our interactive map.
            Enjoy easy access, a strategic neighborhood, and a tranquil environment just a click away.
          </p>
        </div>

        {/* Right: Map */}
        <div className="w-full max-w-[40rem] rounded-xl overflow-hidden shadow-2xl border border-white/20 transition-transform duration-300 hover:scale-[1.01]">
          <MapEmbed />
        </div>
      </div>
</motion.section>
  )
}
