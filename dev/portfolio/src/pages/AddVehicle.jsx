import { useState } from "react";
import { addVehicle } from "../utils/inventory";
import "./AddVehicle.css";

function AddVehicle() {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const vehicle = {
      year: formData.get("year"),
      make: formData.get("make"),
      model: formData.get("model"),
      price: formData.get("price"),
      mileage: formData.get("mileage"),
      color: formData.get("color"),
      transmission: formData.get("transmission"),
      fuelType: formData.get("fuelType"),
      vin: formData.get("vin"),
      description: formData.get("description"),
    };

    addVehicle(vehicle);

    event.currentTarget.reset();
    setMessage("Vehicle added to inventory.");
  }

  return (
    <section className="add-vehicle-page">
      <div className="add-vehicle-hero">
        <div>
          <p className="add-vehicle-eyebrow">Inventory Management</p>
          <h2>Add a New Vehicle</h2>
          <p className="add-vehicle-description">
            Add vehicle information to expand the CarFinder inventory.
          </p>
        </div>

        <div className="add-vehicle-badge">
          <span>+</span>
          NEW LISTING
        </div>
      </div>

      <form className="vehicle-form" onSubmit={handleSubmit}>
        <div className="form-section-heading">
          <div>
            <p className="add-vehicle-eyebrow">Vehicle Information</p>
            <h3>Basic Details</h3>
          </div>

          <p>Enter the main information for the vehicle.</p>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="year">Year</label>
            <input
              type="number"
              id="year"
              name="year"
              placeholder="2024"
              min="1980"
              max="2026"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="make">Make</label>
            <input
              type="text"
              id="make"
              name="make"
              placeholder="Honda"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="model">Model</label>
            <input
              type="text"
              id="model"
              name="model"
              placeholder="Civic"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="24500"
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mileage">Mileage</label>
            <input
              type="number"
              id="mileage"
              name="mileage"
              placeholder="28000"
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="color">Color</label>
            <input
              type="text"
              id="color"
              name="color"
              placeholder="Black"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="transmission">Transmission</label>
            <select
              id="transmission"
              name="transmission"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select Transmission
              </option>
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="fuelType">Fuel Type</label>
            <select id="fuelType" name="fuelType" defaultValue="" required>
              <option value="" disabled>
                Select Fuel Type
              </option>
              <option value="gasoline">Gasoline</option>
              <option value="diesel">Diesel</option>
              <option value="hybrid">Hybrid</option>
              <option value="electric">Electric</option>
            </select>
          </div>
        </div>

        <div className="form-divider"></div>

        <div className="form-section-heading form-section-secondary">
          <div>
            <p className="add-vehicle-eyebrow">Listing Details</p>
            <h3>Additional Information</h3>
          </div>

          <p>Add identifying information and a description.</p>
        </div>

        <div className="form-group full-width">
          <label htmlFor="vin">VIN</label>
          <input
            type="text"
            id="vin"
            name="vin"
            placeholder="Vehicle Identification Number"
            minLength="11"
            maxLength="17"
            required
          />
        </div>

        <div className="form-group full-width">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            placeholder="Add a short description about the vehicle..."
            required
          ></textarea>
        </div>

        {message && <p className="form-message">{message}</p>}

        <div className="form-actions">
          <button type="reset" className="secondary-button">
            Clear
          </button>

          <button type="submit" className="primary-button">
            Add Vehicle <span>→</span>
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddVehicle;
