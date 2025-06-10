import React from 'react'

const MapEmbed = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="relative w-full overflow-hidden rounded-2xl shadow-lg aspect-[5/3]">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
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
