import Supplier from "../models/Suppliers.js";

// Add new supplier
export const createSupplier = async (data) => {
  const newSupplier = new Supplier(data);
  await newSupplier.save();
  return newSupplier;
};

// Get all suppliers
export const fetchAllSuppliers = async () => {
  const suppliers = await Supplier.find().sort({ createdAt: -1 });
  return suppliers;
};

// Update supplier
export const modifySupplier = async (id, data) => {
  const updated = await Supplier.findByIdAndUpdate(id, data, { new: true });
  if (!updated) {
    throw new Error("Supplier not found");
  }
  return updated;
};

// Delete supplier
export const removeSupplier = async (id) => {
  const deleted = await Supplier.findByIdAndDelete(id);
  if (!deleted) {
    throw new Error("Supplier not found");
  }
  return deleted;
};
