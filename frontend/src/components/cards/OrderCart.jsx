import React from "react";

const OrderCart = () => {
  return (
    <div>
      <div className="h-28 w-auto m-2 border border-black">
        <div className="flex">
          <div className="h-20 w-16 border border-black ml-10 mt-4">Image</div>
          <div className="flex mt-4">
            <p className="ml-10">Item Name</p>
            <p className="ml-60">Price</p>
            <p className="ml-60">Status</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCart;
