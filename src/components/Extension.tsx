import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
export default function Extension() {
  return (
    <div className="w-full h-[759px] bg-[#043873] text-white flex justify-center items-center gap-[98px] px-[220px] py-[140px]"> {/* main container */}
    <div className="flex flex-col justify-center items-start w-[697px] h-[294px] gap-6"> {/* left */}
        <h1 className="font-bold text-7xl">Use as Extension</h1>
        <p className="font-normal text-lg w-[697px] tracking-[-2%] leading-[30px]">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
        </p>
        <button className="w-[201px] h-[63px] px-10 py-5 bg-[#4F9CF9] flex items-center justify-center text-white rounded-md font-medium text-lg mt-5">Let's Go<GoArrowRight className="ml-2" />
          </button>
    </div>

    <div> {/* right */} 
        <Image src={"/images/hero.png"} alt="extension image" width={686} height={479}/>
    </div>

    </div>  /* main container end */
  )
}

