import React from "react";
import HeroAvatar from "../assets/hero_avatar.png";
import { FaPlay } from "react-icons/fa";
import HeroBg from "../assets/hero_bg.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="bg-[#262D33] mb-[150px]">
      <div className="max-w-[1200px] mx-auto px-[16px] md:px-0 flex items-center flex-col md:flex-row py-[40px] font-global">
        <div
          className="bg-center bg-cover bg-no-repeat w-full h-[550px] p-[20px] md:p-[60px] rounded-tl-xl rounded-tr-xl md:rounded-tr-none md:rounded-bl-xl"
          style={{ backgroundImage: `url(${HeroBg})` }}
        >
          <div className="flex items-center gap-[15px] mb-[130px]">
            <img src={HeroAvatar} alt="avatar" />
            <div className="text-white">
              <p>By Benjamin Turner</p>
              <p className="opacity-75 text-[14px]">Traveler</p>
            </div>
          </div>
          <p className="uppercase text-[#4592FF]">Destinations</p>
          <h1 className="text-[26px] md:text-[34px] font-global2 text-white font-semibold my-[20px]">
            In Southeast England, White <br className="hidden md:block" /> Cliffs and Fish
          </h1>
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-[20px] md:gap-[40px]">
            <button className="flex gap-[10px] items-center bg-[#4592FF] text-white font-global py-[10px] px-[25px] rounded-[50px] cursor-pointer">
              Read more <FaArrowRightLong />
            </button>
            <div className="flex items-center gap-[10px] my-[15px] text-white">
              <div className="border-2 border-[#ffffff9d] py-[15px] px-[15px] rounded-full cursor-pointer">
                <FaPlay />
              </div>
              <div>
                <p>The chalk cliff of Beachy Head</p>
                <p className="text-[12px] opacity-75">18:05</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#fff] flex flex-row md:flex-col h-auto md:h-[550px] w-full md:w-[30%] overflow-x-scroll md:overflow-hidden rounded-bl-xl md:rounded-bl-none rounded-br-xl md:rounded-tr-xl">
          <h4 className="hidden md:block px-[20px] py-[10px]">Recommended for you</h4>
          <div className="bg-[#F5F5F5] px-[20px] py-[25px] md:py-[15px] border-r md:border-r-none md:border-t border-[#D9DADB] w-[360px] md:w-[270px] flex-shrink-0">
            <p className='uppercase text-[18px] md:text-[14px] mb-[5px] text-[#3BBDC4]'>Food</p>
            <p  className='text-[#4B5157] text-[20px] md:text-[14px]'>
              For Chicken-Fried Steak, Too Much Is Just Enough
            </p>
          </div>
          <div className="px-[20px] py-[25px] md:py-[15px] border-r md:border-r-none md:border-t border-[#D9DADB] w-[360px] md:w-[270px] flex-shrink-0">
            <p className='uppercase text-[18px] md:text-[14px] mb-[5px] text-[#6E99AE]'>Cars</p>
            <p className='text-[#4B5157] text-[20px] md:text-[14px]'>Storm Has Car Dealers Doing Swift Business</p>
          </div>
          <div className="px-[20px] py-[25px] md:py-[15px] border-r md:border-r-none md:border-t border-[#D9DADB] w-[360px] md:w-[270px] flex-shrink-0">
            <p className='uppercase text-[18px] md:text-[14px] mb-[5px] text-[#AC8EE3]'>Movies</p>
            <p className="text-[#4B5157] text-[20px] md:text-[14px]">War Is Hell? In New Military Dramas, It’s One-Dimensional</p>
          </div>
          <div className="px-[20px] py-[25px] md:py-[15px] border-r md:border-r-none md:border-t border-[#D9DADB] w-[360px] md:w-[270px] flex-shrink-0">
            <p className='uppercase text-[18px] md:text-[14px] mb-[5px] text-[#FFA34D]'>NFL</p>
            <p  className='text-[#4B5157] text-[20px] md:text-[14px]'>
              11 surprising stat rankings for active NFL players
            </p>
          </div>
          <div className="px-[20px] py-[25px] md:py-[15px] border-r md:border-r-none md:border-t border-[#D9DADB] w-[360px] md:w-[270px] flex-shrink-0">
            <p className='uppercase text-[18px] md:text-[14px] mb-[5px] text-[#3DC47E]'>Tech Reviews</p>
            <p className='text-[#4B5157] text-[20px] md:text-[14px]'>The bookcases you can buy online and assemble yourself</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
