import express from "express";
import bodyParser from "body-parser";
import { connectDB } from "./db.js";
import { PORT } from "./config.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
app.use(bodyParser.json());

connectDB();

// Routes
app.get("/", (req, res) => {
    res.send("hello world CARC");
})

app.use("/api/", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/category", categoryRoutes);

//Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})