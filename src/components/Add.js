import { useState } from "react";
import axios from "axios";
import { ResultCard } from "./ResultCard";

export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => setResults(res.data.results));
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>

          <div style={{ height: "65vh", overflow: "hidden", overflowY: (query.length == 0 || results.length < 4) ? "hidden" : "scroll" }}>
            {
              results.length > 0 && query.length > 0 && (
                <ul className="results">
                  {results.map((movie) => (
                    <li key={movie.id}>
                      <ResultCard movie={movie} />
                    </li>
                  ))}
                </ul>
              )
            }
          </div>

        </div>
      </div>
    </div>
  );
};
