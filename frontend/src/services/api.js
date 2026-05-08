import axios from "axios";

/**
 * Backend base URL.
 * During development, Express runs on port 5000.
 */
const API_BASE_URL = "https://itunes-search-backend-lqlo.onrender.com";

/**
 * Requests a temporary JWT token from the backend.
 *
 * @returns {Promise<string>} JWT token
 */
export async function getToken() {
  const response = await axios.get(`${API_BASE_URL}/api/token`);
  return response.data.token;
}

/**
 * Sends a search request to the backend.
 *
 * @param {string} term Search keyword
 * @param {string} media Selected media type
 * @param {string} token JWT token
 * @returns {Promise<Array>} Search results
 */
export async function searchITunes(term, media, token) {
  const response = await axios.get(`${API_BASE_URL}/api/search`, {
    params: {
      term,
      media
    },
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}