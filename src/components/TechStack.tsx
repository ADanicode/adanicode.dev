'use client';
import { motion } from 'framer-motion';
import { techStack } from '../data/profile';

const categoryConfig = {
  language: { label: 'Lenguajes', color: '#06b6d4' },
  framework: { label: 'Frameworks', color: '#a855f7' },
  infra: { label: 'Infraestructura', color: '#4f8fff' },
  db: { label: 'Bases de Datos', color: '#f97316' },
  ai: { label: 'IA & ML', color: '#fbbf24' },
};

export default function TechStack() {
  return (
    <section
      id="stack"
      className="relative py-24 lg:py-32 scroll-mt-24"
      style={{ background: '#05050a' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(168,85,247,0.2), rgba(79,143,255,0.2), transparent)',
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
            style={{ color: '#4f8fff' }}
          >
            Arsenal Tecnológico
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: '#f0f4ff' }}
          >
            Stack{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #4f8fff, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              técnico
            </span>
          </h2>
        </motion.div>

        {/* Grid by category */}
        <div className="space-y-10">
          {(Object.entries(categoryConfig) as [keyof typeof categoryConfig, { label: string; color: string }][]).map(
            ([cat, config], sectionIdx) => {
              const items = techStack.filter((t) => t.category === cat);
              if (items.length === 0) return null;
              return (
                <motion.div
                  key={cat}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: sectionIdx * 0.08 }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-4"
                    style={{ color: config.color }}
                  >
                    {config.label}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {items.map((tech, idx) => (
                      <motion.span
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: idx * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-2 rounded-xl text-sm font-medium cursor-default"
                        style={{
                          background: `${config.color}10`,
                          border: `1px solid ${config.color}25`,
                          color: '#f0f4ff',
                          transition: 'box-shadow 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.boxShadow =
                            `0 0 16px ${config.color}20`;
                          (e.currentTarget as HTMLElement).style.borderColor =
                            `${config.color}50`;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                          (e.currentTarget as HTMLElement).style.borderColor =
                            `${config.color}25`;
                        }}
                      >
                        {tech.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            }
          )}
        </div>

        {/* Certifications strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 rounded-2xl p-8"
          style={{
            background: 'rgba(18,18,28,0.6)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ color: 'rgba(240,244,255,0.35)' }}
          >
            Estándares & Metodologías
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              'IEEE 830',
              'SOLID Principles',
              'Scrum / Agile',
              'ISO Standards',
              'PSP',
              'Clean Architecture',
              'Google Cloud Foundations',
              'LaTeX',
            ].map((item) => (
              <span
                key={item}
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(240,244,255,0.55)',
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
