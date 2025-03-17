
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, GraduationCap } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter
} from "@/components/ui/card";

const studentReviews = [
  {
    name: "Sophie Diallo",
    program: "Formation Développement Web",
    review: "Grâce à BinarySec Academy, j'ai pu acquérir des compétences solides en programmation. Leur approche peer-to-peer m'a permis d'apprendre plus rapidement et de manière plus interactive qu'avec des méthodes traditionnelles.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Mamadou Sow",
    program: "Automation & No-Code",
    review: "La formation No-Code de BinarySec a transformé ma vie professionnelle. J'ai pu créer des applications sans connaître la programmation et décrocher un poste dans une startup tech. L'approche pratique est vraiment efficace !",
    stars: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Aminata Touré",
    program: "Product Marketing",
    review: "BinarySec Academy m'a donné les outils pour comprendre le marketing digital dans un contexte tech. Les projets concrets et l'accent mis sur la collaboration m'ont permis de développer mon portfolio et de trouver un emploi rapidement.",
    stars: 4,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Jean-Pierre Ndiaye",
    program: "Webmaster & Gestion de Site Web",
    review: "La communauté chez BinarySec est incroyable. J'ai non seulement acquis des compétences techniques, mais j'ai aussi développé un réseau professionnel solide. Leur méthode d'apprentissage par la pratique est exactement ce dont j'avais besoin.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  }
];

const StudentReviewsSection = () => {
  return (
    <section id="reviews" className="py-16 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-40 h-40 bg-purple/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div>
            <h5 className="text-purple mb-2 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-purple"></span>
              Témoignages
            </h5>
            <h2 className="section-title">NOS ÉTUDIANTS TÉMOIGNENT</h2>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="w-8 h-[2px] bg-purple"></div>
            <Button variant="link" className="text-purple">
              Tous les témoignages <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <Carousel className="w-full">
          <CarouselContent>
            {studentReviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="bg-dark-lighter rounded-xl border-none h-full flex flex-col">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.stars)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6">{review.review}</p>
                    <div className="flex items-center gap-4 mt-auto">
                      <img 
                        src={review.image} 
                        alt={review.name} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="text-white font-medium">{review.name}</h4>
                        <div className="flex items-center text-gray-400 text-sm">
                          <GraduationCap className="h-3 w-3 mr-1" />
                          {review.program}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static mx-2 bg-dark-lighter hover:bg-dark-lighter/80" />
            <CarouselNext className="relative static mx-2 bg-dark-lighter hover:bg-dark-lighter/80" />
          </div>
        </Carousel>
        
        <div className="mt-10 text-center">
          <Button className="btn-primary">
            Rejoignez-nous <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudentReviewsSection;
