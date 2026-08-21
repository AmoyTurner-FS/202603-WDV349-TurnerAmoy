import "./VehicleDetails.css";

function VehicleDetails() {
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
      "A reliable and fuel-efficient sedan with low mileage and a clean interior.",
  };

  return (
    <section className="vehicle-details-page">
      <button className="back-button">← Back to Search</button>

      <div className="vehicle-details-card">
        <div className="vehicle-details-image">
          <span>Vehicle Image</span>
        </div>

        <div className="vehicle-details-content">
          <div className="vehicle-details-header">
            <div>
              <h2>
                {vehicle.year} {vehicle.make} {vehicle.model}
              </h2>
              <p className="vehicle-price">${vehicle.price.toLocaleString()}</p>
            </div>

            <button className="favorite-button">♡ Add to Favorites</button>
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

            <div>
              <span>VIN</span>
              <strong>{vehicle.vin}</strong>
            </div>
          </div>

          <div className="vehicle-description">
            <h3>Description</h3>
            <p>{vehicle.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VehicleDetails;
