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

  const pageLabels = {
    "/": "Overview",
    "/search": "Vehicle Discovery",
    "/add-vehicle": "Inventory Management",
    "/favorites": "Saved Collection",
  };

  let pageTitle = pageTitles[location.pathname] || "Vehicle Details";
  let pageLabel = pageLabels[location.pathname] || "Vehicle Profile";

  return (
    <header className="navbar">
      <div className="navbar-title">
        <span className="navbar-label">{pageLabel}</span>
        <h1>{pageTitle}</h1>
      </div>

      <div className="navbar-actions">
        <div className="profile-circle">
          <span>AT</span>
        </div>

        <button
          type="button"
          className="menu-button"
          aria-label="Open account menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
