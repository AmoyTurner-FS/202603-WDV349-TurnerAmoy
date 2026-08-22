import CarCard from "../components/CarCard";
import "./Favorites.css";

function Favorites() {
  const favoriteVehicles = [
    {
      id: "2",
      year: "2021",
      make: "Toyota",
      model: "Camry",
      price: "23000",
      mileage: "32000",
    },
    {
      id: "5",
      year: "2022",
      make: "Audi",
      model: "A4",
      price: "31000",
      mileage: "26000",
    },
    {
      id: "6",
      year: "2021",
      make: "Lexus",
      model: "IS 300",
      price: "32500",
      mileage: "30000",
    },
  ];

  return (
    <section className="favorites-page">
      <div className="favorites-hero">
        <div>
          <p className="favorites-eyebrow">Your Collection</p>
          <h2>Favorite Vehicles</h2>
          <p className="favorites-description">
            Keep track of the vehicles that caught your attention.
          </p>
        </div>

        <div className="favorites-summary">
          <span className="favorites-summary-number">
            {favoriteVehicles.length}
          </span>
          <span className="favorites-summary-label">Saved Vehicles</span>
        </div>
      </div>

      <div className="favorites-content">
        <div className="favorites-heading">
          <div>
            <p className="favorites-eyebrow">Saved Inventory</p>
            <h3>Your Favorites</h3>
          </div>

          <p className="favorites-note">
            Your saved vehicles will stay here for easy access.
          </p>
        </div>

        {favoriteVehicles.length > 0 ? (
          <div className="favorites-grid">
            {favoriteVehicles.map((vehicle) => (
              <CarCard
                key={vehicle.id}
                id={vehicle.id}
                year={vehicle.year}
                make={vehicle.make}
                model={vehicle.model}
                price={vehicle.price}
                mileage={vehicle.mileage}
                showRemoveFavorite={true}
              />
            ))}
          </div>
        ) : (
          <div className="favorites-empty">
            <div className="favorites-empty-icon">♡</div>
            <h3>No Favorites Yet</h3>
            <p>
              Vehicles you save will appear here so you can easily find them
              again.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Favorites;
