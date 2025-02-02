import React, { useEffect } from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import TrustedPartners from "./components/TrustedPartners";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

const App = () => {
  useEffect(() => {
    // Animation logic
    const animatedElements = document.querySelectorAll('.animate');
    animatedElements.forEach(el => el.classList.add('active'));
  }, []);

  return (
    <>
      <Header />
      <MainSection />
      <About />
      <Testimonials />
      <TrustedPartners />
      <Footer />
    </>
  );
};

export default App;
