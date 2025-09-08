import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import { API_KEY, BASE_PATH, getMovies } from "../assets/data/tmdbService";

const URL = `${BASE_PATH}/movie/popular?api_key=${API_KEY}&language=ko-KR&include_adult=false&sort_by=popularity.desc&page=1&with_genres=`;

function MovieGrid() {
  const movies = getMovies({ url: URL });
  const [nonAdultsMovies, setNonAdultsMovies] = useState([]);
  useEffect(() => {
    if (movies.data) {
      setNonAdultsMovies(() => movies.data.filter((e) => !e.adult));
    }
  }, [movies.data]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {nonAdultsMovies &&
        nonAdultsMovies.map((movie) => (
          <Link
            to={`/movie/detail/${movie.id}`}
            key={movie.id}
            className="block no-underline"
          >
            <MovieCard movie={movie} />
          </Link>
        ))}
    </div>
  );
}
export default MovieGrid;
