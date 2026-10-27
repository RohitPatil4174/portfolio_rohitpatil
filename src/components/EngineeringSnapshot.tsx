import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProfileAvatar from './ProfileAvatar';

const areas = [
  {
    number: '01',
    title: 'Frontend Engineering',
    body: 'Built with React.js, Tailwind CSS, and component-driven architecture. Working knowledge of state management, responsive layouts, and API-connected UIs.',
  },
  {
    number: '02',
    title: 'Backend & APIs',
    body: 'Project experience with Node.js/Express and Flask for REST API design. Comfortable with JWT auth, data validation, and connecting services to a frontend or mobile client.',
  },
  {
    number: '03',
    title: 'Mobile Development',
    body: 'Built with React Native and Expo for cross-platform mobile applications. Project experience includes QR-based flows, device APIs, and REST-connected data layers.',
  },
  {
    number: '04',
    title: 'Machine Learning',
    body: 'Working knowledge of supervised learning workflows: data preprocessing with Pandas/NumPy, model training with Scikit-learn, and model serving via Flask REST APIs.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function EngineeringSnapshot() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section border-t border-border" aria-labelledby="snapshot-heading">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left column — intro text */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="section-label mb-6">Engineering Profile</p>

              {/* Profile Portrait Card */}
              <div className="mb-8 p-4 bg-bg-secondary border border-border rounded-sm flex items-center gap-4 group hover:border-border-light transition-all duration-300">
                <ProfileAvatar size="md" showStatus={true} />
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="font-display font-bold text-sm text-text-primary group-hover:text-accent transition-colors duration-200">
                      Rohit Patil
                    </h3>
                  </div>
                  <p className="font-mono text-[10px] text-accent tracking-wider uppercase mb-1">
                    Full-Stack Developer
                  </p>
                  <p className="font-mono text-[10px] text-text-muted">
                    KIT CoE · Kolhapur, IN
                  </p>
                </div>
              </div>

              <h2
                id="snapshot-heading"
                className="font-display font-bold mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                How I approach building.
              </h2>
              <p className="font-body text-text-secondary text-sm leading-relaxed mb-8">
                I'm a Computer Science and Business Systems student who enjoys building applications
                across web, mobile, and machine learning. My project work has helped me explore
                the complete development process—from designing interfaces and integrating APIs
                to connecting databases and deploying model-driven functionality.
              </p>
              <p className="font-body text-text-secondary text-sm leading-relaxed">
                I'm interested in opportunities where I can keep learning, contribute to a team,
                and build software that people can actually use.
              </p>
            </motion.div>
          </div>

          {/* Right column — areas */}
          <div className="lg:col-span-8">
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="flex flex-col"
            >
              {areas.map((area, i) => (
                <motion.div
                  key={area.number}
                  variants={itemVariants}
                  className={`group flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 py-7 ${
                    i < areas.length - 1 ? 'border-b border-border' : ''
                  } hover:bg-bg-secondary -mx-4 px-4 rounded-sm transition-colors duration-200 cursor-default`}
                >
                  {/* Number */}
                  <span className="font-mono text-xs text-text-muted pt-1 flex-shrink-0 w-6">
                    {area.number}
                  </span>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-base text-text-primary mb-2 group-hover:text-accent transition-colors duration-200">
                      {area.title}
                    </h3>
                    <p className="font-body text-sm text-text-secondary leading-relaxed">
                      {area.body}
                    </p>
                  </div>

                  {/* Accent line on hover */}
                  <div className="hidden sm:block w-0 group-hover:w-6 h-px bg-accent mt-3 flex-shrink-0 transition-all duration-300" aria-hidden="true" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
