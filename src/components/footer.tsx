// "use client";
// import React, { useState } from "react";
// import {
//   MapPin,
//   Phone,
//   Clock,
//   Mail,
//   Heart,
//   Shield,
//   Star,
//   ChevronUp,
//   Stethoscope,
//   Calendar,
//   MessageCircle,
//   Navigation,
//   Award,
//   Users,
// } from "lucide-react";

// const Footer: React.FC = () => {
//   const [hoveredSection, setHoveredSection] = useState<string | null>(null);

//   const contactInfo = [
//     {
//       icon: <MapPin className="w-5 h-5" />,
//       title: "العنوان",
//       content: "الفيوم - شارع الجمهورية",
//       detail: "أمام مستشفى الفيوم العام",
//       color: "from-red-500 to-pink-500",
//     },
//     {
//       icon: <Phone className="w-5 h-5" />,
//       title: "اتصل بنا",
//       content: "+20 123 456 7890",
//       detail: "متاح طوال الأسبوع",
//       color: "from-green-500 to-emerald-500",
//     },
//     {
//       icon: <Clock className="w-5 h-5" />,
//       title: "مواعيد العمل",
//       content: "يومياً من 9 ص - 10 م",
//       detail: "ما عدا الجمعة بعد صلاة الجمعة",
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       icon: <Calendar className="w-5 h-5" />,
//       title: "حجز موعد",
//       content: "احجز موعدك بسهولة",
//       detail: "عبر الهاتف أو الواتساب",
//       color: "from-purple-500 to-violet-500",
//     },
//   ];

//   const quickLinks = [
//     { name: "الخدمات الطبية", icon: <Stethoscope className="w-4 h-4" /> },
//     { name: "حجز موعد", icon: <Calendar className="w-4 h-4" /> },
//     { name: "اتصل بنا", icon: <Phone className="w-4 h-4" /> },
//     { name: "عن الدكتور", icon: <Users className="w-4 h-4" /> },
//   ];

//   const achievements = [
//     { number: "20+", text: "سنة خبرة", icon: <Award className="w-5 h-5" /> },
//     { number: "5000+", text: "مريض سعيد", icon: <Heart className="w-5 h-5" /> },
//     {
//       number: "98%",
//       text: "معدل الشفاء",
//       icon: <Shield className="w-5 h-5" />,
//     },
//   ];

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer
//       className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
//       dir="rtl"
//     >
//       {/* Background Decorations */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-500/10 to-transparent rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-teal-500/5 rounded-full blur-3xl"></div>

//       {/* Main Footer Content */}
//       <div className="relative z-10 container mx-auto px-4 py-16">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full mb-6 border border-white/20">
//             <Stethoscope className="w-6 h-6 text-teal-400" />
//             <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
//               د. [اسم الدكتور]
//             </span>
//             <div className="flex gap-1">
//               {[...Array(5)].map((_, i) => (
//                 <Star
//                   key={i}
//                   className="w-4 h-4 text-yellow-400 fill-current"
//                 />
//               ))}
//             </div>
//           </div>

//           <h3 className="text-3xl font-bold mb-4">
//             رعاية طبية موثوقة
//             <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
//               {" "}
//               ومتميزة
//             </span>
//           </h3>

//           <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
//             نحن هنا لخدمتك ورعايتك الصحية بأفضل ما لدينا من خبرة وتقنيات طبية
//             حديثة
//           </p>
//         </div>

//         {/* Contact Info Grid */}
//         <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
//           {contactInfo.map((info, index) => (
//             <div
//               key={index}
//               className="group cursor-pointer"
//               onMouseEnter={() => setHoveredSection(`contact-${index}`)}
//               onMouseLeave={() => setHoveredSection(null)}
//             >
//               <div
//                 className={`relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 ${
//                   hoveredSection === `contact-${index}`
//                     ? "scale-105 shadow-2xl"
//                     : ""
//                 }`}
//               >
//                 <div
//                   className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg`}
//                 >
//                   <div className="text-white">{info.icon}</div>
//                 </div>

