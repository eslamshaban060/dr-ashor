"use client";

import BlogCard from "@/components/blogCard/blogCard";
import { BookOpenText } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // 👈 import autoplay
import "swiper/css";

const Blog = () => {
  return (
    <section className=" w-full max-w-[90%] m-auto my-10 ">
      <div className=" bg-white rounded-xl py-[40px] p-5 shadow-[rgb(48,80,74,0.2)]">
        <div className=" bg-[rgb(220,245,239,0.8)] m-auto flex justify-center gap-2 items-center w-[180px] rounded-4xl h-[50px] ">
          <span className="text-[var(--color-primary)]">
            <BookOpenText />
          </span>
          <span>مقالات طبية</span>
        </div>

        <div className=" text-center">
          <h3 className=" font-semibold py-5 text-3xl">مقالات صحية مفيدة</h3>
          <p className=" text-[rgb(0,0,0,0.8)] text-[17px] ">
            مقالات طبية موثوقة ومعلومات صحية مفيدة لتعزيز معرفتك
          </p>
        </div>

        <div className="mt-10">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {[...Array(10)].map((_, i) => (
              <SwiperSlide key={i}>
                <BlogCard />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blog;
