import React from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="border border-black h-auto m-2">
      <Header />
      <Outlet />
    </div>
  );
};

export default Body;
