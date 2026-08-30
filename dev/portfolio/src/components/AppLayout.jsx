import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./AppLayout.css";

function AppLayout({ children }) {
  return (
    <div className="app-wrapper">
      <div className="app-layout">
        <Sidebar />

        <div className="content-area">
          <Navbar />

          <main className="main-content">{children}</main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;
