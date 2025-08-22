"use server";
import React from "react";
import Header from "@/components/header/Header";
import Main from "@/components/main/main";
import Services from "@/components/servicesSection/services";
// import AppointmentForm from "@/components/main/appointmentForm";
import Appointment from "@/components/main/appointment";
// import Footer from "@/components/footer";

const page = () => {
  return (
    <>
      <header className="fixed z-100 border-b-[0.1px] bg-white border-[#009a8bbe]">
        <Header />
      </header>

      {/* space */}
      <div className="w-[100vw] h-[130px] "></div>

      {/* Body */}
      <div className="flex flex-col">
        <section>
          <Main />
        </section>

        <section>
          <Services />
        </section>

        <section className="px-13 w-full py-10 bg-[#F8FAFB] flex justify-center">
          <Appointment />
        </section>
      </div>

      {/* <footer>
        <Footer />
      </footer> */}
    </>
  );
};

export default page;
