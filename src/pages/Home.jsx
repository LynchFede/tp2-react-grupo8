import './Home.css'

const integrantes = [

  {
    nombre: 'Federico Lynch',
    avatar: '/src/assets/avatar_fede.png',
    rol: 'Desarrollador Frontend'
  },

  {
    nombre: 'Gilda Morgante',
    avatar: '/src/assets/avatar_Gilda.jpg',
    rol: 'Desarrolladora Frontend'
  },

  {
    nombre: 'Nahuel Rodríguez',
    avatar: '/src/assets/avatar_nahuel.jpg',
    rol: 'Desarrollador Frontend'
  },

  {
    nombre: 'David Egert',
    avatar: '/src/assets/avatar_david.png',
    rol: 'Desarrollador Frontend'
  },

  {
    nombre: 'Cristina Roma',
    avatar: '/src/assets/avatar_cristina.png',
    rol: 'Desarrolladora Frontend'
  }

]

function Home() {

  return (

    <section className="home">

      <div className="home-header">

        <div className="hero-title">

          <h1>Grupo 8 React</h1>

          <p>
            Frontend Dashboard · React + Vite · SPA
          </p>

        </div>

      </div>

      <div className="cards-grid">

        {integrantes.map((integrante) => (

          <article
            className="member-card"
            key={integrante.nombre}
          >

            <img
              src={integrante.avatar}
              alt={integrante.nombre}
            />

            <h2>{integrante.nombre}</h2>

            <p>{integrante.rol}</p>

            <button>
              Ver perfil
            </button>

          </article>

        ))}

      </div>

    </section>

  )

}

export default Home