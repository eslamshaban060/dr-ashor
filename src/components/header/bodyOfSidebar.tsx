import React from "react";
import { navLinks } from "./nav";
import Link from "next/link";

interface LinksType {
  label: string;
  icon: string;
  path: string;
}

const BodyOfSidebar = () => {
  return (
    <div className=" px-5 flex flex-col gap-3.5 mt-[230px]">
      {navLinks.map((item, i) => {
        return (
          <Link
            className="  flex gap-3 w-[100%] px-5 py-4 h-[55px] rounded-[10px] bg-[rgb(229,246,244,0.6)]  border-[1px] border-[rgb(54,151,139,0.6)] "
            key={i}
            href={item.path}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default BodyOfSidebar;
