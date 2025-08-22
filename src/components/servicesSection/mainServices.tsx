import React from "react";
import { MdAutoAwesome } from "react-icons/md";
import MainCards from "./mainCards";

const MainServices = () => {
  return (
    <div>
      {/* top part titles  */}
      <div className="py-5 pt-[80px]">
        <div className=" flex gap-2.5 justify-center  mx-auto bg-white shadow-sm shadow-[rgb(48,80,74,0.2)]  text-[18px] align-items-center rounded-4xl py-4 w-[270px] h-[55px]">
          <span className="text-[var(--color-primary)] text-[25px]  ">
            <MdAutoAwesome />
          </span>
          <span>خدماتنا الطبية المتخصصة</span>
        </div>

        <div className="text-center  px-4">
          <h2 className=" text-4xl md:text-5xl leading-12 py-[35px] font-black pb-[20px] ">
            رعاية طبية شاملة{" "}
            <span className="text-[var(--color-primary)]">ومتميزة </span>
          </h2>
          <p className="text-[18px] md:text-[20px]">
            نقدم خدمات طبية متكاملة في تخصص الباطنة العامة والحميات مع خبرة تزيد
            عن 20 عاماً
          </p>
        </div>
      </div>

      {/* Main cards  */}
      <div>
        <MainCards />
      </div>
    </div>
  );
};

export default MainServices;
