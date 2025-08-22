import React from "react";
import { TiLocationOutline } from "react-icons/ti";
import { IoStar } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";

const TopHeader = () => {
  return (
    <div className="   w-[100vw] h-[45px] bg-gradient-to-l from-[var(--color-primary-light)]   via-[var(--color-primary)]   to-[var(--color-primary-dark)]   py-[10px]">
      <div className="w-[100%] flex  m-auto justify-between max-w-[92%]  text-white">
        {/* Medical service slogan with responsive text */}
        <div className="flex">
          <span className=" text-amber-400  text-xl px-2">
            <IoStar />
          </span>
          <span className="  hidden sm:flex">
            خدمة طبية متميزة على مدار الساعة
          </span>
          <span className=" flex sm:hidden">خدمة طبية متميزة </span>
        </div>

        {/* Contact info (location and phone number) */}
        <div className="  flex gap-4">
          {/* Location - hidden on small screens */}
          <div className="hidden md:flex ">
            <span className=" w-[35px] h-[35px] ">
              <span className=" text-[10px] w-[28px] h-[28px]  bg-[#ffffff54]  p-[5px]  absolute top-[8px] rounded-3xl">
                <TiLocationOutline className=" opacity-100 text-[18px]   fs-6 " />
              </span>
            </span>
            <span>الفيوم - المسلة أمام مديرية الصحة</span>
          </div>

          {/* Phone number */}
          <div className="flex ">
            <span className="px-2  tracking-widest p-[2px]">01003357844</span>
            <span className=" w-[35px] h-[35px] ">
              <span className=" text-[10px] w-[28px] h-[28px]  bg-[#ffffff54]  p-[5px]  absolute top-[8px]  rounded-3xl">
                <MdOutlinePhone className=" opacity-100 text-[18px]   fs-6 " />
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
