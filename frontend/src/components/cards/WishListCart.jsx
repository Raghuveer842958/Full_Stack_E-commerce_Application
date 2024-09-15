import React from "react";

const WishListCart = (props) => {
  const deleteHandler = async () => {};
  return (
    <div>
      <div className="h-36 border border-green-500 flex relative">
        <div className="h-28 w-20 border border-black ml-10 mt-4">
          <img
            className="h-full w-full"
            src={props?.data?.image}
            alt={props?.data?.name}
          />
        </div>
        <div className="ml-10 mt-6">
          <p className="">{props?.data?.name}</p>
          <div className="flex mt-2">
            <p>Rating ⭐</p>
            <p>(Number)</p>
          </div>
          <div className="flex mt-2">
            <p className="">$399</p>
            <p className="">$100 of</p>
            <p className="">*80% of</p>
          </div>
        </div>
        <button
          className="absolute top-14 right-10 border border-black s px-3 py-1 rounded-md"
          onClick={deleteHandler}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default WishListCart;
