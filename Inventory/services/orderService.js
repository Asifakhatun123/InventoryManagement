import Order from "../models/Order.js";

// Create a new order
export const createNewOrder = async (userId, products) => {
  const order = new Order({
    user: userId,
    items: products,
  });

  await order.save();
  return order;
};

// Get all orders with populated user and product info
export const fetchAllOrders = async () => {
  const orders = await Order.find()
    .populate("user", "name email")
    .populate("items.product", "name price");
  return orders;
};
