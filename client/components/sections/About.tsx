export function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              {/* EDIT HERE: Replace with your about section content */}
              With over 5 years of experience in web development, I've had the privilege of
              working with talented teams to build impactful digital solutions. My journey began
              with a curiosity about how things work on the web, and it has evolved into a
              passion for creating elegant, user-centered designs and robust backend systems.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              {/* EDIT HERE: Replace with more about yourself */}
              I specialize in full-stack development, focusing on React, Node.js, and modern
              tooling. I'm dedicated to writing clean, maintainable code and continuously learning
              new technologies to stay ahead of industry trends.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                💡 Fun Fact
              </h3>
              <p className="text-foreground/70 italic">
                {/* EDIT HERE: Replace with your unique fun fact or story */}
                You can replace this with your own unique story. Maybe you built your first website at age 10, or you
                once debugged code for 48 hours straight. Share something that makes you unique!
              </p>
            </div>
          </div>

          {/* Right Content - Stats or Additional Info */}
          <div className="animate-slide-in-left">
            <div className="grid grid-cols-2 gap-6">
              {/* Stat Card 1 */}
              <div className="bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-colors duration-300 shadow-sm hover:shadow-md">
                <div className="text-3xl font-bold text-primary mb-2">
                  {/* EDIT HERE: Replace with your number */}
                  5+
                </div>
                <p className="text-foreground/70 text-sm">
                  {/* EDIT HERE: Replace with your metric */}
                  Projects Completed
                </p>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-background rounded-xl p-6 border border-border hover:border-secondary/50 transition-colors duration-300 shadow-sm hover:shadow-md">
                <div className="text-3xl font-bold text-secondary mb-2">
                  {/* EDIT HERE: Replace with your number */}
                  2+
                </div>
                <p className="text-foreground/70 text-sm">
                  {/* EDIT HERE: Replace with your metric */}
                  Happy Clients
                </p>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-background rounded-xl p-6 border border-border hover:border-accent/50 transition-colors duration-300 shadow-sm hover:shadow-md">
                <div className="text-3xl font-bold text-accent mb-2">
                  {/* EDIT HERE: Replace with your number */}
                  6 
                </div>
                <p className="text-foreground/70 text-sm">
                  {/* EDIT HERE: Replace with your metric */}
                  Months Experience
                </p>
              </div>

              {/* Stat Card 4 */}
              <div className="bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-colors duration-300 shadow-sm hover:shadow-md">
                <div className="text-3xl font-bold text-primary mb-2">
                  {/* EDIT HERE: Replace with your number */}
                  15+
                </div>
                <p className="text-foreground/70 text-sm">
                  {/* EDIT HERE: Replace with your metric */}
                  Tech Skills
                </p>
              </div>
            </div>

            {/* Additional Info Box */}
            <div className="mt-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
              <h3 className="font-semibold text-foreground mb-3">What drives me</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {/* EDIT HERE: Share your motivation and goals */}
                I'm driven by the challenge of solving complex problems and creating seamless
                user experiences. Every project is an opportunity to learn something new and
                push the boundaries of what's possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
