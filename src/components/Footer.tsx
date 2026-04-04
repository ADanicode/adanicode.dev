'use client';
import { personalInfo } from '../data/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-10"
      style={{
        background: '#05050a',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold"
              style={{
                background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
                color: '#fff',
              }}
            >
              A
            </div>
            <span className="text-sm font-medium" style={{ color: 'rgba(240,244,255,0.4)' }}>
              adanicode<span style={{ color: '#06b6d4' }}>.dev</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors duration-200"
              style={{ color: 'rgba(240,244,255,0.3)' }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = 'rgba(240,244,255,0.7)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = 'rgba(240,244,255,0.3)')
              }
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors duration-200"
              style={{ color: 'rgba(240,244,255,0.3)' }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = 'rgba(240,244,255,0.7)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = 'rgba(240,244,255,0.3)')
              }
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-xs transition-colors duration-200"
              style={{ color: 'rgba(240,244,255,0.3)' }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = 'rgba(240,244,255,0.7)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = 'rgba(240,244,255,0.3)')
              }
            >
              Email
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs" style={{ color: 'rgba(240,244,255,0.2)' }}>
            © {year} Angel Daniel Meneses Castilleja
          </p>
        </div>
      </div>
    </footer>
  );
}
