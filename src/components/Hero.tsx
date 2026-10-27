import { motion } from 'framer-motion';
import { ArrowDownRight, Download, MapPin } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';
import HeroCanvas from './HeroCanvas';
import ProfileAvatar from './ProfileAvatar';

const RESUME_PATH = '/resume.pdf';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const, delay },
  }),
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid pointer-events-none"
        aria-hidden="true"
      />

      {/* Canvas nodes */}
      <div className="absolute inset-0 pointer-events-none md:pointer-events-auto" aria-hidden="true">
        <HeroCanvas />
      </div>

      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(199,243,107,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container-main relative z-10 pt-[var(--nav-height)]">
        <div className="py-24 lg:py-32">
          {/* Eyebrow & Profile indicator */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="flex items-center gap-3 mb-8"
          >
            <ProfileAvatar size="sm" showStatus={true} />
            <span className="eyebrow">Computer Science × Software Engineering</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="font-display font-bold leading-[1.0] mb-8 max-w-4xl"
            style={{ fontSize: 'clamp(3.25rem, 9vw, 7.5rem)' }}
          >
            I build{' '}
            <span className="relative inline-block">
              software
              <span
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-accent rounded-full"
                aria-hidden="true"
              />
            </span>
            <br />
            that solves{' '}
            <span className="text-accent">real</span>
            <br />
            problems.
          </motion.h1>

          {/* Supporting copy */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
            className="font-body text-text-secondary max-w-xl mb-10 leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 1.8vw, 1.125rem)' }}
          >
            I'm Rohit Patil, a developer focused on full-stack applications, mobile experiences,
            and practical AI/ML solutions. I enjoy turning ideas into useful, well-engineered products.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <button
              onClick={scrollToProjects}
              className="btn-primary group"
              aria-label="View selected work"
            >
              View Selected Work
              <ArrowDownRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </button>

            <a
              href={RESUME_PATH}
              download="Rohit_Patil_Resume.pdf"
              className="btn-outline group"
              title="Add resume.pdf to public/ folder to enable download"
            >
              <Download size={15} />
              Download Resume
            </a>

            <a
              href="https://github.com/RohitPatil4174"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              aria-label="View GitHub profile"
            >
              <GitHubIcon size={16} />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/rohit-patil-898481284"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              aria-label="View LinkedIn profile"
            >
              <LinkedInIcon size={16} />
              LinkedIn
            </a>
          </motion.div>

          {/* Location + meta row */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.65}
            className="flex flex-wrap items-center gap-6"
          >
            <div className="flex items-center gap-2 text-text-muted">
              <MapPin size={13} />
              <span className="font-mono text-xs tracking-widest uppercase">
                Based in Kolhapur, India
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-text-muted">
              <span className="w-1 h-1 rounded-full bg-accent inline-block" aria-hidden="true" />
              <span className="font-mono text-xs tracking-widest uppercase">
                Open to Opportunities
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div className="w-px h-12 bg-gradient-to-b from-border-light to-transparent" />
      </motion.div>
    </section>
  );
}
