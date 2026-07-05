import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/coffe-logo.jpg";
import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <header className={`header ${isAdminRoute ? "header--admin" : ""}`}>
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Origen Coffee Logo" className="logo-img" />
          <span className="logo-text">Origen</span>
        </Link>
      </div>

      <Nav />
    </header>
  );
};
