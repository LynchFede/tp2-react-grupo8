import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ApiPublic from './pages/apiPublic'


import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import TechNews from './pages/apiPublic'

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">

        <Sidebar />

        <main className="main-content">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil/:id" element={<Perfil />} />
            <Route path="/tech-news" element={<ApiPublic />} />
          </Routes>

        </main>

      </div>
    </BrowserRouter>
  )
}

export default App