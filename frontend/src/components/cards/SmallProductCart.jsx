import React from "react";
import { Link } from "react-router-dom";

const SmallProductCart = (props) => {
  return (
    <div>
      <Link to={"/product/:" + props?.data?._id}>
        <div className="border border-black h-60 w-44 m-2">
          <div className="h-48 w-auto">
            <img
              src={props?.data?.images}
              alt={props?.data?._id}
              className="h-full w-full"
            />
          </div>
          <div className="border border-black h-12 w-full">
            <div className="flex justify-center items-center">
              {props?.data?.name ? props?.data?.name : "Heading"}
            </div>
            <div className="flex justify-center items-center">
              {props?.data?.price ? props?.data?.price : "Price"}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SmallProductCart;
