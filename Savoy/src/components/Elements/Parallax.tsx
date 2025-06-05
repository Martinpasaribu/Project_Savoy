'use client';

import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Image from 'next/image';

export default function HeroParallax() {
  return (
    <ParallaxProvider>
      <div className="relative h-screen overflow-hidden bg-white">
        <Parallax speed={-30}>
          <Image
            src="/assets/Image/parallax/leaf.jpg"
            className="absolute top-0 md:-top-[15rem] w-full opacity-100"
            alt="leaf"
            width={1500}
            height={1500}
          />
        </Parallax>

        <div className="relative z-10 flex flex-col gap-6 justify-center items-center h-full font-balham">

            {/* <h1 className='text-[15px] md:text-[19px] text-[#a48f6c]'>A Life of Ease</h1> */}

            <h1 className="text-2xl md:text-4xl font-bold text-[#a48f6c]">A Life of Ease, Shaped by Purpose</h1>

            <p className='text-[12px] md:text-[22px] w-full max-w-[45rem] text-center text-gray-300'>

                Live in a space where every element is intentionally designed to simplify your life, blending modern comfort with meaningful functionality for the way you live today
               
            </p>
        </div>
      </div>
    </ParallaxProvider>
  );
}
