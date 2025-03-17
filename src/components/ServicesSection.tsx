
import React from "react";
import { Button } from "@/components/ui/button";
import ServiceCard from "./ServiceCard";
import { Users, BookOpen, Briefcase, Award } from "lucide-react";
import { ArrowRight } from "lucide-react";

const learningMethods = [
  {
    title: "Peer-to-Peer Learning",
    description: "Échangez et apprenez avec votre communauté dans un environnement collaboratif.",
    icon: <Users />
  },
  {
    title: "Learning by Doing",
    description: "Développez vos compétences avec des cas réels et des projets pratiques.",
    icon: <BookOpen />
  },
  {
    title: "Travail en équipe",
    description: "Acquérez une expérience collaborative essentielle pour votre future carrière.",
    icon: <Briefcase />
  },
  {
    title: "Évaluations hybrides",
    description: "Théorie, pratique et projets collectifs pour une évaluation complète.",
    icon: <Award />
  }
];

const ServicesSection = () => {
  return (
    <section id="approach" className="py-16 relative overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-40 h-40 bg-purple/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="mb-16 max-w-3xl">
          <h2 className="section-title">
            🚀 APPRENEZ AUTREMENT AVEC <br />
            NOTRE <span className="gradient-text">MÉTHODE INNOVANTE!</span>
          </h2>
          <p className="text-gray-400 mb-6">
            BinarySec Academy est bien plus qu'une simple plateforme d'apprentissage. Nous réinventons l'éducation tech en Afrique avec une approche axée sur la pratique, la collaboration et l'open source.
          </p>
          <Button className="btn-primary">
            Découvrir notre approche <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningMethods.map((method, index) => (
            <ServiceCard 
              key={index}
              title={method.title}
              description={method.description}
              icon={method.icon}
            />
          ))}
        </div>
        
        <div className="mt-20 bg-dark-lighter rounded-xl p-8 relative overflow-hidden" id="formation">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple/20 rounded-full filter blur-3xl -z-0"></div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-8 relative z-10">
            <div className="md:w-2/3">
              <div className="inline-flex items-center bg-purple/20 px-4 py-2 rounded-full text-purple text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-purple rounded-full mr-2"></span>
                NOTRE MISSION
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">OFFRIR AUX JEUNES ET AUX FILLES DES COMPÉTENCES NUMÉRIQUES ESSENTIELLES POUR EXCELLER DANS LES MÉTIERS DE DEMAIN</h3>
              <p className="text-gray-400">Une éducation tech de qualité, accessible à tous, pour former la prochaine génération de talents africains.</p>
            </div>
            
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Collaborative Learning" className="max-w-full h-auto rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
