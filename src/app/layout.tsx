import type { Metadata } from "next";
import { El_Messiri, Markazi_Text } from "next/font/google";
import "./globals.css";
import { ProviderLayout } from "@/redux.tsx/provider";
import Header from "@/components/header/Header";
import Footer from "../components/footer";


const elMessiri = El_Messiri({
  subsets: ["arabic", "latin"],
  variable: "--elmessiri",
});

export const MarkaziText = Markazi_Text({
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title:
    "د/ عاشور خلف عطية | استشاري الباطنة العامة والكبد والسكري والتغذية العلاجية",
  description:
    "الموقع الرسمي للدكتور عاشور خلف عطية - استشاري الباطنة العامة والحميات وأمراض الكبد والسكري والتغذية العلاجية في محافظة الفيوم. احجز موعدك الآن وتعرف على خدماتنا الطبية المتميزة.",
  authors: [{ name: "دكتور عاشور خلف عطية" }],
  keywords: [
    "دكتور باطنة في الفيوم",
    "دكتور عاشور خلف عطية",
    "أمراض الباطنة",
    "الكبد",
    "السكر",
    "الحميات",
    "تغذية علاجية",
    "دكتور متخصص في الكبد",
    "دكتور سكري",
    "استشاري باطنة",
    "طبيب باطنة الفيوم",
    "عيادة دكتور عاشور",
    "Ashour Khalaf",
    "internal medicine Egypt",
    "liver specialist Egypt",
    "diabetes treatment الفيوم",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${elMessiri.className} overflow-x-hidden`}>
      
        <ProviderLayout>
           <header className="fixed z-100 border-b-[0.1px] bg-white border-[#009a8bbe]">
        <Header />
      </header>
          {children}
          </ProviderLayout>{" "}
            <Footer/>

      </body>
    </html>
  );
}
