import "./SearchBar.css";

function SearchBar() {
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
          <select id="search-year" defaultValue="">
            <option value="" disabled>
              Select Year
            </option>
          </select>
        </div>

        <div className="search-field">
          <label htmlFor="search-make">Make</label>
          <select id="search-make" defaultValue="">
            <option value="" disabled>
              Select Make
            </option>
          </select>
        </div>

        <div className="search-field">
          <label htmlFor="search-model">Model</label>
          <select id="search-model" defaultValue="">
            <option value="" disabled>
              Select Model
            </option>
          </select>
        </div>

        <button type="button" className="search-button">
          <span>Search</span>
          <span className="search-button-arrow">→</span>
        </button>
      </div>
    </section>
  );
}

export default SearchBar;
