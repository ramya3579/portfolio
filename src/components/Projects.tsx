import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Curreny App",
    description:
      "A simple and containerized currency converter app with CI/CD integration using Docker and Jenkins.",
    image:
      "https://media.istockphoto.com/id/895577274/photo/currency-converter-mobile-app-in-a-mobile-phone-screen-at-the-office.jpg?s=2048x2048&w=is&k=20&c=8atUNV5oXKQKdcbKUwWHw77dK96VJ-Qew5sh38Ji618=",
    tags: ["HTML", "CSS", "Python", "Dockerfile"],
    liveUrl: "https://github.com/ramya3579/currencyapp",
    githubUrl: "https://github.com/ramya3579/currencyapp",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A modern portfolio website showcasing creative work with smooth animations.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=675",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Spam Email Detection",
    description:
      "Email spam detection blocks unwanted emails using rules or machine learning.",
    image:
      "https://i.pinimg.com/736x/b1/e1/cb/b1e1cb74fb68067fc1c8bb370a636c52.jpg",
    tags: ["Python", "Machine Learning", "HTML", "CSS"],
    liveUrl: "https://github.com/ramya3579/email_spam_detection",
    githubUrl: "https://github.com/ramya3579/email_spam_detection",
  },
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const showMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
  };

  const showLessProjects = () => {
    setVisibleProjects(3);
  };

  return (
    <section id="projects" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground">
            Here's a selection of my recent work. Each project represents unique
            challenges and solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, visibleProjects).map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          {visibleProjects < projects.length ? (
            <Button onClick={showMoreProjects}>Show More Projects</Button>
          ) : (
            <Button variant="outline" onClick={showLessProjects}>
              Show Less
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
