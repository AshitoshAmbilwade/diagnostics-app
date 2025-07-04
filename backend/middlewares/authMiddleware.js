import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "98j89ujjjjnj");
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (err) {
    return res.status(500).json({ message: "Token verification failed", error: err.message });
  }
};
