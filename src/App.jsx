import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />

        <main className="main-content">
          <h1>TP2 React Grupo 8</h1>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App