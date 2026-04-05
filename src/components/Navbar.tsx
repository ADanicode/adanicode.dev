'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#stack', label: 'Stack' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#servicios');
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 28,
    mass: 0.22,
  });

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const sections = navLinks
      .map((link) => document.querySelector(link.href) as HTMLElement | null)
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0.2, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(5, 5, 10, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="grid grid-cols-[auto_1fr_auto] items-center gap-4 h-16">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            aria-label="adanicode.dev home"
          >
            <span
              className="w-8 h-8 rounded-lg p-0.5 flex items-center justify-center"
              style={{
                background: 'rgba(240,244,255,0.06)',
                border: '1px solid rgba(240,244,255,0.12)',
              }}
            >
              <img
                src="/favicon.svg"
                alt="adanicode logo"
                width="28"
                height="28"
                className="rounded-md"
                loading="eager"
                decoding="async"
              />
            </span>
            <span
              className="font-semibold text-sm tracking-tight"
              style={{ color: '#f0f4ff' }}
            >
              adanicode<span style={{ color: '#06b6d4' }}>.dev</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 whitespace-nowrap min-w-0">
            {navLinks.map((link) => (
              <li key={link.href} className="shrink-0">
                <a
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-200"
                  style={{
                    color:
                      activeSection === link.href
                        ? '#f0f4ff'
                        : 'rgba(240,244,255,0.6)',
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = '#f0f4ff')
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      activeSection === link.href
                        ? '#f0f4ff'
                        : 'rgba(240,244,255,0.6)')
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3 justify-self-end">
            <a
              href="#contacto"
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
              style={{
                background: 'rgba(6,182,212,0.1)',
                border: '1px solid rgba(6,182,212,0.3)',
                color: '#06b6d4',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(6,182,212,0.2)';
                el.style.borderColor = 'rgba(6,182,212,0.6)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(6,182,212,0.1)';
                el.style.borderColor = 'rgba(6,182,212,0.3)';
              }}
            >
              Hablemos
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg justify-self-end"
            style={{ color: 'rgba(240,244,255,0.7)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {mobileOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              background: 'rgba(5,5,10,0.95)',
              backdropFilter: 'blur(16px)',
              borderTop: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium py-2"
                  style={{
                    color:
                      activeSection === link.href
                        ? '#f0f4ff'
                        : 'rgba(240,244,255,0.7)',
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                className="px-4 py-2 rounded-lg text-sm font-semibold text-center"
                style={{
                  background: 'rgba(6,182,212,0.1)',
                  border: '1px solid rgba(6,182,212,0.3)',
                  color: '#06b6d4',
                }}
                onClick={() => setMobileOpen(false)}
              >
                Hablemos
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px origin-left"
        style={{
          scaleX: progress,
          background:
            'linear-gradient(90deg, #22d3ee 0%, #818cf8 55%, #c084fc 100%)',
        }}
      />
    </motion.header>
  );
}
