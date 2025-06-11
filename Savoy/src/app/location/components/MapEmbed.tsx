'use client'

import React, { useState, useEffect } from 'react'

const MapEmbed = () => {
  const [isLoading, setIsLoading] = useState(true)

  // Simulasi loading selesai
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="relative w-full max-w-[42rem] mx-auto p-2 sm:p-4">
      {/* Optional: Label overlay */}
      <div className="absolute top-4 left-4 z-10 bg-white/80 text-black text-sm px-3 py-1 rounded-full shadow-md backdrop-blur-md">
        Savoy Residences Location
      </div>

      {/* Map container */}
      <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl aspect-[5/3] border border-white/10 transition-transform duration-300 hover:scale-[1.015] hover:shadow-[0_10px_50px_rgba(0,0,0,0.3)]">
        
        {/* Skeleton shimmer loading */}
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse rounded-2xl z-0" />
        )}

        {/* Embedded Map */}
        <iframe
          className={`absolute top-0 left-0 w-full h-full z-10 transition-opacity duration-500 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          src="https://www.google.com/maps?q=-6.262311053246297,106.76867248222437&z=18&output=embed"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default MapEmbed
