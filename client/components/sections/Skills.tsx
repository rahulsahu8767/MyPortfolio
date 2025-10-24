import {
  Code,
  Database,
  Zap,
  Users,
  Lightbulb,
  Target,
  MessageSquare,
  Clock,
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SoftSkill {
  name: string;
  icon: React.ReactNode;
}

// EDIT HERE: Replace with your actual technical skills and proficiency levels
const technicalSkills: Skill[] = [
  { name: "Java and SpringBoot", level: 95 },
  { name: "HTML, CSS, JS", level: 70 },
  { name: "MongoDB & SQL", level: 85 },
  { name: "TailwindCSS & CSS3", level: 70 },
  { name: "REST APIs", level: 90 },
  { name: "Git", level: 50 },
];

// EDIT HERE: Replace with your non-technical skills
const softSkills: SoftSkill[] = [
  { name: "Team Leadership", icon: <Users className="w-6 h-6" /> },
  { name: "Problem Solving", icon: <Lightbulb className="w-6 h-6" /> },
  { name: "Communication", icon: <MessageSquare className="w-6 h-6" /> },
  { name: "Time Management", icon: <Clock className="w-6 h-6" /> },
  { name: "Project Management", icon: <Target className="w-6 h-6" /> },
  { name: "Creative Thinking", icon: <Zap className="w-6 h-6" /> },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div className="animate-slide-up">
            <div className="flex items-center gap-3 mb-8">
              <Code className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">
                Technical Skills
              </h3>
            </div>

            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-sm text-primary font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technology Stack */}
            <div className="mt-12 bg-muted/50 rounded-xl p-6 border border-border">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-secondary" />
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {/* EDIT HERE: Replace with your actual tech stack */}
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "JAVA",
                  "SpringBoot",
                  "MongoDB",
                  "Atlas",
                  "SQL",
                  "TailwindCSS",
                  "Docker",
                  "AWS",
      
                  "Git",
                  "REST API",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Non-Technical Skills / Soft Skills */}
          <div className="animate-slide-in-left">
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-8 h-8 text-secondary" />
              <h3 className="text-2xl font-bold text-foreground">
                Soft Skills
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-muted/50 rounded-xl p-6 border border-border hover:border-secondary/50 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="text-secondary mb-3 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>

            {/* Expertise Areas */}
            <div className="mt-8 space-y-4">
              <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Target className="w-5 h-5 text-accent" />
                Expertise Areas
              </h4>

              {/* EDIT HERE: Replace with your expertise areas */}
              {[
                "Full-Stack Web Development",
                "Responsive UI Design",
                "Database Design & Optimization",
                "API Development & Integration",
                "Performance Optimization",
                "User Experience Enhancement",
              ].map((area, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 hover:border-primary/30 transition-colors"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-primary text-white text-xs font-bold">
                      ✓
                    </div>
                  </div>
                  <span className="text-foreground/80">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
