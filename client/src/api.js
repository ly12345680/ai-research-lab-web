// API configuration
import { demoProducts, demoTeam } from './demoData';

const API_BASE_URL = process.env.NODE_ENV === 'development' 
  ? `http://${window.location.hostname}:3001`
  : '/api';

const isDemoMode = process.env.NODE_ENV === 'production' && window.location.hostname.includes('github.io');

export const fetchProducts = () => {
  if (isDemoMode) {
    return Promise.resolve(demoProducts);
  }
  
  return fetch(`${API_BASE_URL}/products`)
    .then(response => {
      if (!response.ok) {
        console.warn('API not available, falling back to demo data');
        return demoProducts;
      }
      return response.json();
    })
    .catch(error => {
      console.warn('API error, falling back to demo data:', error);
      return demoProducts;
    });
};

export const fetchTeam = () => {
  if (isDemoMode) {
    return Promise.resolve(demoTeam);
  }
  
  return fetch(`${API_BASE_URL}/team`)
    .then(response => {
      if (!response.ok) {
        console.warn('API not available, falling back to demo data');
        return demoTeam;
      }
      return response.json();
    })
    .catch(error => {
      console.warn('API error, falling back to demo data:', error);
      return demoTeam;
    });
};
