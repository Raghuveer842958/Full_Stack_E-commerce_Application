import React from "react";
import { Link } from "react-router-dom";

const ProductCart = (props) => {
  return (
    <div>
      <Link to={"/product/:" + props?.data?._id}>
        <div className="border h-auto w-auto flex ">
          <div className="border border-blue-500 h-auto w-48">
            <div className="border border-black h-48">
              <img
                src={props?.data?.images}
                alt={props?.data?._id}
                className="h-full w-full"
              />
            </div>
            <div className="border border-black h-9">
              {props?.data?.name ? props?.data?.name : "Description"}
            </div>
            <div className="border border-black h-9">
              {props?.data?.price ? props?.data?.price : "Price"}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

//  {/* {props?.data?.image ? props?.data?.image : "Image"} */}

export default ProductCart;
