

import {
  createSupplier,
  fetchAllSuppliers,
  modifySupplier,
  removeSupplier,
} from "../services/suppliersService.js";

// Add Supplier
export const addSupplier = async (req, res) => {
  try {
    const { supplierName, email, phone, address } = req.body;
    await createSupplier({ supplierName, email, phone, address });
    return res.status(201).json({ success: true, message: "Supplier added successfully" });
  } catch (error) {
    console.error("Error adding supplier:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Get All Suppliers
export const getSuppliers = async (req, res) => {
  try {
    const suppliers = await fetchAllSuppliers();
    return res.status(200).json({ success: true, suppliers });
  } catch (error) {
    console.error("Error fetching suppliers:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Update Supplier
export const updateSupplier = async (req, res) => {
  try {
    const { id } = req.params;
    const { supplierName, email, phone, address } = req.body;
    await modifySupplier(id, { supplierName, email, phone, address });
    return res.status(200).json({ success: true, message: "Supplier updated successfully" });
  } catch (error) {
    console.error("Error updating supplier:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Delete Supplier
export const deleteSupplier = async (req, res) => {
  try {
    const { id } = req.params;
    await removeSupplier(id);
    return res.status(200).json({ success: true, message: "Supplier deleted successfully" });
  } catch (error) {
    console.error("Error deleting supplier:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
