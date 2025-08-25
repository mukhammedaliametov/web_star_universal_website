import React from "react";
import Article1 from "../assets/article1.png";
import Article2 from "../assets/article2.png";
import Article3 from "../assets/article3.png";
import Article4 from "../assets/article4.png";
import Article5 from "../assets/article5.png";
import Article6 from "../assets/article6.png";
import Article7 from "../assets/article7.png";
import Article8 from "../assets/article8.png";
import Article9 from "../assets/article9.png";
import Article10 from "../assets/article10.png";
import Article11 from "../assets/article11.png";
import Article12 from "../assets/article12.png";
import Article13 from "../assets/article13.png";
import { FaBookmark, FaHeart } from "react-icons/fa";
import { MdModeComment } from "react-icons/md";

const Articles = () => {
  const articles = [
    {
      img: Article1,
      type: "Flights",
      name: "Passengers Suffer as Crowded Field Puts Pressure on Europe’s Airlines",
      info: "Weaker carriers have fallen by the wayside amid fierce competition, while others have been hit by bad luck. The result: thousands of canceled flights.",
      date: "Aug 6",
      comments: "342",
      like: "830",
    },
    {
      img: Article2,
      type: "Food",
      name: "Three Courses, 20 Euros: The Affordable Dining Renaissance in Paris",
      info: "The Los Angeles area, for all of its culinary diversity, has not historically been thought of as a haven for bread lovers. The area has a reputation as a place where gluten fears to tread.",
      date: "Oct 7",
      comments: "27",
      like: "129",
    },
    {
      img: Article3,
      type: "Science",
      name: "Watch the High-Flying Physics of a Plant’s Exploding Fruits",
      info: "Three undergradute physics majors and their professor worked out how the hairyflower wild petunia shoots tiny seeds more than 20 feet through the air",
      date: "Oct 11",
      comments: "30",
      like: "284",
    },
    {
      img: Article4,
      type: "Health",
      name: "How the Shape of Your Ears Affects What You Hear",
      info: "We’re able to locate sound because our brains grasp the shape of our ears. When that shape changes, we need time and practice to adapt. Ears are a peculiarly individual piece of anatomy.",
      date: "Oct 19",
      comments: "102",
      like: "1,293",
    },
    {
      img: Article5,
      type: "Science",
      name: "Forests Protect the Climate. A Future With More Storms Would Mean Trouble.",
      info: "With an increase in extreme weather expected in the years to come, forests could be changed permanently as the world continues to warm",
      date: "Oct 22",
      comments: "5",
      like: "82",
    },
    {
      img: Article6,
      type: "Art & Design",
      name: "New Contemporary Institute Reverberates in Richmond’s Historic Landscape",
      info: "The center, which will open in April, takes a bold look at race and other social issues that still resonate in the region as well as the nation. A new Institute for Contemporary Art is set to open.",
      date: "Oct 26",
      comments: "101",
      like: "432",
    },
  ];

  const recommendedArticles = [
    {
      img: Article7,
      name: "Office Meetings Leave the Office",
      time: "15 minuts ago",
    },
    {
      img: Article8,
      name: "Experimental Vocal Music in Brooklyn",
      time: "32 minuts ago",
    },
    {
      img: Article9,
      name: "Google’s Influence Over Think Tanks",
      time: "38 minuts ago",
    },
    {
      img: Article10,
      name: "Homes for Sale in NYC and Connecticut",
      time: "53 minuts ago",
    },
    {
      img: Article11,
      name: "Are You There, Dad? It’s Me, Alice",
      time: "1 hour ago",
    },
    {
      img: Article12,
      name: "The New Punk Look: Lacy and Colorful",
      time: "1 hour ago",
    },
    {
      img: Article13,
      name: "Sunday Best in Harlem and Brooklyn",
      time: "2 hour ago",
    },
  ];

  return (
    <div className="bg-[#EDEFF0] pb-[50px]">
      <div className="max-w-[1220px] mx-auto pt-[40px] px-[16px] md:px-[16px]">
        <div className="flex flex-col md:flex-row items-top gap-[40px] font-global">
          <div className="bg-white p-[20px] rounded-[10px] w-full md:w-[848px]">
            {articles.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center gap-[20px] pb-[20px] mb-[20px] border-b border-[#D9DADB]"
                >
                  <img src={item.img} alt="img" />
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="uppercase text-[#4592FF] text-[14px]">
                        {item.type}
                      </p>
                      <FaBookmark className="text-[20px] text-[#BCBFC2]" />
                    </div>
                    <h3 className="font-global2 text-[20px]/[24px] my-[10px]">
                      {item.name}
                    </h3>
                    <p>{item.info}</p>
                    <div className="flex items-center gap-[10px] text-[#939699] text-[14px] my-[10px]">
                      <p>{item.date}</p>
                      <p className="flex items-center gap-[4px]">
                        <MdModeComment /> {item.comments}
                      </p>
                      <p className="flex items-center gap-[4px]">
                        <FaHeart />
                        {item.like}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bg-white rounded-[10px] w-full md:w-[263px] h-[880px]">
            <p className="uppercase font-semibold p-[20px] text-[#262D33] border-b border-[#D9DADB]">
              Recommended for you
            </p>
            <div className="p-[20px]">
              {recommendedArticles.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-[10px] border-b border-[#D9DADB] pb-[20px] mb-[20px]">
                    <img src={item.img} alt="img" />
                    <div className="">
                      <p className="text-[#4B5157]">{item.name}</p>
                      <p className="text-[12px] text-[#939699]">{item.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-center font-regular mt-[-20px]">Read More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
