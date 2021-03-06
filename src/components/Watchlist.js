import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { MovieCard } from './MovieCard'

export const Watchlist = () => {

  const { watchlist } = useContext(GlobalContext)

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>

          <span className="count-pill">
            {watchlist.length === 0 ? "No Movies" : watchlist.length === 1 ? `${watchlist.length} Movie` : `${watchlist.length} Movies`}
            {/* {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"} */}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div style={{ height: "65vh", overflow: "hidden", overflowY: (watchlist.length < 6) ? "hidden" : "scroll" }}>
            <div className='movie-grid'>
              {watchlist.map(movie => (
                <MovieCard movie={movie} type="watchlist" />
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
