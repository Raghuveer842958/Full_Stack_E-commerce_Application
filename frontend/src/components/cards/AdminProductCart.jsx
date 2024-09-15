import React from "react";
import ProductCart from "./ProductCart";
import { useNavigate, useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AdminProductCart = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const deleteCategoryHandler = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const decoded = jwtDecode(token);
      const url =
        "http://localhost:5000/product/:" +
        decoded.id +
        "/:" +
        props?.data?._id;

      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(data),
        // body: JSON.stringify(data), // For POST/PUT requests
      });

      const deletedProduct = await res.json();
      console.log("Deleted product is...... :", deletedProduct);
      if (deletedProduct.result) {
        // , { state: { refresh: true } }
        // /admin/category/:66c0eb161cf144d8444b2626
        navigate("/admin/category/" + id);
      }
    } catch (err) {
      console.log("Error in Creating Category");
      console.log("Error is :", err);
    }
  };
  return (
    <div className="relative">
      <ProductCart data={props.data} />
      <div className="h-auto w-auto absolute top-0 left-28">
        <button
          className="h-8 w-8 border border-green-500 rounded-md m-1"
          onClick={(e) => {
            deleteCategoryHandler(e);
          }}
        >
          D
        </button>

        {/* <Link to={"update/:" + props?.data?._id}> */}
        <button
          className="h-8 w-8 border border-green-500 rounded-md m-1"
          //   onClick={editCategoryHandler}
        >
          E
        </button>
      </div>
    </div>
  );
};

export default AdminProductCart;
