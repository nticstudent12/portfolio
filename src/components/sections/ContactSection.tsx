
import { useState } from "react";
import SectionTitle from "../SectionTitle";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="section-container">
      <SectionTitle
        title="Contact Me"
        description="Have a question or want to work together? Reach out through the form below or via my contact information."
      />
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-portfolio-blue-light"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-portfolio-blue-light"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block mb-2 font-medium">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-portfolio-blue-light"
                placeholder="Subject of your message"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-portfolio-blue-light"
                placeholder="Your message here..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-portfolio-blue-light text-white font-medium rounded-md hover:bg-portfolio-blue-dark transition-colors disabled:opacity-70 disabled:cursor-not-allowed hover-lift"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            
            {submitSuccess && (
              <p className="text-green-600 dark:text-green-400">
                Thank you! Your message has been sent successfully.
              </p>
            )}
          </form>
        </div>
        
        <div className="space-y-8">
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 hover-lift">
              <div className="p-3 rounded-full bg-portfolio-blue-light/10 text-portfolio-blue-light">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a 
                  href="mailto:mouhamed.boucharef@univ-constantine2.dz"
                  className="text-muted-foreground hover:text-portfolio-blue-light transition-colors break-all"
                >
                  mouhamed.boucharef@univ-constantine2.dz
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4 hover-lift">
              <div className="p-3 rounded-full bg-portfolio-blue-light/10 text-portfolio-blue-light">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a 
                  href="tel:0549752504"
                  className="text-muted-foreground hover:text-portfolio-blue-light transition-colors"
                >
                  0549752504
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 rounded-full bg-portfolio-blue-light/10 text-portfolio-blue-light hover:bg-portfolio-blue-light hover:text-white transition-colors hover-lift"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-portfolio-blue-light/10 text-portfolio-blue-light hover:bg-portfolio-blue-light hover:text-white transition-colors hover-lift"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Location</h3>
            <p className="text-muted-foreground">
              El Khroub, Constantine, Algeria
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
