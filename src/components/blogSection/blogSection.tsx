"use client";
import BlogCard from "@/components/blogCard/blogCard";
import { BookOpenText } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Article } from "@/types/articles";

type BlogSectionProps = {
  articles: Article[];
};

const BlogSection = ({ articles }: BlogSectionProps) => {
  return (
    <section className=" w-full max-w-[90%] m-auto ">
      <div className=" bg-[#F2FDFB] rounded-xl py-[40px] p-5 shadow-[rgb(48,80,74,0.2)]">
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
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {articles.map((article) => (
              <SwiperSlide key={article.id}>
                <BlogCard article={article} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
