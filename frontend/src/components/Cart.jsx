import React from "react";

const Cart = () => {
  return (
    <div>
      <div className="flex relative border border-black">
        <div className=" m-1 h-auto ml-5">
          <div className="h-24 w-28 border border-black m-0.5">Image</div>
          <div className="flex justify-between mt-7">
            <button className="p-1 border border-black h-7 w-7 rounded-full flex items-center justify-center">
              +
            </button>
            <button className="p-1 border border-black h-7 w-10 flex items-center justify-center">
              1
            </button>
            <button className="p-1 border border-black h-7 w-7 rounded-full flex items-center justify-center">
              -
            </button>
          </div>
        </div>
        <div className=" m-1 ml-5">
          <p className="">Product Name.........</p>
          <p className="mt-8">Product Price........</p>
          <div className="mt-10">
            <button className="border border-black px-2 py-1 rounded-md">
              Save For Latter
            </button>
            <button className="border border-black ml-4 px-2 py-1 rounded-md">
              Remove
            </button>
          </div>
        </div>
        <div className=" m-1 h-10 absolute right-0 top-14">
          Delevered by Augest 28 |Free
        </div>
      </div>
    </div>
  );
};

export default Cart;
