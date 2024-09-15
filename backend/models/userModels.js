const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 5,
  },

  mobileNo: {
    type: String,
  },

  address: {
    type: String,
  },

  role: {
    type: String,
    enum: ["customer", "admin"],
    default: "customer",
  },

  profilePicture: {
    type: String,
  },

  odders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],

  carts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.methods.comparePassword = async function (userPassword) {
  try {
    const isMatch = await bcrypt.compare(this.password, userPassword);
    return isMatch;
  } catch (err) {
    console.log("Error in comparing password", err);
    return err;
  }
};

userSchema.pre("save", async function (next) {
  const currUser = this;
  if (!currUser) next();
  if (!currUser.isModified("password")) next();
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
    next();
  } catch (err) {
    console.log("errorn in hashing password");
    next();
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
