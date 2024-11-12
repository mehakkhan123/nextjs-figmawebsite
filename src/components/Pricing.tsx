import { IoMdCheckmarkCircleOutline } from "react-icons/io";
export default function Pricing() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[1272px] px-[220px] py-[140px] gap-[60px]">
      {" "}
      {/* main container */}
      <div className="flex flex-col items-center justify-center w-[1481px] h-[171px] gap-6">
        {" "}
        {/* plan */}
        <h1 className="font-bold text-7xl">Choose Your Plan</h1>
        <p className="font-normal text-lg w-[979px] text-center">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </div>
      <div className="flex justify-center items-center w-[1481px] h-[761px] gap-8"> {/* cards main container */}
        <div className="border border-1 border-[#FFE492] w-[472.33px] h-[634px] rounded-[10px] px-11 py-10 flex flex-col justify-center items-start gap-[25px]"> {/* card 1 */}
            <div className="flex flex-col gap-[25px] w-[384.33px]">  {/* text block */}
                <h1 className="font-semibold text-2xl">Free</h1>
                <h1 className="font-bold text-3xl">$0</h1>
                <p className="font-medium text-lg">Capture ideas and find them quickly</p>
            </div>

            <ul className="flex flex-col gap-7 w-[384.33px]">  {/* bullet points */}
                <li className="font-normal text-base flex items-center gap-[19px] leading-5"><IoMdCheckmarkCircleOutline className="w-[18.01px] h-[18.01px]" />Sync unlimited devices</li>
                <li className="font-normal text-base flex items-center gap-[19px] leading-5"><IoMdCheckmarkCircleOutline className="w-[18.01px] h-[18.01px]" />10 GB monthly uploads</li>
                <li className="font-normal text-base flex items-center gap-[19px] leading-5"><IoMdCheckmarkCircleOutline className="w-[18.01px] h-[18.01px]" />200 MB max. note size</li>
                <li className="font-normal text-base flex items-center gap-[19px] leading-5"><IoMdCheckmarkCircleOutline className="w-[18.01px] h-[18.01px]" />Customize Home dashboard and access extra widgets</li>
                <li className="font-normal text-base flex items-center gap-[19px] leading-5"><IoMdCheckmarkCircleOutline className="w-[18.01px] h-[18.01px]" />Connect primary Google Calendar account</li>
                <li className="font-normal text-base flex items-center gap-[19px] leading-5"><IoMdCheckmarkCircleOutline className="w-[18.01px] h-[18.01px]" />Add due dates, reminders, and notifications to your tasks</li>
            </ul>

            <button className="w-[166px] h-[51px] border border-[#FFE492] rounded-lg px-10 py-4 font-medium text-base">Get Started</button>


        </div>
        <div className="w-[472.33px] h-[761px] text-white bg-[#043873] rounded-[10px] px-11 py-20 flex flex-col justify-center items-start gap-[25px] shadow-[0_4px_50px_0_rgba(0,0,0,0.08)]"> {/* card 2 */}
        <div className="flex flex-col gap-[25px] w-[384.33px]">  {/* text block */}
                <h1 className="font-semibold text-2xl">Personal</h1>
                <h1 className="font-bold text-3xl text-[#FFE492]">$11.99</h1>
                <p className="font-medium text-lg">Keep home and family on track</p>
            </div>

            <ul className="flex flex-col gap-7 w-[384.33px]">  {/* bullet points */}
                <li className="font-normal text-base flex items-center gap-[19px] leading-5 tracking-[-2%]"><IoMdCheckmarkCircleOutline className="w-[18.01px] h-[18.01px] text-[#FFE492]" />Sync unlimited devices</li>
                <li className="font-normal text-base flex items-center gap-[19px] leading-5 tracking-[-2%]"><IoMdCheckmarkCircleOutline className="w-[18.01px] h-[18.01px] text-[#FFE492]" />10 GB monthly uploads</li>
                <li className="font-normal text-base flex items-center gap-[19px] leading-5 tracking-[-2%]"><IoMdCheckmarkCircleOutline className="w-[18.01px] h-[18.01px] text-[#FFE492]" />200 MB max. note size</li>
                <li className="font-normal text-base flex items-center gap-[19px] leading-5 tracking-[-2%]"><IoMdCheckmarkCircleOutline className="w-[18.01px] h-[18.01px] text-[#FFE492]" />Customize Home dashboard and access extra widgets</li>
                <li className="font-normal text-base flex items-center gap-[19px] leading-5 tracking-[-2%]"><IoMdCheckmarkCircleOutline className="w-[18.01px] h-[18.01px] text-[#FFE492]" />Connect primary Google Calendar account</li>
                <li className="font-normal text-base flex items-center gap-[19px] leading-5 tracking-[-2%]"><IoMdCheckmarkCircleOutline className="w-[18.01px] h-[18.01px] text-[#FFE492]" />Add due dates, reminders, and notifications to your tasks</li>
            </ul>

            <button className="w-[166px] h-[51px] rounded-lg px-10 py-4 font-medium text-base bg-[#4F9CF9]">Get Started</button>
        </div>
        <div className="border border-1 border-[#FFE492] w-[472.33px] h-[634px] rounded-[10px] px-11 py-10 flex flex-col justify-center items-start gap-[25px]"> {/* card 3 */}
        <div className="flex flex-col gap-[25px] w-[384.33px]">  {/* text block */}
                <h1 className="font-semibold text-2xl">Organization</h1>
                <h1 className="font-bold text-3xl">$49.99</h1>
                <p className="font-medium text-lg">Capture ideas and find them quickly</p>
            </div>

            <ul className="flex flex-col gap-7 w-[384.33px]">  {/* bullet points */}
                <li className="font-normal text-base flex items-center gap-[19px] leading-5"><IoMdCheckmarkCircleOutline className="w-[18.01px] h-[18.01px]" />Sync unlimited devices</li>
                <li className="font-normal text-base flex items-center gap-[19px] leading-5"><IoMdCheckmarkCircleOutline className="w-[18.01px] h-[18.01px]" />10 GB monthly uploads</li>
                <li className="font-normal text-base flex items-center gap-[19px] leading-5"><IoMdCheckmarkCircleOutline className="w-[18.01px] h-[18.01px]" />200 MB max. note size</li>
                <li className="font-normal text-base flex items-center gap-[19px] leading-5"><IoMdCheckmarkCircleOutline className="w-[18.01px] h-[18.01px]" />Customize Home dashboard and access extra widgets</li>
                <li className="font-normal text-base flex items-center gap-[19px] leading-5"><IoMdCheckmarkCircleOutline className="w-[18.01px] h-[18.01px]" />Connect primary Google Calendar account</li>
                <li className="font-normal text-base flex items-center gap-[19px] leading-5"><IoMdCheckmarkCircleOutline className="w-[18.01px] h-[18.01px]" />Add due dates, reminders, and notifications to your tasks</li>
            </ul>

            <button className="w-[166px] h-[51px] border border-[#FFE492] rounded-lg px-10 py-4 font-medium text-base">Get Started</button>

        </div>
      </div>{" "}
      {/* cards main container end*/}
    </div> /* main container end*/
  );
}
