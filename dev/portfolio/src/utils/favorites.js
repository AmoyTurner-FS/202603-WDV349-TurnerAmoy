const FAVORITES_KEY = "carfinder-favorites";

export function getFavoriteIds() {
  const savedFavorites = localStorage.getItem(FAVORITES_KEY);

  return savedFavorites ? JSON.parse(savedFavorites) : [];
}

export function isFavorite(vehicleId) {
  const favoriteIds = getFavoriteIds();

  return favoriteIds.some((id) => String(id) === String(vehicleId));
}

export function addFavorite(vehicleId) {
  const favoriteIds = getFavoriteIds();

  if (isFavorite(vehicleId)) {
    return favoriteIds;
  }

  const updatedFavorites = [...favoriteIds, vehicleId];

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));

  return updatedFavorites;
}

export function removeFavorite(vehicleId) {
  const favoriteIds = getFavoriteIds();

  const updatedFavorites = favoriteIds.filter(
    (id) => String(id) !== String(vehicleId)
  );

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));

  return updatedFavorites;
}

export function toggleFavorite(vehicleId) {
  if (isFavorite(vehicleId)) {
    removeFavorite(vehicleId);
    return false;
  }

  addFavorite(vehicleId);
  return true;
}
