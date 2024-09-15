const express = require("express");
const Category = require("../models/categoryModel");
const Product = require("../models/productModels");
const { tokenAuthentication } = require("../middlewares/tokenAuthentication");
const router = express.Router();

//    1).->POST /categories: Create a new category (admin only).
//    2).->GET /categories: Get all categories.
//    3).->GET /categories/:id: Get a specific category.
//    4).->PUT /categories/:id: Update a category (admin only).
//    5).->DELETE /categories/:id: Delete a category (admin only).

const createNewCategoryHandler = async (req, res) => {
  try {
    const { name, description, image } = req.body;
    if (!name) {
      return res.send({
        response: null,
        message: "Enter the Category name",
        result: false,
      });
    }

    const newCategory = new Category({ name, description, image });
    const createdCategory = await newCategory.save();

    return res.send({
      response: createdCategory,
      message: `${createdCategory.name} Category is successfylly created`,
      result: true,
    });
  } catch (err) {
    console.log("Error in create category route");
    return res.send({
      error: err.message,
      message: "Error in create category route",
      result: false,
    });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const allCategories = await Category.find();
    return res.send({
      response: allCategories,
      message: `You successfully get all Categories`,
      result: true,
    });
  } catch (err) {
    console.log("Error in see all product category route");
    return res.send({
      error: err.message,
      message: "Error in see all product category route",
      result: false,
    });
  }
};

const getSingleCategory = async (req, res) => {
  try {
    let categoryId = req.params.categoryId;
    categoryId = categoryId.replace(/[^a-zA-Z0-9]/g, "");

    const data = await Category.findById(categoryId);
    if (!data) {
      return res.send({
        response: null,
        message: "There is no any Category with this id",
        result: false,
      });
    }

    const categoryItems = await Product.find({ category: categoryId });
    return res.send({
      response: data,
      items: categoryItems,
      message: `This is ${data.name} Category`,
      result: true,
    });
  } catch (err) {
    console.log("Error in see all product category route");
    return res.send({
      error: err.message,
      message: "Error in see all product category route",
      result: false,
    });
  }
};

const getCategoryAllProducst = async (req, res) => {
  try {
    let categoryId = req.params.categoryId;
    categoryId = categoryId.replace(/[^a-zA-Z0-9]/g, "");
    // let productId = req.params.productId;
    // productId = productId.replace(/[^a-zA-Z0-9]/g, "");

    const data = await Category.findById(categoryId);
    if (!data) {
      return res.send({
        response: null,
        message: "There is no any Category with this id",
        result: false,
      });
    }

    const categoryItems = await Product.find({ category: categoryId });
    return res.send({
      response: data,
      items: categoryItems,
      message: `This is ${data.name} Category`,
      result: true,
    });
  } catch (err) {
    console.log("Error in see all product category route");
    return res.send({
      error: err.message,
      message: "Error in see all product category route",
      result: false,
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    let categoryId = req.params.categoryId;
    categoryId = categoryId.replace(/[^a-zA-Z0-9]/g, "");
    const newData = req.body;

    const data = await Category.findByIdAndUpdate(categoryId, newData, {
      new: true,
    });
    if (!data) {
      return res.send({
        response: null,
        message: "There is no any Category with this id",
        result: false,
      });
    }

    return res.send({
      response: data,
      message: `${data.name} Category Successfully Updated`,
      result: true,
    });
  } catch (err) {
    console.log("Error in see all product category route");
    return res.send({
      error: err.message,
      message: "Error in see all product category route",
      result: false,
    });
  }
};

const deleteGategory = async (req, res) => {
  try {
    let categoryId = req.params.categoryId;
    categoryId = categoryId.replace(/[^a-zA-Z0-9]/g, "");

    const data = await Category.findByIdAndDelete(categoryId);
    if (!data) {
      return res.send({
        response: null,
        message: "There is no any Category with this id",
        result: false,
      });
    }

    return res.send({
      response: data,
      message: `${data.name} Category Successfully Deleted`,
      result: true,
    });
  } catch (err) {
    console.log("Error in see all product category route");
    return res.send({
      error: err.message,
      message: "Error in see all product category route",
      result: false,
    });
  }
};

router.post("/category", tokenAuthentication, createNewCategoryHandler);
router.get("/categories", tokenAuthentication, getAllCategories);
router.get("/category/:categoryId", tokenAuthentication, getSingleCategory);
router.get(
  "/category/:categoryId/allProducts",
  tokenAuthentication,
  getCategoryAllProducst
);
router.put("/category/:categoryId", tokenAuthentication, updateCategory);
router.delete("/category/:categoryId", tokenAuthentication, deleteGategory);

module.exports = router;
