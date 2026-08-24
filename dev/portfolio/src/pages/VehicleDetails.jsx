import { useLocation, useNavigate } from "react-router-dom";
import "./VehicleDetails.css";

function VehicleDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const fromPage = location.state?.from || "search";
  const searchState = location.state?.searchState;

  const handleBack = () => {
    if (fromPage === "favorites") {
      navigate("/favorites");
    } else {
      navigate("/search", {
        state: { searchState },
      });
    }
  };

  const vehicle = {
    year: 2022,
    make: "Honda",
    model: "Civic",
    price: 24500,
    mileage: 28000,
    color: "Black",
    transmission: "Automatic",
    fuelType: "Gasoline",
    vin: "2HGFC2F59NH000001",
    description:
      "A reliable and fuel efficient sedan with low mileage and a clean interior.",
  };

  return (
    <section className="vehicle-details-page">
      <div className="vehicle-details-hero">
        <div>
          <p className="vehicle-details-eyebrow">Vehicle Profile</p>
          <h2>
            {vehicle.year} {vehicle.make} {vehicle.model}
          </h2>
          <p className="vehicle-details-subtext">
            Review the full details for this vehicle.
          </p>
        </div>

        <button className="favorite-button">♡ Add to Favorites</button>
      </div>

      <button className="back-button" onClick={handleBack}>
        ← Back to {fromPage === "favorites" ? "Favorites" : "Search"}
      </button>

      <div className="vehicle-details-card">
        <div className="vehicle-details-image">
          <span>Vehicle Image</span>

          <div className="vehicle-image-year">{vehicle.year}</div>
        </div>

        <div className="vehicle-details-content">
          <div className="vehicle-price-section">
            <p className="vehicle-details-eyebrow">Listed Price</p>
            <p className="vehicle-price">${vehicle.price.toLocaleString()}</p>
          </div>

          <div className="vehicle-info-grid">
            <div>
              <span>Mileage</span>
              <strong>{vehicle.mileage.toLocaleString()} miles</strong>
            </div>

            <div>
              <span>Color</span>
              <strong>{vehicle.color}</strong>
            </div>

            <div>
              <span>Transmission</span>
              <strong>{vehicle.transmission}</strong>
            </div>

            <div>
              <span>Fuel Type</span>
              <strong>{vehicle.fuelType}</strong>
            </div>

            <div className="vehicle-info-wide">
              <span>VIN</span>
              <strong>{vehicle.vin}</strong>
            </div>
          </div>

          <div className="vehicle-description">
            <p className="vehicle-details-eyebrow">About This Vehicle</p>
            <h3>Description</h3>
            <p>{vehicle.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VehicleDetails;
