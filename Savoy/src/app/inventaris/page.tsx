// app/about/page.tsx
import Image from "next/image";

const InventarisPage = () => {
  return (
    <div>

      <div id="element induk" className=" flex flex-col gap-2">

        <button className="w-[10rem] bg-green-500 text-white text-[2rem] rounded-[15px] hover:bg-yellow-500">
            <h1>Klik Saya</h1>
        </button>

        <button className="w-[8rem] bg-blue-300 test  white text-[15px] rounded-[1rem]">
          <h1>Peekaboo</h1>
        </button>

        <button className="w-[8rem] bg-blue-300 test  white text-[15px] rounded-[1rem]">
          <h1>Peekaboo</h1>
        </button>

      </div>

      <div className="max-w-8xl mx-auto px-4 py-16 space-y-24">
        <h1>Inventaris</h1>
      </div>
      <div className="max-w-8xl mx-auto px-4 py-16 space-y-24">
     <h1>Kos Laki-laki</h1>
     </div>
     <div className="max-w-8xl mx-auto px-4 py-16 space-y-24">
     <h1>Kos Perempuan</h1>
     </div>

    </div>
  )
  
};

export default InventarisPage;
