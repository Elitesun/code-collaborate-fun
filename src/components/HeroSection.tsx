
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h5 className="text-purple mb-2 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-purple"></span>
              Hi, I'm Your Expert
            </h5>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              LET'S <span className="gradient-text">UNLOCKING</span><br />
              POTENTIAL <span className="gradient-text">BEST</span><br />
              <span className="gradient-text">DELIVERING.</span>
            </h1>
            <p className="text-gray-400 mb-8 max-w-lg">
              Professional consultant helping businesses reach their full potential with tailored strategies and innovative solutions.
            </p>
            <Button className="btn-primary">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <div className="absolute top-0 -left-10 w-72 h-72 bg-purple/20 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/20 rounded-full filter blur-3xl"></div>
              <img 
                src="/lovable-uploads/e481afeb-26ee-4dd5-b6f5-685ad452d55f.png" 
                alt="Consultant" 
                className="relative z-10 animate-float rounded-full max-w-xs md:max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
