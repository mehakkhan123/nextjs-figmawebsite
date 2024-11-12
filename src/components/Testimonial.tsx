import Image from "next/image"

export default function Testimonial() {
  return (
    <div className="w-full h-[994.46px] flex flex-col justify-center items-center px-[220px] py-[140px] gap-[60px]"> {/* main container */}
    <h1 className="w-[1479px] text-center font-bold text-[70px]">What Our Clients Says</h1>
    <div className="w-[1479px] h-[498.46px] flex gap-8"> {/* content */}
        <div className="w-[471.67px] h-[498.46px] rounded-[10px] shadow-[15px_10px_50px_rgba(0,0,0,0.1)] px-10 py-[60px] flex flex-col gap-[60px]"> {/* content 1 */}
          <div className="flex flex-col gap-8 border-b border-1 border-[#212529] pb-10 w-[391.67] h-[223.46px]">  {/* comment section */}
          <Image src={"/images/quote-blue.png"} alt="quote" width={86} height={61.46}/>
          <p className="font-normal text-lg leading-[30px] tracking-[-0.02em]">Whitepate is designed as a collaboration tool for businesses that is a full project management solution</p>
          </div>
          <div className="flex gap-[42px]"> {/* client pic and name section */}
          <Image src={"/images/client1.png"} alt="quote" width={95} height={95}/>
          <div className="flex flex-col gap-[15px]"> {/* name section */}
            <h1 className="font-semibold text-2xl">Oberon Shaw, MCH</h1>
            <p className="font-normal text-base">Head of Talent Acquisition, North America</p>
          </div>
          </div>
      </div>  {/* content 1 end */}
        <div className="w-[471.67px] h-[498.46px] bg-[#4F9CF9] rounded-[10px] px-10 py-[60px] flex flex-col gap-[60px]"> {/* content 2 */}
        <div className="flex flex-col gap-8 border-b border-1 border-white pb-10 w-[391.67] h-[223.46px]">  {/* comment section */}
          <Image src={"/images/quote-white.png"} alt="quote" width={86} height={61.46}/>
          <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] text-white">Whitepate is designed as a collaboration tool for businesses that is a full project management solution</p>
          </div>
          <div className="flex gap-[42px]"> {/* client pic and name section */}
          <Image src={"/images/client2.png"} alt="quote" width={95} height={95}/>
          <div className="flex flex-col gap-[15px]"> {/* name section */}
            <h1 className="font-semibold text-2xl text-[#043873]">Oberon Shaw, MCH</h1>
            <p className="font-normal text-base text-white">Head of Talent Acquisition, North America</p>
          </div>
          </div>
          
        </div>  {/* content 2 end */}
        <div className="w-[471.67px] h-[498.46px] bg-[#4F9CF9] rounded-[10px] px-10 py-[60px] flex flex-col gap-[60px]"> {/* content 3 */}
        <div className="flex flex-col gap-8 border-b border-1 border-white pb-10 w-[391.67] h-[223.46px]">  {/* comment section */}
          <Image src={"/images/quote-white.png"} alt="quote" width={86} height={61.46}/>
          <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] text-white">Whitepate is designed as a collaboration tool for businesses that is a full project management solution</p>
          </div>
          <div className="flex gap-[42px]"> {/* client pic and name section */}
          <Image src={"/images/client3.png"} alt="quote" width={95} height={95}/>
          <div className="flex flex-col gap-[15px]"> {/* name section */}
            <h1 className="font-semibold text-2xl text-[#043873]">Oberon Shaw, MCH</h1>
            <p className="font-normal text-base text-white">Head of Talent Acquisition, North America</p>
          </div>
          </div>
        </div>  {/* content 3 end */}
    </div> {/* content end */}

    <div className="w-[60px] h-3 flex gap-3"> {/* circles */}
        <div className="w-3 h-3 bg-[#4F9CF9] rounded-[50%]"> {/* circle 1 */}

        </div>
        <div className="w-3 h-3 bg-[#043873] rounded-[50%]"> {/* circle 1 */}

        </div>
        <div className="w-3 h-3 bg-[#4F9CF9] rounded-[50%]"> {/* circle 1 */}

        </div>
    </div>

    </div>
  )
}

