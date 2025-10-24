export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-foreground/70 text-sm">
              {/* EDIT HERE: Replace with your name or brand */}
              © {currentYear} Your Name. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <a
              href="#home"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-foreground/70 text-sm">
              Built with React, TypeScript & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
