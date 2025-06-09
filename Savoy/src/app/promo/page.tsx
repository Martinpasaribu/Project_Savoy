'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'


type image  = {
  row: number,
  image: string
}

type List  = {
    head: string,
    paragraph: string,
    value: number
}

type CardType = {
  price: string | null
  title: string
  list: List []| []
  title2: string
  desc: string | null
  image: image [] | []
  image_bg: string | null
}


export default function PromoPage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const isScrolling = useRef(false) // untuk debounce
  const [cards, setCards] = useState<CardType[]>([])


  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await fetch('/api/promo') // ⬅️ panggil route internal
        const data = await res.json()
        console.log(data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const mapped = data.map((item: any) => ({
          price: item.price || '$0',
          title: item.title || 'No Title',
          title2: item.title2 || 'No Title2',
          desc: item.desc || 'No Description',
          image: item.image || [],
          list: item.list || [],
          image_bg: item.image_bg || '',
        }))

        setCards(mapped)
      } catch (error) {
        console.error('Fetch failed:', error)
      }
    }

    fetchData()
  }, [])

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (isScrolling.current) return

    isScrolling.current = true

    if (e.deltaY > 0 && activeIndex < cards.length - 1) {
      setActiveIndex((prev) => prev + 1)
    } else if (e.deltaY < 0 && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1)
    }

    setTimeout(() => {
      isScrolling.current = false
    }, 800) // debounce waktu antar scroll
  }

  const handleUp = () => {
    if (activeIndex > 0) setActiveIndex((prev) => prev - 1)
  }

  const handleDown = () => {
    if (activeIndex < cards.length - 1) setActiveIndex((prev) => prev + 1)
  }

  return (
    <section className="relative min-h-screen bg-home2 bg-cover bg-center text-white font-balham">
      <div className="bg-black bg-opacity-60 min-h-screen flex flex-col items-center justify-center px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Ready to Purchase?</h2>
        <p className="text-center text-gray-300 mb-10">Design is thinking made visual.</p>

        {/* Carousel Container */}
        <div
          className="relative w-full max-w-[40rem] h-[420px] overflow-hidden"
          onWheel={handleScroll} // 🔥 Tambahkan handler scroll di sini
        >
          <div
                className="transition-transform duration-500"
                style={{
                  height: `${cards.length * 100}%`, // total tinggi
                  transform: `translateY(-${activeIndex * (100 / cards.length)}%)`
                }}
          >
            {cards.map((card, index) => (
              
              <div
                key={index}
                className="w-full max-w-[40rem] h-[420px] flex  flex-col justify-between items-center  bg-gradient-to-br from-white to-gray-50 text-black rounded-3xl p-8 shadow-2xl text-center relative overflow-hidden"
              >
                {/* Badge Promo */}
                <span className="absolute top-4 left-4 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  PROMO
                </span>

                <div className='flex flex-col justify-between items-center'>
                    {/* Harga */}
                    {/* <p className="text-3xl font-extrabold text-[#a07c40] mb-3">{card.title}</p> */}

                    {/* Judul */}
                    <h3 className="text-xl font-semibold uppercase tracking-wide mb-2 mt-5">
                      {card.title2}
                    </h3>

                    {/* Deskripsi */}
                    <p className="text-gray-600 text-sm px-4 mb-8">{card.desc}</p>

                    <div className=''>

                      <section>
                        

                        { card.list.map((item, index) => (

                          <div key={index} className='flex gap-5'>
                            
                            <div className="w-full max-w-[8rem] md:max-w-[11rem] ">
                              <Image
                                src={card.image[index].image}
                                alt="savoy icon"
                                width={180}
                                height={180}
                                className='rounded-lg'
                              />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-md font-sans font-extrabold'>{ item.head }</h2>
                                <h2 className='font-light'>{ item.paragraph }</h2>
                                <h2>{ item.value }</h2>
                            </div>
                          
                          </div>
                          
                        ))}

                      </section>

                    </div>


                </div>

                    {/* Tombol */}
                    <button className="bg-[#a07c40] hover:bg-[#a07a38] transition-colors duration-200 text-white font-bold px-6 py-2 rounded-full shadow-md">
                      Claim Now
                    </button>

                {/* Background Shape */}
                <div className="absolute bottom-[-3rem] right-[-3rem] w-[120px] h-[120px] bg-[#907a54] rounded-full  z-0" />
                <div className="absolute bottom-[-3rem] right-[2rem] w-[120px] h-[120px] bg-[#a07c40] rounded-full opacity-30 z-0" />
                <div className="absolute bottom-[1rem] right-[-3rem] w-[120px] h-[120px] bg-[#a07c40] rounded-full opacity-30 z-0" />
              
              </div>

            ))}
          </div>

  \


          {/* Arrows Navigation */}
          <button
            onClick={handleUp}
            className="absolute hidden top-10 right-6 bg-white text-black p-2 rounded-full shadow"
          >
            ↑
          </button>
          <button
            onClick={handleDown}
            className="absolute hidden bottom-8 right-6 bg-white text-black p-2 rounded-full shadow"
          >
            ↓
          </button>
        </div>


      {/* Dots Navigation */}
        <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col gap-3">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'bg-white scale-125 shadow-md' : 'bg-gray-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        
      </div>
    </section>
  )
}