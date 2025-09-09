import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_PATH } from "../assets/data/tmdbService";
import { useGetMovie } from "../hooks/useSearchMovies";
const MovieDetail = () => {
  const { id } = useParams();
  const { data } = useGetMovie({
    url: `${BASE_PATH}/movie/${id}?language=ko-KR`,
  });
  const [movie, setMovie] = useState({});
  useEffect(() => {
    if (data) {
      setMovie(data);
    }
  }, [data]);
  console.log(movie);
  return (
    <div className="min-h-screen bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 w-100%">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/5 flex justify-center">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
              className="w-full h-full max-w-sm rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="md:w-3/5">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold">{movie.title}</h1>
              <div className="bg-yellow-500 text-gray-900 font-bold px-3 py-1 rounded-full">
                {movie.vote_average && movie.vote_average.toFixed(1)}
              </div>
            </div>
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {movie.genres &&
                  movie.genres.map((genre, index) => (
                    <span
                      key={index}
                      className="bg-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {genre.name}
                    </span>
                  ))}
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">줄거리</h2>
              <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
