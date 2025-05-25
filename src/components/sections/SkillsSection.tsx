
import { useState } from "react";
import SectionTitle from "../SectionTitle";
import { Code, Users } from "lucide-react";

type SkillCategory = "technical" | "soft";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("technical");
  
  const technicalSkills = [
    { name: "Next.js", level: 85 },
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 85 },
    { name: "Tailwind CSS", level: 90 }
  ];
  
  const softSkills = [
    { name: "Project Management", level: 75 },
    { name: "Public Relations", level: 80 },
    { name: "Teamwork", level: 90 },
    { name: "Leadership", level: 85 },
    { name: "Communication", level: 80 },
    { name: "Critical Thinking", level: 85 }
  ];
  
  const categories = [
    { id: "technical", label: "Technical Skills", icon: Code },
    { id: "soft", label: "Soft Skills", icon: Users }
  ];
  
  return (
    <section id="skills" className="section-container">
      <SectionTitle
        title="My Skills"
        description="The technologies I work with and the skills I've developed."
      />
      
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-secondary rounded-lg p-1">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as SkillCategory)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                activeCategory === category.id
                  ? "bg-portfolio-blue-light text-white"
                  : "text-foreground hover:bg-secondary/80"
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.label}</span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          {(activeCategory === "technical" ? technicalSkills : softSkills).map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-portfolio-blue-light rounded-full transition-all duration-1000" 
                  style={{ width: `${skill.level}%` }} 
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-secondary/50 dark:bg-secondary/20 rounded-lg p-8 flex flex-col justify-center">
          {activeCategory === "technical" ? (
            <>
              <h3 className="text-xl font-semibold mb-4">Technical Expertise</h3>
              <p className="mb-6">
                I specialize in modern web development technologies, with a focus on React.js and Next.js ecosystems. My foundation in HTML, CSS, and JavaScript allows me to create responsive, accessible, and performant web applications.
              </p>
              <p>
                Tailwind CSS has become my preferred styling solution due to its utility-first approach and the speed at which I can create beautiful interfaces with consistent design systems.
              </p>
            </>
          ) : (
            <>
              <h3 className="text-xl font-semibold mb-4">Interpersonal Strengths</h3>
              <p className="mb-6">
                Beyond technical abilities, I've developed strong project management and leadership skills through various team projects. I excel in collaborative environments where effective communication is essential.
              </p>
              <p>
                My background in public relations has enhanced my ability to present ideas clearly and engage with stakeholders. I approach problems with critical thinking to find optimal solutions.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
