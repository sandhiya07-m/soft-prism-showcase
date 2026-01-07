import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:sandhiya.m2401@gmail.com',
    icon: Mail,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/sandhiya07-m',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sandhiyam24/',
    icon: Linkedin,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-background/50 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary icon-glow"
                  aria-label={link.name}
                >
                  <IconComponent className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          {/* Copyright */}
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            © {currentYear} Sandhiya M. Made with
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
