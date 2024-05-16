import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const ADMINTOKEN = process.env.ADMIN_TOKEN;

export function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, ADMINTOKEN);
    return decoded;
  } catch (error) {
    throw new Error("Invalid token");
  }
}
