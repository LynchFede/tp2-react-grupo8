import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-header">
      <div className="hero-title">
        <h1>Bienvenido al Dashboard</h1>
        <p>Trabajo Práctico 2 · React · Grupo 8</p>
      </div>

      <div className="home-content">
        <div className="home-content-item home-welcome-card">
          <h2>¡Hola!</h2>
          <p className="home-welcome-text">
            Esta es la página de inicio de nuestra SPA (Single Page Application). Desde la barra lateral puedes explorar nuestras diferentes secciones como <b>Juegos de Mesa</b>, <b>Tech News</b>, la <b>Galería</b> y conocer a los <b>Integrantes</b> del equipo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
