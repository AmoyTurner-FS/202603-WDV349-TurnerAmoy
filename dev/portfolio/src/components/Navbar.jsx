import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <h2>Dashboard</h2>

      <div className="navbar-right">
        <div className="avatar"></div>
        <button className="menu-button">☰</button>
      </div>
    </header>
  );
}

export default Navbar;
