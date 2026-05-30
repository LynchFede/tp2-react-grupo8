import './Perfil.css'
import { useParams } from 'react-router-dom'
import { integrantes } from '../data/integrantes'

import {
 FaHtml5,
 FaCss3Alt,
 FaJs,
 FaReact,
 FaGithub
} from "react-icons/fa";

function Perfil() {
  const { id } = useParams()
  const integrante = integrantes[id]

  if (!integrante) {
    return (
      <section className="profile-container">
        <h1>Integrante no encontrado</h1>
      </section>
    )
  }

//  return (
//    <section className="profile-container">
//      <div className="profile-header">
//        <img src={integrante.avatar} alt={integrante.nombre} />
//        <div>
//          <h1>{integrante.nombre}</h1>
//          <p>{integrante.rol}</p>
//        </div>
//      </div>
//    </section>
//  )

return (
  <section className="profile-container">

    <div className="profile-header">
      <img src={integrante.avatar} alt={integrante.nombre} />
      <div>
        <h1>{integrante.nombre}</h1>
        <p>{integrante.rol}</p>
      </div>
    </div>

    <div className="habilidades">

  <h2>Habilidades</h2>

  {integrante.habilidades.map((hab) => (
    <div key={hab.name} className="skill-item">

      <div className="skill-header">
        <span>{hab.name}</span>
        <span>{hab.percentage}%</span>
      </div>

      <div className="barra">
        <div
          className="progreso"
          style={{ width: `${hab.percentage}%` }}
        ></div>
      </div>

    </div>
  ))}

</div>

<h2>Tecnologías</h2>

<div className="tech-stack">
  <FaHtml5 className="tech-icon" />
  <FaCss3Alt className="tech-icon" />
  <FaJs className="tech-icon" />
  <FaReact className="tech-icon" />
  <FaGithub className="tech-icon" />
</div>

<h2>Redes</h2>

<div className="social-links">

  <a
    href={integrante.redes.github}
    target="_blank"
    rel="noreferrer"
    className="social-btn"
  >
    GitHub
  </a>

  <a
    href={integrante.redes.linkedin}
    target="_blank"
    rel="noreferrer"
    className="social-btn"
  >
    LinkedIn
  </a>

</div>

  </section>
)   


}

export default Perfil