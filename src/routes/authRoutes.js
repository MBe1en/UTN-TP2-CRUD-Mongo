import express from 'express';
import { validateUser } from '../controllers/authController.js';

const authRoutes = express.Router();

authRoutes.post("/login", validateUser);

export default authRoutes