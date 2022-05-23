import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ movie }) => {

  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } = useContext(GlobalContext)

  let storedMovie = watchlist.find(o => o.id === movie.id)
  let storedMovieWatched = watched.find(o => o.id === movie.id)

  const watchlistDisabled = storedMovie ? true : storedMovieWatched ? true : false
  const watchedDisabled = storedMovieWatched ? true : false

  return (
    <div className="result-card">

      {/* POSTER WRAPPER START */}
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      {/* POSTER WRAPPER END */}

      {/* INFO START */}
      <div className="info">
        {/* RELEASE DATE START */}
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>
        {/* RELEASE DATE END */}

        <div className="controls">
          {/* WATCHLIST BUTTON START */}
          <button
            className="btn"
            onClick={() => addMovieToWatchlist(movie)}
            disabled={watchlistDisabled}
          >
            Add to Watchlist
          </button>
          {/* WATCHLIST BUTTON END */}

          {/* WATCHED BUTTON START */}
          <button
            className="btn"
            onClick={() => addMovieToWatched(movie)}
            disabled={watchedDisabled}
          >
            Add to Watched
          </button>
          {/* WATCHED BUTTON END */}
        </div>
      </div>
      {/* INFO END */}

    </div>
  );
};
