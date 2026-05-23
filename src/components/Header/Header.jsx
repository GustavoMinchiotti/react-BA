import { Link } from "react-router-dom";
import logo from "../../assets/coffe-logo.jpg";

import { Nav } from "../Nav/Nav";

import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to={"/"}>
          <img src={logo} alt="Logo Origen" />

          <span>Origen</span>
        </Link>
      </div>

      <Nav />
    </header>
  );
};