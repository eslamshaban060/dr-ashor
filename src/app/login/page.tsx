import React from "react";
import { FaStethoscope } from "react-icons/fa6";
import LoginForm from "@/components/login/form";
import Header from "@/components/header/Header";

const page = () => {
  return (
    <div>
      <div className="fixed z-100 border-b-[0.1px] bg-white border-[#009a8bbe]">
        <Header />
      </div>
      <div className=" w-[100vw] h-[150vh] flex justify-center items-center  bg-[#F2FDFB] ">
        <div className=" bg-white w-[90%] max-w-[450px] hover:max-w-[470px]  hover:h-[620px]  relative transition-all duration-[450ms] ease-in-out  hover:w-[93%] shadow-[rgb(48,80,74,0.2)]  p-[30px] shadow-lg md:shadow-2xl rounded-2xl h-[600px] ">
          {/* icon section */}
          <div className=" mx-auto flex justify-center items-center h-[80px] rounded-full bg-gradient-to-bl from-[var(--color-primary)] to-[var(--color-primary-light)] text-white relative text-4xl w-[80px]">
            <FaStethoscope />
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-primary)] opacity-50"></span>
          </div>

          <div className=" py-5 text-center">
            <h2 className=" py-2 pt-5 text-[var(--color-primary)] font-semibold text-3xl ">
              مرحباً دكتور عاشور
            </h2>
            <p className=" text-[rgb(0,0,0,0.8)]">تسجيل دخول آمن ومحمي</p>
          </div>

          {/* design circles  */}
          <div>
            <div className="flex  absolute top-[-15px] left-[-15px] animate-pulse space-x-4">
              <div className="size-24 md:size-30 rounded-full bg-[#D3FAF3]"></div>
            </div>
            <div className="flex  absolute  right-[-25px]  bottom-[-25px]  animate-pulse space-x-1">
              <div className="size-15  md:size-25 rounded-full bg-[#D3FAF3]"></div>
            </div>
          </div>

          {/* form  */}
          <div>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
