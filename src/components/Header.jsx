import React from "react";
import { RiMenu2Line } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import HeaderImg from "../assets/header_img.png";
import { FaUser } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import HeaderImg2 from "../assets/header_img2.png";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="bg-[#EDEFF0]">
      <div className="max-w-[1220px] mx-auto px-[16px] md:px-0 flex items-center justify-between font-global border-b-1  border-[#939699]">
        <div className="flex items-center gap-[20px]">
          <div className="flex items-center gap-[10px] border-r-1 pr-[20px] border-[#939699] h-[58px]">
            <RiMenu2Line className="text-[20px] cursor-pointer text-[#939699]" />
            <span className="hidden md:block font-semibold">Sections</span>
          </div>
          <div className="flex items-center gap-[5px]">
            <label htmlFor="search">
              <IoIosSearch className="text-[24px] cursor-pointer text-[#939699] pr-[5px]" />
            </label>
            <input
              type="text"
              placeholder="Search"
              id="search"
              className="outline-none w-full"
            />
          </div>
        </div>
        <div className="flex items-center gap-[70px] pt-[10px]">
          <div className="hidden md:flex items-center gap-[10px]">
            <img
              src={HeaderImg}
              alt="header_img"
              className="border-3 border-[#939699]"
            />
            <div>
              <p className="font-semibold cursor-pointer">Subscribe Now</p>
              <p className="text-[#939699] text-[12px]">3 month for $19</p>
            </div>
          </div>
          <div className="flex items-center gap-[5px] text-[#939699] cursor-pointer">
            <FaUser className="text-[20px] rounded-[45px]" />
            <span className="hidden md:block ">Sign In</span>
          </div>
        </div>
      </div>
      <div className="max-w-[1220px] mx-auto px-[16px] md:px-0 flex items-center justify-between font-global">
        <div className="hidden md:flex items-center gap-[10px]">
          <img src={HeaderImg2} alt="header_img_2" />
          <p className="text-[#4B5157]">Boston and New York Bear Brunt</p>
        </div>
        <a href="#" className="py-[15px] md:py-0">
          <img src={Logo} alt="logo" />
        </a>
        <div className="flex items-center gap-[40px]">
          <p className="hidden md:block text-[#4B5157]">Monday, January 1, 2018</p>
          <div className="flex items-center gap-[8px]">
            <GoSun className="text-[20px] text-[#BCBFC2]" />
            <p>+ 23 °C</p>
          </div>
        </div>
      </div>
      <div className="bg-[#262D33] py-[15px] md:py-[20px]">
        <div className="max-w-[1220px] mx-auto px-[16px] md:px-0 flex justify-between items-center gap-[25px] font-global text-white font-normal uppercase overflow-x-scroll md:overflow-x-hidden">
            <a href="#">News</a>
            <a href="#">Opinion</a>
            <a href="#">Science</a>
            <a href="#">Life</a>
            <a href="#">Travel</a>
            <a href="#">Moneys</a>
            <a href="#"><span className="hidden md:block">Art & </span>Design</a>
            <a href="#">Sports</a>
            <a href="#">People</a>
            <a href="#">Health</a>
            <a href="#">Education</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
