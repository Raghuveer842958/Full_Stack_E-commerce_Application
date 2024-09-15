const express = require("express");
const { tokenAuthentication } = require("../middlewares/tokenAuthentication");
const User = require("../models/userModels");
const Product = require("../models/productModels");
const Order = require("../models/orderModel");
const router = express.Router();

//    1).->POST /orders: Create a new order.
//    2).->GET /orders: Get all orders for the logged-in user.
//    3).->GET /orders/:id: Get details of a specific order.
//    4).->PUT /orders/:id: Update the status of an order (admin only).
//    5).->DELETE /orders/:id: Cancel an order.

const createOrderHandler = async (req, res) => {
  try {
    let userId = req.params.userId;
    userId = userId.replace(/[^a-zA-Z0-9]/g, "");
    let productId = req.params.productId;
    productId = productId.replace(/[^a-zA-Z0-9]/g, "");
    const { address, quantity } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.send({
        response: null,
        message: "There is no any User with this Id",
        result: true,
      });
    }

    const item = await Product.findById(productId);
    if (!item) {
      return res.send({
        response: null,
        message: "There is no any Product with this Id",
        result: true,
      });
    }

    const orderData = {
      user,
      products: [
        {
          product: productId,
          quantity,
          price: item.price,
        },
      ],
      address,
    };
    const order = new Order(orderData);
    const createdOrder = await order.save();
    user.odders.push(createdOrder.id);
    const updatedUser = await user.save();

    return res.send({
      response: updatedUser,
      order: createdOrder,
      message: `${user.name} Your order successfully created`,
      result: true,
    });
  } catch (err) {
    console.log("Error in order route", err.message);
    return res.send({
      error: err.message,
      message: "Error in order route",
      result: false,
    });
  }
};

const getAllOrdersHandler = async (req, res) => {
  try {
    let userId = req.params.userId;
    userId = userId.replace(/[^a-zA-Z0-9]/g, "");
    const user = await User.findById(userId);
    if (!user) {
      return res.send({
        response: null,
        message: "There is no any User with this Id",
        result: true,
      });
    }

    const userAllOrders = user.odders;
    return res.send({
      response: userAllOrders,
      message: `You successfully got all Orders`,
      result: true,
    });
  } catch (err) {
    console.log("Error in get all orders route", err.message);
    return res.send({
      error: err.message,
      message: "Error in get all orders route",
      result: false,
    });
  }
};

const getSingleOrderHandler = async (req, res) => {
  try {
    let userId = req.params.userId;
    userId = userId.replace(/[^a-zA-Z0-9]/g, "");
    let orderId = req.params.orderId;
    orderId = orderId.replace(/[^a-zA-Z0-9]/g, "");

    const user = await User.findById(userId);
    if (!user) {
      return res.send({
        response: null,
        message: "There is no any User with this Id",
        result: true,
      });
    }

    const order = await Order.findById(orderId);
    if (!order) {
      return res.send({
        response: null,
        message: "There is no any Order with this Id",
        result: true,
      });
    }

    const userAllOrders = user.odders;
    return res.send({
      response: order,
      message: `You successfully got our Order`,
      result: true,
    });
  } catch (err) {
    console.log("Error in get single orders route", err.message);
    return res.send({
      error: err.message,
      message: "Error in get single orders route",
      result: false,
    });
  }
};

const updateOrderHandler = async (req, res) => {
  try {
    let userId = req.params.userId;
    userId = userId.replace(/[^a-zA-Z0-9]/g, "");
    let orderId = req.params.orderId;
    orderId = orderId.replace(/[^a-zA-Z0-9]/g, "");

    const user = await User.findById(userId);
    if (user.role !== "admin") {
      return res.send({
        response: null,
        message: "You are not Admin, Can not modify the order",
        result: true,
      });
    }

    const data = req.body;

    const order = await Order.findByIdAndUpdate(orderId, data, { new: true });
    if (!order) {
      return res.send({
        response: null,
        message: "There is no any Order with this Id",
        result: true,
      });
    }

    const userAllOrders = user.odders;
    return res.send({
      response: order,
      message: `${user.name} Your order successfully Updated`,
      result: true,
    });
  } catch (err) {
    console.log("Error in Update orders route", err.message);
    return res.send({
      error: err.message,
      message: "Error in Update orders route",
      result: false,
    });
  }
};

const deleteOrderHandler = async (req, res) => {
  try {
    let userId = req.params.userId;
    userId = userId.replace(/[^a-zA-Z0-9]/g, "");
    let orderId = req.params.orderId;
    orderId = orderId.replace(/[^a-zA-Z0-9]/g, "");

    const user = await User.findById(userId);
    if (!user) {
      return res.send({
        response: null,
        message: "You are not Admin, Can not modify the order",
        result: true,
      });
    }

    const order = await Order.findByIdAndUpdate(orderId);
    if (!order) {
      return res.send({
        response: null,
        message: "There is no any Order with this Id",
        result: true,
      });
    }

    // check status of order
    if (order.orderStatus === "cancelled") {
      return res.send({
        response: null,
        message: `This Order has been Cancelled`,
        result: true,
      });
    }

    order.orderStatus = "cancelled";
    const updatedOrder = await order.save();

    return res.send({
      response: updatedOrder,
      message: `${user.name} Your order successfully Cancelled`,
      result: true,
    });
  } catch (err) {
    console.log("Error in delete orders route", err.message);
    return res.send({
      error: err.message,
      message: "Error in delete orders route",
      result: false,
    });
  }
};

router.post(
  "/order/:userId/:productId",
  tokenAuthentication,
  createOrderHandler
);

router.get("/order/:userId", tokenAuthentication, getAllOrdersHandler);

router.get(
  "/order/:userId/:orderId",
  tokenAuthentication,
  getSingleOrderHandler
);

router.put("/order/:userId/:orderId", tokenAuthentication, updateOrderHandler);

router.delete(
  "/order/:userId/:orderId",
  tokenAuthentication,
  deleteOrderHandler
);

module.exports = router;
