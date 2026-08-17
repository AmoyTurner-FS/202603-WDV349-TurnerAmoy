import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import SearchCars from "./pages/SearchCars";
import AddVehicle from "./pages/AddVehicle";
import Favorites from "./pages/Favorites";
import VehicleDetails from "./pages/VehicleDetails";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/search" element={<SearchCars />} />
          <Route path="/add-vehicle" element={<AddVehicle />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/vehicle/:id" element={<VehicleDetails />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
