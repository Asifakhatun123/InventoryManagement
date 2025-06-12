import Category from "../models/Category.js";

// Add new category
export const createCategory = async (categoryName, categoryDescription) => {
  const existingCategory = await Category.findOne({ categoryName });
  if (existingCategory) {
    throw new Error("Category already exists");
  }

  const newCategory = new Category({ categoryName, categoryDescription });
  await newCategory.save();
  return newCategory;
};

// Get all categories
export const fetchAllCategories = async () => {
  const categories = await Category.find();
  return categories;
};

// Update category
export const modifyCategory = async (id, categoryName, categoryDescription) => {
  const category = await Category.findById(id);
  if (!category) {
    throw new Error("Category not found");
  }

  category.categoryName = categoryName;
  category.categoryDescription = categoryDescription;
  await category.save();

  return category;
};

// Delete category
export const removeCategory = async (id) => {
  const deleted = await Category.findByIdAndDelete(id);
  if (!deleted) {
    throw new Error("Category not found");
  }

  return deleted;
};
