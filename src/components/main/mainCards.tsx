import React from "react";
import { LuClock } from "react-icons/lu";
import { LuShield } from "react-icons/lu";
import { LuHeart } from "react-icons/lu";
import { BsCheckCircle } from "react-icons/bs";

const MainCards = () => {
  return (
    <div>
      <div className=" w-[100%] sm:justify-center sm:mx-auto lg:mx-0  max-w-[600px]">
        <div className="w-[100%] flex flex-col sm:flex-row   mb-[38px] sm:mb-3 gap-5 lg:gap-3 xl:gap-5  h-[120] sm:h-[73px]  py-2">
          <div className="p-4 bg-[#ffffff5f] rounded-xl  hover:shadow-[#3a605c4a]  hover:shadow-lg   text-xl lg:text-[18px] xl:text-xl flex gap-3 w-[100%] sm:w-[50%]">
            <p className=" text-2xl text-green-700">
              <BsCheckCircle />
            </p>
            <p>خبرة أكثر من 20 سنة</p>
          </div>
          <div className="p-4 bg-[#ffffff5f] rounded-xl  hover:shadow-[#3a605c4a]  hover:shadow-lg   text-xl lg:text-[18px] xl:text-xl flex gap-3 w-[100%] sm:w-[50%]">
            <p className="  text-blue-700 text-2xl">
              <LuClock />
            </p>
            <p>متاح 24/7 للطوارئ</p>
          </div>
        </div>
        <div className="w-[100%] flex flex-col sm:flex-row   mb-[38px] sm:mb-3 gap-5 lg:gap-3 xl:gap-5  h-[120] sm:h-[73px]  py-2">
          <div className="p-4 bg-[#ffffff5f] rounded-xl  hover:shadow-[#3a605c4a]  hover:shadow-lg    text-xl lg:text-[18px] xl:text-xl flex gap-3 w-[100%] sm:w-[50%]">
            <p className=" text-2xl text-red-700">
              <LuHeart />
            </p>
            <p>رعاية شاملة ومتكاملة</p>
          </div>
          <div className="p-4 bg-[#ffffff5f] rounded-xl  hover:shadow-[#3a605c4a]  hover:shadow-lg    text-xl lg:text-[18px] xl:text-xl flex gap-3 w-[100%] sm:w-[50%]">
            <p className=" text-2xl text-violet-700">
              <LuShield />
            </p>
            <p>معايير طبية عالمية</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCards;
