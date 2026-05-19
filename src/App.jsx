import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>

      <div className="app-layout">

        <Sidebar />

        <main className="main-content">
          <Home />
        </main>

      </div>

    </BrowserRouter>
  )
}

export default App