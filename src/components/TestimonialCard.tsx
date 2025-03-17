
import React from "react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  image: string;
  className?: string;
}

const TestimonialCard = ({ quote, author, position, image, className }: TestimonialCardProps) => {
  return (
    <div className={cn(
      "bg-dark-lighter rounded-xl p-6 flex flex-col md:flex-row gap-6 transition-all duration-300", 
      className
    )}>
      <div className="flex-shrink-0">
        <img src={image} alt={author} className="w-24 h-24 rounded-xl object-cover" />
      </div>
      <div>
        <div className="text-purple text-3xl mb-2">"</div>
        <p className="text-gray-300 mb-4">{quote}</p>
        <div>
          <h4 className="text-white font-semibold">{author}</h4>
          <p className="text-gray-400 text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
