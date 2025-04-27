
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold text-primary">Portfolio</a>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => handleNavClick("home")} className="text-foreground/80 hover:text-primary transition">Home</button>
            <button onClick={() => handleNavClick("projects")} className="text-foreground/80 hover:text-primary transition">Projects</button>
            <button onClick={() => handleNavClick("about")} className="text-foreground/80 hover:text-primary transition">About</button>
            <button onClick={() => handleNavClick("certificates")} className="text-foreground/80 hover:text-primary transition">Certificates</button>
            <button onClick={() => handleNavClick("contact")} className="text-foreground/80 hover:text-primary transition">Contact</button>
          </div>
          
          <Button variant="outline" className="hidden md:flex" onClick={() => handleNavClick("contact")}>
            Get in Touch
          </Button>
          
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fadeIn">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <button onClick={() => handleNavClick("home")} className="py-2 text-foreground/80 hover:text-primary transition">Home</button>
            <button onClick={() => handleNavClick("projects")} className="py-2 text-foreground/80 hover:text-primary transition">Projects</button>
            <button onClick={() => handleNavClick("about")} className="py-2 text-foreground/80 hover:text-primary transition">About</button>
            <button onClick={() => handleNavClick("certificates")} className="py-2 text-foreground/80 hover:text-primary transition">Certificates</button>
            <button onClick={() => handleNavClick("contact")} className="py-2 text-foreground/80 hover:text-primary transition">Contact</button>
            <Button variant="outline" onClick={() => handleNavClick("contact")}>
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
