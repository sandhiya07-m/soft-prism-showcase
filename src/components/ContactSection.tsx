import { Mail, Github, Linkedin, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const contactLinks = [
  {
    name: 'Email',
    value: 'sandhiya.m2401@gmail.com',
    href: 'mailto:sandhiya.m2401@gmail.com',
    icon: Mail,
    color: 'from-red-500 to-orange-500',
    canCopy: true,
  },
  {
    name: 'GitHub',
    value: 'github.com/sandhiya07-m',
    href: 'https://github.com/sandhiya07-m',
    icon: Github,
    color: 'from-gray-600 to-gray-800',
    canCopy: false,
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/sandhiyam24',
    href: 'https://www.linkedin.com/in/sandhiyam24/',
    icon: Linkedin,
    color: 'from-blue-500 to-blue-700',
    canCopy: false,
  },
];

const ContactSection = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText('sandhiya.m2401@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <h2 className="section-title">
          <span className="gradient-text">Get In Touch</span>
        </h2>

        <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
        </p>

        <div className="mx-auto max-w-3xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {contactLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <div
                  key={link.name}
                  className="glass-card-hover group p-6 text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <a
                    href={link.href}
                    target={link.name !== 'Email' ? '_blank' : undefined}
                    rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${link.color.split(' ')[0].replace('from-', '')} 0%, ${link.color.split(' ')[1].replace('to-', '')} 100%)`,
                    }}
                  >
                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${link.color}`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </a>

                  {/* Label */}
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {link.name}
                  </h3>

                  {/* Value */}
                  <a
                    href={link.href}
                    target={link.name !== 'Email' ? '_blank' : undefined}
                    rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="mb-3 block text-sm text-muted-foreground transition-colors hover:text-primary break-all"
                  >
                    {link.value}
                  </a>

                  {/* Copy button for email */}
                  {link.canCopy && (
                    <button
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-all hover:bg-primary/20"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="h-3 w-3" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          Copy Email
                        </>
                      )}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
