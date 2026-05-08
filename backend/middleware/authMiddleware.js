/**
 * JWT authentication middleware
 * Verifies frontend token before allowing access
 */
import jwt from "jsonwebtoken";

/**
 * Verify JWT token
 *
 * @param {Object} req Express request object
 * @param {Object} res Express response object
 * @param {Function} next Express next middleware function
 */
export function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  // Check if token exists
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided." });
  }

  // Extract token 
  const token = authHeader.split(" ")[1];

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token." });
  }
}