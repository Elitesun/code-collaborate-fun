import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-16 relative overflow-hidden">
      <div className="hero-container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="hero-content text-center"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h5 className="text-purple mb-2 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-purple"></span>
              BinarySec Academy
            </h5>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">APPRENEZ.</span>
              <br />
              <span className="gradient-text">CONSTRUISEZ.</span>
              <br />
              <span className="gradient-text">RÉINVENTEZ</span> <br />
              L'AVENIR DE LA TECH!
            </h1>
            <p className="text-gray-400 mb-8 max-w-lg">
              Des formations accessibles et inclusives pour la jeunesse
              africaine avec une pédagogie innovante à l'ère de l'IA et de la
              Tech. Un apprentissage pratique avec des projets concrets.
            </p>
            <Button className="btn-primary">
              Inscrivez-vous maintenant <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <div className="absolute top-0 -left-10 w-72 h-72 bg-purple/20 rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/20 rounded-full filter blur-3xl animate-pulse"></div>

              {/* Floating Geometric Shapes */}
              <div className="absolute -left-8 top-1/4 w-12 h-12 bg-purple-500/30 rounded-lg animate-float-slow transform rotate-45"></div>
              <div className="absolute right-4 top-1/3 w-8 h-8 bg-blue-500/30 rounded-full animate-float-delay"></div>
              <div className="absolute right-12 bottom-1/4 w-10 h-10 bg-pink-500/30 transform rotate-12 animate-float"></div>

              {/* Main Image with Gradient Mask */}
              <div
                className="relative overflow-hidden shadow-2xl w-[650px] h-[500px] mx-auto"
                style={{
                  borderRadius: "85% 15% 60% 40% / 65% 40% 60% 35%",
                  transform: "rotate(-7deg)",
                }}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 mix-blend-overlay"
                  style={{
                    clipPath: "ellipse(70% 80% at 65% 45%)",
                    transform: "rotate(-3deg) scale(1.8)",
                  }}
                ></div>
                <img
                  src="/hero-10.png"
                  alt="Developer working on laptop"
                  className="relative z-10 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
