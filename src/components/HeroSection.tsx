import { ArrowDown, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="section-container text-center">
        {/* Greeting Badge */}
        <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Welcome to my portfolio</span>
        </div>

        {/* Main Heading */}
        <h1 className="animate-fade-in-up stagger-1 mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I'm{' '}
          <span className="gradient-text text-glow">Sandhiya M</span>
          <span className="ml-2 inline-block animate-bounce">👋</span>
        </h1>

        {/* Tagline */}
        <p className="animate-fade-in-up stagger-2 mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl md:text-2xl">
          Aspiring Software Developer | Web & Java Enthusiast
        </p>

        {/* Description */}
        <p className="animate-fade-in-up stagger-3 mx-auto mb-12 max-w-xl text-base text-muted-foreground/80">
          Building innovative solutions with passion for web development, 
          problem-solving, and creating impactful healthcare applications.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up stagger-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => scrollToSection('#projects')}
            className="glow-button text-primary-foreground flex items-center gap-2"
          >
            View Projects
            <ArrowDown className="h-4 w-4" />
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="glow-button-outline flex items-center gap-2"
          >
            Contact Me
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
            <span className="text-xs">Scroll Down</span>
            <ArrowDown className="h-4 w-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
