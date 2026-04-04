'use client';
import { motion, type Variants } from 'framer-motion';
import { services } from '../data/services';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-24 lg:py-32"
      style={{ background: '#05050a' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#06b6d4' }}
          >
            Soluciones B2B
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: '#f0f4ff' }}
          >
            Servicios que impulsan{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              tu negocio
            </span>
          </h2>
          <p
            className="mt-4 text-lg max-w-2xl mx-auto"
            style={{ color: 'rgba(240,244,255,0.5)' }}
          >
            Soluciones tecnológicas de nivel enterprise adaptadas al presupuesto
            de PyMEs y startups.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="relative group rounded-2xl p-8 flex flex-col"
              style={{
                background: 'rgba(18,18,28,0.6)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
              }}
              whileHover={{
                y: -4,
                boxShadow:
                  index === 0
                    ? '0 0 40px rgba(6,182,212,0.1)'
                    : index === 1
                    ? '0 0 40px rgba(168,85,247,0.1)'
                    : '0 0 40px rgba(79,143,255,0.1)',
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-8 right-8 h-px rounded-full"
                style={{
                  background:
                    index === 0
                      ? 'linear-gradient(90deg, transparent, #06b6d4, transparent)'
                      : index === 1
                      ? 'linear-gradient(90deg, transparent, #a855f7, transparent)'
                      : 'linear-gradient(90deg, transparent, #4f8fff, transparent)',
                  opacity: 0.6,
                }}
              />

              {/* Icon */}
              <div
                className="text-3xl mb-6 w-14 h-14 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    index === 0
                      ? 'rgba(6,182,212,0.1)'
                      : index === 1
                      ? 'rgba(168,85,247,0.1)'
                      : 'rgba(79,143,255,0.1)',
                  border:
                    index === 0
                      ? '1px solid rgba(6,182,212,0.2)'
                      : index === 1
                      ? '1px solid rgba(168,85,247,0.2)'
                      : '1px solid rgba(79,143,255,0.2)',
                }}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: '#f0f4ff' }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: 'rgba(240,244,255,0.55)' }}
              >
                {service.description}
              </p>

              {/* Features list */}
              <ul className="space-y-2.5 mb-8 flex-1">
                {service.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-2.5 text-sm"
                    style={{ color: 'rgba(240,244,255,0.65)' }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="mt-0.5 shrink-0"
                      style={{
                        color:
                          index === 0 ? '#06b6d4' : index === 1 ? '#a855f7' : '#4f8fff',
                      }}
                    >
                      <path
                        d="M2 7l3.5 3.5L12 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                style={{
                  color:
                    index === 0 ? '#06b6d4' : index === 1 ? '#a855f7' : '#4f8fff',
                }}
              >
                {service.cta}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 7a.5.5 0 01.5-.5h9.793L8.146 3.354a.5.5 0 11.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L11.293 7.5H1.5A.5.5 0 011 7z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
