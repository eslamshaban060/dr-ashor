
import AppointmentForm from "../appointment/appointmentForm";

import drAshorImg from "@/../public/asets/appointment.png";
export default function Appointment() {
  return (
    <main className=" flex w-full justify-center ">
      <div className="relative max-w-[900px] flex bg-white">
        <div className=" max-w-[500px]  z-10  p-10">
          <div className="mb-5">
            <h1 className="text-3xl font-bold text-[#009688]">احجز موعدك</h1>
            <h3>ارسل لنا بياناتك و سنقوم بالتواصل معك في اقرب وقت</h3>
          </div>
          <AppointmentForm />
        </div>
        <div>
          <img
            src={drAshorImg.src}
            alt="Dr Ashor"
            className=" w-[500px] h-[530px] z-1 translate-x-3 max-md:hidden"
          />
        </div>
      </div>
    </main>
  );
}
