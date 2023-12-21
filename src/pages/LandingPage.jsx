import React from "react";
import About from "../components/LandingPage/About";
import Footer from "../components/LandingPage/Footer";
import Header from "../components/LandingPage/Header";
import Services from "../components/LandingPage/Services";
import Hero from "../components/LandingPage/Hero";
import Menu from "../components/LandingPage/Menu";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className=' mx-4 md:mx-[2rem] lg:mx-[4rem]'>
        <Menu />
        <About />
        <Services />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
