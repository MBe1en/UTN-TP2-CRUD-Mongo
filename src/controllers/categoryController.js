import Category from "../models/categoryModel.js";

export const getAll = async (req, res) => {
  try {
    const categories = await category.find();
    if (categories.length === 0) {
      return res.status(404).json({ message: "Categories not found" });
    }
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const create = async (req, res) => {
  try {
    const categoryData = new Category(req.body);
    const { name } = categoryData;
    const categoryExist = await Category.findOne({ name });
    if (categoryExist) {
      return res
        .status(400)
        .json({ message: `Category ${name} already exist.` });
    }
    const savedCategory = await categoryData.save();
    res.status(200).json(savedCategory);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params(id);
    const categoryExist = await Category.findOne({ _id: id });
    if (!productExist) {
      return res.status(404).json({ message: "Category not found" });
    }
    const updateCategory = await Category.findByIdAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    res.status(201).json(updateCategory);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const categoryExist = await Category.findOne({ _id: id });
    if (!categoryExist) {
      return res.status(404).json({ message: "Category not found" });
    }
    await Category.findByIdAndDelete(id);
    res.status(201).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "internal server error", error });
  }
};
