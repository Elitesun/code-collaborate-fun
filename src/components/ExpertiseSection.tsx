
import React from "react";
import { Sparkles } from "lucide-react";

const ExpertiseSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="section-title flex items-center justify-center gap-3">
            EXPERT <Sparkles className="text-purple" size={32} /> CONSULTING PROPEL <br />
            BUSINESS <Sparkles className="text-purple" size={32} /> TOWARD <br />
            BEST SUCCESS
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My consulting approach combines strategic thinking with practical implementation to deliver measurable results for businesses of all sizes.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {["APPLE", "ADOBE", "NETFLIX", "SONY", "SLACK", "AMAZON", "MICROSOFT", "GOOGLE"].map((brand, index) => (
            <div key={index} className="text-gray-500 font-bold text-lg opacity-60 hover:opacity-100 transition-opacity">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
