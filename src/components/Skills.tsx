import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillCategories } from '../data/skills';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section border-t border-border" aria-labelledby="skills-heading">
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
              <p className="section-label mb-5">Technical Toolkit</p>
              <h2
                id="skills-heading"
                className="font-display font-bold mb-5"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Technologies I work with.
              </h2>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                A focused set of technologies I've worked with across projects and coursework.
                No inflated skill bars—just honest categories.
              </p>
            </motion.div>
          </div>

          {/* Right — skill matrix */}
          <div className="lg:col-span-8">
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="flex flex-col"
            >
              {skillCategories.map((cat, i) => (
                <motion.div
                  key={cat.id}
                  variants={rowVariants}
                  className={`flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 py-6 ${
                    i < skillCategories.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  {/* Category label */}
                  <div className="sm:w-36 flex-shrink-0">
                    <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
                      {cat.label}
                    </span>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="group inline-flex items-center px-3 py-1.5 bg-bg-tertiary border border-border text-text-secondary font-body text-xs rounded-sm hover:border-border-light hover:text-text-primary transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
