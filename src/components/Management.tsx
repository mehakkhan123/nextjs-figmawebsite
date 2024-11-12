import { GoArrowRight } from "react-icons/go";
import Image from "next/image";

export default function Management() {
  return (
    <div className="flex flex-col items-center justify-center px-[220px] py-[140px]">
      {/* main container */}
      <div className="flex justify-center items-center w-[1480px] h-[547px] gap-[60px] ">
        {/* project management */}
        <div className="flex flex-col items-start justify-center flex-1 w-[672px] h-[547px] gap-6">
          {/* left */}
          <h1 className="font-bold text-7xl w-[672px] leading-[87.14px]">
            Project Management
          </h1>
          <p className="font-normal text-lg w-[672px]">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <button className="w-[201px] h-[63px] bg-[#4F9CF9] flex items-center justify-center text-white rounded-md font-medium text-lg">
            Get Started <GoArrowRight className="ml-2" />
          </button>
        </div>
        <div className="flex-1 h-[547px] flex">
          {" "}
          {/* right */}
          <Image
            src={"/images/hero.png"}
            width={748}
            height={547}
            alt="project-image"
          />
        </div>
      </div>{" "}
      {/* project management end */}
      <div className="mt-[-380px] ml-[-1500px] w-[602.84px] h-[448.52px]">
        {" "}
        {/* background */}
        <Image
          src={"/images/background.png"}
          alt="group"
          width={602.84}
          height={448.52}
          className="opacity-[20%] bg-blend-multiply w-full h-full"
        />
      </div>
      <div className="flex w-[1480px] h-[661px] gap-[100px] items-center justify-center">
        {" "}
        {/* work together */}
        <div>
          {" "}
          {/* left */}
          <Image
            src={"/images/work.png"}
            width={710}
            height={661}
            alt="project-image"
          />
        </div>
        <div className="flex flex-col gap-[30px]">{/* right */}
          <h1 className="font-bold text-7xl w-[672px] leading-[87.14px]">
            Work Together
          </h1>
          <p className="font-normal text-lg w-[672px]">
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>
          <button className="w-[186px] h-[63px] bg-[#4F9CF9] flex items-center justify-center text-white rounded-md font-medium text-lg mt-5">
            Try it now<GoArrowRight className="ml-2" />
          </button>
        </div>
      </div>
      {/* work together end*/}
    </div>
  );
}
