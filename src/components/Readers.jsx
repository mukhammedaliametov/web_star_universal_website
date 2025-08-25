import React from "react";
import ReadersBg from "../assets/readers_bg.png";
import Avatar from "../assets/reader_avatar.svg";
import { FaImages } from "react-icons/fa";
import ReadersImg from "../assets/readers_img.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Readers = () => {
  return (
    <div className="bg-[#262D33] py-[80px]">
      <div className="max-w-[1220px] mx-auto px-[16px] md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 font-global">
          <div className="col-span-2 row-span-2 rounded-[15px] overflow-hidden relative z-1 text-white h-[450px] md:h-full">
            <img src={ReadersBg} alt="readers" className="absolute top-0 left-0 w-full -z-1 h-[450px] md:h-full" />
            <div className="z-1 flex justify-center items-center flex-col gap-[20px] md:gap-[50px] h-full text-center w-full md:w-[80%] mx-auto ">
              <span className="absolute top-0 left-0 m-[20px] bg-[#FF4F52] text-[white] py-[3px] px-[15px] rounded-[10px]">Hot</span>
              <div>
                <img src={Avatar} alt="avatar" className="mx-auto mb-[5px]" />
                <p>By Sarah Jenkins</p>
                <span className="text-[14px] opacity-75">Photographer</span>
              </div>
              <h2 className="text-[32px] text-[44px]/[47px] font-global2 font-semibold">Readers' Choice winners: Your wine country favorites</h2>
              <button className="flex gap-[10px] items-center bg-[#4592FF] text-white font-global py-[10px] px-[25px] rounded-[50px] cursor-pointer">
                <FaImages /> Watch photos <span>26</span>
              </button>
            </div>
          </div>
          <div className="col-span-2 flex items-center bg-[#B4D1E0] rounded-[10px] pt-[20px] pr-[20px]">
            <div className="pl-[20px] md:pl-[40px] pb-[25px]">
              <p className="uppercase text-[#6E99AE] mb-[10px]">Careers</p>
              <h3 className="text-[26px]/[32px] text-[#262D33] font-global2 font-semibold">Had a Job Interview but No Callback? Here’s What to Do</h3>
              <p className="text-[#4B5157] my-[20px]">
                Try to understand the culture of the company where you want to
                work and be authentic in your interview, experts emphasize
              </p>
              <button className="flex gap-[10px] items-center font-regular bg-[#4592FF] text-white font-global py-[10px] px-[25px] rounded-[50px] cursor-pointer">
                Read more <FaArrowRightLong />
              </button>
            </div>
            <img src={ReadersImg} alt="readers" className="hidden md:block" />
          </div>
          <div className="rounded-[10px] w-[105%] md:w-auto bg-white p-[20px] md:p-[25px] row-span-1 col-span-1">
            <h3 className="font-global2 text-[16px] md:text-[20px] font-semibold">
              Is Coffee Bad for Bones?
            </h3>
            <p className="text-[#4B5157] py-[5px] text-[14px]">
              Coffee drinkers may excrete more calcium, but it doesn’t appear to
              weaken bones
            </p>
            <span className="text-[13px] md:text-[14px] text-[#939699]">
              Oct 15
            </span>
          </div>
          <div className="hidden md:block rounded-[10px] bg-white p-[20px] md:p-[25px] row-span-1 col-span-1">
            <h3 className="font-global2 text-[16px] md:text-[20px] font-semibold">
              What We Manufacture
            </h3>
            <p className="text-[#4B5157] py-[5px] text-[14px]">
              A global history of the factory and the modern world that all
              should read
            </p>
            <span className="text-[13px] md:text-[14px] text-[#939699]">
              Oct 14
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Readers;
