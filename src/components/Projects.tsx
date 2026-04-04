'use client';
import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { projects } from '../data/projects';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const tagColors: Record<string, string> = {
  Flutter: 'rgba(6,182,212,0.15)',
  Python: 'rgba(79,143,255,0.15)',
  'Node.js': 'rgba(74,222,128,0.15)',
  Kotlin: 'rgba(168,85,247,0.15)',
  'Jetpack Compose': 'rgba(168,85,247,0.15)',
  AI: 'rgba(251,191,36,0.15)',
  YOLO: 'rgba(251,191,36,0.15)',
  MoveNet: 'rgba(251,191,36,0.15)',
  TypeScript: 'rgba(6,182,212,0.15)',
  React: 'rgba(6,182,212,0.15)',
  Fullstack: 'rgba(79,143,255,0.15)',
};

const tagTextColors: Record<string, string> = {
  Flutter: '#22d3ee',
  Python: '#93c5fd',
  'Node.js': '#86efac',
  Kotlin: '#c084fc',
  'Jetpack Compose': '#c084fc',
  AI: '#fbbf24',
  YOLO: '#fbbf24',
  MoveNet: '#fbbf24',
  TypeScript: '#22d3ee',
  React: '#22d3ee',
  Fullstack: '#93c5fd',
};

export default function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      id="proyectos"
      className="relative py-24 lg:py-32 scroll-mt-24"
      style={{ background: '#07070f' }}
    >
      {/* Subtle divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(6,182,212,0.2), rgba(168,85,247,0.2), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#a855f7' }}
          >
            Proyectos de Ingeniería
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: '#f0f4ff' }}
          >
            Portafolio{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #a855f7, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              técnico
            </span>
          </h2>
          <p
            className="mt-4 text-lg max-w-xl mx-auto"
            style={{ color: 'rgba(240,244,255,0.5)' }}
          >
            Soluciones reales construidas con arquitecturas sólidas y tecnologías modernas.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              className="relative rounded-2xl p-8 cursor-pointer"
              style={{
                background: 'rgba(13,13,20,0.7)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border:
                  activeId === project.id
                    ? '1px solid rgba(6,182,212,0.3)'
                    : '1px solid rgba(255,255,255,0.06)',
                transition: 'border-color 0.3s ease',
              }}
              onClick={() =>
                setActiveId(activeId === project.id ? null : project.id)
              }
              whileHover={{ y: -2 }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span
                    className="text-xs font-medium"
                    style={{ color: 'rgba(240,244,255,0.3)' }}
                  >
                    {project.year}
                  </span>
                  <h3
                    className="text-lg font-bold mt-1"
                    style={{ color: '#f0f4ff' }}
                  >
                    {project.title}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: activeId === project.id ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 mt-1"
                  style={{ color: 'rgba(240,244,255,0.3)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M9 1v16M1 9h16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>
              </div>

              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: 'rgba(240,244,255,0.55)' }}
              >
                {project.shortDesc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: tagColors[tag] ?? 'rgba(255,255,255,0.06)',
                      color: tagTextColors[tag] ?? 'rgba(240,244,255,0.6)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Expanded details */}
              <AnimatePresence>
                {activeId === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div
                      className="mt-6 pt-6"
                      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <p
                        className="text-sm leading-relaxed mb-4"
                        style={{ color: 'rgba(240,244,255,0.65)' }}
                      >
                        {project.description}
                      </p>
                      <ul className="space-y-2">
                        {project.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2.5 text-sm"
                            style={{ color: 'rgba(240,244,255,0.6)' }}
                          >
                            <span
                              className="w-1 h-1 rounded-full mt-1.5 shrink-0"
                              style={{ background: '#06b6d4' }}
                            />
                            {h}
                          </li>
                        ))}
                      </ul>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-4 text-sm font-medium"
                          style={{ color: '#06b6d4' }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Ver en GitHub
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="currentColor"
                          >
                            <path d="M7 0a7 7 0 100 14A7 7 0 007 0zm2.5 4.5a.5.5 0 01.5.5v3a.5.5 0 01-1 0V6.207L4.354 10.854a.5.5 0 01-.708-.708L8.293 5.5H5.5a.5.5 0 010-1h4z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/ADanicode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: 'rgba(240,244,255,0.45)' }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = '#f0f4ff')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                'rgba(240,244,255,0.45)')
            }
          >
            Ver más en GitHub · ADanicode
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <path d="M7 0a7 7 0 100 14A7 7 0 007 0zm2.5 4.5a.5.5 0 01.5.5v3a.5.5 0 01-1 0V6.207L4.354 10.854a.5.5 0 01-.708-.708L8.293 5.5H5.5a.5.5 0 010-1h4z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
