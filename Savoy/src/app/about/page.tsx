'use client'

import {  ChevronsRight } from 'lucide-react'

export default function AboutPage() {


  return (
    <div>

      <section className="relative min-h-screen bg-home2 bg-cover bg-center text-white">

        <div className=" min-h-screen flex flex-col items-center justify-center px-6">
       
        </div>

      </section>

      <section className="relative text-white px-0 md:px-16 py-4">

        <div className=" flex flex-col px-6">

          <h3 className='text-gray-500 flex justify-start items-center gap-2 md:p-5 mb-10 text-sm md:text-lg'>Home <span>  <ChevronsRight className="w-6 h-6 pt-1 text-slate-800" /> </span>About us</h3>

          <div className='px-2 md:px-[3rem]'>

            <div className='flex flex-col gap-4 justify-start items-start'>

              <h2 className="text-xl md:text-2xl font-medium text-[#caa25c]  mb-2 text-center">About Us</h2>
              <p className="text-left text-[14px] font-light text-gray-500 mb-10 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptates cupiditate labore quae ipsam illum eveniet dolorem veritatis, necessitatibus neque magnam a delectus accusantium beatae omnis! Omnis, ea. Recusandae, libero. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, eius repellat? Ad repellat, praesentium sapiente consequuntur perspiciatis voluptas totam, voluptatem ab explicabo facere obcaecati provident distinctio voluptatibus, saepe incidunt dicta.</p>
              
            </div>

            <div className='flex flex-col gap-4 justify-start items-start'>

              <h2 className="text-xl md:text-2xl font-medium text-[#caa25c]  mb-2 text-center">Introduction</h2>
              <p className="text-left text-[14px] font-light text-gray-500 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptates cupiditate labore quae ipsam illum eveniet dolorem veritatis, necessitatibus neque magnam a delectus accusantium beatae omnis! Omnis, ea. Recusandae, libero. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, eius repellat? Ad repellat, praesentium sapiente consequuntur perspiciatis voluptas totam, voluptatem ab explicabo facere obcaecati provident distinctio voluptatibus, saepe incidunt dicta.</p>
              
            </div>

          </div>


        </div>

      </section>

      <section className="relative min-h-screen bg-about bg-cover bg-center text-white">

        <div className=" min-h-screen flex flex-col items-center justify-center px-6">
        </div>

      </section>

    </div>


  )
}
