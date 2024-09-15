import React from "react";
import ProductCart from "./ProductCart";

const BestProductCart = (props) => {
  const productList = props?.data;
  // const productTitle = props?.data[0]?.title;
  const productTitle = "Best Products";
  return (
    <div className="h-auto m-2">
      <div className="h-14 border border-black">{productTitle}</div>
      <div className="h-auto border border-black flex justify-between">
        {productList.map((d) => (
          <ProductCart data={d} key={d._id} />
        ))}
      </div>
    </div>
  );
};

export default BestProductCart;
// [
//     [
//         {}
//     ],
//     [
//         {}{}{}{}{}{}{}
//     ]
// ]
