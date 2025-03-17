
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StudentReviewsSection from "@/components/StudentReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <HeroSection />
      <ServicesSection  />
      <StudentReviewsSection  />
      <ContactSection  />
      <Footer />
    </div>
  );
};

export default Index;
