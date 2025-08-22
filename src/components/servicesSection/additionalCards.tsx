import React from "react";
import { additionalServices } from "./servicesData";

const AdditionalCards = () => {
  return (
    <div className="grid  mt-[30px] gap-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {additionalServices.map((card, i) => {
        return (
          <div
            className="   group rounded-3xl  justify-center text-center hover:bg-[#F0FDFA] bg-[#F8FAFB] p-5 py-[33px]"
            key={i}
          >
            <div className="w-[60px]  m-auto  h-[60px] bg-white text-[var(--color-primary)]   shadow-[rgb(48,80,74,0.2)] shadow-sm flex items-center justify-center rounded-xl group-hover:shadow-lg ">
              {card.icon}
            </div>

            <div>
              <h3 className=" text-xl py-5 px-3 font-semibold">{card.title}</h3>
              <p className="text-[15px] px-3 text-[rgb(0,0,0,0.8)] ">
                {card.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdditionalCards;
