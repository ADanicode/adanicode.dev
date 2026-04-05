'use client';
import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const contentY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -44]),
    { stiffness: 120, damping: 26, mass: 0.22 }
  );
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.86]);

  const orbOneY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 160]),
    { stiffness: 90, damping: 22, mass: 0.4 }
  );
  const orbTwoY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -140]),
    { stiffness: 90, damping: 22, mass: 0.4 }
  );
  const orbThreeY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 90]),
    { stiffness: 90, damping: 22, mass: 0.4 }
  );
  const gridOffset = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 24]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-28 pb-16 lg:pb-20"
      style={{ background: '#05050a' }}
    >
      {/* Ambient glow blobs */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, #06b6d4, transparent 70%)',
            opacity: 0.18,
            y: orbOneY,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, #a855f7, transparent 70%)',
            opacity: 0.14,
            y: orbTwoY,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, #818cf8, transparent 70%)',
            opacity: 0.1,
            y: orbThreeY,
          }}
        />
        {/* Grid overlay */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            y: gridOffset,
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wide uppercase"
              style={{
                background: 'rgba(6,182,212,0.08)',
                border: '1px solid rgba(6,182,212,0.2)',
                color: '#06b6d4',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: '#06b6d4' }}
              />
              Disponible para proyectos B2B
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6"
            style={{ color: '#f0f4ff' }}
          >
            Ingeniería en Software.{' '}
            <br className="hidden sm:block" />
            <span
              style={{
                  background: 'linear-gradient(120deg, #22d3ee 0%, #818cf8 55%, #c084fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Soluciones escalables
            </span>
            <br className="hidden sm:block" />
            para negocios reales.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: 'rgba(240,244,255,0.6)' }}
          >
            Soy{' '}
            <span style={{ color: '#f0f4ff', fontWeight: 500 }}>Angel Daniel</span>
            , Full-stack IT Engineer. Transformo procesos de negocio mediante
            arquitecturas web robustas, aplicaciones móviles y automatización con IA.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#servicios"
              className="btn-shimmer group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                color: '#fff',
                boxShadow: '0 0 30px rgba(6,182,212,0.25)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  '0 0 40px rgba(6,182,212,0.45)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  '0 0 30px rgba(6,182,212,0.25)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              Ver Servicios B2B
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="transition-transform group-hover:translate-x-0.5"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 01.5-.5h10.793L9.146 4.354a.5.5 0 11.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L12.293 8.5H1.5A.5.5 0 011 8z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: 'rgba(240,244,255,0.04)',
                border: '1px solid rgba(240,244,255,0.1)',
                color: '#f0f4ff',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(240,244,255,0.08)';
                el.style.borderColor = 'rgba(240,244,255,0.2)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(240,244,255,0.04)';
                el.style.borderColor = 'rgba(240,244,255,0.1)';
              }}
            >
              Explorar Proyectos
            </a>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-wrap items-center justify-center gap-6"
            style={{ color: 'rgba(240,244,255,0.3)' }}
          >
            {[
              '3+ años en producción',
              '5 proyectos de ingeniería',
              'IEEE 830 & SOLID',
              'Fullstack & Cloud',
            ].map((item) => (
              <span key={item} className="flex items-center gap-2 text-xs font-medium">
                <span
                  className="w-1 h-1 rounded-full"
                  style={{ background: 'rgba(6,182,212,0.5)' }}
                />
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center justify-center"
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2"
              style={{
                background: 'rgba(240,244,255,0.04)',
                border: '1px solid rgba(240,244,255,0.1)',
                color: 'rgba(240,244,255,0.72)',
              }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: 'linear-gradient(135deg, #22d3ee, #818cf8)' }}
              />
              Estrategia, desarrollo y soporte continuo en un solo partner
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            style={{ color: 'rgba(6,182,212,0.4)' }}
          >
            <path
              d="M10 3v14M5 13l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
