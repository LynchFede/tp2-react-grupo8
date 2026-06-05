import { useState } from 'react'
import './arquitectura.css'
import arbolRenderizado from '../assets/arbol-renderizado.png'

function Arquitectura() {
  const [mostrarArbol, setMostrarArbol] = useState(false)

  return (
    <section className="arquitectura">
      <div className="render-tree-section">
        <h2>Árbol de Renderizado — Arquitectura de Componentes</h2>

        <p>
          El desarrollo de la aplicación comenzó con la creación del componente principal
          <strong> App</strong>, que actúa como punto de entrada de toda la SPA. A partir
          de este componente se incorporó la estructura base de navegación mediante
          <strong> Sidebar</strong> y <strong> Routes</strong>. Sidebar implementa el menú
          lateral fijo con estética de Dashboard, mientras que Routes administra la
          navegación utilizando React Router.
        </p>

        <p>
          Sobre esta estructura principal se fueron integrando progresivamente las distintas
          páginas del proyecto. El componente <strong>Home</strong> funciona como Dashboard
          de inicio y presenta al equipo junto con el acceso a los perfiles individuales.
          A partir de allí se incorporó <strong>Perfil</strong>, que muestra la información
          de cada integrante.
        </p>

        <p>
          Posteriormente se integró <strong>BoardGames</strong>, que consume información
          desde archivos JSON y renderiza cada juego mediante el componente
          <strong> GameCard</strong>. También se incorporó <strong>ApiPublic</strong>,
          responsable de la integración con una API externa de noticias tecnológicas.
          Finalmente se desarrolló <strong>Galería</strong>, una sección interactiva de
          imágenes que contiene internamente el componente <strong>Lightbox</strong>.
        </p>

        <p>
          De esta manera, cada componente se fue integrando dentro de otros componentes hasta
          conformar la estructura completa de la aplicación. El árbol de renderizado permite
          visualizar esta jerarquía y comprender cómo React construye la interfaz a partir
          de componentes reutilizables.
        </p>

        <button
          type="button"
          className="profile-link"
          onClick={() => setMostrarArbol(!mostrarArbol)}
        >
          {mostrarArbol
            ? 'Ocultar Árbol de Renderizado'
            : 'Ver Árbol de Renderizado'}
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
    </section>
  )
}

export default Arquitectura