//                 <h4 className="text-lg font-bold mb-2 group-hover:text-teal-400 transition-colors">
//                   {info.title}
//                 </h4>

//                 <p className="text-white font-medium mb-1">{info.content}</p>

//                 <p className="text-gray-400 text-sm">{info.detail}</p>

//                 {/* Hover indicator */}
//                 <div
//                   className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${
//                     info.color
//                   } rounded-b-2xl transition-all duration-300 ${
//                     hoveredSection === `contact-${index}`
//                       ? "opacity-100"
//                       : "opacity-0"
//                   }`}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Stats Section */}
//         <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/10">
//           <div className="text-center mb-8">
//             <h4 className="text-2xl font-bold mb-2">إنجازاتنا</h4>
//             <p className="text-gray-300">أرقام تتحدث عن جودة خدماتنا</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {achievements.map((achievement, index) => (
//               <div
//                 key={index}
//                 className="text-center group cursor-pointer"
//                 onMouseEnter={() => setHoveredSection(`stat-${index}`)}
//                 onMouseLeave={() => setHoveredSection(null)}
//               >
//                 <div className="bg-gradient-to-r from-teal-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
//                   <div className="text-white">{achievement.icon}</div>
//                 </div>

//                 <div
//                   className={`text-4xl font-bold mb-2 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-300 ${
//                     hoveredSection === `stat-${index}` ? "scale-110" : ""
//                   }`}
//                 >
//                   {achievement.number}
//                 </div>

//                 <div className="text-gray-300 group-hover:text-white transition-colors">
//                   {achievement.text}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div className="grid md:grid-cols-2 gap-8 mb-12">
//           <div>
//             <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
//               <Navigation className="w-5 h-5 text-teal-400" />
//               روابط سريعة
//             </h4>

//             <div className="grid grid-cols-2 gap-4">
//               {quickLinks.map((link, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
//                 >
//                   <div className="text-teal-400 group-hover:scale-110 transition-transform">
//                     {link.icon}
//                   </div>
//                   <span className="group-hover:text-teal-400 transition-colors">
//                     {link.name}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
//               <MessageCircle className="w-5 h-5 text-teal-400" />
//               تواصل معنا
//             </h4>

//             <div className="space-y-4">
//               <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
//                 <div className="flex items-center gap-3 mb-2">
//                   <MessageCircle className="w-5 h-5 text-green-400" />
//                   <span className="font-medium">واتساب</span>
//                 </div>
//                 <p className="text-gray-300 text-sm">
//                   تواصل معنا مباشرة للحجز والاستفسارات
//                 </p>
//               </div>

//               <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
//                 <div className="flex items-center gap-3 mb-2">
//                   <Mail className="w-5 h-5 text-blue-400" />
//                   <span className="font-medium">البريد الإلكتروني</span>
//                 </div>
//                 <p className="text-gray-300 text-sm">
//                   أرسل استفساراتك وسنرد عليك في أقرب وقت
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="pt-8 border-t border-white/10">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <div className="text-gray-400 text-sm">
//               © 2024 د. [اسم الدكتور] - جميع الحقوق محفوظة
//             </div>

//             <div className="flex items-center gap-4">
//               <span className="text-gray-400 text-sm">صُمم بـ</span>
//               <Heart className="w-4 h-4 text-red-400 animate-pulse" />
//               <span className="text-gray-400 text-sm">في مصر</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll to Top Button */}
//       <button
//         onClick={scrollToTop}
//         className="fixed bottom-6 left-6 w-14 h-14 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group z-50"
//       >
//         <ChevronUp className="w-6 h-6 text-white group-hover:animate-bounce" />
//       </button>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import Image from "next/image";
import Logoimage from "../../public/asets/drlogo.jpg";
import Link from "next/link";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaFacebook } from "react-icons/fa";



