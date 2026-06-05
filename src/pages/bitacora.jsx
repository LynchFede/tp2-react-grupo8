import React from 'react'
import './bitacora.css'

const tareas = [
  'Implementación de la navegación tipo Dashboard mediante Sidebar y React Router.',
  'Desarrollo de perfiles individuales de integrantes.',
  'Implementación del carrusel de proyectos.',
  'Desarrollo de la galería interactiva con Lightbox.',
  'Integración con API externa de noticias tecnológicas.',
  'Implementación del explorador de datos locales mediante archivos JSON.',
  'Diseño del árbol de renderizado y documentación de la arquitectura de componentes.',
]

function Bitacora() {
  return (
    <section className="bitacora">
      <div className="bitacora-header">
        <h1>Bitácora del Proyecto</h1>
        <p>Registro de decisiones, flujo de trabajo y justificación técnica</p>
      </div>

      <div className="bitacora-grid">

        {/* Sección 1: Roles y flujo */}
        <article className="bitacora-card">
          <h2>Roles y Flujo de Trabajo</h2>
          <p>
            Para el desarrollo del proyecto se utilizó <strong>GitHub</strong> como
            repositorio centralizado para el control de versiones. Cada integrante
            trabajó sobre distintas funcionalidades y componentes, realizando commits
            periódicos para registrar los avances.
          </p>
          <p>
            La coordinación se llevó a cabo mediante un grupo de comunicación donde
            se definieron tareas y se distribuyeron responsabilidades. Antes de
            integrar modificaciones, los integrantes sincronizaron sus versiones
            mediante <strong>Git Pull</strong> para evitar conflictos.
          </p>
        </article>

        {/* Sección 2: Tareas */}
        <article className="bitacora-card">
          <h2>Principales Tareas Desarrolladas</h2>
          <ul className="tareas-list">
            {tareas.map((tarea, index) => (
              <li key={index}>{tarea}</li>
            ))}
          </ul>
        </article>

        {/* Sección 3: Justificación */}
        <article className="bitacora-card bitacora-card--wide">
          <h2>Justificación de la Migración a React</h2>
          <p>
            Inicialmente, este tipo de aplicación podría haberse desarrollado
            utilizando únicamente HTML, CSS y JavaScript tradicional, generando
            una estructura estática con múltiples páginas independientes.
          </p>
          <p>
            Sin embargo, se decidió migrar hacia una arquitectura basada en{' '}
            <strong>React</strong> debido a las ventajas del desarrollo basado en
            componentes reutilizables. Esta migración permitió dividir la aplicación
            en componentes independientes, facilitando la organización del código y
            el mantenimiento del proyecto.
          </p>
          <p>
            <strong>React Router</strong> permitió implementar una SPA (Single Page
            Application), evitando recargas completas de página y mejorando la
            experiencia de usuario con una navegación más fluida.
          </p>
          <p>
            La utilización de componentes reutilizables como <code>Sidebar</code>,{' '}
            <code>ProjectCarousel</code>, <code>GameCard</code> y <code>Galeria</code>{' '}
            redujo la duplicación de código y simplificó futuras modificaciones.
          </p>
        </article>

      </div>
    </section>
  )
}

export default Bitacora
