import { useEffect, useState } from "react";
import { getVehicleMakes, getModelsForMakeYear } from "../services/vehicleApi";
import "./SearchBar.css";

const currentYear = new Date().getFullYear();

const vehicleYears = Array.from(
  { length: currentYear - 1980 + 1 },
  (_, index) => currentYear - index
);

function SearchBar({ onSearch, initialFilters = {} }) {
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedYear, setSelectedYear] = useState(initialFilters.year || "");
  const [selectedMake, setSelectedMake] = useState(initialFilters.make || "");
  const [selectedModel, setSelectedModel] = useState(
    initialFilters.model || ""
  );

  useEffect(() => {
    const loadMakes = async () => {
      try {
        const results = await getVehicleMakes();

        const sortedMakes = results
          .map((item) => item.MakeName)
          .filter(Boolean)
          .sort((a, b) => a.localeCompare(b));

        setMakes(sortedMakes);
      } catch (error) {
        console.error("Failed to load vehicle makes:", error);
      }
    };

    loadMakes();
  }, []);

  useEffect(() => {
    const loadModels = async () => {
      if (!selectedYear || !selectedMake) {
        setModels([]);
        setSelectedModel("");
        return;
      }

      try {
        const results = await getModelsForMakeYear(selectedMake, selectedYear);

        const sortedModels = [
          ...new Set(results.map((item) => item.Model_Name).filter(Boolean)),
        ].sort((a, b) => a.localeCompare(b));

        setModels(sortedModels);
      } catch (error) {
        console.error("Failed to load vehicle models:", error);
        setModels([]);
      }
    };

    loadModels();
  }, [selectedYear, selectedMake]);

  return (
    <section className="search-section">
      <div className="search-heading">
        <div>
          <p className="search-heading-label">Vehicle Search</p>
          <h3>Search Cars</h3>
        </div>

        <p className="search-heading-description">
          Narrow down the inventory to find what you're looking for.
        </p>
      </div>

      <div className="search-controls">
        <div className="search-field">
          <label htmlFor="search-year">Year</label>
          <select
            id="search-year"
            value={selectedYear}
            onChange={(event) => {
              setSelectedYear(event.target.value);
              setSelectedMake("");
              setSelectedModel("");
              setModels([]);
            }}
          >
            <option value="" disabled>
              Select Year
            </option>

            {vehicleYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="search-field">
          <label htmlFor="search-make">Make</label>
          <select
            id="search-make"
            value={selectedMake}
            onChange={(event) => {
              setSelectedMake(event.target.value);
              setSelectedModel("");
              setModels([]);
            }}
            disabled={!selectedYear}
          >
            <option value="" disabled>
              {selectedYear ? "Select Make" : "Select Year First"}
            </option>

            {makes.map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>
        </div>

        <div className="search-field">
          <label htmlFor="search-model">Model</label>
          <select
            id="search-model"
            value={selectedModel}
            onChange={(event) => setSelectedModel(event.target.value)}
            disabled={!selectedYear || !selectedMake}
          >
            <option value="" disabled>
              {!selectedYear || !selectedMake
                ? "Select Year & Make First"
                : "Select Model"}
            </option>

            {models.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          className="search-button"
          onClick={() =>
            onSearch({
              year: selectedYear,
              make: selectedMake,
              model: selectedModel,
            })
          }
          disabled={!selectedYear}
        >
          <span>Search</span>
          <span className="search-button-arrow">→</span>
        </button>
      </div>
    </section>
  );
}

export default SearchBar;
