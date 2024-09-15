import React from "react";
import { Link } from "react-router-dom";

const UserCategoryCart = (props) => {
  return (
    <Link to={"/category-/:" + props?.data?.name + "/:" + props?.data?._id}>
      <div className="border border-black rounded-md h-20 w-20 m-2 flex items-center justify-center">
        {props?.data?.name}
      </div>
    </Link>
  );
};

export default UserCategoryCart;
