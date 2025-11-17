// ============================================================
// 🌍 constants.js
// Archivo de configuración global: redes, URLs y textos clave
// ============================================================

export const SOCIAL_LINKS = {
  github: "https://github.com/ramirosicilia",
  linkedin: "https://linkedin.com/in/ramirosicilia",
  email: "mailto:ramiro.sicilia@gmail.com",
};

export const PROJECTS = [
  {
    id: 1,
    title: "E-commerce JS + Node",
    description:
      "Aplicación completa con panel de administrador, carrito, pasarela de pagos y gestión de usuarios.",
    tech: ["JavaScript", "Node", "Express", "Supabase"],
    image: "/assets/projects/ecommerce.jpg",
    repo: "https://relaxed-valkyrie-f0d847.netlify.app/",
    repo_backend: "https://github.com/ramirosicilia/Ecommerce-backend-production",
    repo_payment: "https://github.com/ramirosicilia/Ecommerce-payment"
  },
  {
    id: 2,
    title: "Espacio Creativo React",
    description:
      "Portafolio profesional desarrollado con React, CSS modular y animaciones personalizadas.",
    tech: ["React", "CSS", "Bootstrap"],
    image: "/assets/projects/portfolio.jpg",
    repo: "https://espacio-creativo-front.onrender.com"
  },
];

export const CONTACT_INFO = {
  phone: "+54 11 3877-4224",
  email: "rama.sicilia@gmail.com",
  location: "Buenos Aires, Argentina",
};
