import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Smartphone } from 'lucide-react';
import { GitHubIcon, CodeIcon } from './Icons';
import { projects, type Project } from '../data/projects';
import ProjectDetail from './ProjectDetail';

const categoryIcon = (category: string) => {
  if (category.includes('Mobile')) return <Smartphone size={13} />;
  return <CodeIcon size={13} />;
};

/* SVG mockup for VechValuator */
function VechValuatorMockup() {
  return (
    <svg
      viewBox="0 0 480 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="VechValuator interface diagram"
      role="img"
    >
      {/* Browser chrome */}
      <rect width="480" height="300" rx="8" fill="#0F1210" />
      <rect x="0" y="0" width="480" height="28" rx="8" fill="#161918" />
      <circle cx="14" cy="14" r="4" fill="#2A302B" />
      <circle cx="26" cy="14" r="4" fill="#2A302B" />
      <circle cx="38" cy="14" r="4" fill="#2A302B" />
      <rect x="60" y="8" width="280" height="12" rx="4" fill="#1E2420" />
      <text x="68" y="18" fontFamily="monospace" fontSize="7" fill="#5A5F5B">
        localhost:5173/predict
      </text>

      {/* App content */}
      <rect x="20" y="44" width="200" height="245" rx="4" fill="#111412" stroke="#1E2420" strokeWidth="1" />
      <text x="30" y="62" fontFamily="Space Grotesk, sans-serif" fontSize="9" fill="#C7F36B" fontWeight="600" letterSpacing="1">
        VECHVALUATOR
      </text>
      <text x="30" y="75" fontFamily="Inter, sans-serif" fontSize="7" fill="#5A5F5B">
        Used Car Price Prediction
      </text>

      {/* Form fields */}
      {[
        { label: 'Brand', val: 'Toyota', y: 90 },
        { label: 'Model Year', val: '2019', y: 116 },
        { label: 'KM Driven', val: '48,000', y: 142 },
        { label: 'Fuel Type', val: 'Petrol', y: 168 },
        { label: 'Transmission', val: 'Manual', y: 194 },
        { label: 'Seller Type', val: 'Individual', y: 220 },
      ].map((f) => (
        <g key={f.label}>
          <text x="30" y={f.y} fontFamily="Inter, sans-serif" fontSize="6" fill="#929792">{f.label}</text>
          <rect x="30" y={f.y + 4} width="175" height="14" rx="2" fill="#161918" stroke="#1E2420" strokeWidth="1" />
          <text x="36" y={f.y + 14} fontFamily="Inter, sans-serif" fontSize="7" fill="#F3F3EE">{f.val}</text>
        </g>
      ))}

      {/* Predict button */}
      <rect x="30" y="247" width="174" height="22" rx="2" fill="#C7F36B" />
      <text x="90" y="262" fontFamily="Space Grotesk, sans-serif" fontSize="8" fill="#0B0D0C" fontWeight="700" textAnchor="middle">
        Predict Price
      </text>

      {/* Result panel */}
      <rect x="235" y="44" width="225" height="245" rx="4" fill="#111412" stroke="#1E2420" strokeWidth="1" />
      <text x="248" y="64" fontFamily="Inter, sans-serif" fontSize="7" fill="#929792">Predicted Market Value</text>
      <text x="248" y="100" fontFamily="Space Grotesk, sans-serif" fontSize="26" fill="#C7F36B" fontWeight="700">
        ₹5.2L
      </text>
      <text x="248" y="115" fontFamily="Inter, sans-serif" fontSize="7" fill="#5A5F5B">
        Based on Random Forest Regression
      </text>

      {/* Mini chart bars */}
      {[0.4, 0.7, 0.55, 0.85, 0.65, 0.9, 0.75].map((h, i) => (
        <rect
          key={i}
          x={248 + i * 22}
          y={180 - h * 60}
          width="14"
          height={h * 60}
          rx="1"
          fill={`rgba(199,243,107,${0.2 + h * 0.3})`}
        />
      ))}
      <text x="248" y="200" fontFamily="Inter, sans-serif" fontSize="6" fill="#5A5F5B">
        Feature importance distribution
      </text>

      {/* Model label */}
      <rect x="248" y="215" width="100" height="16" rx="2" fill="#161918" stroke="#1E2420" strokeWidth="1" />
      <text x="256" y="226" fontFamily="monospace" fontSize="6" fill="#929792">
        model: random_forest.pkl
      </text>
      <rect x="248" y="238" width="78" height="16" rx="2" fill="#161918" stroke="#1E2420" strokeWidth="1" />
      <text x="256" y="249" fontFamily="monospace" fontSize="6" fill="#929792">
        api: /api/predict
      </text>
    </svg>
  );
}

