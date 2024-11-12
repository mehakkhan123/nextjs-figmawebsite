import { GoArrowRight } from "react-icons/go";
import Image from "next/image";

export default function Apps() {
  return (
    <div className="w-full h-[750.8px] flex justify-center items-center gap-[98px] px-[220px] py-[140px] bg-[#043873] text-white bg-[url('/images/background3.png')] bg-no-repeat bg-cover"> {/* main container */}
   

    <div> {/* left */} 
        <Image src={"/images/apps.png"} alt="extension image" width={582} height={470.8}/>
    </div>

    <div className="flex flex-col justify-center items-start w-[798px] h-[468px] gap-6"> {/* right */}
        <h1 className="font-bold text-7xl leading-[87.14px]">Work with Your Favorite Apps Using whitepace</h1>
        <p className="font-normal text-lg w-[660px] tracking-[-2%] leading-[30px]">Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
        </p>
        <button className="w-[194px] h-[63px] bg-[#4F9CF9] flex items-center justify-center text-white rounded-md font-medium text-lg mt-5 px-10 py-5">Read More<GoArrowRight className="ml-1" />
          </button>
    </div>

    </div>  /* main container end */
  )
}
