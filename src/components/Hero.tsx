
import Image from "next/image"

export default function Hero() {
  return (
    <div className="flex justify-center items-center bg-[#043873] desktop-xl:h-[656.39px] desktop-xl:py-[100px] desktop-2xl:py-[140px] desktop-2xl:h-[829px] ">
      <div className="flex bg-[url('/images/hero-background.png')] bg-no-repeat bg-cover desktop-xl:px-8 desktop-2xl:px-[220px]">
        <div className="flex flex-col flex-1 gap-5 justify-center text-white">
        <h1 className="font-bold text-[64px] leading-[77.45px]">Get More Done with whitepace</h1>
        <p className="font-normal text-[18px] w-[656px]">
        Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
        </p>
        <button className="text-white w-[219px] h-[63px] p-5 rounded-lg bg-[#4F9CF9] font-medium text-[18px] my-3">Try Whitespace free</button>
        </div>
        <div className="flex-1">
          <div>
          <Image 
            src="/images/hero.png"
            alt="Banner Image" 
            width={824}
            height={549}
          />
          </div>
        </div>
      </div>
      {/* <div>
        <Image src="https://images.pexels.com/photos/28974077/pexels-photo-28974077/free-photo-of-close-up-of-two-polar-bears-on-rocky-terrain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="external-image"
        width={502}
        height={465}
        />
      </div> */}
    </div>

  )
}

