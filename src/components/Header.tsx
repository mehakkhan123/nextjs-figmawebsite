import { SlArrowDown } from "react-icons/sl";
import Image from "next/image"
import Link from "next/link"


export default function Header() {
  return (
        <header className="bg-[#043873] h-[92px] flex  justify-between items-center desktop-2xl:py-4 desktop-2xl:px-[220px] desktop-xl:px-8">
            <div>
                <Image src={"/images/logo.png"} alt="logo" width={191} height={34}/>
            </div>
            <nav className="flex gap-[60px]">
              <ul className="flex text-white gap-8 items-center">
                <li className="text-lg font-medium"><Link href={""}>Products</Link></li><SlArrowDown />
                <li className="text-lg font-medium"><Link href={""}>Solutions</Link></li><SlArrowDown />
                <li className="text-lg font-medium"><Link href={""}>Resources</Link></li><SlArrowDown />
                <li className="text-lg font-medium"><Link href={""}>Pricing</Link></li><SlArrowDown />
              </ul>

              <div className="flex items-center gap-4">
            <button className="bg-[#FFE492] w-[126px] h-[60px] py-4 px-10  rounded-lg text-lg font-medium text-[#043873]">Login</button>
            <button className="bg-[#4F9CF9] w-[227px] h-[60px] py-4 px-6  rounded-lg text-lg font-medium text-white">Try Whitespace free</button>
            </div>
            </nav>
        </header>
  )
}





