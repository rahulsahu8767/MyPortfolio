import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import profile from '../../assets/profile.jpg'
import ResumePDF from "../../assets/Rahul_Sahu_8767277447.pdf";


export function Hero() {
  const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = ResumePDF;
  link.download = "RahulResume.pdf"; // Set the download filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link); // Clean up
};

  return (
    <section
      id="home"
      className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background"
    >
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center animate-slide-in-left">
            <div className="mb-4">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {/* EDIT HERE: Replace with your name */}
                Rahul Sahu
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-2">
              {/* EDIT HERE: Replace with your designation/title */}
              Full Stack Developer | Designer | Problem Solver
            </p>

            <p className="text-base sm:text-lg text-foreground/70 mb-8 leading-relaxed">
              {/* EDIT HERE: Replace with your brief introduction */}I craft beautiful,
              functional digital experiences that solve real-world problems. With a passion for
              clean code and modern design, I transform ideas into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold rounded-lg gap-2"
              >
                <Download className="h-5 w-5" />
                Download CV
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="font-semibold rounded-lg gap-2"
              >
                Get in Touch
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/rahulsahu8767"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-full bg-muted hover:bg-primary/20 text-foreground hover:text-primary transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              <a
                href="www.linkedin.com/in/rahul-sahu-7207b52a9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-full bg-muted hover:bg-primary/20 text-foreground hover:text-primary transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.002 1.413-.103.249-.129.597-.129.946v5.446h-3.554s.05-8.846 0-9.755h3.554v1.381c.43-.664 1.195-1.614 2.905-1.614 2.121 0 3.71 1.386 3.71 4.365v5.623zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.706 0-.955.77-1.71 1.954-1.71 1.188 0 1.915.75 1.94 1.71 0 .948-.752 1.706-1.979 1.706zm1.582 10.019H3.74V9.678h3.179v9.774zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>

              <a
                href="mailto:your.email@example.com"
                aria-label="Email"
                className="p-3 rounded-full bg-muted hover:bg-primary/20 text-foreground hover:text-primary transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Picture */}
          <div className="flex justify-center items-center animate-float">
            <div className="relative w-full max-w-sm h-96 rounded-2xl overflow-hidden shadow-2xl">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-30"></div>

              {/* Profile Image - EDIT HERE: Replace src with your actual image */}
              <img
                src={profile}
                alt="Profile Picture"
                className="w-full h-full object-cover"
              />

              {/* Overlay Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20">
          <div className="animate-bounce">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
