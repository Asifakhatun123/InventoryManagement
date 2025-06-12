import User from "../models/User.js";
import bcrypt from "bcrypt";

// Create a new user
export const createNewUser = async ({ name, email, password, role }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    name,
    email,
    role,
    password: hashedPassword,
  });

  await user.save();
  return user;
};

// Get all users (excluding passwords)
export const getAllUsersService = async () => {
  return await User.find().select("-password");
};

// Update user
export const updateUserById = async (id, data) => {
  const updated = await User.findByIdAndUpdate(id, data, { new: true });
  if (!updated) throw new Error("User not found");
  return updated;
};

// Delete user
export const deleteUserById = async (id) => {
  const deleted = await User.findByIdAndDelete(id);
  if (!deleted) throw new Error("User not found");
  return deleted;
};
