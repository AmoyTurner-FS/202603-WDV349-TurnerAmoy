import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <section className="dashboard-page">
      <div className="dashboard-intro">
        <div>
          <p className="dashboard-eyebrow">Inventory Overview</p>
          <h2>Welcome back</h2>
          <p className="dashboard-subtext">
            Here’s a quick look at what’s happening with CarFinder.
          </p>
        </div>
      </div>

      <div className="stats-grid">
        <article className="stat-card stat-card-gold">
          <span>Total Vehicles</span>
          <strong>24</strong>
          <small>Available inventory</small>
        </article>

        <article className="stat-card stat-card-purple">
          <span>Favorites</span>
          <strong>8</strong>
          <small>Saved vehicles</small>
        </article>

        <article className="stat-card">
          <span>Average Price</span>
          <strong>$28,450</strong>
          <small>Across inventory</small>
        </article>

        <article className="stat-card">
          <span>Recently Added</span>
          <strong>5</strong>
          <small>This week</small>
        </article>
      </div>

      <div className="dashboard-main-grid">
        <section className="dashboard-panel">
          <div className="panel-heading">
            <div>
              <p className="panel-eyebrow">Latest Inventory</p>
              <h3>Recent Vehicles</h3>
            </div>

            <button className="text-action" onClick={() => navigate("/search")}>
              View All
            </button>
          </div>

          <div className="recent-vehicle-list">
            <div className="recent-vehicle">
              <div className="vehicle-thumb"></div>
              <div>
                <strong>2022 Honda Civic</strong>
                <span>$24,500 · 28,000 miles</span>
              </div>
            </div>

            <div className="recent-vehicle">
              <div className="vehicle-thumb"></div>
              <div>
                <strong>2021 Toyota Camry</strong>
                <span>$23,000 · 32,000 miles</span>
              </div>
            </div>

            <div className="recent-vehicle">
              <div className="vehicle-thumb"></div>
              <div>
                <strong>2020 BMW 330i</strong>
                <span>$29,500 · 41,000 miles</span>
              </div>
            </div>
          </div>
        </section>

        <section className="dashboard-panel inventory-panel">
          <div className="panel-heading">
            <div>
              <p className="panel-eyebrow">Inventory Mix</p>
              <h3>Vehicle Breakdown</h3>
            </div>
          </div>

          <div className="inventory-breakdown">
            <div className="inventory-row">
              <div className="inventory-label">
                <span>Sedans</span>
                <strong>10</strong>
              </div>
              <div className="inventory-track">
                <div className="inventory-fill inventory-fill-gold"></div>
              </div>
            </div>

            <div className="inventory-row">
              <div className="inventory-label">
                <span>Luxury</span>
                <strong>7</strong>
              </div>
              <div className="inventory-track">
                <div className="inventory-fill inventory-fill-purple"></div>
              </div>
            </div>

            <div className="inventory-row">
              <div className="inventory-label">
                <span>Sport</span>
                <strong>4</strong>
              </div>
              <div className="inventory-track">
                <div className="inventory-fill inventory-fill-short"></div>
              </div>
            </div>

            <div className="inventory-row">
              <div className="inventory-label">
                <span>Other</span>
                <strong>3</strong>
              </div>
              <div className="inventory-track">
                <div className="inventory-fill inventory-fill-light"></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="quick-actions">
        <button onClick={() => navigate("/search")}>Search Inventory</button>
        <button onClick={() => navigate("/add-vehicle")}>Add Vehicle</button>
        <button onClick={() => navigate("/favorites")}>View Favorites</button>
      </div>
    </section>
  );
}

export default Dashboard;
