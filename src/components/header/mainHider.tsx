import React from "react";
import Logo from "./logo";
import Nav from "./nav";
import CtoButton from "./ctoButton";
import Link from "next/link";
import SideBar from "./sideBar";

const MainHider = () => {
  return (
    <div className=" w-[100vw] h-[90px] bg-[#70e7d71c] ">
      <div className="flex  justify-between m-auto w-[100vw] max-w-[92%]">
        <Link href="/" className=" text-decoration-none">
          <Logo />
        </Link>
        <div className="flex gap-3">
          <div>
            <Nav />
          </div>
          <div className="hidden sm:flex">
            <CtoButton />
          </div>
          <div>
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHider;
