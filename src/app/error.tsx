"use client";
import Link from "next/link";
import { BiError } from "react-icons/bi";
import { TiHomeOutline } from "react-icons/ti";
import { TfiReload } from "react-icons/tfi";

const ErrorPage = ({ reset }: { reset: () => void }) => {
  return (
    <div className=" bg-gradient-to-br from-white flex align-items-center justify-center  to-red-50 w-[100vw] h-[100vh]">
      <div className="w-[90vw] px-5 sm:px-[35px] max-w-[450px] py-[40px] h-[430px] mt-[15vh] bg-white shadow-lg  shadow-[rgb(59,83,68,0.2)]">
        <div className="mx-auto block h-[70px] rounded-full bg-[rgb(251,44,54,0.2)] text-center py-[10px] px-[10px] font-bold text-red-600 text-5xl w-[70px]">
          <BiError />
        </div>
        {/* result  */}
        <div className="text-center ">
          <h2 className=" text-4xl py-4 font-black ">حـــدث خطـــأ!</h2>
          <p className=" text-[13px] text-gray-500">
            عذراً، حدث خطأ اثناء التحميل يرجى المحاولة مرة أخرى.
          </p>
        </div>

        {/* notes  */}
        <div className="text-[13px] w-[100%] h-[45px] rounded-[4px]  border-[1px]  bg-[rgb(251,44,54,0.2)] my-5 border-red-400  text-red-600 py-3 mb-3 text-center">
          إذا استمر هذا الخطأ، يرجى الاتصال بالدعم الفني
        </div>

        {/* buttons  */}
        <div className="  pt-1 w-[100%]  text-center   ">
          <button
            className="flex  w-[100%] items-center justify-center rounded-[4px] align-items-center bg-red-600 text-white gap-3 no-underline h-[40px] "
            onClick={() => reset()}
          >
            <p className=" text-[12px]">
              <TfiReload />
            </p>
            <p>اعادة تحميل الصفحة</p>
          </button>

          <Link
            href="/"
            className="flex my-3 items-center justify-center gap-3 no-underline h-[40px]  text-red-600  rounded-[4px]  align-items-center border-[1px] border-red-400 bg-white"
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

export default ErrorPage;
