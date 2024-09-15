import React from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import useGetProductsByCategories from "../../customHooks/useGetProductsByCategories";

const AdminCategoryCart = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  // yahi se start karana hai
  // if (location?.state?.referese) {
  //   AdminCategoryCart();
  // }

  const categoryId = props?.data?._id;
  const deleteCategoryHandler = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      // const decoded = jwtDecode(token);
      const url = "http://localhost:5000/category/:" + categoryId;

      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(data),
        // body: JSON.stringify(data), // For POST/PUT requests
      });

      const deletedCategories = await res.json();
      if (deletedCategories.result) {
        // , { state: { refresh: true } }
        navigate("/admin", { state: { refresh: true } });
      }
    } catch (err) {
      console.log("Error in Creating Category");
      console.log("Error is :", err);
    }
  };

  const editCategoryHandler = async () => {};

  return (
    <Link to={"category/:" + categoryId}>
      <div>
        <div className="h-36 border border-green-500 flex relative">
          <div className="h-28 w-24 border border-black ml-10 mt-4 rounded-md">
            <img
              className="h-full w-full rounded-md"
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
          <div className="h-auto w-auto absolute right-2 top-2 flex">
            <button
              className="h-10 w-10 border border-green-500 rounded-md m-1"
              onClick={(e) => {
                deleteCategoryHandler(e);
              }}
            >
              D
            </button>

            {/* <Link to={"update/:" + props?.data?._id}> */}
            <button
              className="h-10 w-10 border border-green-500 rounded-md m-1"
              onClick={editCategoryHandler}
            >
              E
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AdminCategoryCart;
