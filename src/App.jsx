import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ApiPublic from './pages/apiPublic'


import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Integrantes from './pages/Integrantes'
import Perfil from './pages/Perfil'
import Galeria from './components/galeria'
import TechNews from './pages/apiPublic'
import BoardGames from './pages/boardGames'


function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">

        <Sidebar />

        <main className="main-content">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/integrantes" element={<Integrantes />} />
            <Route path="/perfil/:id" element={<Perfil />} />
            <Route path="/tech-news" element={<ApiPublic />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/board-games" element={<BoardGames />} />
          </Routes>

        </main>

      </div>
    </BrowserRouter>
  )
}

export default App
