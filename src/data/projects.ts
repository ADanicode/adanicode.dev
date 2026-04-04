export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  tags: string[];
  year: string;
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "awos",
    title: "Advanced Pharmacy POS (AWOS)",
    shortDesc: "Sistema Fullstack de Punto de Venta para farmacias locales.",
    description:
      "Sistema completo de Punto de Venta y Gestión de Inventarios desarrollado para farmacias independientes. Arquitecturas multiplataforma con backend robusto.",
    tags: ["Flutter", "Python", "Node.js", "Fullstack"],
    year: "2026",
    highlights: [
      "Arquitectura multiplataforma con Flutter",
      "Backend en Python y Node.js",
      "Gestión de inventarios en tiempo real",
      "Módulo de reportes y analítica",
    ],
  },
  {
    id: "mapupp",
    title: "MapUPP – 3D Geospatial Visualization",
    shortDesc: "Visualización 3D geoespacial para gestión académica universitaria.",
    description:
      "Aplicación con arquitectura de 3 capas: persistencia en MongoDB Atlas, REST API en Flask, y cliente nativo multiplataforma con renderizado 3D dinámico.",
    tags: ["Kotlin", "Jetpack Compose", "Mapbox v11", "MongoDB Atlas", "Flask"],
    year: "2025",
    highlights: [
      "Renderizado 3D dinámico con Mapbox v11",
      "API REST con Flask",
      "Persistencia en MongoDB Atlas",
      "Gestión de horarios y ubicaciones",
    ],
    githubUrl: "https://github.com/ADanicode",
  },
  {
    id: "mkr",
    title: "MKR – Monitoring, Knowledge & Response",
    shortDesc: "Sistema inteligente de seguridad perimetral con detección de IA.",
    description:
      "Dirección técnica de un sistema de protección perimetral inteligente con detección de actividad sospechosa. Especificación de requerimientos bajo norma IEEE 830 y entrenamiento de modelos YOLO/MoveNet.",
    tags: ["AI", "YOLO", "MoveNet", "Computer Vision", "IEEE 830"],
    year: "Jun 2025",
    highlights: [
      "Detección de actividad sospechosa con YOLO",
      "Análisis de poses humanas con MoveNet",
      "Especificación IEEE 830",
      "Arquitectura de respuesta en tiempo real",
    ],
  },
  {
    id: "nexo",
    title: "Nexo Finanzas",
    shortDesc: "Aplicación de gestión financiera personal impulsada por IA.",
    description:
      "Plataforma de finanzas personales con inteligencia artificial para análisis predictivo de gastos, categorización automática y recomendaciones de ahorro.",
    tags: ["TypeScript", "React", "AI", "Node.js", "MongoDB"],
    year: "2025",
    highlights: [
      "Análisis predictivo de gastos con IA",
      "Categorización automática de transacciones",
      "Dashboard interactivo con métricas",
      "Recomendaciones de ahorro personalizadas",
    ],
  },
];
