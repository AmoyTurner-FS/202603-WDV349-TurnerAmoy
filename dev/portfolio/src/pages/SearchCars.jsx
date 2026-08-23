import { useState } from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import CarCard from "../components/CarCard";
import vehicles from "../data/vehicles";
import "./SearchCars.css";

const filterVehicles = ({ year, make, model }) => {
  if (!year) {
    return vehicles;
  }

  return vehicles.filter((vehicle) => {
    const matchesYear = vehicle.year === year;

    const matchesMake =
      !make || vehicle.make.toLowerCase() === make.toLowerCase();

    const matchesModel =
      !model || vehicle.model.toLowerCase() === model.toLowerCase();

    return matchesYear && matchesMake && matchesModel;
  });
};

function SearchCars() {
  const location = useLocation();

  const savedSearch = location.state?.searchState || {
    year: "",
    make: "",
    model: "",
  };

  const [filteredVehicles, setFilteredVehicles] = useState(() =>
    filterVehicles(savedSearch)
  );

  const [activeSearch, setActiveSearch] = useState(savedSearch);

  const handleSearch = (filters) => {
    const results = filterVehicles(filters);

    setFilteredVehicles(results);
    setActiveSearch(filters);
  };

  return (
    <section className="search-page">
      <div className="search-hero">
        <div className="search-hero-content">
          <p className="search-eyebrow">Find Your Next Vehicle</p>
          <h2>Explore the Inventory</h2>
          <p className="search-description">
            Search through available vehicles by year, make, and model.
          </p>
        </div>

        <div className="search-accent">
          <span>CARFINDER</span>
        </div>
      </div>

      <div className="search-filter-panel">
        <SearchBar onSearch={handleSearch} initialFilters={savedSearch} />
      </div>

      <div className="results-header">
        <div>
          <p className="results-eyebrow">Available Inventory</p>
          <h3>Search Results</h3>
        </div>

        <div className="results-count">
          <strong>{filteredVehicles.length}</strong>
          <span>Vehicles Found</span>
        </div>
      </div>

      <div className="search-results-layout">
        {filteredVehicles.length > 0 ? (
          filteredVehicles.map((vehicle) => (
            <CarCard
              key={vehicle.id}
              id={vehicle.id}
              year={vehicle.year}
              make={vehicle.make}
              model={vehicle.model}
              price={vehicle.price}
              mileage={vehicle.mileage}
              searchState={activeSearch}
            />
          ))
        ) : (
          <div className="no-results">
            <h3>No Vehicles Found</h3>
            <p>Try a different year, make, or model.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default SearchCars;
