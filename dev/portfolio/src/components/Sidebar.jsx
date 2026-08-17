import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h1>CarFinder</h1>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/search">Search Cars</NavLink>
        <NavLink to="/add-vehicle">Add Vehicle</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
