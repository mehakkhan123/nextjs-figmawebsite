import Image from "next/image"

export default function Sponsors() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[538px] gap-[100px] px-[220px] py-[140px]"> {/* main container */}
    <h1 className="font-bold text-7xl w-[1482px] text-center">Our sponsors</h1>
    <div className="flex items-center justify-between w-[1482px] h-[71px]"> {/* images */}
<Image src={"/images/apple.png"} alt="apple" width={55.47} height={68}/>
<Image src={"/images/microsoft.png"} alt="apple" width={287} height={62}/>
<Image src={"/images/slack.png"} alt="apple" width={280} height={71}/>
<Image src={"/images/google.png"} alt="apple" width={211} height={69.81}/>
    </div>
    </div>
  )
}
