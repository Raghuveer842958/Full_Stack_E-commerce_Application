import React from "react";
import AdminCategoryCart from "../cards/AdminCategoryCart";
import { Link } from "react-router-dom";
import useGetAllCategories from "../../customHooks/useGetAllCategories";

const AdminBody = () => {
  const apiDta = [
    {
      categoryName: "Phones",
      id: 501,
    },
    {
      categoryName: "Phones",
      id: 502,
    },
    {
      categoryName: "Phones",
      id: 503,
    },
    {
      categoryName: "Phones",
      id: 504,
    },
    {
      categoryName: "Phones",
      id: 505,
    },
    {
      categoryName: "Phones",
      id: 506,
    },
  ];

  const allCategoriesList = useGetAllCategories()?.response;
  if (!allCategoriesList) return;
  return (
    <div className="ml-20 mr-20 mt-5">
      <div className="border border-green-500 h-16 flex items-center justify-between">
        <p className="ml-7"> All Product Categories (49)</p>
        <Link to="create-category">
          <button className="border border-black px-2 py-1 rounded-md mr-7">
            Create New Category
          </button>
        </Link>
      </div>
      {allCategoriesList.map((d) => (
        <AdminCategoryCart data={d} key={d.name} />
      ))}
    </div>
  );
};

export default AdminBody;
