import { useState } from "react";
import { NavLink } from "react-router-dom";
import carFinderLogo from "../assets/carfinder-logo.png";
import "./Sidebar.css";

function Sidebar() {
  const [isLogoOpen, setIsLogoOpen] = useState(false);

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <button
          type="button"
          className="sidebar-logo-mark"
          onClick={() => setIsLogoOpen(true)}
          aria-label="View larger CarFinder logo"
        >
          <img src={carFinderLogo} alt="CarFinder logo" />
        </button>

        <div className="sidebar-brand">
          <h1>CarFinder</h1>
          <span>Premium Auto Search</span>
        </div>
      </div>

      <div className="sidebar-menu-label">Navigation</div>

      <nav className="sidebar-nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span className="sidebar-link-icon">⌂</span>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span className="sidebar-link-icon">⌕</span>
          <span>Search Cars</span>
        </NavLink>

        <NavLink
          to="/add-vehicle"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span className="sidebar-link-icon">＋</span>
          <span>Add Vehicle</span>
        </NavLink>

        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span className="sidebar-link-icon">♡</span>
          <span>Favorites</span>
        </NavLink>
      </nav>

      {isLogoOpen && (
        <div
          className="logo-modal-overlay"
          onClick={() => setIsLogoOpen(false)}
        >
          <div
            className="logo-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="logo-modal-close"
              onClick={() => setIsLogoOpen(false)}
              aria-label="Close logo"
            >
              ×
            </button>

            <img src={carFinderLogo} alt="CarFinder logo enlarged" />
          </div>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
