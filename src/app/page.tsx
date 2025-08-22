import React from "react";
import Header from "@/components/header/Header";
import Main from "@/components/main/main";
import Services from "@/components/servicesSection/services";
// import Footer from "@/components/footer";

const page = () => {
  return (
    <>
      <header className="fixed z-100 border-b-[0.1px] bg-white border-[#009a8bbe]">
        <Header />
      </header>

      {/* space */}
      <div className="w-[100vw] h-[130px] "></div>

      <main>
        <Main />
      </main>

      <section>
        <Services />
      </section>

      {/* <footer>
        <Footer />
      </footer> */}
    </>
  );
};

export default page;
