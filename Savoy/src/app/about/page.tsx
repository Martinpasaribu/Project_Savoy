'use client'

import {  ChevronsRight } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {


  return (
    <div>

      <section className="relative min-h-screen bg-about2 bg-cover bg-center text-white">

        <div className=" min-h-screen flex flex-col items-center justify-center ">
       

            <div className='absolute  z-20 w-full h-full backdrop-blur-xs bg-gradient-to-r from-[#a07c40] '>

            </div>

            <div className=' z-30 w-full max-w-[60rem] flex flex-col-reverse gap-[6rem] md:gap-10 md:flex-row px-10 justify-between items-center '>

              <div className="w-full max-w-[8rem] md:max-w-[11rem]">
                <Image
                  src="/assets/Image/about/savoy-icon.png"
                  alt="savoy icon"
                  width={180}
                  height={180}
                />
              </div>

              <div className='mt-10'>
                <h3>Your Gateway To</h3>
                <h1 className='text-[3rem] md:text-[4rem] lg:text-[5rem] font-luxurious'>Luxury Living</h1>
              </div>

            </div>

        </div>

      </section>

      <section className="relative text-white px-0 md:px-16 py-4">

        <div className=" flex flex-col px-6">

          <h3 className='text-gray-500 flex justify-start items-center gap-2 md:p-5 mb-10 text-sm md:text-md'>Home <span>  <ChevronsRight className="w-6 h-6 pt-1 text-slate-800" /> </span>About us</h3>

          <div className='px-2 md:px-[3rem]'>

            <div className='flex flex-col gap-4 justify-start items-start'>

              <h2 className="text-xl md:text-2xl font-medium text-[#caa25c]  mb-2 text-center">Introduction</h2>
              <p className="text-left text-[14px] font-light text-gray-500 mb-10 ">
                Welcome to Savoy Residences, where luxurious comfort meets the essence of sanctuary living. Created with care and vision, Savoy Residences is thoughtfully designed for those who seek balance, harmony, and a sense of belonging.

                Perfectly situated with seamless access to major toll roads, business districts, renowned schools, and lifestyle destinations, Savoy keeps you connected to everything that matters 

              </p>
              
            </div>

            <div className='flex flex-col gap-4 justify-start items-start'>

              <h2 className="text-xl md:text-2xl font-medium text-[#caa25c]  mb-2 text-center">About Us</h2>

              <div className=''>
                <p className="text-left text-[14px] font-light text-gray-500 mb-4">
                  An exclusive enclave of three-story homes — Savoy Residences blends refined architecture with a touch of elegance and comfort. Designed for those who value both style and substance, Savoy offers spacious and thoughtfully arranged floor plans with modern features to elevate your everyday living. Each residence includes 3+1 bedrooms, 2 bathrooms, 1 guest toilet, a private swimming pool, maid’s quarter, and a carport for two vehicles. 

                  Perfectly positioned near the Veteran Toll Gate, Savoy connects you effortlessly to South Jakarta and beyond. With easy access to top schools, healthcare, business districts, and lifestyle destinations, we deliver a way of life defined by ease, prestige, and meaningful living.               
                </p>
                <p className='text-left text-[14px] font-light text-gray-500 mb-2'>
                  Every home is designed as a private haven—offering you comfort, privacy, and a sense of retreat within the city. Whether it’s unwinding after a long day or sharing meaningful moments with loved ones, Savoy makes everyday living feel intentional and fulfilling.

                  At Savoy Residences, we don`t just build homes— we craft spaces where lasting memories are made.

                </p>
              </div>
            </div>

          </div>


        </div>

      </section>

      <section className="relative min-h-screen bg-home1 bg-cover bg-center  text-white">

            <div className='absolute  z-20 w-full h-full backdrop-blur-xs bg-gradient-to-b from-[#ffffff] '>

            </div>

      </section>

    </div>


  )
}
