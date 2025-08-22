import React from "react";
import { MarkaziText } from "./layout";
import Link from "next/link";
import { TiHomeOutline } from "react-icons/ti";
import { RxInfoCircled } from "react-icons/rx";

const NotFound = () => {
  return (
    <div className=" bg-gradient-to-br from-white flex align-items-center justify-center  to-[rgba(19,167,76,0.08)] w-[100vw] h-[120vh]">
      <div className="w-[90vw] px-5 sm:px-[35px] max-w-[430px] py-[40px] h-[575px] mt-[15vh] bg-white shadow-lg rounded-[5px]  shadow-[rgb(51,72,60,0.2)]">
        <div>
          <h2
            className={`text-center text-9xl font-black  text-[var(--color-primary)] ${MarkaziText.className}`}
          >
            404
          </h2>
        </div>
        <div>
          <h2 className=" py-2 pb-3 text-center text-2xl font-bold ">
            الصفحة غير موجودة
          </h2>
          <p className=" px-1 text-center text-[var(--color-dark-gray)]">
            عذراً، الصفحة التي تبحث عنها غير متاحة حالياً أو تم نقلها لرابط آخر
          </p>
        </div>

        <div className="bg-[rgba(19,167,76,0.08)] mt-[30px] rounded-lg  w-[100%] h-[170px] p-5">
          <div className=" text-[var(--color-primary)] text-center flex justify-center font-bold gap-2">
            <span>
              <RxInfoCircled />
            </span>
            <span>اقتراحات مفيدة:</span>
          </div>
          <div className=" text-[var(--color-primary)] py-2">
            <ul className="px-2 list-disc">
              <li className="pt-2">تأكد من صحة الرابط </li>
              <li className="pt-2">ارجع للصفحة الرئيسية</li>
              <li className="pt-2">تواصل معنا إذا كنت بحاجة لمساعدة</li>
            </ul>
          </div>
        </div>
        <div className=" flex justify-center align-items-center">
          <Link
            href="/"
            className="flex my-3 mt-5 items-center justify-center gap-3 no-underline h-[40px]  hover:h-[43] text-white rounded-[14px]  align-items-center content-center  bg-[var(--color-primary)] w-[95%] hover:w-[100%] "
          >
            <p>
              <TiHomeOutline />
            </p>
            <p>العودة للصفحة الرئسية </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
