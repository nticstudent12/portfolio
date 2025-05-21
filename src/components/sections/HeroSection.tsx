
import { ArrowDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-blue-light/10 to-transparent dark:from-portfolio-blue-light/5 -z-10" />
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 animate-fade-in-left">
          <p className="text-portfolio-blue-light font-medium">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Abdel Djalil BOUCHAREF
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground">
            Web Developer & Computer Science Student
          </h2>
          <p className="text-lg max-w-md">
            Passionate about creating modern web applications and solving complex challenges using cutting-edge technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-portfolio-blue-light text-white font-medium rounded-md hover:bg-portfolio-blue-dark transition-colors"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 bg-secondary text-foreground font-medium rounded-md hover:bg-secondary/80 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
        
        <div className="order-first md:order-last hidden md:flex justify-center animate-fade-in-right">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-portfolio-blue-light/30">
            <img 
              src="/lovable-uploads/2afb2774-f9fc-40df-b367-661b4e8ee850.png" 
              alt="Abdel Djalil BOUCHAREF" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce p-2"
      >
        <ArrowDown className="text-portfolio-blue-light" />
      </a>
    </section>
  );
};

export default HeroSection;
