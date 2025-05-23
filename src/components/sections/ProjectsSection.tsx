import { useState } from "react";
import SectionTitle from "../SectionTitle";
import { Github, ExternalLink, Eye } from "lucide-react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "../ui/carousel";

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  year: number;
  teamProject: boolean;
};

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "School Management System",
      description: "A comprehensive system to manage student records, attendance, grades, and school resources. This team project was developed as part of my final year studies.",
      image: "school-management",
      technologies: ["Next.js", "React.js", "Tailwind CSS"],
      year: 2025,
      teamProject: true,
      githubUrl: "https://github.com/nihadben1/dawproject",
      liveUrl: "https://school-management-demo.vercel.app"
    },{
     
      title: "Matchday App",
      description: "A mobile application for football fans to track match schedules, player stats, and team news.",
      image: "/lovable-uploads/Capture d'écran 2025-05-23 183929.png",
      technologies: [ "React.js", "Tailwind CSS"],
      year: 2025,
      teamProject: false,
      githubUrl: "https://github.com/nticstudent12/matchday-football-glance.git",
      liveUrl: "https://matchday-football-glance.lovable.app/"
    
    },
    {
      title: "Smart Todo List",
      description: "A feature-rich task management application with categories, priorities, and deadline notifications.",
      image: "/lovable-uploads/4bf40d95-5873-45fe-b825-dada408a8862.png",
      technologies: ["JavaScript", "HTML", "CSS"],
      year: 2023,
      teamProject: false,
      githubUrl: "https://github.com/nticstudent12/to-do-app",
      liveUrl: "https://nticstudent12.github.io/to-do-app/"
    },
    {
      title: "Speed Typing Game",
      description: "A game that helps users improve their typing speed and accuracy through fun challenges.",
      image: "/lovable-uploads/7c82f777-e2e6-467c-881c-d456cb86558f.png",
      technologies: ["React.js", "CSS"],
      year: 2024,
      teamProject: false,
      githubUrl: "https://github.com/nticstudent12/typingSpeddapp",
      liveUrl: "https://typing-game-abdeldjalil.vercel.app"
    },
    {
      title: "QR Code Generator",
      description: "A simple tool to generate QR codes for links, text, and contact information.",
      image: "/lovable-uploads/c4982a85-9921-45a7-a701-a1091bcade2b.png",
      technologies: ["React.js", "QR Code API"],
      year: 2024,
      teamProject: false,
      githubUrl: "https://github.com/nticstudent12/qr-generator",
      liveUrl: "https://qr-generator-abdeldjalil.vercel.app"
    },
    {
      title: "Tic-Tac-Toe Game",
      description: "An interactive Tic-Tac-Toe game with score tracking and multiple difficulty levels.",
      image: "/lovable-uploads/468e2911-1c78-4e90-a6fb-f08d76d3ec24.png",
      technologies: ["React.js", "CSS"],
      year: 2023,
      teamProject: false,
      githubUrl: "https://github.com/nticstudent12/tic-tac-toe",
      liveUrl: "https://nticstudent12.github.io/tic-tac-toe/"
    },
    {
      title: "تطبيق الصلاة",
      description: "Prayer Times application with Qibla direction, Quran recitations, and Islamic calendar.",
      image: "/lovable-uploads/13874a1a-ec3c-4f63-96fe-d50c3660828b.png",
      technologies: ["React Native", "API Integration"],
      year: 2024,
      teamProject: false,
      githubUrl: "https://github.com/nticstudent12/prayer-app",
      liveUrl: "https://serene-ritual-router.lovable.app/"
    },
    {
      title: "Car Sales Website",
      description: "A platform for buying and selling cars with search filters, user authentication, and messaging capabilities.",
      image: "/lovable-uploads/65d4144b-7bcd-4392-b4dc-01f53bd738da.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      year: 2024,
      teamProject: false,
      githubUrl: "https://github.com/nticstudent12/carProject"
    },
    {
      title: "Healthcare Platform",
      description: "A telemedicine platform connecting patients with healthcare providers for virtual consultations and appointment booking.",
      image: "/lovable-uploads/0c2929fe-ccbd-44ff-9a0a-dff1a1ed20b9.png",
      technologies: ["React.js", "Node.js", "MongoDB"],
      year: 2025,
      teamProject: true,
      githubUrl: "https://github.com/nticstudent12/healthtrustapp",
      liveUrl: "https://healthtrust-demo.vercel.app"
    },
  ];

  // Group projects into rows of 3 for larger screens
  const getProjectRows = () => {
    const rows = [];
    for (let i = 0; i < projects.length; i += 3) {
      rows.push(projects.slice(i, i + 3));
    }
    return rows;
  };

  return (
    <section id="projects" className="section-container">
      <SectionTitle
        title="My Projects"
        description="A collection of projects I've worked on, from team collaborations to personal developments."
      />
      
      {/* Desktop view - Grid layout */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.title} 
            project={project}
            className={index === 0 ? "lg:col-span-2" : ""}
          />
        ))}
      </div>
      
      {/* Mobile and tablet view - Carousel */}
      <div className="lg:hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.title} className="md:basis-1/2">
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="relative static mr-2 translate-y-0" />
            <CarouselNext className="relative static ml-2 translate-y-0" />
          </div>
        </Carousel>
      </div>
      
      {/* Healthcare project images carousel */}
      <div className="mt-16">
        <SectionTitle
          title="Healthcare Platform Previews"
          description="Screenshots from the Healthcare Platform project showcasing different features."
        />
        <div className="mt-8">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                <img 
                  src="/lovable-uploads/0c2929fe-ccbd-44ff-9a0a-dff1a1ed20b9.png" 
                  alt="Healthcare Platform Homepage" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <p className="text-center mt-2 text-sm text-muted-foreground">Homepage</p>
              </CarouselItem>
              <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                <img 
                  src="/lovable-uploads/285d46ac-d3d1-41a2-b276-aca864da193b.png" 
                  alt="Appointment Booking" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <p className="text-center mt-2 text-sm text-muted-foreground">Appointment Booking</p>
              </CarouselItem>
              <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                <img 
                  src="/lovable-uploads/af5d4635-e3fe-4200-b47b-bc8826b12d1d.png" 
                  alt="Account Settings" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <p className="text-center mt-2 text-sm text-muted-foreground">Account Settings</p>
              </CarouselItem>
              <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                <img 
                  src="/lovable-uploads/b86c840f-2e44-43ac-bdf1-965d7afb4a37.png" 
                  alt="AI Scanner" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <p className="text-center mt-2 text-sm text-muted-foreground">AI Scanner Interface</p>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-6" />
            <CarouselNext className="-right-4 md:-right-6" />
          </Carousel>
        </div>
      </div>

      {/* Car Sales Website carousel */}
      <div className="mt-16">
        <SectionTitle
          title="Car Sales Website Previews"
          description="Screenshots from the Car Sales Website project showcasing different features."
        />
        <div className="mt-8">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg bg-gray-50">
                  <img 
                    src="/lovable-uploads/65d4144b-7bcd-4392-b4dc-01f53bd738da.png" 
                    alt="Car Sales Homepage" 
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-center mt-3 text-sm text-muted-foreground font-medium">Homepage - Find Your Best Car</p>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg bg-gray-50">
                  <img 
                    src="/lovable-uploads/3b031d17-d9b7-4d14-9c3f-603ce0b594f0.png" 
                    alt="Login Options" 
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-center mt-3 text-sm text-muted-foreground font-medium">User Role Selection</p>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg bg-gray-50">
                  <img 
                    src="/lovable-uploads/efae1470-4e95-4395-ad61-129a340c782f.png" 
                    alt="Login Form" 
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-center mt-3 text-sm text-muted-foreground font-medium">Sign In Form</p>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg bg-gray-50">
                  <img 
                    src="/lovable-uploads/5b44d26a-2ac7-47d8-a2ce-0b4089f65896.png" 
                    alt="OTP Verification" 
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-center mt-3 text-sm text-muted-foreground font-medium">OTP Verification</p>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg bg-gray-50">
                  <img 
                    src="/lovable-uploads/87c06e4b-329c-4c2d-afb3-c6987c8c517a.png" 
                    alt="Admin Dashboard" 
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-center mt-3 text-sm text-muted-foreground font-medium">Admin Dashboard</p>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg bg-gray-50">
                  <img 
                    src="/lovable-uploads/0fc037c6-0d6f-426c-811a-ba8f95902e88.png" 
                    alt="Contact Form" 
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-center mt-3 text-sm text-muted-foreground font-medium">Contact Car Owner Form</p>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-6" />
            <CarouselNext className="-right-4 md:-right-6" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

