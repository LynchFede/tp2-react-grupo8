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

      <div className="render-tree-section">
        <h2>Árbol de Renderizado — Arquitectura de Componentes</h2>

        <p>
          El desarrollo de la aplicación comenzó con la creación del componente principal
          <strong> App</strong>, que actúa como punto de entrada de toda la SPA. A partir
          de este componente se incorporó la estructura base de navegación mediante
          <strong> Sidebar</strong> y <strong> Routes</strong>, desarrollados por Federico.
          Sidebar implementa el menú lateral fijo con estética de Dashboard, mientras que
          Routes administra la navegación utilizando React Router.
        </p>

        <p>
          Sobre esta estructura principal se fueron integrando progresivamente las distintas
          páginas del proyecto. El componente <strong>Home</strong> funciona como Dashboard
          de inicio y presenta al equipo junto con el acceso a los perfiles individuales.
          A partir de allí se incorporó <strong>Perfil</strong>, desarrollado por Cristina,
          que muestra la información de cada integrante. Dentro de este componente se aloja
          <strong> ProjectCarousel</strong>, desarrollado por David, encargado de visualizar
          los proyectos asociados a cada perfil.
        </p>

        <p>
          Posteriormente se integró <strong>BoardGames</strong>, desarrollado por Nahuel,
          que consume información desde archivos JSON y renderiza cada juego mediante el
          componente <strong> GameCard</strong>. También se incorporó <strong>ApiPublic</strong>,
          desarrollado por Griselda, responsable de la integración con una API externa de
          noticias tecnológicas. Finalmente, David desarrolló <strong> Galeria</strong>, una
          sección interactiva de imágenes que contiene internamente el componente
          <strong> Lightbox</strong>.
        </p>

        <p>
          De esta manera, cada componente se fue integrando dentro de otros componentes hasta
          conformar la estructura completa de la aplicación. El árbol de renderizado permite
          visualizar esta jerarquía y comprender cómo React construye la interfaz a partir de
          componentes reutilizables.
        </p>

        <button
          type="button"
          className="profile-link"
          onClick={() => setMostrarArbol(!mostrarArbol)}
        >
          {mostrarArbol ? 'Ocultar Árbol de Renderizado' : 'Ver Árbol de Renderizado'}
        </button>

        {mostrarArbol && (
          <div className="tree-image-container">
            <img
              src={arbolRenderizado}
              alt="Árbol de Renderizado de la aplicación"
              className="tree-image"
            />
          </div>
        )}
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