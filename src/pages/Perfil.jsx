import './Perfil.css'
import { useParams } from 'react-router-dom'
import { integrantes } from '../data/integrantes'
import ProjectCarousel from '../components/ProjectCarousel'

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaNodeJs, 
  FaLinux,
  FaClipboardList,
  FaNetworkWired,
  FaTerminal
} from "react-icons/fa";

import { 
  SiSpringboot,
  SiMongodb,
  SiSharp,
} from "react-icons/si";

const iconosTecnologias = {
  HTML5: FaHtml5,
  CSS3: FaCss3Alt,
  JavaScript: FaJs,
  React: FaReact,
  Git: FaGithub,
  "Node.js": FaNodeJs,
  "Spring Boot": SiSpringboot,
  "MongoDB": SiMongodb,
  "C#": SiSharp,
  "linux": FaLinux,
  "visor de eventos": FaClipboardList,
  "networking": FaNetworkWired,
  "consola de comandos": FaTerminal
};

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

        {integrante.tecnologias.map((tec) => {

          const Icono = iconosTecnologias[tec];

          if (!Icono) return null;

          return (
            <div key={tec}>
              <Icono
                className="tech-icon"
                title={tec}
              />
            </div>
          );
        })}

      </div>

      <h2>Proyectos</h2>

      <ProjectCarousel proyectos={integrante.proyectos} />

      <h2>Redes</h2>

      <div className="social-links">

        <a
          href={integrante.redes.github}
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <FaGithub />
        </a>

        <a
          href={integrante.redes.linkedin}
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <FaLinkedin />
        </a>

        <a
          href={`mailto:${integrante.redes.email}`}
          className="social-icon"
          title={integrante.redes.email}
        >
          <FaEnvelope />
        </a>

      </div>

    </section>
  )


}

export default Perfil