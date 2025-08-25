import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import BgImage from '../assets/banner_bg.png';

const Banner = () => {
  return (
    <div style={{ backgroundImage: `url(${BgImage})` }} className="h-[250px] bg-cover bg-center flex justify-center items-center flex-col">
      <h2 className="text-[28px]/[30px] md:text-[40px]/[42px] px-[8px] md:px-[0px] font-global2 text-center text-white font-semibold mb-[20px]">
        The Big Bloom or «How Flowering <br className="hidden md:block" /> Plants Changed the World»
      </h2>
      <button className="flex gap-[10px] items-center bg-[#4592FF] text-white font-global py-[10px] px-[25px] rounded-[50px] cursor-pointer">
        Read more <FaArrowRightLong />
      </button>
    </div>
  );
};

export default Banner;
