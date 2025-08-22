import React from "react";
import MainServices from "./mainServices";
import AdditionalServices from "./additionalServices";

const Services = () => {
  return (
    <div className="  w-[100vw]  h-[215vh]  pb-[40px] bg-[#F9FAFB] ">
      {/* main services */}
      <div>
        <MainServices />
      </div>

      {/* additionsal services */}
      <div className="py-[30px]">
        <AdditionalServices />
      </div>
    </div>
  );
};

export default Services;
