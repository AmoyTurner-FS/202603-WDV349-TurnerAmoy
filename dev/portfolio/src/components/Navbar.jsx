import { useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  const pageTitles = {
    "/": "Dashboard",
    "/search": "Search Cars",
    "/add-vehicle": "Add New Vehicle",
    "/favorites": "Favorites",
  };

  let pageTitle = pageTitles[location.pathname] || "Vehicle Details";

  return (
    <header className="navbar">
      <h1>{pageTitle}</h1>

      <div className="navbar-actions">
        <div className="profile-circle"></div>
        <span className="menu-icon">☰</span>
      </div>
    </header>
  );
}

export default Navbar;
