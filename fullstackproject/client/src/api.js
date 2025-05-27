import axios from 'axios';

// Set your backend API base URL here
const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Change this to your backend URL if different
    withCredentials: true
});

// Helper to set JWT token in axios headers
export function setAuthToken(token) {
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
}

// Example: login/signup API call
export async function authenticateUser(endpoint, data) {
    // endpoint: 'login' or 'signup'
    const res = await api.post(`/${endpoint}`, data);
    return res.data; // Should contain token and user info
}

export default api;
