
import { ArrowDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import TypingEffect from "../TypingEffect";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-blue-light/10 to-transparent dark:from-portfolio-blue-light/5 -z-10" />
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 animate-fade-in-left">
          <p className="text-portfolio-blue-light font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold min-h-[1.2em]" style={{ animationDelay: '0.5s' }}>
            <TypingEffect 
              text="Abdel Djalil BOUCHAREF"
              speed={80}
              className="animate-fade-in"
            />
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground animate-fade-in" style={{ animationDelay: '1.8s' }}>
            Web Developer & Computer Science Student
          </h2>
          <p className="text-lg max-w-md animate-fade-in" style={{ animationDelay: '2.2s' }}>
            Passionate about creating modern web applications and solving complex challenges using cutting-edge technologies.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '2.6s' }}>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-portfolio-blue-light text-white font-medium rounded-md hover:bg-portfolio-blue-dark transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 bg-secondary text-foreground font-medium rounded-md hover:bg-secondary/80 transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
            >
              View Projects
            </a>
          </div>
        </div>
        
        <div className="order-first md:order-last hidden md:flex justify-center animate-fade-in-right">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-portfolio-blue-light/30 hover:border-portfolio-blue-light/60 transition-all duration-500 hover:scale-105 transform hover:shadow-2xl">
            <img 
              src={heroPortrait} 
              alt="Abdel Djalil BOUCHAREF" 
              className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-portfolio-blue-light/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce p-2 hover:scale-125 transition-transform duration-300"
      >
        <ArrowDown className="text-portfolio-blue-light" />
      </a>
    </section>
  );
};

export default HeroSection;
