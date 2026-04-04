export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  billing: string;
  target: string;
  highlights: string[];
  cta: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  client: string;
  role: string;
  quote: string;
  impact: string;
}

export interface GuaranteePoint {
  id: string;
  title: string;
  description: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Plan PyME Starter',
    price: 'Desde $3,900 MXN',
    billing: '/mes',
    target: 'Negocios que inician su digitalizacion',
    highlights: [
      'Sistema POS base con inventario y ventas',
      'Soporte remoto en horario laboral',
      'Reportes semanales de operacion',
      'Implementacion inicial incluida',
    ],
    cta: 'Cotizar Starter',
  },
  {
    id: 'growth',
    name: 'Plan Growth',
    price: 'Desde $8,900 MXN',
    billing: '/mes',
    target: 'Empresas que escalan procesos internos',
    highlights: [
      'Desarrollo web o app a medida',
      'Integraciones con APIs y automatizacion',
      'Dashboards con KPI de negocio',
      'Roadmap tecnico trimestral',
    ],
    cta: 'Cotizar Growth',
    featured: true,
  },
  {
    id: 'enterprise',
    name: 'Plan Enterprise',
    price: 'Proyecto a medida',
    billing: '',
    target: 'Operaciones multi-sede o alto volumen',
    highlights: [
      'Arquitectura escalable y cloud-ready',
      'SLA y monitoreo de infraestructura',
      'Hardening de seguridad y backups',
      'Acompanamiento tecnico continuo',
    ],
    cta: 'Solicitar propuesta',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'farmacia',
    client: 'Cadena de Farmacias Local',
    role: 'Operacion y ventas',
    quote:
      'Con AWOS redujimos errores de inventario y aceleramos el cobro en mostrador. Ahora tenemos trazabilidad diaria de ventas y stock.',
    impact: '-35% en faltantes de inventario en 8 semanas',
  },
  {
    id: 'universidad',
    client: 'Proyecto academico geoespacial',
    role: 'Coordinacion tecnica',
    quote:
      'MapUPP permitio visualizar ubicaciones y horarios en 3D con mejor precision para toma de decisiones operativas.',
    impact: '+40% en tiempo de analisis de ubicaciones',
  },
  {
    id: 'seguridad',
    client: 'MKR Security Initiative',
    role: 'Direccion de ingenieria',
    quote:
      'El sistema de deteccion con IA se diseno con enfoque de respuesta rapida y requerimientos claros bajo IEEE 830.',
    impact: 'Arquitectura valida para despliegue y escalamiento',
  },
];

export const guaranteePoints: GuaranteePoint[] = [
  {
    id: 'scope',
    title: 'Alcance y entregables definidos',
    description: 'Cada propuesta incluye objetivos, hitos y criterios de aceptacion.',
  },
  {
    id: 'updates',
    title: 'Seguimiento semanal',
    description: 'Reporte de avances con riesgos, decisiones y proximo sprint.',
  },
  {
    id: 'support',
    title: 'Soporte y mejora continua',
    description: 'Opciones de mantenimiento para asegurar estabilidad post-lanzamiento.',
  },
];
