import { GraduationCap, Calendar, Award } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="relative">
      <div className="section-container">
        <h2 className="section-title">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="mx-auto max-w-3xl">
          <div className="glass-card-hover p-8 md:p-10">
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
              {/* Icon */}
              <div className="relative flex-shrink-0">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary">
                  <GraduationCap className="h-10 w-10 text-primary-foreground" />
                </div>
                {/* Glow */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/40 blur-xl" />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="mb-2 text-2xl font-bold text-foreground">
                  B.E Computer Science and Design
                </h3>
                
                <div className="mb-4 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm">2nd Year Undergraduate</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Award className="h-4 w-4 text-secondary" />
                    <span className="text-sm">CGPA: 7.7</span>
                  </div>
                </div>

                <p className="mb-6 text-muted-foreground">
                  Currently pursuing my undergraduate degree with a focus on software development, 
                  web technologies, and machine learning applications in healthcare.
                </p>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Academic Progress</span>
                    <span className="text-primary font-medium">Year 2 of 4</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000"
                      style={{ width: '50%' }}
                    />
                  </div>
                </div>

                {/* CGPA Display */}
                <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-primary/30 bg-primary/10 px-5 py-3">
                  <div className="text-3xl font-bold gradient-text">7.7</div>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Current</div>
                    <div className="text-sm font-semibold text-foreground">CGPA</div>
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

export default EducationSection;
