import React from "react";
import { primaryServices } from "./servicesData";
import { CheckCircle } from "lucide-react";

const MainCards = () => {
  return (
    <div className=" w-full   m-auto  pb-[50px] mt-[50px] max-w-[90%] h-auto ">
      <div className=" grid  gap-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {primaryServices.map((card, i) => {
          return (
            <div key={i}>
              <div className="group p-5 rounded-2xl bg-white shadow-sm  hover:shadow-lg min-h-[300px] shadow-[rgb(48,80,74,0.2)]  ">
                {/* icon */}
                <div className=" bg-[rgb(203,251,241,0.3)] w-[60px] h-[60px] rounded-[10px]  group-hover:bg-[#CBFBF1]  flex justify-center text-center items-center  text-[var(--color-primary)] ">
                  {card.icon}
                </div>

                {/* title */}
                <h2 className=" py-5  font-semibold text-xl">{card.title}</h2>

                {/* discribtion  */}
                <p className=" text-[rgb(0,0,0,0.8)] text-[15px]">
                  {card.description}
                </p>

                {/* fetures */}
                <div className="mt-4">
                  {card.features?.map((item, i) => {
                    return (
                      <div
                        className=" text-[rgb(0,0,0,0.8)] text-[15px] py-1 flex  gap-2"
                        key={i}
                      >
                        <p>
                          <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                        </p>
                        <p>{item}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainCards;
