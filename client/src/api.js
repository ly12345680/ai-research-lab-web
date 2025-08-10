// API configuration
const API_BASE_URL = process.env.NODE_ENV === 'development' 
  ? `http://${window.location.hostname}:3001`
  : '/api';

export const fetchProducts = () => {
  return fetch(`${API_BASE_URL}/products`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });
};

export const fetchTeam = () => {
  return fetch(`${API_BASE_URL}/team`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });
};
