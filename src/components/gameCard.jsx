import React from 'react'
import './gameCard.css'

function GameCard({ game }) {
    return (
        <div className="game-card">
            <div className="game-card-header">
                <h3 className="game-card-title">{game.name}</h3>
                <span className="game-card-badge">{game.genre}</span>
            </div>
            <div className="game-card-info">
                <p><b>Año:</b> {game.year}</p>
                <p><b>Jugadores:</b> {game.players}</p>
                <p><b>Duración:</b> {game.duration}</p>
                <p><b>Descripción:</b> {game.description}</p>
            </div>
        </div>
    );
}

export default GameCard;