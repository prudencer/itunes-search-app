/**
 * Search routes
 */
import express from "express";
import { searchITunes } from "../controllers/searchController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * GET /api/search
 * Protected route that searches iTunes API
 */
router.get("/search", verifyToken, searchITunes);

export default router;