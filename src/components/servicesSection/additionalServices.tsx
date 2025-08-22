import React from "react";
import { Microscope } from "lucide-react";
import AdditionalCards from "./additionalCards";

const AdditionalServices = () => {
  return (
    <div className=" w-[100%] max-w-[90%] m-auto ">
      <div className=" bg-white shadow-sm rounded-3xl  py-[40px] p-5  shadow-[rgb(48,80,74,0.2)]">
        <div className=" bg-[rgb(220,245,239,0.8)] m-auto flex justify-center gap-2 items-center w-[220px] rounded-4xl h-[50px] ">
          <span className="text-[var(--color-primary)]">
            <Microscope />
          </span>
          <span>خدمات إضافية متخصصة</span>
        </div>

        <div className=" text-center">
          <h3 className=" font-semibold py-5 text-3xl">
            خدمات متميزة لصحة أفضل
          </h3>
          <p className=" text-[rgb(0,0,0,0.8)] text-[17px] ">
            مجموعة من الخدمات المتخصصة لتوفير رعاية صحية شاملة
          </p>
        </div>

        {/* cards */}
        <div>
          <AdditionalCards />
        </div>
      </div>
    </div>
  );
};

export default AdditionalServices;
