/**
 * Main server entry point
 * Configures Express app, middleware, routes,
 * and serves the React frontend in production.
 */

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Import route files
import authRoutes from "./routes/authRoutes.js";
import searchRoutes from "./routes/searchRoutes.js";

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS to allow frontend app to communication
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173"
}));

app.use(express.json());

// Register API routes
app.use("/api", authRoutes);
app.use("/api", searchRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});