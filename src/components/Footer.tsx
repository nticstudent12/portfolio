
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-blue-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Abdel Djalil BOUCHAREF</h2>
            <p className="text-white/70">Web Developer & Computer Science Student</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#home" className="text-white/70 hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="text-white/70 hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="text-white/70 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors">
              Contact
            </a>
            <ThemeToggle />
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            &copy; {currentYear} Abdel Djalil BOUCHAREF. All rights reserved.
          </p>
          
          <p className="text-white/70 text-sm mt-2 md:mt-0">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
