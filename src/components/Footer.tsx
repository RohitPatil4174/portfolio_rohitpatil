import { ArrowUp } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleScroll = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border py-12" role="contentinfo">
      <div className="container-main">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          {/* Wordmark */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-7 bg-accent rounded-[2px] flex items-center justify-center">
                <span className="font-display font-bold text-xs text-bg-primary">RP</span>
              </div>
              <span className="font-display font-bold text-sm text-text-primary tracking-wider">
                ROHIT PATIL
              </span>
            </div>
            <p className="font-body text-xs text-text-muted">
              Full-Stack Developer · React Native · AI/ML
            </p>
          </div>

          {/* Nav shortcuts */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleScroll(link.href); }}
                    className="font-body text-xs text-text-muted hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right group */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/RohitPatil4174"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors duration-200"
              aria-label="GitHub profile"
            >
              <GitHubIcon size={17} />
            </a>
            <a
              href="https://linkedin.com/in/rohit-patil-898481284"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors duration-200"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon size={17} />
            </a>
            <button
              onClick={scrollToTop}
              className="ml-2 w-8 h-8 border border-border rounded-sm flex items-center justify-center text-text-muted hover:text-text-primary hover:border-border-light transition-all duration-200"
              aria-label="Return to top of page"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        <div className="divider my-8" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="font-mono text-xs text-text-muted">
            © {new Date().getFullYear()} Rohit Patil. All rights reserved.
          </p>
          <p className="font-mono text-xs text-text-muted">
            Built with React · Vite · TypeScript · Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
