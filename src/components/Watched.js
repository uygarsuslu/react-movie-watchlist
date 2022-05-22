import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { MovieCard } from "./MovieCard"

export const Watched = () => {

  const { watched } = useContext(GlobalContext)

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched Movies</h1>

          <span className="count-pill">
            {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watched.length > 0 ? (
          <div style={{ height: "65vh", overflow: "hidden", overflowY: (watched.length < 6) ? "hidden" : "scroll" }}>
            <div className='movie-grid'>
              {watched.map(movie => (
                <MovieCard movie={movie} type="watched" />
              ))}
            </div>
          </div>
        ) : (
          <h2 className='no-movies'>No movies in your list, add some!</h2>
        )}
      </div>
    </div>
  )
}
