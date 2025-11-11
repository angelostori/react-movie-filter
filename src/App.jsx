import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const initialMovies = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ]

  const [movies, setMovies] = useState(initialMovies)

  return (
    <>
      <div className="container">

      </div>
    </>
  )
}

export default App
