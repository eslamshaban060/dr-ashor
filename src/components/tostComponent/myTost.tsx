import React from "react";
import { X } from "lucide-react";
interface tostType {
  message: string;
  type: string;
}

const MyTost = ({ message, type }: tostType) => {
  return (
    <div className=" w-[1vw] h-[1vh] z-0 fixed top-0 right-0 left-0 ">
      <div className=" w-[100%] z-0 relative  h-[100%] ">
        <div
          className={` absolute z-100 rounded-xl py-3 h-auto min-h-[65px] w-[350px]   transition-all duration-[2300ms]  ease-in-out top-[200px] m-auto shadow-[rgb(48,80,74,0.2)]  shadow-xl border-[1px]  ${
            message.trim().length > 0 ? "right-[15px] " : "right-[-530px] "
          } ${
            type === "ok"
              ? " border-green-500 bg-green-50 text-green-600 "
              : " bg-red-50 border-red-500 text-red-600 "
          }`}
        >
          <div className="text-center  relative flex justify-center items-center  ">
            <div className="absolute top-[10px] left-[10px]">
              <X />
            </div>
            <h2>{message}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTost;
