import React from "react";
import WishListCart from "../cards/WishListCart";

const WishList = () => {
  return (
    <div className="ml-20 mr-20 mt-5">
      <div className="border border-green-500 h-16 flex items-center">
        <p className=" ml-7"> My WishList (49)</p>
      </div>
      <WishListCart />
      <WishListCart />
      <WishListCart />
      <WishListCart />
      <WishListCart />
      <WishListCart />
    </div>
  );
};

export default WishList;
