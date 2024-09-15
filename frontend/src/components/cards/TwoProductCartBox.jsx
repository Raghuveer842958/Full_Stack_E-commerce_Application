import React from "react";

const TwoProductCartBox = (props) => {
  console.log("Props data is :", props);
  return (
    <div className="h-96 border border-green-500 flex m-2">
      <div className="border border-black w-1/2 mr-1">
        <img
          src={props?.data[0]?.image}
          alt={props?.data[0]?.name}
          className="h-full w-full"
        />
      </div>
      <div className="border border-black w-1/2 ml-1">
        <img
          src={props?.data[1]?.image}
          alt={props?.data[1]?.name}
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default TwoProductCartBox;
