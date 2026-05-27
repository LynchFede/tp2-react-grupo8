
import React from 'react';
import { integrantes } from '../data/integrantes'; // base de datos extendida
import './Home.css';

// 2. Pasamos la función 'onVerPerfil' que viene desde App.jsx
function Home({ onVerPerfil }) {
  return (
    <section className="home">
      
      {/* Tu cabecera original */}
      <div className="home-header">
        <div className="hero-title">
          <h1>Grupo 8 React</h1>
          <p>
            Frontend Dashboard · React + Vite · SPA
          </p>
        </div>
      </div>

      {/* grilla de tarjetas original */}
      <div className="cards-grid">
        {/* Recorremos las llaves de nuestro objeto: 'federico', 'gilda', 'nahuel', 'david', 'cristina' */}
        {Object.keys(integrantes).map((key) => {
          const integrante = integrantes[key];

          return (
            <article
              className="member-card"
              key={integrante.nombre}
            >
              {/* Usa las imágenes importadas de forma segura desde integrantes.js */}
              <img
                src={integrante.avatar}
                alt={integrante.nombre}
              />

              <h2>{integrante.nombre}</h2>

              <p>{integrante.rol}</p>

              {/* 4. Al hacer clic, ejecuta la función pasando la clave */}
              <button onClick={() => onVerPerfil(key)}>
                Ver perfil
              </button>
            </article>
          );
        })}
      </div>

    </section>
  );
}

export default Home;