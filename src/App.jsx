import { Route, Routes } from "react-router-dom";
import "./App.css";
import MovieGrid from "./components/MovieGrid";
import Layout from "./components/Layout";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    //
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MovieGrid />} />
        <Route path="/movie/detail/:id" element={<MovieDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
