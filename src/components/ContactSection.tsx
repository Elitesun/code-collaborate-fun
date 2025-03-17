
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="section-title">
              🚀 NE REGARDEZ PAS LA RÉVOLUTION<br />
              NUMÉRIQUE PASSER, <span className="gradient-text">PRENEZ PART À L'ACTION!</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg">
              Rejoignez BinarySec Academy et acquérez les compétences numériques qui vous permettront de façonner l'avenir de la tech en Afrique.
            </p>
            <Button className="btn-primary">
              Inscrivez-vous dès maintenant <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-dark-lighter rounded-xl p-6 overflow-hidden">
              <div className="bg-gradient-to-br from-purple to-pink-500 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Prêt à commencer votre parcours tech?</h3>
                <p className="mb-6">Remplissez le formulaire et un membre de notre équipe vous contactera dans les 24 heures.</p>
                
                <form>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <input 
                      type="text" 
                      placeholder="Nom" 
                      className="px-4 py-2 rounded bg-white/20 placeholder-white/70 text-white border-0"
                    />
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="px-4 py-2 rounded bg-white/20 placeholder-white/70 text-white border-0"
                    />
                  </div>
                  <textarea 
                    placeholder="Message" 
                    className="w-full px-4 py-2 rounded bg-white/20 placeholder-white/70 text-white border-0 mb-4"
                    rows={4}
                  ></textarea>
                  <Button className="w-full bg-white text-purple hover:bg-white/90 rounded-full">
                    Envoyer ma demande
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