/* SVG mockup for ServiceSync */
function ServiceSyncMockup() {
  return (
    <svg
      viewBox="0 0 480 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="ServiceSync mobile interface diagram"
      role="img"
    >
      <rect width="480" height="300" rx="8" fill="#0F1210" />

      {/* Phone frame */}
      <rect x="155" y="15" width="170" height="270" rx="20" fill="#0B0D0C" stroke="#2A302B" strokeWidth="2" />
      {/* Notch */}
      <rect x="195" y="18" width="90" height="12" rx="6" fill="#111412" />
      {/* Screen */}
      <rect x="162" y="35" width="156" height="240" rx="12" fill="#111412" />

      {/* App header */}
      <rect x="162" y="35" width="156" height="38" rx="12" fill="#161918" />
      <text x="175" y="56" fontFamily="Space Grotesk, sans-serif" fontSize="10" fill="#C7F36B" fontWeight="700">
        ServiceSync
      </text>

      {/* QR zone */}
      <rect x="185" y="85" width="110" height="90" rx="4" fill="#161918" stroke="#1E2420" strokeWidth="1" />
      {/* QR pattern */}
      {Array.from({ length: 6 }).map((_, r) =>
        Array.from({ length: 6 }).map((_, c) => (
          Math.random() > 0.5 ? (
            <rect
              key={`${r}-${c}`}
              x={192 + c * 16}
              y={92 + r * 14}
              width="12"
              height="10"
              rx="1"
              fill={`rgba(199,243,107,${0.3 + Math.random() * 0.5})`}
            />
          ) : null
        ))
      )}
      {/* Corner markers */}
      <rect x="185" y="85" width="18" height="18" rx="2" stroke="#C7F36B" strokeWidth="1.5" fill="none" />
      <rect x="277" y="85" width="18" height="18" rx="2" stroke="#C7F36B" strokeWidth="1.5" fill="none" />
      <rect x="185" y="157" width="18" height="18" rx="2" stroke="#C7F36B" strokeWidth="1.5" fill="none" />

      <text x="220" y="192" fontFamily="Inter, sans-serif" fontSize="7" fill="#5A5F5B" textAnchor="middle">
        Scan vehicle QR
      </text>

      {/* Service record entries */}
      {[
        { label: 'Oil Change', date: 'Mar 2024', status: 'done' },
        { label: 'Tyre Rotation', date: 'Jan 2024', status: 'done' },
        { label: 'Brake Pad', date: 'Nov 2023', status: 'done' },
      ].map((item, i) => (
        <g key={item.label}>
          <rect x="168" y={210 + i * 22} width="144" height="18" rx="2" fill="#161918" />
          <circle cx="180" cy={219 + i * 22} r="3" fill="#C7F36B" />
          <text x="188" y={221 + i * 22} fontFamily="Inter, sans-serif" fontSize="6.5" fill="#F3F3EE">
            {item.label}
          </text>
          <text x="290" y={221 + i * 22} fontFamily="Inter, sans-serif" fontSize="6" fill="#5A5F5B" textAnchor="end">
            {item.date}
          </text>
        </g>
      ))}

      {/* Left annotation */}
      <rect x="16" y="95" width="120" height="50" rx="4" fill="#111412" stroke="#1E2420" strokeWidth="1" />
      <text x="24" y="109" fontFamily="Inter, sans-serif" fontSize="6.5" fill="#929792">React Native + Expo</text>
      <text x="24" y="120" fontFamily="Inter, sans-serif" fontSize="6.5" fill="#929792">JWT Authentication</text>
      <text x="24" y="131" fontFamily="Inter, sans-serif" fontSize="6.5" fill="#929792">QR Vehicle ID</text>
      <line x1="136" y1="120" x2="155" y2="120" stroke="#2A302B" strokeWidth="1" strokeDasharray="3 2" />

      {/* Right annotation */}
      <rect x="344" y="95" width="120" height="50" rx="4" fill="#111412" stroke="#1E2420" strokeWidth="1" />
      <text x="352" y="109" fontFamily="Inter, sans-serif" fontSize="6.5" fill="#929792">Node.js + Express</text>
      <text x="352" y="120" fontFamily="Inter, sans-serif" fontSize="6.5" fill="#929792">MongoDB Records</text>
      <text x="352" y="131" fontFamily="Inter, sans-serif" fontSize="6.5" fill="#929792">REST API</text>
      <line x1="318" y1="120" x2="344" y2="120" stroke="#2A302B" strokeWidth="1" strokeDasharray="3 2" />

      {/* Bottom annotation */}
      <text x="240" y="290" fontFamily="Inter, sans-serif" fontSize="6" fill="#5A5F5B" textAnchor="middle">
        Conceptual interface — development project
      </text>
    </svg>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section border-t border-border" aria-labelledby="projects-heading">
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <p className="section-label mb-5">Selected Projects</p>
            <h2
              id="projects-heading"
              className="font-display font-bold"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              What I've built.
            </h2>
          </div>
          <a
            href="https://github.com/RohitPatil4174"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex-shrink-0 self-start sm:self-auto"
            aria-label="View all projects on GitHub"
          >
            <GitHubIcon size={15} />
            All on GitHub
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="group flex flex-col bg-bg-secondary border border-border rounded-sm hover:border-border-light transition-colors duration-300 overflow-hidden"
            >
              {/* Mockup area */}
              <div className="relative h-56 bg-bg-tertiary overflow-hidden border-b border-border">
                <div className="absolute inset-0 p-4">
                  {project.id === 'vechvaluator' ? <VechValuatorMockup /> : <ServiceSyncMockup />}
                </div>
              </div>

              {/* Card content */}
              <div className="flex flex-col flex-1 p-7">
                {/* Category */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-text-muted">{categoryIcon(project.category)}</span>
                  <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Title + tagline */}
                <h3 className="font-display font-bold text-xl text-text-primary mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-text-secondary leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="tech-tag text-text-muted">+{project.techStack.length - 5}</span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-5 border-t border-border">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn-ghost text-sm text-text-primary"
                    aria-label={`View details for ${project.title}`}
                  >
                    View Details
                    <ArrowUpRight size={14} />
                  </button>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost text-sm"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <GitHubIcon size={14} />
                    Repository
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Project Detail Panel */}
      <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
