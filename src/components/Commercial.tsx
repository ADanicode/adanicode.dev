'use client';
import { motion } from 'framer-motion';
import { guaranteePoints, pricingPlans, testimonials } from '../data/commercial';

export default function Commercial() {
  return (
    <section id="planes" className="relative py-24 lg:py-32 scroll-mt-24" style={{ background: '#080812' }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(6,182,212,0.2), rgba(79,143,255,0.2), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#4f8fff' }}
          >
            Modelo comercial
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: '#f0f4ff' }}>
            Precios claros para{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #4f8fff, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              decisiones rapidas
            </span>
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: 'rgba(240,244,255,0.56)' }}>
            Si buscas desarrollo de software para PyME, automatizacion de procesos o infraestructura IT,
            estos rangos te ayudan a estimar inversion desde el dia uno.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, idx) => (
            <motion.article
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: idx * 0.08, duration: 0.45 }}
              className="rounded-2xl p-7 flex flex-col"
              style={{
                background: plan.featured ? 'rgba(9,18,34,0.72)' : 'rgba(18,18,28,0.62)',
                border: plan.featured ? '1px solid rgba(79,143,255,0.45)' : '1px solid rgba(255,255,255,0.08)',
                boxShadow: plan.featured ? '0 0 34px rgba(79,143,255,0.16)' : 'none',
              }}
            >
              {plan.featured && (
                <span
                  className="inline-flex w-fit mb-4 px-2.5 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: 'rgba(79,143,255,0.14)',
                    border: '1px solid rgba(79,143,255,0.35)',
                    color: '#93c5fd',
                  }}
                >
                  Recomendado para crecer
                </span>
              )}
              <h3 className="text-xl font-bold" style={{ color: '#f0f4ff' }}>
                {plan.name}
              </h3>
              <p className="mt-2 text-sm" style={{ color: 'rgba(240,244,255,0.48)' }}>
                {plan.target}
              </p>
              <div className="mt-5 flex items-end gap-1">
                <span className="text-2xl lg:text-3xl font-bold" style={{ color: '#f0f4ff' }}>
                  {plan.price}
                </span>
                <span className="text-sm mb-1" style={{ color: 'rgba(240,244,255,0.4)' }}>
                  {plan.billing}
                </span>
              </div>
              <ul className="mt-6 space-y-2.5 flex-1">
                {plan.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: 'rgba(240,244,255,0.68)' }}>
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5" style={{ background: '#06b6d4' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className="mt-6 inline-flex justify-center py-2.5 rounded-xl text-sm font-semibold"
                style={{
                  background: plan.featured ? 'linear-gradient(135deg, #4f8fff, #06b6d4)' : 'rgba(255,255,255,0.05)',
                  border: plan.featured ? 'none' : '1px solid rgba(255,255,255,0.12)',
                  color: '#f0f4ff',
                }}
              >
                {plan.cta}
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-12 rounded-2xl p-7"
          style={{ background: 'rgba(18,18,28,0.6)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(240,244,255,0.4)' }}>
            Garantias de trabajo
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {guaranteePoints.map((point) => (
              <div key={point.id}>
                <h4 className="text-sm font-semibold" style={{ color: '#f0f4ff' }}>
                  {point.title}
                </h4>
                <p className="mt-1 text-sm" style={{ color: 'rgba(240,244,255,0.55)' }}>
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: '#a855f7' }}>
            Casos y resultados
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((item, idx) => (
              <motion.blockquote
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.45 }}
                className="rounded-2xl p-6"
                style={{ background: 'rgba(18,18,28,0.58)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.66)' }}>
                  "{item.quote}"
                </p>
                <footer className="mt-4">
                  <p className="text-sm font-semibold" style={{ color: '#f0f4ff' }}>
                    {item.client}
                  </p>
                  <p className="text-xs" style={{ color: 'rgba(240,244,255,0.4)' }}>
                    {item.role}
                  </p>
                  <p className="mt-2 text-xs font-semibold" style={{ color: '#06b6d4' }}>
                    {item.impact}
                  </p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
