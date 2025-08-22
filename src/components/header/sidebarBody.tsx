// "use client";
import React from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { OpenAndCloseAction } from "@/redux.tsx/actions";
import BodyOfSidebar from "./bodyOfSidebar";
import BodyOfSidebar2 from "./bodyOfSidebar2";

const SidebarBody = () => {
  const dispatch = useDispatch();
  const Togglevalue = useSelector((state: any) => state.Toogel.close);

  return (
    <div>
      <div
        className={`h-[100vh] w-[85%] transaition duration-200 max-w-[350px] shadow-[hsl(174,25%,30%)] shadow-xl   z-50 bg-white fixed top-0 ${
          Togglevalue ? "  right-[-400px]  " : "  right-0 "
        }`}
      >
        {/* top Part */}
        <div className=" bg-gradient-to-br from-[var(--color-primary-dark)] via-[var(--color-primary-light)]  to-[var(--color-primary-dark)]  w-[100%] h-[200px]  absolute top-0 right-0  z-100">
          <div className="flex justify-between py-3 pt-[35px] items-center px-5">
            <h2 className=" font-black text-white text-2xl">
              {" "}
              الصفحة الرئسية{" "}
            </h2>
            <button
              className=" p-[10px] text-2xl text- bg-[#ffffff48] w-[45px] h-[45px] text-white rounded-lg"
              onClick={() => dispatch(OpenAndCloseAction())}
            >
              <IoClose />
            </button>
          </div>
          <div className="bg-[#ffffff48] w-[85%] mt-[5px] rounded-lg m-auto h-[88px] py-4 px-4 text-center text-white">
            <h2 className=" font-black text-2xl ">د/ عاشور خلف عطية</h2>
            <p className=" text-[12px] pt-1">
              استشاري الباطنة والحميات والكبد والسكر
            </p>
          </div>
        </div>

        {/* body part  */}
        <div>
          <BodyOfSidebar />
        </div>

        {/* <div className="pb-5 w-[90%] justify-center m-auto border-b-[1px] border-[hsl(174,25%,30%)] "></div> */}
        <div>
          <BodyOfSidebar2 />
        </div>
      </div>
    </div>
  );
};

export default SidebarBody;
