import { ExternalLink, Shield, Heart, Activity } from 'lucide-react';

const projects = [
  {
    title: 'Crime Management System',
    description: 'A comprehensive Java-based system featuring secure authentication, role-based access control, and efficient crime record management for law enforcement agencies.',
    icon: Shield,
    tags: ['Java', 'Authentication', 'Role-based Access', 'Database'],
    link: '#',
  },
  {
    title: 'Heart Disease Prediction',
    description: 'Machine Learning-based healthcare prediction model that analyzes patient data to predict the likelihood of heart disease with high accuracy.',
    icon: Heart,
    tags: ['Python', 'Machine Learning', 'Healthcare', 'Data Science'],
    link: '#',
  },
  {
    title: 'Multiple Disease Prediction',
    description: 'An advanced ML system that predicts multiple diseases using comprehensive patient health data, providing early detection insights for better healthcare outcomes.',
    icon: Activity,
    tags: ['Python', 'ML', 'Healthcare', 'Predictive Analytics'],
    link: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <h2 className="section-title">
          <span className="gradient-text">Projects</span>
        </h2>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.title}
                  className="glass-card-hover group flex flex-col p-6"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 transition-transform duration-300 group-hover:scale-110">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3"
                  >
                    View Project
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
