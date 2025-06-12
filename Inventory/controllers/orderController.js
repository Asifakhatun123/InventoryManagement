

import {
  createNewOrder,
  fetchAllOrders,
} from "../services/orderService.js";

// Create Order
export const createOrder = async (req, res) => {
  try {
    const userId = req.user._id;
    const { products } = req.body;

    await createNewOrder(userId, products);
    return res.status(201).json({ success: true, message: "Order placed successfully" });
  } catch (error) {
    console.error("Error creating order:", error);
    return res.status(500).json({ success: false, message: "Server error while placing order" });
  }
};

// Get All Orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await fetchAllOrders();
    return res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return res.status(500).json({ success: false, message: "Error retrieving orders" });
  }
};


