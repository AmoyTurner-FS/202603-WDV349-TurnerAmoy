import { Link } from "react-router-dom";
import "./CarCard.css";

function CarCard({
  id,
  year,
  make,
  model,
  price,
  mileage,
  showRemoveFavorite = false,
}) {
  return (
    <article className="car-card">
      <div className="car-card-image">
        <span className="car-card-image-label">Vehicle Image</span>

        <div className="car-card-year">{year}</div>
      </div>

      <div className="car-card-content">
        <p className="car-card-label">Available Vehicle</p>

        <h3>
          {make} {model}
        </h3>

        <div className="car-card-details">
          <div className="car-card-detail">
            <span>Price</span>
            <strong>${Number(price).toLocaleString()}</strong>
          </div>

          <div className="car-card-detail">
            <span>Mileage</span>
            <strong>{Number(mileage).toLocaleString()} mi</strong>
          </div>
        </div>

        <div className="car-card-actions">
          <Link to={`/vehicle/${id}`} className="car-card-button">
            View Vehicle
            <span>→</span>
          </Link>

          {showRemoveFavorite && (
            <button type="button" className="remove-favorite-button">
              ♡ Remove Favorite
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default CarCard;
