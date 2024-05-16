import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const getAll = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length == 0) {
      return res.status(404).json({ message: `There are no users` });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

export const create = async (req, res) => {
  try {
    const userData = new User(req.body); //traigo datos del body
    const { email } = userData; //destructuro email
    const userExist = await User.findOne({ email }); //busco si existe
    if (userExist) {
      return res
        .status(400)
        .json({ message: `User whith email "${email}" already exists` });
    }
    const savedUser = await userData.save();
    const { password, ...rest } = savedUser;
    res.status(200).json(rest);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findOne({ _id: id });
    if (!userExist) {
      return res.status(404).json({ message: "User not found" });
    }

    req.body.password  = bcrypt.hashSync(req.body.password, 10);

    const updateUser = await User.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    const { password, ...rest } = updateUser;
    res.status(201).json(rest);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = findOne({ _id: id });
    if (!userExist) {
      return res.status(404).json({ message: "User not found" });
    }
    await User.findOneAndDelete({ _id: id });
    res.status(201).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};
