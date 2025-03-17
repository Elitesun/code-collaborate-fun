
import React from "react";
import { cn } from "@/lib/utils";

interface ClientCardProps {
  title: string;
  description: string;
  stats?: { label: string; value: string }[];
  image?: string;
  className?: string;
}

const ClientCard = ({ title, description, stats, image, className }: ClientCardProps) => {
  return (
    <div className={cn(
      "bg-dark-lighter rounded-xl p-6 overflow-hidden group transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]", 
      className
    )}>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-white group-hover:text-purple transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm mt-1">{description}</p>
      </div>
      
      {stats && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-purple font-bold text-xl">{stat.value}</p>
              <p className="text-gray-400 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      )}
      
      {image && (
        <div className="mt-4 rounded-lg overflow-hidden">
          <img src={image} alt={title} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" />
        </div>
      )}
    </div>
  );
};

export default ClientCard;
