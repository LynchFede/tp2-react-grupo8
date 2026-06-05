import { NavLink } from 'react-router-dom'
import logoGrupo from '../assets/logo-grupo8.png'
import './Sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src={logoGrupo} alt="Logo Grupo 8" />
        <h2>Grupo 8</h2>
        <span>TP2 React</span>
      </div>

      <nav className="sidebar-menu">
        <NavLink to="/" className="sidebar-link">🏠 Dashboard</NavLink>
        <NavLink to="/galeria" className="sidebar-link">🖼️ Galería</NavLink>
        <NavLink to="/board-games" className="sidebar-link">📊 Juegos de mesa</NavLink>
        <NavLink to="/tech-news" className="sidebar-link">🌐 API Externa Noticias Tech </NavLink>
        <NavLink to="/bitacora" className="sidebar-link">📝 Bitácora</NavLink>
        <NavLink to="/arquitectura" className="sidebar-link">🏗️ Arquitectura</NavLink>
      
      </nav>
    </aside>
  )
}

export default Sidebar