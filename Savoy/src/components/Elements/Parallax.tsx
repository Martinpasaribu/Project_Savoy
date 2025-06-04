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

        <div className="relative z-10 flex flex-col gap-6 justify-center items-center h-full">
            
            <h1 className='text-[15px] text-[#a48f6c]'>DELIVERING</h1>

            <h1 className="text-2xl font-bold text-[#a48f6c]">A SUSTAINABLE LIVING</h1>

            <p className='text-[12px] w-full max-w-[30rem] text-center text-gray-300'>The luscious green landscape of Savoy will take your stress away as you enjoy
                having walk or stroll through the parks and lakes with our loved ones.
            </p>
        </div>
      </div>
    </ParallaxProvider>
  );
}
