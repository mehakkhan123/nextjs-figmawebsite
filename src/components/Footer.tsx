
import Image from "next/image"
import { GoArrowRight } from "react-icons/go";
import { IoIosGlobe } from "react-icons/io";
import { SlArrowDown } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full h-[474px] bg-[#043873] pt-[140px] pb-8 px-[220px] flex flex-col gap-[200px] justify-center items-center"> {/* main container */}
        <div className="w-[1480px] h-[302px] flex flex-col gap-[100px]"> {/* rows container start */}
        <div className="flex gap-[100px] w-[1480px] h-[182px]"> {/* row 1 */}
            <div className="flex flex-col  w-[205.25px] h-[169px] gap-[15px]">  {/* column 1 */}
            <Image src={"/images/logo.png"} alt="logo" width={191} height={34}/>
            <p className="text-[#F7F7EE] font-normal text-lg leading-[30px] tracking-[-2%] w-60 h-[120px]">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
            </div>  {/* column 1 end */}

            <div className="flex flex-col w-[205.25px] h-[127px] gap-[15px]">  {/* column 2 */}
            <h4 className="font-bold text-lg text-white">Product</h4>
            <h6 className="font-normal text-base text-[#FFE492]">Overview</h6>
            <h6 className="font-normal text-base text-white">Pricing</h6>
            <h6 className="font-normal text-base text-white">Customer stories</h6>
            </div>  {/* column 2 end */}

            <div className="flex flex-col gap-4 w-[205.25px] h-[130px]">  {/* column 3 */}
            <h4 className="font-bold text-lg text-white">Resurces</h4>
            <h6 className="font-normal text-base text-white">Blog</h6>
            <h6 className="font-normal text-base text-white">Guides & tutorials</h6>
            <h6 className="font-normal text-base text-white">Help center</h6>
            </div>  {/* column 3 end */}

            <div className="flex flex-col gap-4 w-[205.25px] h-[130px]">  {/* column 4 */}
            <h4 className="font-bold text-lg text-white">Company</h4>
            <h6 className="font-normal text-base text-white">About us</h6>
            <h6 className="font-normal text-base text-white">Careers</h6>
            <h6 className="font-normal text-base text-white">Media kit</h6>
            </div>  {/* column 4 end */}

            <div className="flex flex-col gap-[23px] w-[259px] h-[182px]">  {/* column 5 */}
            <h1 className="font-bold text-[28px] text-white">Try It Today</h1>
            <p className="font-normal text-base text-white leading-5 w-[259px] h-10 tracking-[-2%]">Get started for free. Add your whole team as your needs grow.</p>
            <button className="w-[186px] h-[60px] px-10 py-5 bg-[#4F9CF9] flex items-center justify-center text-white rounded-lg font-normal text-base">Start today<GoArrowRight className="ml-2" />
          </button>
            </div>  {/* column 5 end */}
            
        </div> {/* row 1 end */}

        

        <div className="w-[1480px] h-5 text-white flex justify-between items-center"> {/* row 2 */}
          <div className="flex gap-[60px]">  {/* left */}
          <h6 className="text-white flex gap-[6px] justify-center items-center font-normal text-base"><IoIosGlobe className="w-[19px] h-[19px]" />English <SlArrowDown className="w-5 h-[14px]" /></h6>
          <h6 className="font-normal text-base tracking-[-2%]">Terms & privacy</h6>
          <h6 className="font-normal text-base tracking-[-2%]">Security</h6>
          <h6 className="font-normal text-base tracking-[-2%]">Status</h6>
          <h6 className="font-normal text-base tracking-[-2%]">&copy;2021 Whitepace LLC.</h6>
          </div> {/* left end */}

          <div className="flex gap-8 w-[105px] h-[16.68px]">  {/* right */}
          <FaFacebookF className="w-[9px] h-[16.68px]" />
          <FaTwitter className="w-[17px] h-[13.81px]" />
          <FaLinkedinIn className="w-[15px] h-[15px]" />
          
          </div> {/* right end */}

        </div> {/* row 2 end */}
        </div> {/* rows container end */}

    </div> /* main container end */
  )
}

//h1(24-36) h2(18-30) h3(16-24) h4(18) h5(16) h6(16)