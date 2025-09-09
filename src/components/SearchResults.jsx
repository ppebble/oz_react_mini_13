// components/SearchResults.jsx
import { useSearchMovies } from '../hooks/useSearchMovies';
import MovieCard from './MovieCard';

export default function SearchResults({ searchTerm, onResultClick }) {
  const { data: movies, loading, error } = useSearchMovies(searchTerm);

  if (!searchTerm) return null;

  return (
    <div className="bg-white rounded-lg shadow-xl max-h-96 overflow-y-auto">
      {loading ? (
        <div className="p-4 text-center text-gray-500">검색 중...</div>
      ) : error ? (
        <div className="p-4 text-center text-red-500">검색 중 오류 발생</div>
      ) : movies && movies.length > 0 ? (
        <>
          <div className="p-3 border-b border-gray-200">
            <h4 className="font-semibold text-gray-800">
              검색 결과 ({movies.length}건)
            </h4>
          </div>
          <div className="divide-y divide-gray-100">
            {movies.slice(0, 8).map(movie => (
              <div 
                key={movie.id} 
                className="p-3 hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => onResultClick()}
              >
                <MovieCard movie={movie} compact={true} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="p-4 text-center text-gray-500">
          "{searchTerm}"에 대한 검색 결과가 없습니다.
        </div>
      )}
    </div>
  );
}