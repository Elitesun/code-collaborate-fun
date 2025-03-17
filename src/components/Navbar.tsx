
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
              <span className="text-white font-bold">G</span>
            </div>
            <span className="text-white font-bold text-xl">Gervid</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-purple transition-colors">Home</a>
          <a href="#services" className="text-white hover:text-purple transition-colors">Services</a>
          <a href="#clients" className="text-white hover:text-purple transition-colors">Clients</a>
          <a href="#about" className="text-white hover:text-purple transition-colors">About</a>
          <a href="#contact" className="text-white hover:text-purple transition-colors">Contact</a>
        </div>

        <div className="hidden md:block">
          <Button className="bg-purple hover:bg-purple-dark text-white rounded-full px-6">
            Let's Talk
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
          <a href="#home" className="text-white text-xl" onClick={toggleMenu}>Home</a>
          <a href="#services" className="text-white text-xl" onClick={toggleMenu}>Services</a>
          <a href="#clients" className="text-white text-xl" onClick={toggleMenu}>Clients</a>
          <a href="#about" className="text-white text-xl" onClick={toggleMenu}>About</a>
          <a href="#contact" className="text-white text-xl" onClick={toggleMenu}>Contact</a>
          <Button className="bg-purple hover:bg-purple-dark text-white rounded-full px-6 w-full mt-6">
            Let's Talk
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
