'use client';

import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { useEffect, useState } from 'react';

export default function HeroParallax() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ParallaxProvider>
      <div className="relative h-screen overflow-hidden bg-white">

        {/* Parallax background */}
        <Parallax speed={isMobile ? -10 : -30}>
          <div className="w-full h-screen relative z-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("/assets/image/parallax/daun.jpg")',
              }}
            />
          </div>
        </Parallax>

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col gap-6 justify-center items-center font-balham px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-[#a48f6c]">
            A Life of Ease, Shaped by Purpose
          </h1>

          <p className="text-[12px] md:text-[22px] max-w-2xl text-gray-200">
            Live in a space where every element is intentionally designed to simplify your life,
            blending modern comfort with meaningful functionality for the way you live today.
          </p>
        </div>

      </div>
    </ParallaxProvider>
  );
}
