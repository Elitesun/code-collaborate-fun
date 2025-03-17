
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="section-title">
              SUCCESS? REACH<br />
              OUT TO START.
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg">
              Ready to transform your business? Let's discuss how my consulting services can help you achieve your goals.
            </p>
            <Button className="btn-primary">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-dark-lighter rounded-xl p-6 overflow-hidden">
              <div className="bg-gradient-to-br from-purple to-pink-500 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
                <p className="mb-6">Fill out the form and I'll get back to you within 24 hours.</p>
                
                <form>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <input 
                      type="text" 
                      placeholder="Name" 
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
                    Send Message
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
