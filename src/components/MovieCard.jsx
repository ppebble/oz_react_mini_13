import { useState } from "react";

const MovieCard = ({ movie }) => {
  const [isLiked, setIsLiked] = useState(false);

  // 평점에 따른 색상 결정
  const getRatingColor = (rating) => {
    if (rating >= 7.5) return "bg-green-500 text-white";
    if (rating >= 5.0) return "bg-yellow-500 text-white";
    return "bg-red-500 text-white";
  };

  const handleLikeClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <div className="movie-card bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col border border-gray-800">
      <div className="movie-card-image relative flex-shrink-0">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute top-2 right-2 ${getRatingColor(
            movie.vote_average
          )} text-xs font-bold px-2 py-1 rounded-full`}
        >
          {movie.vote_average.toFixed(1)}
        </div>
      </div>
      <div className="movie-card-content p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-base mb-2 line-clamp-2 text-white">
          {movie.title}
        </h3>
        <p className="text-gray-400 text-sm mb-3">{movie.release_date}</p>
        <div className="flex justify-between items-center">
          <button
            className={`p-2 rounded-full duration-200 text-gray-400 hover:text-red-500 hover:bg-gray-800`}
            onClick={handleLikeClick}
          >
            {isLiked ? "💖" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
