import { useState, useEffect } from 'react'
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

  // Creo un nuovo array da quello iniziale per recuperare tutti i generi
  // senza doppioni
  const genres = []
  for (let i = 0; i < initialMovies.length; i++) {
    const myGenre = initialMovies[i].genre;
    if (!genres.includes(myGenre)) {
      genres.push(myGenre)
    }
  }

  const [selectedGenre, setSelectedGenre] = useState("")

  useEffect(() => {
    if (selectedGenre === "") {
      setMovies(initialMovies);
    } else {
      const filteredMovies = initialMovies.filter(
        (movie) => movie.genre === selectedGenre
      );
      setMovies(filteredMovies);
    }
  }, [selectedGenre])

  return (
    <>
      <div className="container py-4">
        <h2 className='text-center mb-4'>My movie list</h2>

        <form onSubmit={(e) => e.preventDefault}>
          <div className="input-group mb-3">
            <label className="input-group-text">Genre</label>
            <select className="form-select" value={selectedGenre} onChange={e => setSelectedGenre(e.target.value)}>
              <option value=''>Choose...</option>
              {
                genres.map((current, index) =>
                  <option key={index} value={current}>{current}</option>
                )
              }
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
