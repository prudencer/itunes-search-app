/**
 * Authentication routes
 */
import express from "express";
import { getToken } from "../controllers/authController.js";

const router = express.Router();

/**
 * GET /api/token
 * Generates JWT token for frontend
 */
router.get("/token", getToken);

export default router;