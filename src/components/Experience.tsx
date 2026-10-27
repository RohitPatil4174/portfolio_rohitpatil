import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { experiences, education, certifications } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section border-t border-border" aria-labelledby="experience-heading">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="section-label mb-5">Background</p>
              <h2
                id="experience-heading"
                className="font-display font-bold"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Experience &amp; Education.
              </h2>
            </motion.div>
          </div>

          {/* Right */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Briefcase size={14} className="text-accent" aria-hidden="true" />
                <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
                  Work Experience
                </span>
              </div>
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="pl-6 border-l-2 border-border-light relative"
                >
                  <div
                    className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="font-display font-semibold text-base text-text-primary">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-text-muted border border-border px-2 py-0.5 rounded-sm uppercase tracking-wider">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <p className="font-body text-sm text-accent mb-0.5">{exp.company}</p>
                  <p className="font-mono text-xs text-text-muted mb-4">
                    {exp.period} · {exp.location}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1 h-1 rounded-full bg-border-light mt-2 flex-shrink-0" aria-hidden="true" />
                        <span className="font-body text-sm text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-6 pt-6 border-t border-border">
                <GraduationCap size={14} className="text-accent" aria-hidden="true" />
                <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
                  Education
                </span>
              </div>
              <div className="flex flex-col">
                {education.map((edu, i) => (
                  <div
                    key={edu.id}
                    className={`flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 py-5 ${
                      i < education.length - 1 ? 'border-b border-border' : ''
                    }`}
                  >
                    <div className="sm:w-24 flex-shrink-0">
                      <span className="font-mono text-[10px] text-text-muted">{edu.period}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-1">
                        <h4 className="font-display font-semibold text-sm text-text-primary leading-snug">
                          {edu.degree}
                        </h4>
                        <div className="flex-shrink-0 text-right">
                          <span className="font-mono text-xs text-accent font-medium">{edu.score}</span>
                          <p className="font-mono text-[9px] text-text-muted">{edu.scoreLabel}</p>
                        </div>
                      </div>
                      <p className="font-body text-xs text-text-secondary">{edu.institution}</p>
                      {edu.status === 'ongoing' && (
                        <span className="inline-flex items-center gap-1.5 mt-2 font-mono text-[9px] text-accent border border-accent/30 px-2 py-0.5 rounded-sm">
                          <span className="w-1 h-1 rounded-full bg-accent inline-block animate-pulse" aria-hidden="true" />
                          Ongoing
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-6 pt-6 border-t border-border">
                <Award size={14} className="text-accent" aria-hidden="true" />
                <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
                  Certifications
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-4 bg-bg-secondary border border-border rounded-sm hover:border-border-light transition-colors duration-200"
                  >
                    <p className="font-body text-sm text-text-primary leading-snug mb-1">
                      {cert.title}
                    </p>
                    {cert.issuer && (
                      <p className="font-mono text-[10px] text-text-muted">{cert.issuer}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
