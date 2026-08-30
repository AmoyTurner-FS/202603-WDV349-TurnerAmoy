import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const pageTitle = pageTitles[location.pathname] || "Vehicle Details";
  const pageLabel = pageLabels[location.pathname] || "Vehicle Profile";

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-title">
        <span className="navbar-label">{pageLabel}</span>
        <h1>{pageTitle}</h1>
      </div>

      <div className="navbar-actions" ref={menuRef}>
        <div className="profile-circle">
          <span>AT</span>
        </div>

        <button
          type="button"
          className="menu-button"
          aria-label="Open account menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {isMenuOpen && (
          <div className="account-menu">
            <button type="button" onClick={closeMenu}>
              Profile
            </button>
            <button type="button" onClick={closeMenu}>
              Notifications
            </button>
            <button type="button" onClick={closeMenu}>
              Settings
            </button>
            <button type="button" onClick={closeMenu}>
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
