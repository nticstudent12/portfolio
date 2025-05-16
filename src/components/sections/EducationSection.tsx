
import SectionTitle from "../SectionTitle";
import { Calendar } from "lucide-react";

const EducationSection = () => {
  const educationItems = [
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "University Constantine 2",
      period: "2022 - 2025",
      description: "Comprehensive program covering software development, data structures, algorithms, and various programming paradigms. Focus on practical applications and modern technologies."
    },
    {
      degree: "Intensive Computer Science Preparation",
      institution: "University Constantine 2",
      period: "2022 - 2024",
      description: "Two-year intensive preparation covering fundamental principles of computer science, mathematics, and algorithm design."
    }
  ];

  return (
    <section id="education" className="section-container bg-secondary/30">
      <SectionTitle 
        title="Education" 
        description="My academic journey and qualifications."
      />
      
      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-portfolio-blue-light/30 transform md:-translate-x-1/2" />
        
        {educationItems.map((item, index) => (
          <div 
            key={index} 
            className={`relative mb-12 ${
              index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 ml-12 md:ml-auto md:text-left"
            } md:w-1/2`}
          >
            <div 
              className={`bg-card p-6 rounded-lg shadow-md ${
                index % 2 === 0 ? "md:ml-auto" : ""
              }`}
            >
              <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
              <div className="flex items-center gap-2 text-portfolio-blue-light mb-3 justify-start md:justify-start">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{item.period}</span>
              </div>
              <h4 className="text-lg font-medium mb-3">{item.institution}</h4>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
            
            {/* Timeline node */}
            <div className="absolute top-6 left-[-24px] md:left-auto md:right-[-12px] h-6 w-6 bg-portfolio-blue-light rounded-full flex items-center justify-center md:transform md:translate-x-1/2">
              <div className="h-3 w-3 bg-white rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
