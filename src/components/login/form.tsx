"use client";
import React, { useState } from "react";
import { Stethoscope, ShieldCheck } from "lucide-react";
import MyTost from "../tostComponent/myTost";

const LoginForm = () => {
  const [userName, setuseName] = useState("");
  const [password, setpassword] = useState("");
  const valdationForm = () => {
    if (userName.trim().length == 0 || password.trim().length == 0) {
    }
    setuseName("");
    setpassword("");
  };
  return (
    <div className="pt-[17px]">
      <form
        onSubmit={valdationForm}
        className="w-[100%] flex flex-col gap-5 "
        action=""
      >
        <div className=" flex  flex-col gap-2">
          <label htmlFor="email">اسم المستخدم</label>
          <input
            className=" w-[100%]  focus:border-[var(--color-primary)]  focus:outline-none border-gray-300  px-5 py-5 h-[50px] rounded-2xl border-[2px] "
            type="text"
            required
            placeholder="dr-ashour"
            value={userName}
            onChange={(e) => {
              setuseName(e.target.value);
            }}
          />
        </div>
        <div className=" flex  flex-col gap-2">
          <label htmlFor="email">كلمة المرور </label>
          <input
            className=" w-[100%]  focus:border-[var(--color-primary)]  focus:outline-none  border-gray-300  px-5 py-5 pt-[25px] h-[50px] rounded-2xl border-[2px] "
            type="password"
            required
            placeholder="*********"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        <div>
          <button className=" rounded-2xl text-white w-[100%] h-[50px] flex justify-center items-center bg-gradient-to-bl from-[var(--color-primary-light)] gap-3 to-[var(--color-primary)] hover:bg-gradient-to-br ">
            <span>
              <ShieldCheck />
            </span>
            <span> الدخول الى لوحة التحكم</span>
          </button>
        </div>

        <div className="max-w-[300px] w-[100%] h-[40px] bg-gradient-to-l from-[#CDFCF2] rounded-4xl gap-3 m-auto  flex justify-center items-center border-[1px] border-[var(--color-primary-light)] text-[var(--color-primary)] text-[15px] ">
          <div>
            <Stethoscope />
          </div>
          <span>صفحة مخصصة للدكتور عاشور فقط</span>
        </div>
      </form>
      <div>
        <MyTost message={userName} type="no" />
      </div>
    </div>
  );
};

export default LoginForm;
