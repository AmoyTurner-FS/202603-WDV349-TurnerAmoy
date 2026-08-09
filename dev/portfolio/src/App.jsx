import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="content-area">
        <Navbar />

        <main className="main-content">
          <SearchBar />
        </main>
      </div>
    </div>
  );
}

export default App;
