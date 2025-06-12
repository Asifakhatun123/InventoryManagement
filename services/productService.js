import Product from "../models/Product.js";

// Create a new product
export const createProduct = async (data) => {
  const { productName } = data;

  const existing = await Product.findOne({ productName });
  if (existing) {
    throw new Error("Product already exists");
  }

  const newProduct = new Product(data);
  await newProduct.save();

  return newProduct;
};

// Get all products with category and supplier populated
export const fetchAllProducts = async () => {
  const products = await Product.find()
    .populate("category", "categoryName")
    .populate("supplier", "supplierName");
  return products;
};

// Update product
export const modifyProduct = async (id, data) => {
  const updated = await Product.findByIdAndUpdate(id, data, { new: true });
  if (!updated) {
    throw new Error("Product not found");
  }
  return updated;
};

// Delete product
export const removeProduct = async (id) => {
  const deleted = await Product.findByIdAndDelete(id);
  if (!deleted) {
    throw new Error("Product not found");
  }
  return deleted;
};
