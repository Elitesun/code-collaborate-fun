
import React from "react";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-gray-800" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="/" className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-full bg-purple flex items-center justify-center mr-2">
                <span className="text-white font-bold">B</span>
              </div>
              <span className="text-white font-bold text-xl">BinarySec</span>
            </a>
            <p className="text-gray-400 mb-4">
              Services de consultation experts pour aider les entreprises à atteindre leur plein potentiel.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Coordonnées</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contact@binarysecacademy.com</li>
              <li>Téléphone: +228 91114423 / 70484164</li>
              <li>Adresse: 123 Rue de la Sécurité, Ville Tech</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Navigation Rapide</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple transition-colors">Accueil</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple transition-colors">Notre Approche</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple transition-colors">Formations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">S'abonner</h4>
            <p className="text-gray-400 mb-4">Abonnez-vous à notre newsletter pour les dernières mises à jour.</p>
            <div className="flex">
              <input type="email" placeholder="Votre email" className="px-4 py-2 bg-dark-lighter rounded-l text-white border-0 flex-grow" />
              <button className="bg-purple hover:bg-purple-dark px-4 py-2 rounded-r text-white">
                S'abonner
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© 2025 BinarySec Academy. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
