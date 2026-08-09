import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h1>CarFinder</h1>
      </div>

      <nav className="sidebar-nav">
        <a href="#">Dashboard</a>
        <a href="#">Search Cars</a>
        <a href="#">Add Vehicle</a>
        <a href="#">Favorites</a>
      </nav>
    </aside>
  );
}

export default Sidebar;
