import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./AppLayout.css";

function AppLayout({ children }) {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="content-area">
        <Navbar />

        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}

export default AppLayout;
