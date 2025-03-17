
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ClientCard from "./ClientCard";

const clients = [
  {
    title: "TechWave Solutions",
    description: "SaaS Platform Redesign",
    stats: [
      { label: "Traffic Increase", value: "245%" },
      { label: "Conversion Rate", value: "12.5%" }
    ],
    image: "/placeholder.svg"
  },
  {
    title: "Global Tech",
    description: "Mobile App Development",
    stats: [
      { label: "App Downloads", value: "150K+" },
      { label: "User Retention", value: "88%" }
    ],
    image: "/placeholder.svg"
  },
  {
    title: "Emerald Finance",
    description: "Financial Advisory",
    stats: [
      { label: "Revenue Growth", value: "32%" },
      { label: "Cost Reduction", value: "18%" }
    ],
    image: "/placeholder.svg"
  },
  {
    title: "Nexus AI",
    description: "AI Integration Project",
    stats: [
      { label: "Process Efficiency", value: "67%" },
      { label: "ROI", value: "215%" }
    ],
    image: "/placeholder.svg"
  }
];

const ClientsSection = () => {
  return (
    <section id="clients" className="py-16 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-40 h-40 bg-purple/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <h2 className="section-title">MY CLIENTS</h2>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="w-8 h-[2px] bg-purple"></div>
            <Button variant="link" className="text-purple">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clients.map((client, index) => (
            <ClientCard 
              key={index}
              title={client.title}
              description={client.description}
              stats={client.stats}
              image={client.image}
            />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button className="btn-primary">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
