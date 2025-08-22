import React from "react";
import Link from "next/link";

export interface LinksType {
  label: string;
  icon: string;
  path: string;
}

export const navLinks: LinksType[] = [
  {
    label: "الرئيسية",
    icon: "🏠",
    path: "/",
  },
  {
    label: "المدونة",
    icon: "📚",
    path: "/blog",
  },
  {
    label: "تسجيل الدخول",
    icon: "👤",
    path: "/login",
  },
];

const Nav = () => {
  return (
    <nav className="  hidden  lg:flex gap-3 py-[27px]">
      {navLinks.map((link, i) => {
        return (
          <Link
            key={i}
            className=" hover:shadow-[#3a605c4a]  hover:shadow-lg user-select-none flex gap-1 px-3 py-2  rounded-lg hover:bg-[#00aa961e]"
            href={link.path}
          >
            <span>{link.icon}</span>
            <span>{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
