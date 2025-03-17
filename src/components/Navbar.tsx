
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-dark/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-purple flex items-center justify-center mr-2">
              <span className="text-white font-bold">B</span>
            </div>
            <span className="text-white font-bold text-xl">BinarySec Academy</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-purple transition-colors">Accueil</a>
          <a href="#approach" className="text-white hover:text-purple transition-colors">Notre Approche</a>
          <a href="#formation" className="text-white hover:text-purple transition-colors">Nos Formations</a>
          <a href="#contact" className="text-white hover:text-purple transition-colors">Contact</a>
        </div>

        <div className="hidden md:block">
          <Button className="bg-purple hover:bg-purple-dark text-white rounded-full px-6">
            S'inscrire
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-dark flex flex-col p-4 pt-20 md:hidden transition-all duration-300 ease-in-out z-40",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"
      )}>
        <div className="flex flex-col space-y-6 text-center">
          <a href="#home" className="text-white text-xl" onClick={toggleMenu}>Accueil</a>
          <a href="#approach" className="text-white text-xl" onClick={toggleMenu}>Notre Approche</a>
          <a href="#approach" className="text-white text-xl" onClick={toggleMenu}>Nos Formations</a>
          <a href="#footer" className="text-white text-xl" onClick={toggleMenu}>Contact</a>
          <Button className="bg-purple hover:bg-purple-dark text-white rounded-full px-6 w-full mt-6">
            S'inscrire
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
