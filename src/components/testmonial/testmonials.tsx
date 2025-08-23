"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronRight, ChevronLeft } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

// data of testemonials
import { reviews } from "./testmonialsData";
import TestmonialCard from "./testmonialCard";

const Testmonials = () => {
  const testmonialsRef = useRef<SwiperType | null>(null);

  return (
    <div className=" h-auto py-[65px] sm:pb-[100px] relative bg-[#EDF3F3] w-[100vw]">
      <div className="py-5 text-center mx-auto max-w-[90%]">
        <div className="testmonialHeader pb-[10px] md:pb-[50px]">
          <div className="inline-flex items-center text-[18px] md:text-[20px] gap-2 bg-white px-5 py-2 rounded-full shadow-sm mb-1 md:mb-4">
            <span className="text-[var(--color-primary)]  text-lg">⭐</span>
            <span className="text-gray-700 font-medium">آراء عملائنا</span>
          </div>

          <h2 className="text-4xl md:text-5xl leading-12 py-[15px] font-bold pb-[20px] ">
            تجارب <span className="text-[var(--color-primary)] ">ملهمة</span> من
            عملائنا
          </h2>
          <p className="text-gray-600  hidden md:block text-[18px] md:text-[20px]">
            استمع إلى قصص وتجارب عملائنا مع خدماتنا الطبية المميزه فى عياده
            الدكتور عاشور خلف عطيه
          </p>
        </div>
        <Swiper
          navigation={false}
          autoplay={{ delay: 4000 }}
          loop
          className=" px-1  testmonialsSlide  "
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1200: { slidesPerView: 3, spaceBetween: 20 },
          }}
          onSwiper={(swiper) => (testmonialsRef.current = swiper)}
        >
          {reviews.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <TestmonialCard Item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="   hidden sm:flex absolute  w-[90%]  justify-center items-center bottom-[30px] gap-5 ">
          <div
            className=" rounded-full w-[50px] hover:text-white flex justify-center items-center border-[1px] border-[var(--color-primary)] hover:bg-[var(--color-primary)] bg-white h-[50px] "
            onClick={() => {
              testmonialsRef.current?.slideNext();
            }}
          >
            <ChevronRight />
          </div>
          <div
            className=" rounded-full w-[50px]  hover:text-white flex justify-center items-center border-[1px] border-[var(--color-primary)] hover:bg-[var(--color-primary)] bg-white h-[50px] "
            onClick={() => {
              testmonialsRef.current?.slidePrev();
            }}
          >
            <ChevronLeft />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testmonials;
