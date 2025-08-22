import React from "react";
import { SlCalender } from "react-icons/sl";
import Link from "next/link";

const CtoButton = () => {
  return (
    <Link href="/appointment">
      <button className="w-[170px] h-[50px] rounded-lg bg-gradient-to-r from-[var(--color-primary-light)]  items-center  via-[var(--color-primary)]  gap-3  mt-[19px]   px-[29px] text-white  to-[var(--color-primary-dark)] font-bold hover:bg-gradient-to-l  flex group hover:shadow-[#3a605c4a]   hover:shadow-xl">
        <p className="mt-[-1px]  group-hover:rotate-30">
          <SlCalender />
        </p>
        <p>احجز موعدك</p>
      </button>
    </Link>
  );
};

export default CtoButton;
