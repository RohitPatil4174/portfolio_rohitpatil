import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ArrowRight } from 'lucide-react';
import { GitHubIcon } from './Icons';
import type { Project } from '../data/projects';

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, handleKeyDown]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-2xl bg-[#111412] border-l border-border overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} project details`}
          >
            {/* Header */}
            <div className="sticky top-0 bg-[#111412]/95 backdrop-blur-md border-b border-border px-8 py-5 flex items-center justify-between z-10">
              <div>
                <p className="font-mono text-[10px] text-text-muted tracking-widest uppercase mb-1">
                  {project.category}
                </p>
                <h2 className="font-display font-bold text-xl text-text-primary">
                  {project.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-text-muted hover:text-text-primary transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Close panel"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="px-8 py-10 flex flex-col gap-12">
              {/* Description */}
              <section>
                <h3 className="font-mono text-[10px] text-accent tracking-widest uppercase mb-4">
                  Overview
                </h3>
                <p className="font-body text-text-secondary leading-relaxed">{project.description}</p>
              </section>

              {/* Problem / Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <section>
                  <h3 className="font-mono text-[10px] text-text-muted tracking-widest uppercase mb-3">
                    Problem
                  </h3>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">{project.problem}</p>
                </section>
                <section>
                  <h3 className="font-mono text-[10px] text-text-muted tracking-widest uppercase mb-3">
                    Solution
                  </h3>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">{project.solution}</p>
                </section>
              </div>

              {/* Architecture diagram */}
              <section>
                <h3 className="font-mono text-[10px] text-text-muted tracking-widest uppercase mb-6">
                  System Architecture
                </h3>
                <div className="flex flex-col gap-0">
                  {project.architecture.map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div
                          className={`w-2 h-2 rounded-full mt-1 flex-shrink-0 ${
                            step.optional ? 'border border-text-muted bg-transparent' : 'bg-accent'
                          }`}
                        />
                        {i < project.architecture.length - 1 && (
                          <div className="w-px flex-1 bg-border min-h-[2.5rem]" />
                        )}
                      </div>
                      <div className="pb-6">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-display font-semibold text-sm text-text-primary">
                            {step.label}
                          </span>
                          {step.optional && (
                            <span className="font-mono text-[9px] text-text-muted border border-border-light px-1.5 py-0.5 rounded-sm">
                              optional
                            </span>
                          )}
                        </div>
                        <p className="font-body text-xs text-text-secondary">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Features */}
              <section>
                <h3 className="font-mono text-[10px] text-text-muted tracking-widest uppercase mb-4">
                  Features
                </h3>
                <ul className="flex flex-col gap-3" role="list">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ArrowRight size={13} className="text-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="font-body text-sm text-text-secondary">{f}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Tech stack */}
              <section>
                <h3 className="font-mono text-[10px] text-text-muted tracking-widest uppercase mb-4">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </section>

              {/* Learnings */}
              <section>
                <h3 className="font-mono text-[10px] text-text-muted tracking-widest uppercase mb-4">
                  What I Learned
                </h3>
                <ul className="flex flex-col gap-3" role="list">
                  {project.learnings.map((l, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-text-muted mt-2 flex-shrink-0" aria-hidden="true" />
                      <span className="font-body text-sm text-text-secondary">{l}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Links */}
              <section className="flex flex-wrap gap-4 pt-2 border-t border-border">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <GitHubIcon size={15} />
                  View Repository
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                )}
              </section>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
