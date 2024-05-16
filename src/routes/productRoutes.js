import express from "express";
import {
  create,
  deleteProduct,
  findOne,
  getAll,
  update,
} from "../controllers/productController.js";
import { verifyTokenMW } from "../middlewares/verifyTokenMW.js";

const productRoutes = express.Router();

productRoutes.get("/getAll", verifyTokenMW, getAll);
productRoutes.get("/findOne/:name", verifyTokenMW, findOne);
productRoutes.post("/create", verifyTokenMW, create);
productRoutes.put("/update/:id", verifyTokenMW, update);
productRoutes.delete("/deleteProduct/:id", verifyTokenMW, deleteProduct);

export default productRoutes;
