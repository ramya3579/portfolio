import { Award, Code, Globe, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const About = () => {
  const skills = [
    { name: "Web Development", proficiency: 90 },
    { name: "DevOps Tools", proficiency: 80 },
    { name: "MySQL / PostgreSQL", proficiency: 75 },
    { name: "Data Structures & Algorithms", proficiency: 75 },
    { name: "AWS / Azure / Google Cloud", proficiency: 70 },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground mb-4">
              I'm a passionate web developer and an AI&DS student at KL
              University, specializing in Software Modeling and DevOps. I enjoy
              building clean, functional, and user-friendly digital experiences
              that solve real-world problems and deliver value.
            </p>
            <p className="text-muted-foreground mb-6">
              With a strong interest in AI, cloud computing, and modern DevOps
              practices, I'm always exploring new technologies to stay ahead. I
              love turning ideas into impactful solutions and constantly push
              myself to learn, improve, and grow as a developer.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Code size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Web Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Frontend & Backend
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Collaboration</h3>
                  <p className="text-sm text-muted-foreground">Team Player</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Globe size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Responsive Design</h3>
                  <p className="text-sm text-muted-foreground">All Devices</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Problem Solving</h3>
                  <p className="text-sm text-muted-foreground">
                    Creative Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">My Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.proficiency}%</span>
                  </div>
                  <Progress value={skill.proficiency} className="h-2" />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                <span className="text-3xl font-bold text-primary">0+</span>
                <span className="text-sm text-muted-foreground mt-1">
                  Years Experience
                </span>
              </div>

              <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                <span className="text-3xl font-bold text-primary">3+</span>
                <span className="text-sm text-muted-foreground mt-1">
                  Projects
                </span>
              </div>

              <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                <span className="text-3xl font-bold text-primary">15+</span>
                <span className="text-sm text-muted-foreground mt-1">
                  Certificates
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
