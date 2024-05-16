import mongoose from "mongoose";

const tagsEnum = ["NEW IN", "SALE", "BEST SELLERS"];

const productSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: [true, "Brand field is required"],
    minLength: 3,
    lowercase: true,
    trim: true,
  },

  category: String,

  description: String,

  gender: String,

  image: String,

  name: {
    type: String,
    required: [true, "Name field is required"],
    minLength: 3,
    unique: true,
    lowercase: true,
    trim: true,
  },

  price: {
    type: Number,
    required: [true, "Price field is required"],
    min: [0, "Price field has to be a number"],
    get: function (value) {
      return value * 1.3;
    },
  },

  category: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
  
  subCategory: String,

  tag: {
    type: String,
    validate: {
      validator: function (v) {
        return tagsEnum.includes(v);
      },
      message: (props) => `${props.value} is not a valid tag`,
    },
  },
});

productSchema.set("toJSON", { getters: true });
export default mongoose.model("product", productSchema);
