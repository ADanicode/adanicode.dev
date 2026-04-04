'use client';
import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { submitContact, type ContactFormData } from '../services/contact';
import { personalInfo } from '../data/profile';

interface FieldState {
  value: string;
  error: string;
}

const initialField = (): FieldState => ({ value: '', error: '' });

export default function Contact() {
  const [name, setName] = useState<FieldState>(initialField());
  const [email, setEmail] = useState<FieldState>(initialField());
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState<FieldState>(initialField());
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');

  const validate = (): boolean => {
    let valid = true;
    if (!name.value.trim()) {
      setName((p) => ({ ...p, error: 'El nombre es requerido.' }));
      valid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
      setEmail((p) => ({ ...p, error: 'Email inválido.' }));
      valid = false;
    }
    if (!message.value.trim() || message.value.length < 10) {
      setMessage((p) => ({
        ...p,
        error: 'El mensaje debe tener al menos 10 caracteres.',
      }));
      valid = false;
    }
    return valid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    const data: ContactFormData = {
      name: name.value.trim(),
      email: email.value.trim(),
      company: company.trim(),
      message: message.value.trim(),
    };
    const result = await submitContact(data);
    setStatus(result.success ? 'success' : 'error');
    setStatusMsg(result.message);
  };

  const inputStyle = (hasError: boolean): React.CSSProperties => ({
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.04)',
    border: hasError
      ? '1px solid rgba(239,68,68,0.5)'
      : '1px solid rgba(255,255,255,0.08)',
    color: '#f0f4ff',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  });

  return (
    <section
      id="contacto"
      className="relative py-24 lg:py-32"
      style={{ background: '#07070f' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(6,182,212,0.3), rgba(168,85,247,0.3), transparent)',
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
            style={{ color: '#06b6d4' }}
          >
            Trabajemos juntos
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: '#f0f4ff' }}
          >
            Inicia tu{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              proyecto
            </span>
          </h2>
          <p
            className="mt-4 text-lg max-w-xl mx-auto"
            style={{ color: 'rgba(240,244,255,0.5)' }}
          >
            Cuéntame tu idea o necesidad. Respondo en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(18,18,28,0.6)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <h3
                className="text-sm font-semibold mb-4"
                style={{ color: 'rgba(240,244,255,0.4)' }}
              >
                CONTACTO DIRECTO
              </h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-sm transition-colors duration-200"
                  style={{ color: 'rgba(240,244,255,0.65)' }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = '#f0f4ff')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      'rgba(240,244,255,0.65)')
                  }
                >
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(6,182,212,0.1)' }}
                  >
                    ✉️
                  </span>
                  {personalInfo.email}
                </a>
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm transition-colors duration-200"
                  style={{ color: 'rgba(240,244,255,0.65)' }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = '#f0f4ff')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      'rgba(240,244,255,0.65)')
                  }
                >
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(74,222,128,0.1)' }}
                  >
                    💬
                  </span>
                  WhatsApp directo
                </a>
                <div
                  className="flex items-center gap-3 text-sm"
                  style={{ color: 'rgba(240,244,255,0.45)' }}
                >
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                  >
                    📍
                  </span>
                  {personalInfo.location}
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(18,18,28,0.6)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <h3
                className="text-sm font-semibold mb-4"
                style={{ color: 'rgba(240,244,255,0.4)' }}
              >
                PERFILES
              </h3>
              <div className="space-y-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm transition-colors duration-200"
                  style={{ color: 'rgba(240,244,255,0.65)' }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = '#f0f4ff')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      'rgba(240,244,255,0.65)')
                  }
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  github.com/ADanicode
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm transition-colors duration-200"
                  style={{ color: 'rgba(240,244,255,0.65)' }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = '#f0f4ff')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      'rgba(240,244,255,0.65)')
                  }
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  linkedin.com/in/a-d-m-c
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl p-8"
              style={{
                background: 'rgba(18,18,28,0.6)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {/* Name */}
                <div>
                  <label
                    className="block text-xs font-medium mb-2"
                    style={{ color: 'rgba(240,244,255,0.5)' }}
                  >
                    Nombre *
                  </label>
                  <input
                    type="text"
                    value={name.value}
                    onChange={(e) =>
                      setName({ value: e.target.value, error: '' })
                    }
                    placeholder="Tu nombre"
                    style={inputStyle(!!name.error)}
                    onFocus={(e) => {
                      if (!name.error)
                        (e.target as HTMLElement).style.borderColor =
                          'rgba(6,182,212,0.4)';
                    }}
                    onBlur={(e) => {
                      if (!name.error)
                        (e.target as HTMLElement).style.borderColor =
                          'rgba(255,255,255,0.08)';
                    }}
                  />
                  {name.error && (
                    <p
                      className="mt-1 text-xs"
                      style={{ color: 'rgba(239,68,68,0.8)' }}
                    >
                      {name.error}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    className="block text-xs font-medium mb-2"
                    style={{ color: 'rgba(240,244,255,0.5)' }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    value={email.value}
                    onChange={(e) =>
                      setEmail({ value: e.target.value, error: '' })
                    }
                    placeholder="tu@empresa.com"
                    style={inputStyle(!!email.error)}
                    onFocus={(e) => {
                      if (!email.error)
                        (e.target as HTMLElement).style.borderColor =
                          'rgba(6,182,212,0.4)';
                    }}
                    onBlur={(e) => {
                      if (!email.error)
                        (e.target as HTMLElement).style.borderColor =
                          'rgba(255,255,255,0.08)';
                    }}
                  />
                  {email.error && (
                    <p
                      className="mt-1 text-xs"
                      style={{ color: 'rgba(239,68,68,0.8)' }}
                    >
                      {email.error}
                    </p>
                  )}
                </div>
              </div>

              {/* Company (optional) */}
              <div className="mb-5">
                <label
                  className="block text-xs font-medium mb-2"
                  style={{ color: 'rgba(240,244,255,0.5)' }}
                >
                  Empresa (opcional)
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Nombre de tu empresa"
                  style={inputStyle(false)}
                  onFocus={(e) =>
                    ((e.target as HTMLElement).style.borderColor =
                      'rgba(6,182,212,0.4)')
                  }
                  onBlur={(e) =>
                    ((e.target as HTMLElement).style.borderColor =
                      'rgba(255,255,255,0.08)')
                  }
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  className="block text-xs font-medium mb-2"
                  style={{ color: 'rgba(240,244,255,0.5)' }}
                >
                  Mensaje *
                </label>
                <textarea
                  value={message.value}
                  onChange={(e) =>
                    setMessage({ value: e.target.value, error: '' })
                  }
                  placeholder="Cuéntame sobre tu proyecto o necesidad..."
                  rows={5}
                  style={{
                    ...inputStyle(!!message.error),
                    resize: 'vertical',
                    minHeight: '120px',
                  }}
                  onFocus={(e) => {
                    if (!message.error)
                      (e.target as HTMLElement).style.borderColor =
                        'rgba(6,182,212,0.4)';
                  }}
                  onBlur={(e) => {
                    if (!message.error)
                      (e.target as HTMLElement).style.borderColor =
                        'rgba(255,255,255,0.08)';
                  }}
                />
                {message.error && (
                  <p
                    className="mt-1 text-xs"
                    style={{ color: 'rgba(239,68,68,0.8)' }}
                  >
                    {message.error}
                  </p>
                )}
              </div>

              {/* Status */}
              {status === 'success' && (
                <div
                  className="mb-4 px-4 py-3 rounded-xl text-sm"
                  style={{
                    background: 'rgba(74,222,128,0.1)',
                    border: '1px solid rgba(74,222,128,0.2)',
                    color: '#86efac',
                  }}
                >
                  {statusMsg}
                </div>
              )}
              {status === 'error' && (
                <div
                  className="mb-4 px-4 py-3 rounded-xl text-sm"
                  style={{
                    background: 'rgba(239,68,68,0.08)',
                    border: '1px solid rgba(239,68,68,0.2)',
                    color: 'rgba(239,68,68,0.9)',
                  }}
                >
                  {statusMsg}
                </div>
              )}

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="flex-1 py-3 rounded-xl text-sm font-semibold transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                    color: '#fff',
                    boxShadow: '0 0 20px rgba(6,182,212,0.2)',
                  }}
                >
                  {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
                </button>
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl text-sm font-semibold text-center transition-all duration-200"
                  style={{
                    background: 'rgba(74,222,128,0.1)',
                    border: '1px solid rgba(74,222,128,0.2)',
                    color: '#86efac',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = 'rgba(74,222,128,0.18)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = 'rgba(74,222,128,0.1)';
                  }}
                >
                  💬 WhatsApp
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