export default function Footer() {
  return (
    <footer className="bg-[#00635c] text-white py-10 px-6 lg:px-42 lg:pt-22 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center pb-6">
        <div className="flex flex-col items-center lg:flex-start order-1 lg:order-1">
          <div className="flex items-center space-x-2 mb-4 w-[70px] sm:w-[80px] h-[70px] sm:h-[80px]">
             <Image src={Logoimage} alt="Logo icon" />

          </div>
            <div className="text-center">
              <h4 className="font-bold"> د. عاشور خلف عطية</h4>
            <p className="text-sm">
              استشاري باطنة وحميات وكبد وسكر – أكثر من 20 سنة خبرة في التشخيص والعلاج.            </p>
        </div>
          <div className="flex justify-center mt-4">
         <Link
          href="#"
          className="bg-[#70e7d7] text-[#00635c] px-6 py-3 rounded-full font-bold text-lg hover:bg-[#fff] transition-colors duration-300"
         >
          طلب موعد الان
         </Link>
         </div>
    
        </div>

        <div className="flex flex-col items-center order-2 lg:order-3">
          <h3 className="text-lg font-semibold mb-4 text-right">الصفحات</h3>
          <ul className="text-right space-y-2">
           
            <li>
              <Link href="/" className="hover:text-[#00bfa5]  transition-colors duration-200">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-[#00bfa5] transition-colors duration-200">
                المدونة
              </Link>
            </li>
            
          </ul>
        </div>

        <div className="flex flex-col items-center order-3 lg:order-4">
          <h3 className="text-lg font-semibold mb-4 text-right">الخدمات</h3>
          <ul className="text-right space-y-2">
            <li>
              <Link href="#" className="hover:text-[#00bfa5] transition-colors duration-200">
                تجميل
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#00bfa5] transition-colors duration-200">
                التقويم
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#00bfa5] transition-colors duration-200">
                الزراعة
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#00bfa5] transition-colors duration-200">
                الحشوات
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center lg:items-start order-3 lg:order-4">
         <h3 className="text-lg font-semibold mb-4 text-right">تواصل معنا</h3>
           <ul className="text-center space-y-3">
            <li className="flex items-center gap-2">
             <FaPhoneAlt className="text-[#00bfa5]" />
              <Link href="tel:01003357844" className="hover:text-[#00bfa5] transition-colors duration-200">
               010 03357844
                   </Link>
            </li>

            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-[#00bfa5]" />
             <Link 
              href="https://api.whatsapp.com/send?phone=201021892229" 
               target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#00bfa5] transition-colors duration-200"
                 >
                010 21892229
              </Link>
            </li>

            <li className="flex items-center gap-2">
             <FaEnvelope className="text-[#00bfa5]" />
             <Link
              href="mailto:drashour77@gmail.com" 
                className="hover:text-[#00bfa5] transition-colors duration-200"
               >
               drashour77@gmail.com
              </Link>
            </li>
          </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2 text-right">تابعنا على</h3>
      <div className="flex gap-4">
           <Link 
            href="https://www.facebook.com/share/1E8LeAmtcq/" 
             target="_blank" 
              className="text-{#fff} hover:text-[#00bfa5] transition-colors duration-200 text-2xl"
                >
            <FaFacebook />
          </Link>
      </div>
  </div>

      </div>

      
    <div className="flex flex-col pt-8 lg:flex-row items-center lg:items-baseline lg:flex-center justify-evenly order-4 lg:order-1 border-t border-gray-300">
        
          <div className="text-center">
           <p className="text-sm">
  جميع الحقوق محفوظة لـ{" "}
  <Link 
    href="/" 
    className="text-[#00bfa5] hover:underline"
  >
    د/ عاشور خلف عطية
  </Link>
</p>
        </div>
       
     
       
      
         </div>

    </footer>
  );
}

