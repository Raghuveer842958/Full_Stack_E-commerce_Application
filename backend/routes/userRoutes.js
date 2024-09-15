const express = require("express");
const User = require("../models/userModels");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { tokenAuthentication } = require("../middlewares/tokenAuthentication");

const createToken = (data) => {
  const token = jwt.sign(data, "Raghu", { expiresIn: "8h" });
  return token;
};

const signUpHandler = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.send({
        response: null,
        message: "Please enter all Fields for SignUp",
        result: false,
      });
    }

    const user = await User.findOne({ email: email });
    if (user) {
      return res.send({
        response: null,
        message: "This Email is Allready Registered",
        result: false,
      });
    }

    const newUser = new User({ name, email, password });
    const createdUser = await newUser.save();

    return res.send({
      response: createdUser,
      message: "You Registered Successfully",
      result: true,
    });
  } catch (err) {
    console.log("Error in SignUp Route", err);
    return res.send({
      response: err.message,
      message: "SignUp Failed",
      result: false,
    });
  }
};

const loginHandler = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.send({
        response: null,
        message: "Invalid Email Id",
        result: false,
      });
    }

    if (!user.comparePassword(password)) {
      return res.send({
        response: null,
        message: "Invalid User Password",
        result: false,
      });
    }

    const payload = {
      email: user.email,
      id: user.id,
      isAdmin: user.role,
    };

    const jwtToken = createToken(payload);
    return res.send({
      response: user,
      message: "You Logined Successfully",
      result: true,
      token: jwtToken,
    });
  } catch (err) {
    console.log("Error in Login Route", err);
    return res.send({
      response: null,
      message: "Login Failed",
      result: false,
    });
  }
};

const logoutHandler = async (req, res) => {
  return res.send({
    message: "This route is Remain to Complete",
  });
};

const profileHandler = async (req, res) => {
  let userId = req.params.userId;
  userId = userId.replace(/[^a-zA-Z0-9]/g, "");

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.send({
        response: null,
        message: "There is no any user with this id",
        result: false,
      });
    }

    return res.send({
      response: user,
      message: `This is ${user.name} Profile`,
      result: true,
    });
  } catch (err) {
    console.log("Error in User Profile Route", err.message);
    return res.send({
      error: err.message,
      message: "Error in User Profile Route",
      result: null,
    });
  }
};

const updateProfileHandler = async (req, res) => {
  let userId = req.params.userId;
  userId = userId.replace(/[^a-zA-Z0-9]/g, "");

  try {
    const userData = req.body;
    const user = await User.findByIdAndUpdate(userId, userData, { new: true });
    if (!user) {
      return res.send({
        response: null,
        message: "There is no any user with this id",
        result: false,
      });
    }

    return res.send({
      response: user,
      message: `${user.name} Your Profile Successfully Updated`,
      result: true,
    });
  } catch (err) {
    console.log("Error in User Profile Route", err.message);
    return res.send({
      error: err.message,
      message: "Error in User Profile Route",
      result: null,
    });
  }
};

router.post("/user/signUp", signUpHandler);
router.post("/user/login", loginHandler);
router.post("/user/logout", tokenAuthentication, logoutHandler); //incomplet
router.get("/user/profile/:userId", tokenAuthentication, profileHandler);
router.put("/user/profile/:userId", tokenAuthentication, updateProfileHandler);

module.exports = router;
