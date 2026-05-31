
import React from 'react'
import { Link } from 'react-router-dom'
import { integrantes } from '../data/integrantes'
import './integrantes.css'

function Integrantes() {
  return (
    <section className="home">
      <div className="home-header">
        <div className="hero-title">
          <h1>Grupo 8 React</h1>
          <p>Frontend Dashboard · React + Vite · SPA</p>
        </div>
      </div>

      <div className="cards-grid">
        {Object.keys(integrantes).map((key) => {
          const integrante = integrantes[key]

          return (
            <article className="member-card" key={key}>
              <img src={integrante.avatar} alt={integrante.nombre} />

              <h2>{integrante.nombre}</h2>

              <p>{integrante.rol}</p>

              <Link to={`/perfil/${key}`} className="profile-link">
                Ver perfil
              </Link>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Integrantes