import React from "react";
import CtoButton from "../header/ctoButton";
import Link from "next/link";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { WhatsAppLink } from "./staticData";

// Buttons section inside the main content
const MainButtons = () => {
  return (
    <div className="flex justify-center lg:justify-start gap-3">
      {/* Appointment call-to-action button */}
      <div>
        <CtoButton />
      </div>

      {/* WhatsApp contact button */}
      <div>
        <Link href={WhatsAppLink}>
          <button className="w-[155px] sm:w-[230px] h-[50px] rounded-lg items-center gap-2 mt-[19px] justify-center text-[var(--color-primary)] font-bold hover:bg-[var(--color-primary)] border-[var(--color-primary)] border-2 flex hover:text-white">
            {/* WhatsApp icon */}
            <p className="mt-[-1px] text-xl group-hover:rotate-30">
              <AiOutlineWhatsApp />
            </p>

            {/* Button label (responsive) */}
            <p className="block sm:hidden">تواصل مباشرة</p>
            <p className="hidden sm:block">تواصل معنا مباشرة</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MainButtons;
