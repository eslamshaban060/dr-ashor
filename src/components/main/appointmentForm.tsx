"use server";
import Input from "../Input";
import { SlCalender } from "react-icons/sl";
export default async function AppointmentForm() {
  async function appointmentAction(data: FormData) {
    "use server";
    const name = data.get("name");
    const phone = data.get("phone");
    const message = data.get("message");
  }
  return (
    <form action={appointmentAction} className="w-full flex flex-col gap-5">
      <div className="flex gap-2">
        <Input name="name" type="text" label="الاسم" />
        <Input name="phone" type="number" label="الهاتف" />
      </div>
      <div className="flex flex-col">
        <label className="pr-2">رسالتك</label>
        <textarea
          name="message"
          id=""
          className="outline-0 border-[#6c6c6c] border-1 rounded-md w-full h-[140px] focus:border-[#009688]"
        />
      </div>
      <button className="w-[170px] h-[50px] rounded-lg bg-gradient-to-r from-[var(--color-primary-light)]  items-center  via-[var(--color-primary)]  gap-3  mt-[19px]   px-[29px] text-white  to-[var(--color-primary-dark)] font-bold hover:bg-gradient-to-l  flex group hover:shadow-[#3a605c4a]   hover:shadow-xl">
        <p className="mt-[-1px]  group-hover:rotate-30">
          <SlCalender />
        </p>
        <p>احجز موعدك</p>
      </button>
    </form>
  );
}
