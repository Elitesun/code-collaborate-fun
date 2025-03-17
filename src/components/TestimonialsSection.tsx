
import React from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    quote: "As a UX/UI designer, I've never met someone who could transform my designs into reality so precisely. The attention to detail was amazing.",
    author: "Michael Johnson",
    position: "Senior UX Designer",
    image: "/placeholder.svg"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-40 h-40 bg-purple/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            LET'S HEAR FROM MY DEAR<br />
            CLIENTS
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
