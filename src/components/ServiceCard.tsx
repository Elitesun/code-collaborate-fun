
import React from "react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => {
  return (
    <div className={cn(
      "bg-dark-lighter rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] group", 
      className
    )}>
      <div className="mb-4 text-purple text-2xl">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple transition-colors">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default ServiceCard;
