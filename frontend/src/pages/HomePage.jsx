import React from "react";
import SearchSection from "../components/SearchSection";
import ServiceCards from "../components/ServiceCards";
import ConsultSection from "../components/ConsultSection";
import InClinicSection from "../components/InClinicSection";
import HealthArticles from "../components/HealthArticles";
import Testimonial from "../components/Testimonial";


function HomePage() {
  return (
    <>
      <SearchSection />
      <ServiceCards />
      <ConsultSection />
      <InClinicSection />
      <HealthArticles />
      <Testimonial />
      
    </>
  );
}

export default HomePage;
