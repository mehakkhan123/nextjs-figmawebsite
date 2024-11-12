import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
export default function Data() {
  return (
    <div className="w-full h-[661.13px] flex justify-center items-center px-[220px] py-[140px]"> {/* main container */}
   

    

    <div className="flex flex-col justify-center items-start w-[800px] h-[324px] gap-6"> {/* left */}
        <h1 className="font-bold text-7xl leading-[87.14px] w-[800px]">100% your data</h1>
        <p className="font-normal text-lg tracking-[-2%] leading-[30px] w-[800px]">The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
        </p>
        <button className="w-[197px] h-[63px] bg-[#4F9CF9] flex items-center justify-center text-white rounded-md font-medium text-lg mt-5 px-10 py-5">Let's Go<GoArrowRight className="ml-2" />
          </button>
    </div>

    <div> {/* right */} 
        <Image src={"/images/data.png"} alt="extension image" width={681} height={381.13}/>
    </div>

    </div>  /* main container end */
  )
}
