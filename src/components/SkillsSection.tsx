import { Code2, Globe, Terminal, Users } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: Code2,
    skills: ['Java', 'Python', 'SQL'],
    color: 'primary',
  },
  {
    title: 'Web Technologies',
    icon: Globe,
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    color: 'secondary',
  },
  {
    title: 'Tools',
    icon: Terminal,
    skills: ['Git', 'GitHub', 'VS Code'],
    color: 'accent',
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: ['Communication', 'Teamwork', 'Problem Solving'],
    color: 'primary',
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative">
      <div className="section-container">
        <h2 className="section-title">
          <span className="gradient-text">Skills</span>
        </h2>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.title}
                  className="glass-card-hover p-6 text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-${category.color}/20 transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent className={`h-7 w-7 text-${category.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>

                  {/* Skills List */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="tech-tag"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
