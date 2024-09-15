import React from "react";
import { Link, Outlet } from "react-router-dom";
import AdminCategoryCart from "../cards/AdminCategoryCart";

const Admin = () => {
  return (
    <div className="">
      <Outlet />
    </div>
  );
};

export default Admin;
