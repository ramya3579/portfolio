import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Award, Cloud, Bot, Cpu, Network } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  credentialUrl: string;
  tags: string[];
  icon: JSX.Element;
}

const certificatesData: Certificate[] = [
  {
    id: 1,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    description:
      "Foundational understanding of AWS Cloud services, architecture, security, and pricing models.",
    image: "https://i.imgur.com/TglX5I0.jpeg",
    credentialUrl:
      "https://drive.google.com/file/d/154mex-p4Bhtho_oELbEu8ry9tf8p6Prc/view?usp=sharing",
    tags: ["Cloud", "AWS", "Infrastructure", "Security"],
    icon: <Cloud size={20} />,
  },
  {
    id: 2,
    title: "RPA Essentials",
    issuer: "Automation Anywhere",
    date: "2024",
    description:
      "Core principles and practices of Robotic Process Automation for business process optimization.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&h=675",
    credentialUrl:
      "https://drive.google.com/file/d/19BsLBmjPjd1em4gHB09gdiaQGTDD5qE8/view?usp=sharing",
    tags: ["RPA", "Automation", "Business Process", "Workflow"],
    icon: <Bot size={20} />,
  },
  {
    id: 3,
    title: "Salesforce AI Associate",
    issuer: "Salesforce",
    date: "2024",
    description:
      "Expertise in implementing AI solutions within the Salesforce ecosystem for enhanced CRM capabilities.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=675",
    credentialUrl:
      "https://drive.google.com/file/d/1x42c8T91CMZGHZmtl4k4HJ_5NKZJjUg5/view",
    tags: ["AI", "Salesforce", "CRM", "Machine Learning"],
    icon: <Cpu size={20} />,
  },
  {
    id: 4,
    title: "Aviatrix Certified Engineer",
    issuer: "Aviatrix",
    date: "2024",
    description:
      "Specialized knowledge in multi-cloud networking architecture and security using Aviatrix platforms.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&h=675",
    credentialUrl:
      "https://drive.google.com/file/d/1Fygo4VC0hsW5IESyE6hiUTvxdbrPfb06/view",
    tags: ["Networking", "Multi-Cloud", "Security", "Infrastructure"],
    icon: <Network size={20} />,
  },
  {
    id: 5,
    title: "Python(Basic)",
    issuer: "HackerRank",
    date: "2024",
    description:
      "The Python (Basic) certificate is an entry-level test designed to evaluate your foundational knowledge in Python.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&h=675",
    credentialUrl:
      "https://drive.google.com/file/d/1YOFTD5w3gtcYSVekYOLiWC7ELFR_BIhe/view?usp=sharing",
    tags: ["Python", "Basics", "Hackerrank"],
    icon: <Network size={20} />,
  },
  {
    id: 6,
    title: "Cybersecurity	Analyst	Job	Simulation",
    issuer: "Forage",
    date: "2024",
    description:
      "A virtual simulation covering threat detection, log analysis, and incident response using real-world cybersecurity practices.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&h=675",
    credentialUrl:
      "https://drive.google.com/file/d/1sKhRvkSA0dV6ROgkj-1zequ0Sbv7GIRz/view",
    tags: [
      "Cybersecurity",
      "Threat Detection",
      "Incident Response",
      "Log Analysis",
    ],
    icon: <Network size={20} />,
  },
];

const Certificates = () => {
  const [visibleCertificates, setVisibleCertificates] = useState(4);
  const [animated, setAnimated] = useState<number[]>([]);
  const isMobile = useIsMobile();

  // Animation effect for certificates as they appear
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.id.split("-")[1]);
            if (!animated.includes(id)) {
              setAnimated((prev) => [...prev, id]);
            }
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    certificatesData.slice(0, visibleCertificates).forEach((cert) => {
      const element = document.getElementById(`cert-${cert.id}`);
      if (element) observer.observe(element);
    });

    return () => {
      certificatesData.forEach((cert) => {
        const element = document.getElementById(`cert-${cert.id}`);
        if (element) observer.unobserve(element);
      });
    };
  }, [visibleCertificates, animated]);

  const showMoreCertificates = () => {
    setVisibleCertificates((prev) =>
      Math.min(prev + 4, certificatesData.length)
    );
  };

  const showLessCertificates = () => {
    setVisibleCertificates(4);
  };

  // Card rendering function to maintain DRY code
  const renderCertificateCard = (cert: Certificate) => (
    <Card
      key={cert.id}
      id={`cert-${cert.id}`}
      className={`overflow-hidden hover:shadow-lg transition-all duration-300 ${
        animated.includes(cert.id) ? "animate-fadeIn" : "opacity-0"
      }`}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl">{cert.title}</CardTitle>
          <div className="p-1 rounded-full bg-primary/10 text-primary">
            {cert.icon}
          </div>
        </div>
        <CardDescription className="flex items-center justify-between">
          <span>{cert.issuer}</span>
          <span className="text-sm text-muted-foreground">{cert.date}</span>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground text-sm mb-4">{cert.description}</p>
        <div className="flex flex-wrap gap-2">
          {cert.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
        >
          View Credential <ExternalLink size={14} className="ml-1" />
        </a>
      </CardFooter>
    </Card>
  );

  return (
    <section
      id="certificates"
      className="section-padding bg-gradient-to-b from-white to-muted/30"
    >
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Certificates & Credentials
          </h2>
          <p className="text-muted-foreground">
            Professional certifications and educational achievements that
            reflect my expertise and continuous learning.
          </p>
        </div>

        {isMobile ? (
          // Mobile view: Carousel
          <Carousel className="w-full">
            <CarouselContent>
              {certificatesData.map((cert) => (
                <CarouselItem
                  key={cert.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  {renderCertificateCard(cert)}
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static transform-none" />
              <CarouselNext className="static transform-none" />
            </div>
          </Carousel>
        ) : (
          // Desktop view: Grid layout
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            {certificatesData
              .slice(0, visibleCertificates)
              .map(renderCertificateCard)}
          </div>
        )}

        {!isMobile && certificatesData.length > 4 && (
          <div className="mt-10 text-center">
            {visibleCertificates < certificatesData.length ? (
              <Button onClick={showMoreCertificates} className="animate-pulse">
                Show More Certificates
              </Button>
            ) : (
              <Button variant="outline" onClick={showLessCertificates}>
                Show Less
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
