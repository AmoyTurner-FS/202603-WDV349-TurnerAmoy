import { useState } from "react";
import SearchBar from "../components/SearchBar";
import CarCard from "../components/CarCard";
import vehicles from "../data/vehicles";
import "./SearchCars.css";

function SearchCars() {
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);

  const handleSearch = ({ year, make, model }) => {
    const results = vehicles.filter((vehicle) => {
      const matchesYear = vehicle.year === year;

      const matchesMake =
        !make || vehicle.make.toLowerCase() === make.toLowerCase();

      const matchesModel =
        !model || vehicle.model.toLowerCase() === model.toLowerCase();

      return matchesYear && matchesMake && matchesModel;
    });

    setFilteredVehicles(results);
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
        <SearchBar onSearch={handleSearch} />
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
