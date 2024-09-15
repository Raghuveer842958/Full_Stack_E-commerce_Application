import React from "react";
import UserCategoryCart from "./cards/UserCategoryCart";
import useGetAllCategories from "../customHooks/useGetAllCategories";

const AllCategoriesList = () => {
  const categoryList = useGetAllCategories();
  if (!categoryList) return;

  return (
    <div className="h-auto w-auto border border-black flex">
      {categoryList?.response?.map((d) => (
        <UserCategoryCart data={d} key={d._id} />
      ))}
    </div>
  );
};

export default AllCategoriesList;
