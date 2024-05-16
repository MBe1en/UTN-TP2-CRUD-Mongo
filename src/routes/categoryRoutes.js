import express from "express";
import {
  create,
  deleteCategory,
  getAll,
  update,
} from "../controllers/categoryController.js";
import { verifyTokenMW } from "../middlewares/verifyTokenMW.js";

const categoryRoutes = express.Router();

categoryRoutes.get("/getAll", getAll);
categoryRoutes.post("/create", verifyTokenMW, create);
categoryRoutes.put("/update/:id", verifyTokenMW, update);
categoryRoutes.delete("/deleteCategory/:id", verifyTokenMW, deleteCategory);

export default categoryRoutes;
