import vehicles from "../data/vehicles";

const STORAGE_KEY = "carfinder-added-vehicles";

export function getAddedVehicles() {
  const savedVehicles = localStorage.getItem(STORAGE_KEY);

  return savedVehicles ? JSON.parse(savedVehicles) : [];
}

export function getAllVehicles() {
  return [...vehicles, ...getAddedVehicles()];
}

export function addVehicle(vehicle) {
  const addedVehicles = getAddedVehicles();

  const newVehicle = {
    ...vehicle,
    id: crypto.randomUUID(),
  };

  const updatedVehicles = [...addedVehicles, newVehicle];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedVehicles));

  return newVehicle;
}
