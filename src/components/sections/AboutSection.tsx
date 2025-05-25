
import SectionTitle from "../SectionTitle";
import AnimatedSection from "../AnimatedSection";

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <AnimatedSection>
        <SectionTitle 
          title="About Me" 
          description="Get to know more about my background and interests."
        />
      </AnimatedSection>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection animation="fade-left" delay={200}>
          <div className="space-y-6">
            <p className="text-lg">
              I'm a <strong className="text-portfolio-blue-light">computer science student</strong> with a strong background in programming, algorithms and software development. Currently in my 3rd year, graduating in June 2025 from University Constantine 2.
            </p>
            <p className="text-lg">
              My focus is on developing both <strong className="text-portfolio-blue-light">mobile and web projects</strong> using cutting-edge technologies. I'm passionate about learning and applying new technologies to solve complex challenges.
            </p>
            <p className="text-lg">
              Based in <strong>El Khroub, Constantine</strong>, I'm fluent in Arabic and have intermediate proficiency in English and French, with basic knowledge of Spanish.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Contact Details</h3>
                <ul className="space-y-2">
                  <li>Abdel Djalil BOUCHAREF</li>
                  <li>El Khroub, Constantine</li>
                  <li>0549752504</li>
                  <li className="break-words">mouhamed.boucharef@univ-constantine2.dz</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Languages</h3>
                <ul className="space-y-2">
                  <li><span className="font-medium">Arabic:</span> Fluent</li>
                  <li><span className="font-medium">English:</span> Intermediate</li>
                  <li><span className="font-medium">French:</span> Intermediate</li>
                  <li><span className="font-medium">Spanish:</span> Basic</li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-right" delay={400}>
          <div className="relative h-96 bg-portfolio-blue-light/10 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  A passion for technology and innovation
                </h3>
                <p className="text-lg">
                  Driven by curiosity and a desire to create meaningful solutions that make a difference in people's lives.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
