import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="app-container min-h-screen w-[100vw]  bg-gray-900 ">
      <div className="header-section flex justify-between items-center mb-8 p-3">
        <h2 className="title text-2xl font-bold text-white pt-2 pl-10">
          OZ MOVIE
        </h2>
        <div className="searchbar flex">
          <input
            type="text"
            placeholder="Search . . . "
            className="pl-10 pr-4 py-2 bg-gray-200 rounded-full w-[30vw]"
          />
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
      <main className="main-content w-[90vw] mx-auto py-8 bg-gray-800 px-8">
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
