

import {
  createProduct,
  fetchAllProducts,
  modifyProduct,
  removeProduct,
} from "../services/productService.js";

// Add Product
export const addProduct = async (req, res) => {
  try {
    const product = await createProduct(req.body);
    return res.status(201).json({ success: true, message: "Product added successfully", product });
  } catch (error) {
    console.error("Add Product Error:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Get All Products
export const getProducts = async (req, res) => {
  try {
    const products = await fetchAllProducts();
    return res.status(200).json({ success: true, products });
  } catch (error) {
    console.error("Get Products Error:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Update Product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await modifyProduct(id, req.body);
    return res.status(200).json({ success: true, message: "Product updated successfully" });
  } catch (error) {
    console.error("Update Product Error:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Delete Product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await removeProduct(id);
    return res.status(200).json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.error("Delete Product Error:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
