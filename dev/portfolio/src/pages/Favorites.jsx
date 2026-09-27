import { useState } from "react";
import CarCard from "../components/CarCard";
import { getAllVehicles } from "../utils/inventory";
import { getFavoriteIds, removeFavorite } from "../utils/favorites";
import "./Favorites.css";

function Favorites() {
  document.title = "CarFinder | Favorites";
  const [favoriteIds, setFavoriteIds] = useState(() => getFavoriteIds());

  const favoriteVehicles = getAllVehicles().filter((vehicle) =>
    favoriteIds.some((id) => String(id) === String(vehicle.id))
  );

  const handleRemoveFavorite = (vehicleId) => {
    const updatedFavorites = removeFavorite(vehicleId);
    setFavoriteIds(updatedFavorites);
  };

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
                onRemoveFavorite={handleRemoveFavorite}
                fromPage="favorites"
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
