// components/NavBar.jsx
import { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import SearchResults from './SearchResults';

export default function NavBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setTimeout(() => setIsSearchFocused(false), 200);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="header-section flex justify-between items-center mb-8 p-3 relative">
      <h2 className="title text-2xl font-bold text-white pt-2 pl-10">
        OZ MOVIE
      </h2>
      
      <div className="searchbar flex relative">
        <input
          type="text"
          placeholder="Search . . . "
          className="pl-10 pr-4 py-2 bg-gray-200 rounded-full w-[30vw]"
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
        />
        {searchTerm && (
          <button 
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        )}
        
        {isSearchFocused && searchTerm && (
          <div className="absolute top-full left-0 right-0 mt-2 z-50">
            <SearchResults 
              searchTerm={debouncedSearchTerm} 
              onResultClick={clearSearch}
            />
          </div>
        )}
      </div>

      <div className="button-group flex space-x-3 pr-5">
        <button className="filter-btn px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
          Login
        </button>
        <button className="sort-btn px-4 py-2 border border-gray-600 hover:bg-gray-800 text-gray-300 rounded-lg transition-colors duration-200">
          Sign In
        </button>
      </div>
    </div>
  );
}