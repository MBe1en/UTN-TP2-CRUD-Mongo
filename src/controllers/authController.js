import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export const validateUser = async (req, res) => {
  dotenv.config();

  const ADMINTOKEN = process.env.ADMIN_TOKEN;

  try {
    const userFound = await User.findOne({ email: req.body.email });
    console.log(userFound);
    if (!userFound) {
      return res.status(400).json({ message: "Email or password incorrect" });
    }

    if (bcrypt.compareSync(req.body.password, userFound.password)) {
      console.log("User logged");

      const payload = {
        userId: userFound._id,
        userEmail: userFound.email,
      };

      const token = jwt.sign(payload, ADMINTOKEN, { expiresIn: "1h" });
      res.status(200).json(token);
    } else {
      res.status(400).json({ message: "Email or password incorrect" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};
