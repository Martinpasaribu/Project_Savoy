import CarouselLocation from "@/components/Carousel/PageMain/Location";
import CarouselItemProduct from "@/components/Carousel/PageMain/ProductItem";
import ContactComponent from "@/components/Elements/Contact";
import FadeIn from "@/components/Elements/FadeIn";
import HeroParallax from "@/components/Elements/Parallax";
import PromoPopup from "@/components/Global/promo";
import Image from "next/image";


export default function Home() {

  return (

    <div>

      <PromoPopup/>

      <div className="relative flex justify-start items-start  w-full h-screen bg-home1 bg-no-repeat bg-cover bg-top  ">

        <div className="flex flex-center px-2 md:px-4 py-4 md:py-8 mt-[3rem]">
   
          <FadeIn>
            <div className="flex flex-center">

            </div>
            <p className="text-[10px] text-[#a07c40]">Your gateway to</p>
            <h1 className="font-luxurious text-4xl text-tiny leading-tight text-center text-[#c5b08f]">Luxury Living</h1>
          </FadeIn>


        </div>

      </div>

      <div className="relative flex flex-center  w-full">

        <div className="w-full h-screen bg-living_room bg-no-repeat bg-cover bg-center">

        </div>


        <div className="flex flex-col justify-around items-center px-2 md:px-4 py-4 md:py-5 w-[35rem] h-full gap-5">

            <h1 className="font-sans text-[18px] leading-tight text-left text-[#a07c40] max-w-[20rem]">
              Discover a world of comfort
              and elegance
            </h1>

            <div className="absolute bottom-0 right-0 rotate-90">
              <Image
                src="/assets/Ornamen/ornamen_corner.png"
                alt="MyApp Logo"
                width={112}
                height={132}
              />
            </div>

            <p className="text-[11px] w-full max-w-[20rem] text-slate-700 dark:text-gray-300 font-thin">
              Indulge in the epitome of luxury living with classic modern townhouses at Savoy Residences in Bintaro, 
              South Jakarta. Each residence is thoughtfully designed to provide unparalleled comfort and elegance, 
              with high-end finishes that create a serene atmosphere. Whether you`re unwinding in your living room or hosting 
              gatherings, you`ll relish the meticulous attention to detail. Experience a new level of elegance at Savoy Residences` townhouse community. Savoy residences presents a 3-storey house with a private pool.
            </p>


        </div>

      </div>

      <div className="relative w-full h-[600px] backdrop-blur-xs bg-gradient-to-l from-[#a48f6c]">

        <div className="px-5 py-10 ">

          <h2 className="text-[#a07c40] text-bold mb-5 text-[19px]">Experience sanctuary living</h2>

          <p className="text-[12px] dark:text-gray-300">
            Comfort is our top priority.

            We believe that your home should be a sanctuary.

            You`ll find that every aspect is designed to create a comfortable home.
          </p>

        </div>

        <div className='absolute z-20 w-full  '>

          <CarouselItemProduct/>

        </div>

      </div>

      <div className="flex flex-col p-5 relative pb-[5rem]">

          <div className="absolute top-0 right-0">
            <Image
              src="/assets/Ornamen/ornamen_corner.png"
              alt="MyApp Logo"
              width={112}
              height={132}
            />
          </div>
          <div className="absolute bottom-0 right-0 rotate-90">
            <Image
              src="/assets/Ornamen/ornamen_corner.png"
              alt="MyApp Logo"
              width={112}
              height={132}
            />
          </div>

        {/* Head */}
        <div className="text-center p-4">
          <h1 className="text-[#a48f6c]">STRATEGIC</h1>
          <p className="text-[30px] text-[#a48f6c] font-bold">LOCATION</p>
        </div>

        {/* Product */}

        <div className="pt-10">
          <CarouselLocation/>
        </div>

      </div>

      <div>
        <HeroParallax/>
      </div>

      <div className="flex-center p-[6rem] relative bg-pattern bg-no-repeat bg-cover bg-top bg-[#f8f8f8]">

        <ContactComponent/>

      </div>

    </div>
  );
}
