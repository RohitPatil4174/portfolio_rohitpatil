import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';

export default function Contact() {
  const items = [
    {
      type: 'email' as const,
      label: 'Email',
      value: 'rohitt.patil0215@gmail.com',
      href: 'mailto:rohitt.patil0215@gmail.com',
      action: 'Send an Email',
    },
    {
      type: 'linkedin' as const,
      label: 'LinkedIn',
      value: 'rohit-patil-898481284',
      href: 'https://linkedin.com/in/rohit-patil-898481284',
      action: 'Connect on LinkedIn',
    },
    {
      type: 'github' as const,
      label: 'GitHub',
      value: 'RohitPatil4174',
      href: 'https://github.com/RohitPatil4174',
      action: 'Explore GitHub',
    },
  ];

  return (
    <section id="contact" className="section border-t border-border" aria-labelledby="contact-heading">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="section-label mb-6">Let's Talk</p>
              <h2
                id="contact-heading"
                className="font-display font-bold mb-6 leading-tight"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
              >
                Have a problem
                <br />
                worth{' '}
                <span className="text-accent">solving?</span>
              </h2>
              <p className="font-body text-text-secondary text-sm leading-relaxed mb-8">
                I'm interested in software development opportunities, internships, collaborative
                projects, and conversations about technology.
              </p>
              <div className="flex items-center gap-2 text-text-muted">
                <MapPin size={13} aria-hidden="true" />
                <span className="font-mono text-xs tracking-widest uppercase">
                  Kolhapur, Maharashtra, India
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right — contact items */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="flex flex-col"
            >
              {items.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.type === 'email' ? undefined : '_blank'}
                  rel={item.type === 'email' ? undefined : 'noopener noreferrer'}
                  className={`group flex items-center justify-between gap-4 py-6 transition-colors duration-200 hover:bg-bg-secondary -mx-4 px-4 rounded-sm ${
                    i < items.length - 1 ? 'border-b border-border' : ''
                  }`}
                  aria-label={`${item.action} — ${item.value}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 bg-bg-tertiary border border-border rounded-sm flex items-center justify-center flex-shrink-0 group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-200">
                      {item.type === 'email' && (
                        <Mail size={16} className="text-text-muted group-hover:text-accent transition-colors duration-200" aria-hidden="true" />
                      )}
                      {item.type === 'linkedin' && (
                        <LinkedInIcon size={16} className="text-text-muted group-hover:text-accent transition-colors duration-200" />
                      )}
                      {item.type === 'github' && (
                        <GitHubIcon size={16} className="text-text-muted group-hover:text-accent transition-colors duration-200" />
                      )}
                    </div>
                    <div>
                      <p className="font-mono text-[9px] text-text-muted tracking-widest uppercase mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-body text-sm text-text-primary group-hover:text-accent transition-colors duration-200">
                        {item.value}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-text-muted group-hover:text-accent transition-colors duration-200">
                    <span className="font-body text-sm hidden sm:block">{item.action}</span>
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </div>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
