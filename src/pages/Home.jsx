import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { integrantes } from '../data/integrantes'
import arbolRenderizado from '../assets/arbol-renderizado.png'
import './Home.css'

function Home() {
  const [mostrarArbol, setMostrarArbol] = useState(false)

  return (
    <section className="home">

      <div className="home-header">
        <div className="hero-title">
          <h1>Grupo 8 React</h1>
          <p>Frontend Dashboard · React + Vite · SPA</p>
        </div>
      </div>

<div className="team-section">
  <h2>Integrantes del Grupo 8</h2>
  <p>Conocé a los integrantes y sus perfiles individuales.</p>
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

export default Home