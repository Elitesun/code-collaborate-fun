
import React from "react";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="/" className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-full bg-purple flex items-center justify-center mr-2">
                <span className="text-white font-bold">G</span>
              </div>
              <span className="text-white font-bold text-xl">Gervid</span>
            </a>
            <p className="text-gray-400 mb-4">
              Providing expert consulting services to help businesses reach their full potential.
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
            <h4 className="text-white font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: hello@gervid.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Consulting St, Business City</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Subscribe</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="px-4 py-2 bg-dark-lighter rounded-l text-white border-0 flex-grow" />
              <button className="bg-purple hover:bg-purple-dark px-4 py-2 rounded-r text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Gervid Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
