import React from "react";
import SmallProductCart from "./SmallProductCart";

const ThreeProductCartBox = (props) => {
  return (
    <div className="w-1/3 border border-black m-3">
      <div className="border border-black h-16">Heading</div>
      <div className="flex h-auto">
        <div className="w-1/2 flex justify-center items-center">
          <SmallProductCart data={props?.data[0]} />
        </div>
        <div className="w-1/2 flex flex-wrap justify-center items-center">
          <SmallProductCart data={props?.data[1]} />
          <SmallProductCart data={props?.data[2]} />
        </div>
      </div>
    </div>
  );
};

export default ThreeProductCartBox;
