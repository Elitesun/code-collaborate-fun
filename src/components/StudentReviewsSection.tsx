import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Star,
  GraduationCap,
  Code,
  Laptop,
  Database,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const courses = [
  {
    icon: <Code className="text-purple" />,
    title: "Product Marketing",
    description:
      "Maîtrisez les stratégies marketing digitales et développez votre expertise dans le secteur tech.",
  },
  {
    icon: <Laptop className="text-purple" />,
    title: "Automation & No-Code",
    description:
      "Apprenez à automatiser des processus et créer des applications sans code pour optimiser votre productivité.",
  },
  {
    icon: <Database className="text-purple" />,
    title: "Webmaster & Gestion de Site Web",
    description:
      "Développez les compétences nécessaires pour gérer et maintenir des sites web professionnels.",
  },
];

const studentReviews = [
  {
    name: "Sophie Diallo",
    program: "Formation Développement Web",
    review:
      "Grâce à BinarySec Academy, j'ai pu acquérir des compétences solides en programmation. Leur approche peer-to-peer m'a permis d'apprendre plus rapidement et de manière plus interactive qu'avec des méthodes traditionnelles.",
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Mamadou Sow",
    program: "Automation & No-Code",
    review:
      "La formation No-Code de BinarySec a transformé ma vie professionnelle. J'ai pu créer des applications sans connaître la programmation et décrocher un poste dans une startup tech. L'approche pratique est vraiment efficace !",
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Aminata Touré",
    program: "Product Marketing",
    review:
      "BinarySec Academy m'a donné les outils pour comprendre le marketing digital dans un contexte tech. Les projets concrets et l'accent mis sur la collaboration m'ont permis de développer mon portfolio et de trouver un emploi rapidement.",
    stars: 4,
    image:
      "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Jean-Pierre Ndiaye",
    program: "Webmaster & Gestion de Site Web",
    review:
      "La communauté chez BinarySec est incroyable. J'ai non seulement acquis des compétences techniques, mais j'ai aussi développé un réseau professionnel solide. Leur méthode d'apprentissage par la pratique est exactement ce dont j'avais besoin.",
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
];

const StudentReviewsSection = () => {
  const renderStars = (count) => {
    return Array(count)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
      ));
  };
  return (
    <section id="courses" className="py-16 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-40 h-40 bg-purple/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h5 className="text-purple mb-2 flex items-center justify-center gap-2">
            <span className="w-12 h-[3px] bg-purple animate-pulse"></span>
            <span className="text-lg font-semibold tracking-wider uppercase">
              Nos Formations
            </span>
            <span className="w-12 h-[3px] bg-purple animate-pulse"></span>
          </h5>
          <h2 className="section-title">
            🚀 APPRENEZ. CONSTRUISEZ. RÉINVENTEZ L'AVENIR DE LA TECH !
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Des formations accessibles et inclusives pour la jeunesse africaine,
            avec une pédagogie innovante à l'ère de l'IA et de la Tech.
          </p>
        </div>

        <div className="flex justify-center md:flex-row gap-8 flex-wrap ">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="bg-dark-lighter rounded-xl border-none hover:scale-105 transition-transform duration-300 flex-1 min-w-[300px] max-w-[400px]"
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{course.icon}</div>
                <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                <p className="text-gray-400">{course.description}</p>
                <Button className="w-full mt-6 bg-purple hover:bg-purple/90">
                  En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            variant="outline"
            className="border-purple text-purple hover:bg-purple hover:text-white"
          >
            Voir toutes nos formations <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="mt-24">
          <div className="text-center mb-12">
            <h5 className="text-purple mb-2 flex items-center justify-center gap-2">
              <span className="w-6 h-[2px] bg-purple"></span>
              Témoignages
              <span className="w-6 h-[2px] bg-purple"></span>
            </h5>
            <h2 className="section-title">Ce que disent nos étudiants</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Découvrez les expériences de nos étudiants qui ont transformé leur
              carrière grâce à BinarySec Academy.
            </p>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {studentReviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-dark-lighter border-none h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        {renderStars(review.stars)}
                      </div>
                      <p className="text-gray-300 mb-6">{review.review}</p>
                      <div className="flex items-center gap-4">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold">{review.name}</h4>
                          <p className="text-sm text-gray-400">
                            {review.program}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-purple text-white p-2 rounded-full shadow-lg hover:bg-purple/90">
              <ArrowRight className="rotate-180 h-5 w-5" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-purple text-white p-2 rounded-full shadow-lg hover:bg-purple/90">
              <ArrowRight className="h-5 w-5" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default StudentReviewsSection;
