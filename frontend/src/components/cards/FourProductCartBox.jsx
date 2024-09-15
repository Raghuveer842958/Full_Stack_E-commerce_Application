import React from "react";
import SmallProductCart from "./SmallProductCart";

const FourProductCartBox = (props) => {
  return (
    <div className="border border-black m-3">
      <div className="border border-black h-16">Heading</div>
      <div className="flex flex-wrap justify-center items-center">
        <SmallProductCart data={props?.data[0]} />
        <SmallProductCart data={props?.data[1]} />
        <SmallProductCart data={props?.data[2]} />
        <SmallProductCart data={props?.data[3]} />
      </div>
    </div>
  );
};

export default FourProductCartBox;
