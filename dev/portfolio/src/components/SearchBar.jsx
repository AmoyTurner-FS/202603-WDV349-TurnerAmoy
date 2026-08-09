import "./SearchBar.css";

function SearchBar() {
  return (
    <section className="search-section">
      <h3>Search Cars</h3>

      <div className="search-controls">
        <select defaultValue="">
          <option value="" disabled>
            Select Year
          </option>
        </select>

        <select defaultValue="">
          <option value="" disabled>
            Select Make
          </option>
        </select>

        <select defaultValue="">
          <option value="" disabled>
            Select Model
          </option>
        </select>

        <button type="button">Search</button>
      </div>
    </section>
  );
}

export default SearchBar;
