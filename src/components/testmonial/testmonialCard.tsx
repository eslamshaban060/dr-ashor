import React from "react";
import Review from "./testmonialsData";
import { Star, Quote, CheckCircle } from "lucide-react";
import Image from "next/image";

interface Testmonyaltype {
  Item: Review;
}
const TestmonialCard: React.FC<Testmonyaltype> = ({ Item }) => {
  return (
    <div className=" p-5 lg:p-[30px]  relative overflow-hidden bg-white rounded-xl w-[100%] border-[0.01px]   border-[#00bfa627] ">
      {/*  preson data  */}
      <div className="pb-5 flex gap-5">
        <div>
          {Item.image ? (
            <div className=" relative">
              <Image
                className="w-[80px] position-relative z-10 h-[80px] rounded-full "
                alt={Item.name}
                src={Item.image}
              />
              <div className=" text-[#7ed6d0] absolute top-[-5px] z-1 right-[-8px]">
                <Quote />
              </div>
              <div className="  text-white bg-[var(--color-primary)] absolute bottom-[-3px] p-1 rounded-full text-center text-[140px] z-1 right-[60px]">
                <CheckCircle />
              </div>
            </div>
          ) : (
            <div>
              {
                <div className=" w-[80px] h-[80px] rounded-full  flex justify-center items-center text-center text-[var(--color-primary)] text-3xl  bg-[#E6F5F4]">
                  {Item.name.slice(0, 2)}
                </div>
              }
            </div>
          )}
        </div>
        <div className="pt-2 px-1 flex flex-col gap-1 ">
          <h3 className=" font-bold text-xl">{Item.name}</h3>
          <div className=" flex gap-1 text-[var(--color-primary)]  ">
            {[...Array(Item.rating)].map((_, id) => {
              return (
                <div className=" text-[10px]" key={id}>
                  <Star size={18} />
                </div>
              );
            })}
          </div>
          <p className=" text-[var(--color-dark-gray)] text-start">{`التقييم ${Item.rating} نجوم `}</p>
        </div>
      </div>

      <div className="px-3 py-1 bg-[#E6F5F4]  rounded-2xl text-[13px] w-fit text-[var(--color-primary)] ">
        {Item.condition}
      </div>

      <p className="py-4 text-[var(--color-dark-gray)] text-start">
        {Item.review}
      </p>

      <div className=" w-[95%] mx-auto gap-3 bg-[#E6F5F4] flex justify-center items-center text-center py-2 rounded-lg text-[var(--color-primary)] border-[1px] border-[var(--color-primary)] ">
        <div>
          <CheckCircle />
        </div>
        <div>{Item.highlight}</div>
      </div>

      {/* circle */}
      <div className=" absolute top-[-80px] left-[-80px] w-[150px] h-[150px] rounded-full bg-[#99d7d3] "></div>
    </div>
  );
};

export default TestmonialCard;
