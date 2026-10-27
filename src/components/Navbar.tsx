import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrollY } from '../hooks/useScrollY';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const SECTION_IDS = ['hero', 'about', 'projects', 'skills', 'experience', 'contact'];

const RESUME_PATH = '/resume.pdf';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeAvailable, setResumeAvailable] = useState(false);
  const scrollY = useScrollY();
  const activeSection = useActiveSection(SECTION_IDS);

  const scrolled = scrollY > 30;

  useEffect(() => {
    // Check if resume exists
    fetch(RESUME_PATH, { method: 'HEAD' })
      .then((r) => setResumeAvailable(r.ok))
      .catch(() => setResumeAvailable(false));
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (href: string) => activeSection === href.replace('#', '');

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B0D0C]/95 backdrop-blur-md border-b border-[#1E2420]'
            : 'bg-transparent'
        }`}
        style={{ height: 'var(--nav-height)' }}
      >
        <nav
          className="container-main h-full flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="flex items-center gap-3 group focus-visible:outline-none"
            aria-label="Rohit Patil — Back to top"
          >
            <div className="w-9 h-9 bg-accent rounded-[2px] flex items-center justify-center group-hover:bg-accent-dim transition-colors duration-200">
              <span className="font-display font-bold text-sm text-bg-primary tracking-tight">RP</span>
            </div>
            <span className="font-display font-semibold text-sm text-text-primary tracking-wide hidden sm:block">
              ROHIT PATIL
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`font-body text-sm transition-colors duration-200 relative pb-0.5 ${
                    isActive(link.href)
                      ? 'text-text-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/RohitPatil4174"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors duration-200"
              aria-label="GitHub profile"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com/in/rohit-patil-898481284"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors duration-200"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon size={18} />
            </a>
            {resumeAvailable ? (
              <a
                href={RESUME_PATH}
                download="Rohit_Patil_Resume.pdf"
                className="btn-primary text-xs py-2 px-4"
                aria-label="Download Resume PDF"
              >
                <Download size={13} />
                Resume
              </a>
            ) : (
              <button
                className="btn-primary text-xs py-2 px-4 opacity-50 cursor-not-allowed"
                disabled
                title="Resume will be available soon — add resume.pdf to public/"
              >
                <Download size={13} />
                Resume
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-text-secondary hover:text-text-primary transition-colors duration-200 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0B0D0C]/98 backdrop-blur-md flex flex-col pt-[var(--nav-height)]"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <nav className="container-main flex flex-col gap-0 pt-10">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="py-5 font-display text-2xl font-bold text-text-secondary hover:text-text-primary border-b border-border transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="flex items-center gap-4 pt-8"
              >
                {resumeAvailable ? (
                  <a
                    href={RESUME_PATH}
                    download="Rohit_Patil_Resume.pdf"
                    className="btn-primary"
                  >
                    <Download size={15} />
                    Download Resume
                  </a>
                ) : null}
                <a
                  href="https://github.com/RohitPatil4174"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <GitHubIcon size={22} />
                </a>
                <a
                  href="https://linkedin.com/in/rohit-patil-898481284"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon size={22} />
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
