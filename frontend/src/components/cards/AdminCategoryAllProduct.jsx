import React from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import useGetProductsByCategories from "../../customHooks/useGetProductsByCategories";
import AdminProductCart from "./AdminProductCart";

const AdminCategoryAllProduct = () => {
  const location = useLocation();
  const { id } = useParams();
  const productList = useGetProductsByCategories(id);
  console.log("All product list :", productList);
  const allPath = location.pathname.split("/");
  const currPath = allPath[allPath.length - 1];

  if (!productList) return;

  return (
    <div className="">
      {currPath === "create-product" ? (
        <Outlet />
      ) : (
        <div className="h-auto">
          <div className="border border-green-500 h-16 flex items-center justify-between">
            <p className="ml-7"> All Product Categories (49)</p>
            <Link to="create-product">
              <button className="border border-black px-2 py-1 rounded-md mr-7">
                Create New Product
              </button>
            </Link>
          </div>
          <div className="flex flex-wrap">
            {productList?.items.map((d) => (
              <div className="mt-4 mr-4">
                <AdminProductCart data={d} key={d._id} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCategoryAllProduct;
