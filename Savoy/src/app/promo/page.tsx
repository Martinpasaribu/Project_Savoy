'use client'

import { useState, useRef, useEffect } from 'react'

type CardType = {
  price: string | null
  title: string
  desc: string | null
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
          desc: item.description || 'No Description'
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
    <section className="relative min-h-screen bg-home2 bg-cover bg-center text-white">
      <div className="bg-black bg-opacity-60 min-h-screen flex flex-col items-center justify-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Ready to Purchase?</h2>
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
                className="w-full max-w-[40rem] h-[420px] flex-shrink-0 bg-white text-black rounded-3xl p-8 shadow-lg text-center"
              >
                <p className="text-4xl font-bold mb-4">{card.price}</p>
                <h3 className="text-lg font-semibold uppercase">{card.title}</h3>
                <p className="text-gray-600 mt-2 mb-6">{card.desc}</p>
                <button className="bg-pink-600 text-white font-semibold px-6 py-2 rounded-full">
                  Purchase
                </button>
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