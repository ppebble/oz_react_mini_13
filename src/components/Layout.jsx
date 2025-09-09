import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div className="app-container min-h-screen w-[100vw] bg-gray-900">
      <NavBar />
      <main className="main-content w-[90vw] mx-auto py-8 bg-gray-800 px-8 rounded-lg">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;