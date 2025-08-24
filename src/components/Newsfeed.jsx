import React from "react";
import Card1 from "../assets/newsfeed1.png";
import Avatar from "../assets/newsfeed_avatar1.svg";
import Avatar2 from "../assets/newsfeed_avatar2.svg";
import Avatar3 from "../assets/newsfeed_avatar3.svg";
import Avatar4 from "../assets/newsfeed_avatar4.svg";
import { FaCommentAlt } from "react-icons/fa";
import Card2 from "../assets/newsfeed2.png";
import Card3 from "../assets/newsfeed3.png";
import Quote from "../assets/quote.svg";
import { FaHeart } from "react-icons/fa";

const Newsfeed = () => {
  return (
    <div className="bg-[#EDEFF0]">
      <div className="max-w-[1220px] mx-auto px-[16px] md:px-0 py-[50px] font-global grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(150px,auto)] gap-5">
        
        {/* Katta card */}
        <div className="bg-white rounded-[10px] overflow-hidden col-span-1 sm:col-span-2">
          <div className="flex flex-col md:flex-row items-center">
            <div className="p-[20px] md:pl-[30px]">
              <p className="text-[#6E99AE] uppercase">Cars</p>
              <h2 className="text-[20px] md:text-[24px] font-semibold font-global2 py-[15px] md:py-[20px]">
                The joy of replicas: <br /> A $ 5 million car for $ 50,000
              </h2>
              <p className="text-[#4B5157] text-[14px]">
                The 31-year-old self-taught engineer and former amateur racer
                spends his days building artful recreations of one of most
                iconic sports cars
              </p>
            </div>
            <img
              src={Card1}
              alt="card1"
              className="hidden md:block w-[250px] lg:w-[300px]"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 px-[20px] md:px-[30px] border-t border-[#D9DADB] py-[15px]">
            <p className="flex items-center text-[14px] text-[#4B5157]">
              <img src={Avatar} alt="avatar" className="pr-[10px]" />
              <span className="font-bold text-black pr-[3px]">Jessica Miller: </span>
              Even as the ride-hailing service’s future remem…
            </p>
            <div className="flex items-center gap-[3px] text-[#939699]">
              <FaCommentAlt />
              342
            </div>
          </div>
        </div>

        {/* Popular card */}
        <div className="rounded-[10px] overflow-hidden h-[400px] md:h-auto relative z-2 col-span-1 row-span-1 group cursor-pointer">
          <img
            src={Card3}
            alt="card3"
            className="absolute z-[-1] w-full h-full object-cover group-hover:scale-110 duration-300 transition-all"
          />
          <div className="z-3 py-[20px] px-[25px] relative h-full">
            <p className="inline-block text-[12px] bg-[#3DC47E] text-white py-[3px] px-[8px] rounded-[5px]">
              Popular
            </p>
            <div className="absolute bottom-0 mb-[20px]">
              <p className="text-[#E7D9FF] text-[14px] uppercase">Art & Design</p>
              <h4 className="font-global2 text-[16px] md:text-[18px] font-semibold text-white my-[10px]">
                Invisible ink: the weird world of tattoo removal – in pictures
              </h4>
              <div className="flex items-center gap-[10px] text-white">
                <img src={Avatar} alt="avatar" />
                <div className="text-[#939699]">
                  <p className="text-white">By Sarah Jenkins</p>
                  <div className="flex items-center gap-[10px] text-[13px] md:text-[14px]">
                    <p>Sept 26</p>
                    <p className="flex items-center gap-[5px]">
                      <FaCommentAlt /> 26
                    </p>
                    <p className="flex items-center gap-[5px]">
                      <FaHeart /> 832
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Columns */}
        <div className="bg-[#6E99AE] text-white rounded-[10px] row-span-3 col-span-1 order-last lg:order-none">
          <p className="py-[15px] px-[20px] border-b border-[#B4D1E0] uppercase">
            Columns
          </p>
          <div className="p-[20px] md:p-[30px]">
            <div className="relative z-2 px-[8px] mb-[25px]">
              <img src={Quote} alt="quote" className="absolute top-0 left-0 -z-1" />
              <h3 className="z-3 font-global2 text-[18px] md:text-[20px]">
                Architecture is the thoughtful making of space
              </h3>
              <div className="flex items-center mt-[15px] gap-[10px]">
                <img src={Avatar2} alt="avatar2" />
                <div>
                  <p className="text-[#D1E2EB]">David Williams</p>
                  <p className="text-[14px] text-[#D1E2EB]">Architect</p>
                </div>
              </div>
            </div>
            <div className="relative z-2 px-[8px] border-t border-b border-[#B4D1E0] py-[40px] my-[40px]">
              <img src={Quote} alt="quote" className="absolute top-[20px] left-0 -z-1" />
              <h3 className="z-3 font-global2 text-[18px] md:text-[20px]">
                The details are not the details. They make the design.
              </h3>
              <div className="flex items-center mt-[15px] gap-[10px]">
                <img src={Avatar3} alt="avatar3" />
                <div>
                  <p className="text-[#D1E2EB]">Alexandra Green</p>
                  <p className="text-[14px] text-[#D1E2EB]">Interior designer</p>
                </div>
              </div>
            </div>
            <div className="relative z-2 px-[8px]">
              <img src={Quote} alt="quote" className="absolute top-0 left-0 -z-1" />
              <h3 className="z-3 font-global2 text-[18px] md:text-[20px]">
                Live life to the fullest, and focus on the positive
              </h3>
              <div className="flex items-center mt-[15px] gap-[10px]">
                <img src={Avatar4} alt="avatar4" />
                <div>
                  <p className="text-[#D1E2EB]">Olivia Thompson</p>
                  <p className="text-[14px] text-[#D1E2EB]">Coacher</p>
                </div>
              </div>
            </div>
          </div>
          <p className="border-t border-[#B4D1E0] py-[15px] text-center cursor-pointer">
            Read more
          </p>
        </div>

        {/* Cats */}
        <div className="rounded-[10px] overflow-hidden bg-white row-span-2 col-span-1">
          <img src={Card2} alt="card2" className="w-full" />
          <p className="font-global2 font-semibold text-[16px] md:text-[18px] p-[20px]">
            200+ Doomed Cats Saved From Euthanization
          </p>
        </div>

        {/* Small cards */}
        <div className="rounded-[10px] bg-white p-[20px] md:p-[25px] row-span-1 col-span-1">
          <h3 className="font-global2 text-[16px] md:text-[20px] font-semibold">
            Is Coffee Bad for Bones?
          </h3>
          <p className="text-[#4B5157] py-[5px] text-[14px]">
            Coffee drinkers may excrete more calcium, but it doesn’t appear to weaken bones
          </p>
          <span className="text-[13px] md:text-[14px] text-[#939699]">Oct 15</span>
        </div>

        <div className="rounded-[10px] bg-white p-[20px] md:p-[25px] row-span-1 col-span-1">
          <h3 className="font-global2 text-[16px] md:text-[20px] font-semibold">
            It’s a Stressful World
          </h3>
          <p className="text-[#4B5157] py-[5px] text-[14px]">
            Can a cruise skeptic enjoy four days on the seas with his family and a bunch of princesses?
          </p>
          <span className="text-[13px] md:text-[14px] text-[#939699]">Oct 14</span>
        </div>

        <div className="rounded-[10px] bg-white p-[20px] md:p-[25px] row-span-1 col-span-1">
          <h3 className="font-global2 text-[16px] md:text-[20px] font-semibold">
            What We Manufacture
          </h3>
          <p className="text-[#4B5157] py-[5px] text-[14px]">
            A global history of the factory and the modern world that all should read
          </p>
          <span className="text-[13px] md:text-[14px] text-[#939699]">Oct 14</span>
        </div>

        <div className="rounded-[10px] bg-white p-[20px] md:p-[25px] row-span-1 col-span-1">
          <h3 className="font-global2 text-[16px] md:text-[20px] font-semibold">
            A Treat for Lemon Lovers
          </h3>
          <p className="text-[#4B5157] py-[5px] text-[14px]">
            This tangerine, ginger and chocolate tart has verve, depth and a hint of spice
          </p>
          <span className="text-[13px] md:text-[14px] text-[#939699]">Oct 13</span>
        </div>
      </div>
    </div>
  );
};

export default Newsfeed;
