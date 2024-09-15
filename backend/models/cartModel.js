const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
    totalPrice: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// cartSchema.pre("save", function () {
//   if (this.isModified("items") && this.items.length !== 1) {
//     const currPrice = this.totalPrice;
//     let lastItemProductId = this.items[this.items.length - 1];
//     console.log("new Price is :", newPrice);
//     this.totalPrice = newPrice;
//   }
// });

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
