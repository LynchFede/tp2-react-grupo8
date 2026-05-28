import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Perfil from './pages/Perfil'

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">

        <Sidebar />

        <main className="main-content">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil/:id" element={<Perfil />} />
          </Routes>

        </main>

      </div>
    </BrowserRouter>
  )
}

export default App