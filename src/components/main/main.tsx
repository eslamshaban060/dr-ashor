import React from "react";
import { FiShield } from "react-icons/fi";
import MainCards from "./mainCards";
import MainButtons from "./mainButtons";
import MainSlider from "./slider";

// Main landing section component
const Main = () => {
  return (
    <div className="bg-gradient-to-tl from-[#00aa962d] w-[100vw] h-auto min-h-[106vh]">
      <div className="w-full max-w-[90%] mx-auto h-full flex flex-col-reverse lg:flex-row justify-between pt-[60px] sm:pt-[100px] py-3">
        {/* Left section: text, cards, and buttons */}
        <div className="lg:w-[50%] h-full py-3 md:pt-5">
          {/* Highlighted message box */}
          <div className="bg-gradient-to-r from-[#00aa962d] to-[#1c6d6328] text-[#009586] font-semibold p-3 text-lg w-[300px] h-[55px] rounded-4xl border border-[#009a8bbe] flex items-center justify-center m-auto lg:mr-0 text-center gap-2">
            <span className="mt-[-1px]">
              <FiShield />
            </span>
            <span>أفضل رعاية طبية في الفيوم</span>
          </div>

          {/* Headline and description */}
          <div className="pt-[26px]">
            <div className="text-5xl lg:text-6xl sm:flex sm:gap-2.5 lg:block sm:justify-center text-center leading-15 md:leading-22 lg:text-right font-black">
              <div className="pb-5">
                صحــتك هـــي
                <p className="text-[var(--color-primary)]">
                  أولويتنا الأولـــى
                </p>
              </div>
            </div>
            <p className="text-[20px] pb-5 md:px-[90px] lg:px-0 lg:pl-[60px] text-center lg:text-right text-gray-500">
              مع د/ عاشور خلف عطية، احصل على استشارة طبية متخصصة في الباطنة
              والحميات والكبد مع أحدث التقنيات والعلاجات المبتكرة
            </p>
          </div>

          {/* Cards section */}
          <div>
            <MainCards />
          </div>

          {/* Call-to-action buttons */}
          <div className="py-2">
            <MainButtons />
          </div>
        </div>

        {/* Right section: main image slider */}
        <div className="lg:w-[50%] h-[80vh] py-3">
          <MainSlider />
        </div>
      </div>
    </div>
  );
};

export default Main;
