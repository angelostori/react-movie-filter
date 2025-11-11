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
      <div className="container py-4">
        <h2 className='text-center mb-4'>My movie list</h2>

        <form onSubmit={(e) => e.preventDefault}>
          <div className="input-group mb-3">
            <label className="input-group-text" for="inputGroupSelect">Genre</label>
            <select className="form-select" id="inputGroupSelect">
              <option value='' selected>Choose...</option>
              <option value="fantascienza">Fantascienza</option>
              <option value="thriller">Thriller</option>
              <option value="romantico">Romantico</option>
              <option value="azione">Azione</option>
            </select>
            <button className="btn btn-outline-secondary" type="submit">Search</button>
          </div>
        </form>

        <ul className='list-group mb-4 shadow-sm'>
          {
            movies.map((movie, index) => (
              <li key={index} className='list-group-item align-items-center d-flex justify-content-between'>
                <div>
                  {movie.title}
                </div>
                <div>
                  {movie.genre}
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default App
