import { User, Heart, Code, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        <h2 className="section-title">
          <span className="gradient-text">About Me</span>
        </h2>

        <div className="mx-auto max-w-4xl">
          <div className="glass-card-hover p-8 md:p-12">
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
              {/* Avatar Placeholder */}
              <div className="relative flex-shrink-0">
                <div className="h-32 w-32 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
                    <User className="h-16 w-16 text-primary" />
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 -z-10 h-32 w-32 rounded-full bg-primary/30 blur-xl" />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Hello! I'm Sandhiya
                </h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  I'm a passionate <span className="text-primary font-semibold">2nd-year Computer Science & Engineering student</span> with 
                  a deep interest in building impactful software solutions. My journey in tech is driven by 
                  curiosity and a love for problem-solving.
                </p>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  I specialize in <span className="text-secondary font-semibold">web development</span> and 
                  have a growing expertise in <span className="text-secondary font-semibold">Java programming</span>. 
                  What sets me apart is my strong interest in <span className="text-accent font-semibold">healthcare technology</span>, 
                  where I aim to create applications that make a real difference in people's lives.
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                    <Code className="h-5 w-5 text-primary" />
                    <span className="text-sm text-foreground">Web Developer</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                    <Heart className="h-5 w-5 text-accent" />
                    <span className="text-sm text-foreground">Healthcare Tech</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                    <Lightbulb className="h-5 w-5 text-secondary" />
                    <span className="text-sm text-foreground">Problem Solver</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
