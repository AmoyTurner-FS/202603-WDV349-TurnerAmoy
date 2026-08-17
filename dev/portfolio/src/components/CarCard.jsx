import "./CarCard.css";

function CarCard({ year, make, model, price, mileage }) {
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

        <button type="button" className="car-card-button">
          View Vehicle
        </button>
      </div>
    </article>
  );
}

export default CarCard;
