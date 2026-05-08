/**
 * Search controller
 * Handles search requests from frontend
 */
import { fetchITunesResults } from "../services/itunesService.js";

/**
 * Search iTunes API
 *
 * @param {Object} req Express request object
 * @param {Object} res Express response object
 */
export async function searchITunes(req, res) {
  try {
    const { term, media = "all" } = req.query;

    if (!term) {
      return res.status(400).json({ message: "Search term is required." });
    }

    // Extract query parameters
    const allowedMedia = [
      "movie",
      "podcast",
      "music",
      "audiobook",
      "shortFilm",
      "tvShow",
      "software",
      "ebook",
      "all"
    ];

    if (!allowedMedia.includes(media)) {
      return res.status(400).json({ message: "Invalid media type." });
    }

    // Fetch results from service
    const results = await fetchITunesResults(term, media);
    // Send results to frontend
    res.json(results);
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ message: "Failed to fetch data from iTunes API." });
  }
}