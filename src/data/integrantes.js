// src/data/integrantes.js

import avatarFede from '../assets/avatar_fede.png';
import avatarGilda from '../assets/avatar_Gilda.jpg';
import avatarNahuel from '../assets/avatar_nahuel.jpg';
import avatarDavid from '../assets/avatar_david.png';
import avatarCristina from '../assets/avatar_cristina.png';

export const integrantes = {
  federico: {
    nombre: "Federico Lynch",
    rol: "Desarrollador Frontend",
    avatar: avatarFede,
    tecnologias: ["React", "JavaScript", "HTML5", "CSS3", "Git"],
   habilidades: [
  { name: "React", percentage: 80 },
  { name: "Spring", percentage: 70 },
  { name: "JavaScript", percentage: 80 },
  { name: "CSS", percentage: 90 },
  { name: "HTML", percentage: 85 }
    ],
proyectos: [
  {
    nombre: "Lynch_PFO1",
    descripcion: "Proyecto Front-End desarrollado para la materia Programación Front-End, aplicando HTML, CSS y JavaScript.",
    link: "https://github.com/LynchFede/Lynch_PFO1"
  },
  {
    nombre: "tp2-react-grupo8",
    descripcion: "Dashboard desarrollado con React y Vite. Incluye perfiles, React Router, API externa, galería interactiva y componentes reutilizables.",
    link: "https://github.com/LynchFede/tp2-react-grupo8"
  },
  {
    nombre: "tp1-web-grupo-8",
    descripcion: "Trabajo Práctico 1 realizado en equipo utilizando HTML, CSS y JavaScript con diseño responsive y navegación entre perfiles.",
    link: "https://github.com/LynchFede/tp1-web-grupo-8"
  }
    ],
    redes: { 
      github: "https://github.com/COMPLETAR_USUARIO", 
      linkedin: "https://linkedin.com/in/COMPLETAR_USUARIO", 
      email: "COMPLETAR_CORREO@ejemplo.com" 
    }
  },

  gilda: {
    nombre: "Gilda Morgante",
    rol: "Desarrolladora Frontend",
    avatar: avatarGilda,
    tecnologias: ["React", "JavaScript", "HTML5", "CSS3", "Git"],
    habilidades: [
      { name: "Desarrollo UI con React", percentage: 88 },
      { name: "Maquetación Responsiva", percentage: 92 },
      { name: "Control de Versiones", percentage: 80 }
    ],
    proyectos: [
      { nombre: "Dashboard de Clientes", descripcion: "Panel analítico interactivo con métricas comerciales consumidas de JSON.", link: "https://github.com" },
      { nombre: "Aplicación del Clima SPA", descripcion: "Desarrollo que consume servicios externos para dar reportes del clima.", link: "https://github.com" },
      { nombre: "Gestor de Tareas Ágiles", descripcion: "Plataforma estilo Kanban para organización de flujos de trabajo grupales.", link: "https://github.com" }
    ],
    redes: { 
      github: "https://github.com", 
      linkedin: "https://linkedin.com", 
      email: "gilda@gmail.com"
    }
  },

  nahuel: {
    nombre: "Nahuel Rodríguez",
    rol: "Desarrollador Frontend y analista en ciberseguridad",
    avatar: avatarNahuel,
    tecnologias: ["React", "Node.js", "mongoDB", "C#", "linux", "nmap", "Wireshark", "visor de eventos", "networking", "consola de comandos"],    
    habilidades: [
      { name: "React", percentage: 40 },
      { name: "Base de Datos", percentage: 70 },
      { name: "C#", percentage: 60 },
      { name: "networking", percentage: 60},
      { name: "visor de eventos", percentage: 50 },
      { name: "Linux", percentage: 85 },
      { name: "consola de comandos", percentage: 80 }
    ],
    proyectos: [
      
      { nombre: "Club Deportivo Mobile", descripcion: "Aplicación móvil desarrollada en Android Studio estructurada en múltiples Activities. Cuenta con entry point de Login, Menú Principal, Registro de Clientes, módulos de Pagos (cuotas mensuales y actividades) con generación de comprobantes, y Listado de Vencimientos.", link: "https://github.com/IFTS29/ClubDeportivo-Mobile" },
      { nombre: "CaC-movies", descripcion: "Catálogo interactivo de películas desarrollado con HTML, CSS y JavaScript como parte del programa Codo a Codo.", link: "https://nahuew.github.io/cac-movies/"},
      {nombre: "tp1-web-grupo-8", descripcion: "Trabajo Práctico 1 realizado en equipo utilizando HTML, CSS y JavaScript con diseño responsive y navegación entre perfiles.", link: "https://github.com/LynchFede/tp1-web-grupo-8"}
    ],
    redes: { 
      github: "https://github.com/nahuew", 
      linkedin: "https://www.linkedin.com/in/nahuew/", 
      email: "nahuewrodriguez@gmail.com" 
    }
  },

  david: {
    nombre: "David Egert",
    rol: "Desarrollador Frontend",
    avatar: avatarDavid,
    tecnologias: ["React", "JavaScript", "HTML5", "CSS3", "Git"],
    
  habilidades: [

    
      { name: "HTML", percentage: 90 },
      { name: "CSS", percentage: 85 },
      { name: "JavaScript", percentage: 75 },
      { name: "React", percentage: 60 },
      { name: "Git", percentage: 70 }
],



    proyectos: [
      { nombre: "COMPLETAR_PROYECTO_1", descripcion: "Por favor, ingresá la descripción de tu primer trabajo acá.", link: "#" },
      { nombre: "COMPLETAR_PROYECTO_2", descripcion: "Por favor, ingresá la descripción de tu segundo trabajo acá.", link: "#" },
      { nombre: "COMPLETAR_PROYECTO_3", descripcion: "Por favor, ingresá la descripción de tu tercer trabajo acá.", link: "#" }
    ],
    redes: { 
      github: "https://github.com/COMPLETAR_USUARIO", 
      linkedin: "https://linkedin.com/in/COMPLETAR_USUARIO", 
      email: "COMPLETAR_CORREO@ejemplo.com" 
    }
  },

  cristina: {
    nombre: "Cristina Roma",
    rol: "Desarrolladora Frontend",
    avatar: avatarCristina,
    tecnologias: ["React", "Spring Boot", "Node.js", "C#", "MongoDB"],
    habilidades: [
      { name: "React", percentage: 80 },
      { name: "Spring", percentage: 75 },
      { name: "Node.js", percentage: 90 }
    ],
    proyectos: [
      { nombre: "Club Deportivo Victoria", descripcion: "Sistema de gestión para un club deportivo desarrollado en Android Studio con Kotlin, que permite administrar socios, pagos de cuotas e inscripciones a actividades mediante una base de datos SQLite.", link: "https://github.com/Maricroma/ClubDeportivoVictoria" },
      { nombre: "Sistema de Gestión de Productos", descripcion: "Proyecto desarrollado en C# y .NET orientado a la validación de reglas de negocio mediante pruebas unitarias con NUnit, incluyendo gestión de productos, cálculo de impuestos y búsquedas avanzadas.", link: "https://github.com/Maricroma/sistema-gestion-productos" },
      { nombre: "Sistema de Gestión para Club Deportivo", descripcion: "Aplicación de escritorio desarrollada en C# que permite registrar socios y no socios, validar información automáticamente, gestionar inscripciones y generar registros de clientes para optimizar la administración del club.", link: "https://github.com/Maricroma/ClubDeportivo" }
    ],
    redes: { 
      github: "https://github.com/Maricroma", 
      linkedin: "https://linkedin.com/in/maricroma", 
      email: "cris.apdg@gmail.com" 
    }
  }
};
