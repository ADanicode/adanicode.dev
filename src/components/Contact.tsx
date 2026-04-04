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
      className="relative py-24 lg:py-32 scroll-mt-24"
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
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m2 7 10 7 10-7" />
                      </svg>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ color: '#4ade80' }}
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
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
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(240,244,255,0.45)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
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
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    WhatsApp
                  </span>
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
