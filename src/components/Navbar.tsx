
import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false);
    }
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

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden transition-opacity duration-300",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={handleClickOutside}
      >
        {/* Mobile Menu Content */}
        <div
          ref={menuRef}
          className={cn(
            "fixed right-0 top-0 h-full w-80 bg-dark shadow-xl flex flex-col transition-transform duration-300 ease-out mobile-menu-content",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex-grow flex flex-col items-center justify-center space-y-8">
              <a href="#home" className="text-white text-xl font-medium hover:text-purple transition-colors" onClick={toggleMenu}>Accueil</a>
              <a href="#approach" className="text-white text-xl font-medium hover:text-purple transition-colors" onClick={toggleMenu}>Notre Approche</a>
              <a href="#formation" className="text-white text-xl font-medium hover:text-purple transition-colors" onClick={toggleMenu}>Nos Formations</a>
              <a href="#contact" className="text-white text-xl font-medium hover:text-purple transition-colors" onClick={toggleMenu}>Contact</a>
            </div>
            <div className="mt-auto pt-6 w-full">
              <Button className="bg-purple hover:bg-purple-dark text-white rounded-full px-6 w-full">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
