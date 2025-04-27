import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      const yOffset = -80;
      const y =
        projectsSection.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-8">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h2 className="text-lg font-medium text-primary mb-3">
            Welcome to my Portfolio
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            I'm a <span className="text-primary"> Ramya Madhuri Kota</span> and{" "}
            <span className="text-primary">Student</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            AI&DS Student at KL University | Specializing in Software Modeling &
            DevOps | I craft beautiful, functional digital experiences that
            drive innovation, boost efficiency, and engage users effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={scrollToProjects}>
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  const yOffset = -80;
                  const y =
                    contactSection.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
            >
              Contact Me
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <button
            onClick={scrollToProjects}
            className="animate-bounce rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