// Separate ProjectCard component for better organization
const ProjectCard = ({ project, className = "" }: { project: Project, className?: string }) => {
  return (
    <Card 
      className={`overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 ${className}`}
    >
      <div className="h-48 overflow-hidden">
        {project.image.startsWith("/lovable-uploads") || project.image.startsWith("http") ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div className="h-full bg-gradient-to-br from-portfolio-blue-light/80 to-portfolio-blue-dark flex items-center justify-center">
            <span className="text-white font-bold text-lg">{project.title}</span>
          </div>
        )}
      </div>
      
      <CardHeader className="p-6 pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <span className="text-sm text-muted-foreground">{project.year}</span>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 pt-0">
        <CardDescription className="mb-4">{project.description}</CardDescription>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-secondary text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <span className={`text-xs ${project.teamProject ? "text-portfolio-blue-light" : "text-muted-foreground"}`}>
          {project.teamProject ? "Team Project" : "Personal Project"}
        </span>
        
        <div className="flex gap-2">
          <TooltipProvider>
            {project.githubUrl && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full hover:bg-portfolio-blue-light hover:text-white transition-all"
                    onClick={() => window.open(project.githubUrl, "_blank", "noopener,noreferrer")}
                    aria-label="View Source Code on GitHub"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    <span className="hidden sm:inline-block">Source</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View Source Code</p>
                </TooltipContent>
              </Tooltip>
            )}
            
            {project.liveUrl && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="default"
                    size="sm"
                    className="rounded-full bg-portfolio-blue-light hover:bg-portfolio-blue-dark transition-all"
                    onClick={() => window.open(project.liveUrl, "_blank", "noopener,noreferrer")}
                    aria-label="View Live Demo"
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    <span className="hidden sm:inline-block">Live Demo</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View Live Demo</p>
                </TooltipContent>
              </Tooltip>
            )}
          </TooltipProvider>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectsSection;
