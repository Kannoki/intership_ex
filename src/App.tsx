import "./App.scss";
import NavbarMobile from "./components/NavbarMobile";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <NavbarMobile />
      <Outlet />
    </div>
  );
}

export default App;
