import React, { useState } from 'react'
import boardGamesData from '../data/boardGames.json'
import GameCard from '../components/GameCard'
import './boardGames.css'

function BoardGames() {
    // Estado único para la búsqueda global
    const [query, setQuery] = useState("");

    // estado de ordenamiento
    const [sortBy, setSortBy] = useState("name"); // Ordenar por nombre por defecto

    return (
    <div className="home-header">
        <div className="hero-title">
          <h1>Juegos de Mesa</h1>
          <p>Lista de juegos</p>
        </div>
 
        <div className="home-content">
          <div className="home-content-item">
            <div className="search-container">
              <div className="search-wrapper">
                <div className="search-input-container">
                  <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input type="text" placeholder="Buscar..." className="search-input" value={query} onChange={(e) => setQuery(e.target.value)} />
                </div>

                <div className="sort-select-wrapper">
                  <select className="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                      <option value="name">Nombre</option>
                      <option value="year desc">Año (desc)</option>
                      <option value="year asc">Año (asc)</option>
                      <option value="genre">Género</option>
                      <option value="players">Jugadores</option>
                  </select>
                </div>

                <button className="clear-button" onClick={() => setQuery("")}>
                  <svg className="clear-button-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Limpiar
                </button>
              </div>
            </div>
            
            <div className="game-list"> 
                {boardGamesData.filter(game => 
                    game.name.toLowerCase().includes(query.toLowerCase()) ||
                    game.genre.toLowerCase().includes(query.toLowerCase()) ||
                    game.year.toString().includes(query.toLowerCase())
                ).sort((a, b) => {
                    switch(sortBy) {
                        case "name":
                            return a.name.localeCompare(b.name);
                        case "year desc":
                            return a.year - b.year;
                        case "year asc":
                            return b.year - a.year;
                        case "genre":
                            return a.genre.localeCompare(b.genre);
                        case "players":
                            return b.players - a.players;
                        default:
                            return 0;
                    }
                }).map((game) => (
                    < GameCard key={game.id} game={game} />
                ))}
            </div>
          </div>
        </div>
    </div>
    )
}

export default BoardGames