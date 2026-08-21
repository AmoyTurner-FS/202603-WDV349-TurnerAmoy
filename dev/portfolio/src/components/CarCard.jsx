import { Link } from "react-router-dom";
import "./CarCard.css";

function CarCard({ id, year, make, model, price, mileage }) {
  return (
    <article className="car-card">
      <div className="car-card-image">
        <span>Vehicle Image</span>
      </div>

      <div className="car-card-content">
        <h3>
          {year} {make} {model}
        </h3>

        <p>
          <strong>Price:</strong> ${price}
        </p>

        <p>
          <strong>Mileage:</strong> {mileage} miles
        </p>

        <Link to={`/vehicle/${id}`} className="car-card-button">
          View Vehicle
        </Link>
      </div>
    </article>
  );
}

export default CarCard;
