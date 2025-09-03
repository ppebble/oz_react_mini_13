import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

function MovieGrid({ movieData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {movieData.results.map((movie) => (
        <Link
          to={`/movie/detail`}
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
