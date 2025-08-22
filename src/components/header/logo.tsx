import React from "react";
import Image from "next/image";
import Logoimage from "../../../public/asets/drlogo.jpg";
import { IoStar } from "react-icons/io5";

const Logo = () => {
  return (
    <div className="flex py-2 gap-1 sm:gap-2 items-center">
      {/* Logo image */}
      <div className=" w-[70px] sm:w-[80px] h-[70px] sm:h-[80px]">
        <Image src={Logoimage} alt="Logo icon" />
      </div>

      {/* Logo text */}
      <div>
        <h2 className=" font-black text-xl sm:text-2xl  text-[var(--color-primary-dark)]">
          د/ عاشور خلف عطية
        </h2>
        <p className=" text-[10px] sm:text-[12px]">
          استشاري الباطنة والحميات والكبد والسكر{" "}
        </p>

        <div className="  text-[10px] sm:text-[12px] flex gap-2 items-center text-amber-400">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-primary)] opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-[var(--color-primary)]"></span>
          </span>
          <p className=" text-black">خبرة اكثر من 20 عام</p>
          <div className=" flex gap-1">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
