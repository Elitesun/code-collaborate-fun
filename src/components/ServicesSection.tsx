
import React from "react";
import { Button } from "@/components/ui/button";
import ServiceCard from "./ServiceCard";
import { BarChart3, Briefcase, PenTool, Zap } from "lucide-react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Business Strategy",
    description: "Comprehensive business planning and strategy development to achieve sustainable growth.",
    icon: <Briefcase />
  },
  {
    title: "Brand Design",
    description: "Creating memorable brand experiences that connect with your target audience.",
    icon: <PenTool />
  },
  {
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that deliver measurable results.",
    icon: <Zap />
  },
  {
    title: "ROI Tracking",
    description: "Advanced analytics to track and optimize your return on investment.",
    icon: <BarChart3 />
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 relative overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-40 h-40 bg-purple/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="mb-16 max-w-3xl">
          <h2 className="section-title">
            HERE'S HOW I CAN <br />
            BE <span className="gradient-text">BEST HELP!</span>
          </h2>
          <p className="text-gray-400 mb-6">
            I offer specialized consulting services tailored to help your business reach its full potential through strategic planning and implementation.
          </p>
          <Button className="btn-primary">
            View All Services <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        
        <div className="mt-20 bg-dark-lighter rounded-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple/20 rounded-full filter blur-3xl -z-0"></div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-8 relative z-10">
            <div className="md:w-2/3">
              <div className="inline-flex items-center bg-purple/20 px-4 py-2 rounded-full text-purple text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-purple rounded-full mr-2"></span>
                BUSINESS GROWTH CATALYST
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">I'M HELPING BUSINESSES TO REACH THEIR FULL POTENTIAL AND ACHIEVE GREAT SUCCESS</h3>
              <p className="text-gray-400">With over 10+ years of industry experience, I've helped businesses transform challenges into opportunities.</p>
            </div>
            
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <img src="/placeholder.svg" alt="Growth Chart" className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
