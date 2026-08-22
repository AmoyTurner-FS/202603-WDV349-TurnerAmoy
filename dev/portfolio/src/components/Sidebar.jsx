import { NavLink } from "react-router-dom";
import carFinderLogo from "../assets/carfinder-logo.png";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo-mark">
          <img src={carFinderLogo} alt="CarFinder logo" />
        </div>

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
    </aside>
  );
}

export default Sidebar;
