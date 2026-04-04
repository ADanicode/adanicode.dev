export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
}

export const services: Service[] = [
  {
    id: "pos",
    icon: "🏪",
    title: "Sistemas Punto de Venta",
    description:
      "Soluciones de POS personalizadas para negocios locales y cadenas, con gestión de inventario, reportes y multi-sucursal. Modelo de renta mensual sin inversión inicial.",
    features: [
      "Gestión de inventarios en tiempo real",
      "Reportes y analítica de ventas",
      "Multi-sucursal y usuarios",
      "Soporte técnico incluido",
      "Actualizaciones continuas",
    ],
    cta: "Solicitar demo",
  },
  {
    id: "dev",
    icon: "⚡",
    title: "Desarrollo Multiplataforma y Web",
    description:
      "Aplicaciones web y móviles a medida con arquitecturas escalables. Desde MVPs hasta plataformas empresariales con stack moderno y buenas prácticas de ingeniería.",
    features: [
      "Web: React, Astro, Angular, Laravel",
      "Móvil: Flutter, Kotlin (Jetpack Compose)",
      "Backend: Node.js, Python, Java",
      "SOLID Principles & Clean Architecture",
      "Entrega con documentación técnica",
    ],
    cta: "Consultar proyecto",
  },
  {
    id: "infra",
    icon: "🖥️",
    title: "Infraestructura IT y Cloud",
    description:
      "Administración de servidores Windows/Linux, virtualización y servicios en la nube. Mantenimiento preventivo y correctivo con 99% de uptime garantizado.",
    features: [
      "Windows Server 2019+ (Core/GUI)",
      "Ubuntu Server y servicios Linux",
      "Docker y entornos virtualizados",
      "Google Cloud Foundations",
      "Backup y recuperación ante desastres",
    ],
    cta: "Evaluar infraestructura",
  },
];
