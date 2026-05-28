import './Perfil.css'
import { useParams } from 'react-router-dom'
import { integrantes } from '../data/integrantes'

function Perfil() {
  const { id } = useParams()
  const integrante = integrantes[id]

  if (!integrante) {
    return (
      <section className="profile-container">
        <h1>Integrante no encontrado</h1>
      </section>
    )
  }

  return (
    <section className="profile-container">
      <div className="profile-header">
        <img src={integrante.avatar} alt={integrante.nombre} />
        <div>
          <h1>{integrante.nombre}</h1>
          <p>{integrante.rol}</p>
        </div>
      </div>
    </section>
  )
}

export default Perfil