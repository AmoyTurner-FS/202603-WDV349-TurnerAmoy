import "./Dashboard.css";

function Dashboard() {
  return (
    <section className="dashboard-page">
      <div className="dashboard-summary">
        <div className="summary-card"></div>
        <div className="summary-card"></div>
        <div className="summary-card"></div>
        <div className="summary-card"></div>
      </div>

      <div className="dashboard-divider"></div>

      <div className="dashboard-content">
        <div className="dashboard-panel dashboard-panel-small"></div>
        <div className="dashboard-panel dashboard-panel-large"></div>
      </div>

      <div className="dashboard-bottom-bar"></div>
    </section>
  );
}

export default Dashboard;
