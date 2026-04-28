import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

export const getItems = () => API.get("/api/items");
export const getItemById = (id) => API.get(`/api/items/${id}`);
export const createItem = (itemData) => API.post("/api/items", itemData);
export const updateItem = (id, itemData) => API.put(`/api/items/${id}`, itemData);
export const deleteItem = (id) => API.delete(`/api/items/${id}`);

export default API;