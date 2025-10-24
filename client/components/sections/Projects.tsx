import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import waste from "../../assets/image.png"
import task from "../../assets/task.png"
import civic from "../../assets/civic.png"
import Amazon from "../../assets/Amazon-Clone.png"

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink: string;
  githubLink: string;
}

// EDIT HERE: Replace with your actual projects
const projects: Project[] = [
  {
    id: 1,
    title: "Waste Management & Recycling System",
    description:
      "Reduce Waste, Save Resources Recycling helps cut down landfill waste and conserves natural resources like water, trees, and minerals. Every recycled item makes a difference!",
    image: waste,
    tags:["React", "Monodb Atlas", "Spring Boot", "JAVA"],
    liveLink: "https://waste-management-frontend-mu.vercel.app",
    githubLink: "https://github.com/rahulsahu8767",
  },
  {
    id: 2,
    title: "Task Management WEB (TO DO LIST",
    description:
      "A collaborative task management application with real-time updates, team features, and intuitive UI for seamless project tracking.",
    image: task,
    tags:["HTML", "CSS", "JS"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/rahulsahu8767",
  },
  {
    id: 3,
    title: "Civic Issue Reporting And Rewarding System",
    description:
      "An Web Application to report the civic issues and get rewarded as a responsible citizen, also gaming leaderboard feature, social community section etc.",
    image: civic,
    tags: ["React", "Monodb Atlas", "Spring Boot", "JAVA"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/rahulsahu8767",
  },
  {
    id: 4,
    title: "E-Commerce Website (Amazon Clone)",
    description:
      "Build a clone website of famous e commerce website i.e Website Amazon.",
    image: Amazon,
    tags: ["HTML", "CSS", "JS"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/rahulsahu8767",
  },
];

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
            {/* EDIT HERE: Update the description */}
            A selection of projects showcasing my expertise in full-stack development,
            UI/UX design, and problem-solving across various domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-background rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-primary/10 animate-slide-up"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>

                {/* Overlay on hover */}
                {hoveredId === project.id && (
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4 animate-fade-in">
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 gap-2"
                      onClick={() => window.open(project.liveLink, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-2"
                      onClick={() => window.open(project.githubLink, "_blank")}
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {project.title}
                </h3>

                <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="rounded-lg"
            onClick={() => window.open("https://github.com", "_blank")}
          >
            View More Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div> */}
      </div>
    </section>
  );
}
