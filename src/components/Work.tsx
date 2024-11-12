
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
export default function Work() {
  return (
   
   <div>
   <div className="bg-[#043873] text-white w-full h-[574px] flex flex-col justify-center items-center px-[220px] py-[140px]"> {/*main container*/}
    
    <div className="flex flex-col justify-center items-center w-[1481px] h-[294px] gap-6">
    <h1 className="font-bold text-7xl w-[1064px]">Your work, everywhere you are</h1>
    <p className="font-normal text-lg leading-[30px] text-center w-[1064px]">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
    <button className="w-[195px] h-[63px] bg-[#4F9CF9] flex items-center justify-center text-white rounded-md font-medium text-lg mt-5 px-10 py-5">Try Taskey<GoArrowRight className="ml-2" />
    </button>

    </div>
    </div>

    <div className="w-[680.74px] h-[691.34px] mt-[-680px] ml-[-150px]">
    <Image src={"/images/background2.png"} alt="background" width={680.74} height={691.34} className="opacity-[20%] w-full h-full"/>
    </div>
    
    </div>
  )
}


