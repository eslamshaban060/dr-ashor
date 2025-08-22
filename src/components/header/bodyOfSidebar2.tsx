import React from "react";
import { ReactNode } from "react";
import { FiPhone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

export interface ContactItem {
  id: number;
  title: string;
  value: string;
  icon: string;
}

export const contactItems: ContactItem[] = [
  {
    id: 1,
    title: "اتصل بنا",
    value: "01003357844",
    icon: "<FiPhone />",
  },
  {
    id: 2,
    title: "موقع العيادة",
    value: "الفيوم - المسلة أمام مديرية الصحة",
    icon: "<GoLocation  />",
  },
];

const BodyOfSidebar2 = () => {
  return (
    <div>
      <div className=" px-5 flex flex-col gap-3.5 ">
        {contactItems.map((item, i) => {
          return (
            <div
              className="  flex gap-3 w-[100%] px-5 py-4 h-[55px] rounded-[10px] bg-[rgb(229,246,244,0.6)]  border-[1px] border-[rgb(54,151,139,0.6)] "
              key={i}
            >
              <span>{item.icon}</span>
              <span>
                <span>{item.title}</span>
                <span>{item.value}</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BodyOfSidebar2;
