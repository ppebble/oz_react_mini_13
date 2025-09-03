import { Route, Routes } from "react-router-dom";
import "./App.css";
import movieData from "./assets/data/movieListData.json";
import movieDetailData from "./assets/data/movieDetailData.json";
import MovieGrid from "./components/MovieGrid";
import Layout from "./components/Layout";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    //
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MovieGrid movieData={movieData} />} />
        <Route
          path="/movie/detail"
          element={<MovieDetail movie={movieDetailData} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
