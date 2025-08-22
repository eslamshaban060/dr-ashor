"use client";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import SidebarBody from "./sidebarBody";
import { useDispatch } from "react-redux";
import { OpenAndCloseAction } from "@/redux.tsx/actions";

const SideBar = () => {
  const dispatch = useDispatch();

  return (
    <div className=" flex lg:hidden">
      {/* open and close button  */}
      <button
        className="bg-gradient-to-l from-[var(--color-primary)]   via-[var(--color-primary-light)]   to-[var(--color-primary)]  w-[55px] h-[50px] rounded-lg px-4 py-3 group text-white  text-2xl mt-[19px]"
        onClick={() => dispatch(OpenAndCloseAction())}
      >
        <RxHamburgerMenu className="  group-hover:rotate-90  " />
      </button>

      {/* sidebar body  */}
      <div>
        <SidebarBody />
      </div>
    </div>
  );
};

export default SideBar;
