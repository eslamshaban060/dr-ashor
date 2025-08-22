"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// slider images
import Image from "next/image";
import Image1 from "../../../public/asets/mainSlide1.jpg";
import Image2 from "../../../public/asets/mainSlide2.jpg";
import Image3 from "../../../public/asets/mainSlide3.jpg";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const MainSlider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        autoplay={{ delay: 3000 }}
        loop
        className="MainSectionSwiper  w-[95%] max-w-[500px] h-[63vh] sm:h-[100%] lg:h-[120%] xl:h-[100%] lg:mt-[50px] rounded-lg shadow-[rgb(80,114,111,0.2)] shadow-2xl"
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
      >
        <SwiperSlide>
          <Image src={Image1} alt="main slider image"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image2} alt="main slider image"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image3} alt="main slider image"></Image>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default MainSlider;
