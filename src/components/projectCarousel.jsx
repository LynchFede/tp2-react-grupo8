import { useState } from 'react'
import './ProjectCarousel.css'

function ProjectCarousel({ proyectos }) {

  const [indice, setIndice] = useState(0)

  const siguiente = () => {
    setIndice((prev) =>
      prev === proyectos.length - 1 ? 0 : prev + 1
    )
  }

  const anterior = () => {
    setIndice((prev) =>
      prev === 0 ? proyectos.length - 1 : prev - 1
    )
  }

  const proyecto = proyectos[indice]

  return (
    <div className="carousel">

      <button
        className="carousel-btn"
        onClick={anterior}
      >
        ◀
      </button>

      <div className="carousel-card">
        <h3>{proyecto.nombre}</h3>

        <p>{proyecto.descripcion}</p>

        <a
          href={proyecto.link}
          target="_blank"
          rel="noreferrer"
        >
          Ver proyecto
        </a>

        <p className="carousel-counter">
          {indice + 1} / {proyectos.length}
        </p>
      </div>

      <button
        className="carousel-btn"
        onClick={siguiente}
      >
        ▶
      </button>

    </div>
  )
}

export default ProjectCarousel