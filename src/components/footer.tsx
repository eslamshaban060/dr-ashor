import React from "react";
import Image from "next/image";
import Logoimage from "../../public/asets/drlogo.jpg";
import Link from "next/link";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#00635c] text-white py-10 px-6 lg:px-42 lg:pt-22 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center pb-6">
        <div className="flex flex-col items-center lg:flex-start order-1 lg:order-1">
          <div className="flex items-center space-x-2 mb-4 w-[70px] sm:w-[80px] h-[70px] sm:h-[80px]">
            <Image src={Logoimage} alt="Logo icon" />
          </div>
          <div className="text-center">
            <h4 className="font-bold"> د. عاشور خلف عطية</h4>
            <p className="text-sm">
              استشاري باطنة وحميات وكبد وسكر – أكثر من 20 سنة خبرة في التشخيص
              والعلاج.{" "}
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <Link
              href="#"
              className="bg-[#70e7d7] text-[#00635c] px-6 py-3 rounded-full font-bold text-lg hover:bg-[#fff] transition-colors duration-300"
            >
              طلب موعد الان
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center order-2 lg:order-3">
          <h3 className="text-lg font-semibold mb-4 text-right">الصفحات</h3>
          <ul className="text-right space-y-2">
            <li>
              <Link
                href="/"
                className="hover:text-[#00bfa5]  transition-colors duration-200"
              >
                الرئيسية
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-[#00bfa5] transition-colors duration-200"
              >
                المدونة
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center order-3 lg:order-4">
          <h3 className="text-lg font-semibold mb-4 text-right">الخدمات</h3>
          <ul className="text-right space-y-2">
            <li>
              <Link
                href="#"
                className="hover:text-[#00bfa5] transition-colors duration-200"
              >
                تجميل
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-[#00bfa5] transition-colors duration-200"
              >
                التقويم
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-[#00bfa5] transition-colors duration-200"
              >
                الزراعة
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-[#00bfa5] transition-colors duration-200"
              >
                الحشوات
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center lg:items-start order-3 lg:order-4">
          <h3 className="text-lg font-semibold mb-4 text-right">تواصل معنا</h3>
          <ul className="text-center space-y-3">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#00bfa5]" />
              <Link
                href="tel:01003357844"
                className="hover:text-[#00bfa5] transition-colors duration-200"
              >
                010 03357844
              </Link>
            </li>

            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-[#00bfa5]" />
              <Link
                href="https://api.whatsapp.com/send?phone=201021892229"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00bfa5] transition-colors duration-200"
              >
                010 21892229
              </Link>
            </li>

            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#00bfa5]" />
              <Link
                href="mailto:drashour77@gmail.com"
                className="hover:text-[#00bfa5] transition-colors duration-200"
              >
                drashour77@gmail.com
              </Link>
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2 text-right">
            تابعنا على
          </h3>
          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/share/1E8LeAmtcq/"
              target="_blank"
              className="text-{#fff} hover:text-[#00bfa5] transition-colors duration-200 text-2xl"
            >
              <FaFacebook />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-8 lg:flex-row items-center lg:items-baseline lg:flex-center justify-evenly order-4 lg:order-1 border-t border-gray-300">
        <div className="text-center">
          <p className="text-sm">
            جميع الحقوق محفوظة لـ{" "}
            <Link href="/" className="text-[#00bfa5] hover:underline">
              د/ عاشور خلف عطية
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
