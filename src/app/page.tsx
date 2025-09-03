// "use server";
import Header from "@/components/header/Header";
import Main from "@/components/main/main";
import Services from "@/components/servicesSection/services";
import Appointment from "@/components/main/appointment";
import Testmonials from "@/components/testmonial/testmonials";
import Footer from "../components/footer";
import BlogSection from "@/components/blogSection/blogSection";
import { articles } from "./blog/page";

const page = () => {
  return (
    <div>
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

        {/* testmonials section  */}
        <section>
          <Testmonials />
        </section>

        {/* blogs section  */}
        <section>
          <BlogSection articles={articles} />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default page;
