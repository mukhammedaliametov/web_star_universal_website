import React from "react";

const Subscribe = () => {
  return (
    <div className="h-[30vh] py-[30px] max-w-[1220px] px-[16px] md:px-0 mx-auto text-center">
      <h2 className="text-[30px] md:text-[40px] font-semibold font-global2 mb-[10px]">Subscribe now and get 20% off</h2>
      <div className="flex items-end flex-col md:block">
        <input type="text" placeholder="Enter your email" className="w-full md:w-[30%] mx-auto border-1 border-[#D9DADB] outline-none py-[10px] px-[15px] rounded-[5px]" />
        <button className="ml-[10px] mt-[10px] md:mt-0 gap-[10px] bg-[#4592FF] text-white font-global py-[10px] px-[25px] rounded-[50px] cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
