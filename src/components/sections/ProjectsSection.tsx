
import { useState } from "react";
import SectionTitle from "../SectionTitle";
import { Github, ExternalLink, Eye } from "lucide-react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

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
      githubUrl: "https://github.com/abdeldjalil/school-management",
      liveUrl: "https://school-management-demo.vercel.app"
    },
    {
      title: "Car Sales Website",
      description: "A platform for buying and selling cars with search filters, user authentication, and messaging capabilities.",
      image: "car-sales",
      technologies: ["HTML", "CSS", "JavaScript"],
      year: 2024,
      teamProject: false,
      githubUrl: "https://github.com/abdeldjalil/car-sales"
    },
    {
      title: "Tic-Tac-Toe Game",
      description: "An interactive Tic-Tac-Toe game with score tracking and multiple difficulty levels.",
      image: "tic-tac-toe",
      technologies: ["React.js", "CSS"],
      year: 2023,
      teamProject: false,
      githubUrl: "https://github.com/abdeldjalil/tic-tac-toe",
      liveUrl: "https://tic-tac-toe-game-abdeldjalil.vercel.app"
    },
    {
      title: "To-Do List Application",
      description: "A feature-rich task management application with categories, priorities, and deadline notifications.",
      image: "todo-list",
      technologies: ["JavaScript", "HTML", "CSS"],
      year: 2023,
      teamProject: false,
      githubUrl: "https://github.com/abdeldjalil/todo-app"
    },
    {
      title: "Typing Game",
      description: "A game that helps users improve their typing speed and accuracy through fun challenges.",
      image: "typing-game",
      technologies: ["React.js", "CSS"],
      year: 2024,
      teamProject: false,
      githubUrl: "https://github.com/abdeldjalil/typing-game",
      liveUrl: "https://typing-game-abdeldjalil.vercel.app"
    }
  ];

  return (
    <section id="projects" className="section-container">
      <SectionTitle
        title="My Projects"
        description="A collection of projects I've worked on, from team collaborations to personal developments."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.title}
            className={`bg-card rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 ${
              index === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div className="h-48 bg-gradient-to-br from-portfolio-blue-light/80 to-portfolio-blue-dark flex items-center justify-center">
              <span className="text-white font-bold text-lg">{project.title}</span>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <span className="text-sm text-muted-foreground">{project.year}</span>
              </div>
              
              <p className="mb-4 text-muted-foreground">{project.description}</p>
              
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
              
              <div className="flex justify-between items-center">
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
