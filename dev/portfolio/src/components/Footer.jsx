import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span className="footer-brand">CarFinder</span>
        <span className="footer-tagline">Premium Auto Search</span>
      </div>

      <div className="footer-right">
        <span>© 2026 CarFinder</span>
        <span className="footer-divider"></span>
        <span>Built for better vehicle discovery</span>
      </div>
    </footer>
  );
}

export default Footer;
