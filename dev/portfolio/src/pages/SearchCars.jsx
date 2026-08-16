import SearchBar from "../components/SearchBar";
import "./SearchCars.css";

function SearchCars() {
  return (
    <section className="search-page">
      <SearchBar />

      <div className="search-results-layout">
        <div className="vehicle-placeholder"></div>
        <div className="vehicle-placeholder"></div>
        <div className="vehicle-placeholder"></div>
        <div className="vehicle-placeholder"></div>
        <div className="vehicle-placeholder"></div>
        <div className="vehicle-placeholder"></div>
      </div>
    </section>
  );
}

export default SearchCars;
