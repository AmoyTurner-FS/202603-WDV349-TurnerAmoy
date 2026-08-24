const BASE_URL = "https://vpic.nhtsa.dot.gov/api/vehicles";

const fetchVehicleData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error(`Vehicle API request failed: ${response.status}`);
    }

    const data = await response.json();

    return data.Results;
  } catch (error) {
    console.error("Vehicle API Error:", error);
    throw error;
  }
};

export const getVehicleMakes = async () => {
  return fetchVehicleData("/GetMakesForVehicleType/car?format=json");
};

export const getModelsForMakeYear = async (make, year) => {
  return fetchVehicleData(
    `/GetModelsForMakeYear/make/${encodeURIComponent(
      make
    )}/modelyear/${year}?format=json`
  );
};

export default fetchVehicleData;
