'use client'

import MapEmbed from './components/MapEmbed'

export default function LocationPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-balham">
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-1 py-16 space-y-10">
        
        {/* Title and Description */}
        <div className="text-center max-w-2xl">
          <h2 className=" text-lg hp4:text-2xxl md:text-4xl font-extrabold mb-4 text-[#]">
            Find our location
          </h2>
          <p className="text-gray-300 text-[12px] md:text-lg">
            View the interactive map to find the location of Savoy Residences. Easy access, strategic location, and comfortable environment await you.
          </p>
        </div>

        {/* Map */}
        <div className="w-full max-w-4xl">
          <MapEmbed />
        </div>
      </div>
    </section>
  )
}
