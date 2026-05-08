/**
 * Authentication controller
 * Responsible for generating JWT tokens
 */
import jwt from "jsonwebtoken";

/**
 * Generate JWT token
 *
 * @param {Object} req Express request object
 * @param {Object} res Express response object
 */
export function getToken(req, res) {
  const token = jwt.sign(
    { app: "itunes-search-app" },
    process.env.JWT_SECRET,
    { expiresIn: "5h" }
  );

  res.json({ token });
}