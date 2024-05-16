import express from 'express';
import { create, deleteUser, getAll, update } from '../controllers/userController.js';
import { verifyTokenMW } from '../middlewares/verifyTokenMW.js';

const userRoutes = express.Router();

userRoutes.get("/getAll", verifyTokenMW, getAll);
userRoutes.post("/create", create);
userRoutes.put("/update/:id", verifyTokenMW, update);
userRoutes.delete("/deleteUser/:id", verifyTokenMW, deleteUser);

export default userRoutes