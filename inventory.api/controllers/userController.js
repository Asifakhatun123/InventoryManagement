

import {
  createNewUser,
  getAllUsersService,
  updateUserById,
  deleteUserById,
} from "../services/userService.js";

// GET /api/users
export const getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsersService();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// POST /api/users
export const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await createNewUser({ name, email, password, role });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error: error.message });
  }
};

// PUT /api/users/:id
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, role, status } = req.body;

    await updateUserById(id, { name, email, role, status });

    res.json({ message: "User updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error updating user", error: err.message });
  }
};

// DELETE /api/users/:id
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await deleteUserById(id);

    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting user", error: err.message });
  }
};

