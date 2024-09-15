const express = require("express");
const router = express.Router();
const Category = require("../models/categoryModel");
const { tokenAuthentication } = require("../middlewares/tokenAuthentication");
const Product = require("../models/productModels");

//    1).->POST /products: Add a new product (admin only).
//    2).->GET /products: Get a list of all products.
//    3).->GET /products/:id: Get details of a specific product.
//    4).->PUT /products/:id: Update product details (admin only).
//    5).->DELETE /products/:id: Delete a product (admin only).

const createProductHandler = async (req, res) => {
  try {
    const { name, description, price, stock, image, ...rest } = req.body;
    console.log(name, description, price, stock, image);
    let { categoryId } = req.body;
    // console.log("Category is :", categoryId);
    categoryId = categoryId.replace(/[^a-zA-Z0-9]/g, "");
    if ((!name || !description || !price || !categoryId, !stock)) {
      return res.send({
        response: null,
        message: "Enter all Required Details of Product",
        result: false,
      });
    }

    const findCategory = await Category.findById(categoryId);
    if (!findCategory) {
      return res.send({
        response: null,
        message: "There is no any Category with this name",
        result: false,
      });
    }

    console.log("Category is :", categoryId);

    const newProduct = new Product({
      name,
      description,
      price,
      category: categoryId,
      stock,
      images: image,
      ...rest,
    });
    const createdProduct = await newProduct.save();

    return res.send({
      response: createdProduct,
      message: `${createdProduct.name} Successfully Created`,
      result: true,
    });
  } catch (err) {
    console.log("Error in create product routes", err.message);
    return res.send({
      error: err.message,
      message: "Error in create product routes",
      result: false,
    });
  }
};

const getAllProductsHandler = async (req, res) => {
  try {
    const allProductsList = await Product.find();
    return res.send({
      response: allProductsList,
      message: "This is the List of Products",
      result: true,
    });
  } catch (err) {
    console.log("Error in get all products routes", err.message);
    return res.send({
      error: err.message,
      message: "Error in get all products routes",
      result: false,
    });
  }
};

const getSingleProductHandler = async (req, res) => {
  try {
    let productId = req.params.productId;
    productId = productId.replace(/[^a-zA-Z0-9]/g, "");
    const product = await Product.findById(productId);
    if (!product) {
      return res.send({
        response: null,
        message: "There is no any product with this id",
        result: false,
      });
    }

    return res.send({
      response: product,
      message: `This is ${product.name} Product Details`,
      result: true,
    });
  } catch (err) {
    console.log("Error in get single Product routes", err.message);
    return res.send({
      error: err.message,
      message: "Error in get single Product routes",
      result: false,
    });
  }
};

const updateProductHandler = async (req, res) => {
  try {
    let productId = req.params.productId;
    productId = productId.replace(/[^a-zA-Z0-9]/g, "");
    const data = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(productId, data, {
      new: true,
    });
    if (!updatedProduct) {
      return res.send({
        response: null,
        message: "There is no any product with this id",
        result: false,
      });
    }

    return res.send({
      response: updatedProduct,
      message: `${updatedProduct.name} Successfully Updated`,
      result: true,
    });
  } catch (err) {
    console.log("Error in update product routes", err.message);
    return res.send({
      error: err.message,
      message: "Error in update product routes",
      result: false,
    });
  }
};

const deleteProductHandler = async (req, res) => {
  try {
    let productId = req.params.productId;
    productId = productId.replace(/[^a-zA-Z0-9]/g, "");
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.send({
        response: null,
        message: "There is no any product with this id",
        result: false,
      });
    }

    return res.send({
      response: deletedProduct,
      message: `${deletedProduct.name} Successfully deleted`,
      result: true,
    });
  } catch (err) {
    console.log("Error in delete product routes", err.message);
    return res.send({
      error: err.message,
      message: "Error in delete product routes",
      result: false,
    });
  }
};

router.post("/product/:userId", tokenAuthentication, createProductHandler);
router.get("/products", getAllProductsHandler);
router.get("/product/:productId", getSingleProductHandler);
router.put(
  "/product/:userId/:productId",
  tokenAuthentication,
  updateProductHandler
);
router.delete(
  "/product/:userId/:productId",
  tokenAuthentication,
  deleteProductHandler
);

module.exports = router;
