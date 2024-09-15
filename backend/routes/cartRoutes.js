const express = require("express");
const { tokenAuthentication } = require("../middlewares/tokenAuthentication");
const Product = require("../models/productModels");
const Cart = require("../models/cartModel");
const User = require("../models/userModels");
const router = express.Router();

//    1).->POST /cart: Add an item to the shopping cart.
//    2).->GET /cart: Get the current user's shopping cart.
//    3).->PUT /cart/:itemId: Update the quantity of an item in the cart.// incomplete
//    4).->DELETE /cart/:itemId: Remove an item from the cart.

const addItemToCartHandler = async (req, res) => {
  try {
    let userId = req.params.userId;
    userId = userId.replace(/[^a-zA-Z0-9]/g, "");
    let productId = req.params.productId;
    productId = productId.replace(/[^a-zA-Z0-9]/g, "");
    const { quantity } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.send({
        response: null,
        message: `There is no User with this id`,
        result: false,
      });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.send({
        response: null,
        message: `There is no product with this id`,
        result: false,
      });
    }

    if (user.carts.length === 0) {
      const data = {
        user: userId,
        items: [
          {
            product: productId,
            quantity,
          },
        ],
        totalPrice: product.price,
      };
      const cart = new Cart(data);
      const createdCart = await cart.save();
      user.carts.push(createdCart.id);
      const updatedUser = await user.save();

      return res.send({
        response: updatedUser,
        message: `Item Successfully Added to Cart`,
        result: true,
      });
    }

    const userCart = await Cart.findById(user.carts[0]);
    const checkProduct = userCart.items.filter(
      (data) => data.product.toString() === productId
    );

    if (checkProduct.length !== 0) {
      return res.send({
        response: userCart,
        message: `Item Successfully Updated to Cart*******`,
        result: true,
      });
    }

    userCart.items.push({ product: productId, quantity });
    const updatedCart = await userCart.save();

    return res.send({
      response: updatedCart,
      message: `Item Successfully Updated to Cart`,
      result: true,
    });
  } catch (err) {
    console.log("Error in add item to cart route", err.message);
    return res.send({
      error: err.message,
      message: "Error in add item to cart route",
      result: false,
    });
  }
};

const getCartItemsHandler = async (req, res) => {
  try {
    let userId = req.params.userId;
    userId = userId.replace(/[^a-zA-Z0-9]/g, "");

    const user = await User.findById(userId);
    if (!user) {
      return res.send({
        response: null,
        message: `There is no User with this id`,
        result: false,
      });
    }

    const userCart = await Cart.findById(user.carts[0]);
    return res.send({
      response: userCart,
      message: `${user.name} This is your Cart List`,
      result: true,
    });
  } catch (err) {
    console.log("Error in add item to cart route", err.message);
    return res.send({
      error: err.message,
      message: "Error in add item to cart route",
      result: false,
    });
  }
};

const updateCartItemHandler = async (req, res) => {
  try {
    return res.send({
      response: null,
      message: "Error in add item to cart route",
      result: true,
    });
  } catch (err) {
    console.log("Error in add item to cart route");
    return res.send({
      error: err.message,
      message: "Error in add item to cart route",
      result: false,
    });
  }
};

const deleteCartItemHandler = async (req, res) => {
  try {
    let userId = req.params.userId;
    userId = userId.replace(/[^a-zA-Z0-9]/g, "");
    let productId = req.params.productId;
    productId = productId.replace(/[^a-zA-Z0-9]/g, "");

    const user = await User.findById(userId);
    if (!user) {
      return res.send({
        response: null,
        message: `There is no User with this id`,
        result: false,
      });
    }

    const userCart = await Cart.findById(user.carts[0]);
    const newCartList = userCart.items.filter(
      (data) => data.product.toString() !== productId
    );
    userCart.items = newCartList;
    const updatedUserCart = await userCart.save();

    return res.send({
      response: updatedUserCart,
      message: `${user.name} This is your Cart List`,
      result: true,
    });
  } catch (err) {
    console.log("Error in add item to cart route", err.message);
    return res.send({
      error: err.message,
      message: "Error in add item to cart route",
      result: false,
    });
  }
};

router.post(
  "/cart/:userId/:productId",
  tokenAuthentication,
  addItemToCartHandler
);
router.get("/cart/:userId", tokenAuthentication, getCartItemsHandler);
router.put(
  "/cart/:userId/:productId",
  tokenAuthentication,
  updateCartItemHandler
);
router.delete(
  "/cart/:userId/:productId",
  tokenAuthentication,
  deleteCartItemHandler
);

module.exports = router;
