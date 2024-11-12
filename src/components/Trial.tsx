import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

export default function Trial() {
  return (
    <div className="bg-[#043873] w-full h-[705px]  px-[220px] pt-[140px] pb-[32px] flex flex-col justify-center items-center">
        <div className="w-[608px] h-[533px] flex flex-col items-center justify-center gap-10"> {/* text container */}
        <h1 className="font-bold text-7xl text-white text-center">Try Whitepace today</h1>
        <p className="font-normal text-2xl text-white text-center w-[550px]">Get started for free. <br /> Add your whole team as your needs grow.</p>
        <button className="w-[218px] h-[59px] px-10 py-5 bg-[#4F9CF9] flex items-center justify-center text-white rounded-md font-medium text-base">Try Taskey free<GoArrowRight className="ml-2" />
          </button>
        <p className="text-white font-normal text-2xl text-center">On a big team? Contact sales</p>

        <div className="flex gap-10"> {/* images container */}
          <Image src={"/images/apple white.png"} alt="apple" width={60} height={60}/>
          <Image src={"/images/windows.png"} alt="windows" width={60} height={60}/>
          <Image src={"/images/robot.png"} alt="android" width={60} height={60}/>
        </div>
        </div>
        
    </div>
  )
}
