import { GoArrowRight } from "react-icons/go";
import Image from "next/image";

export default function Customize() {
  return (
<div className="w-full h-[812.09px] flex justify-center items-center gap-[98px] px-[220px] py-[140px]"> {/* main container */}
   

    <div> {/* left */} 
        <Image src={"/images/hero.png"} alt="extension image" width={714} height={532.09}/>
    </div>

    <div className="flex flex-col justify-center items-start w-[669px] h-[411px] gap-6"> {/* right */}
        <h1 className="font-bold text-7xl leading-[87.14px]">Customise it
        to your needs</h1>
        <p className="font-normal text-lg w-[660px] tracking-[-2%] leading-[30px]">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
        </p>
        <button className="w-[201px] h-[63px] bg-[#4F9CF9] flex items-center justify-center text-white px-10 py-5 rounded-md font-medium text-lg mt-5">Let's Go<GoArrowRight className="ml-2" />
          </button>
    </div>

    </div>  /* main container end */
  )
}
