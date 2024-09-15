import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cart from "../Cart";

const UserCart = () => {
  // const [userCarts, setUserCarts] = useState(null);

  // const fetchUserCarts = async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const decoded = jwtDecode(token);
  //     const url = "http://localhost:5000/cart/:" + decoded.id;

  //     const res = await fetch(url, {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //       // body: JSON.stringify(data),
  //       // body: JSON.stringify(data), // For POST/PUT requests
  //     });

  //     const userRes = await res.json();
  //     console.log("This is user all Carts:", userRes);
  //     setUserCarts(userRes);
  //   } catch (err) {
  //     console.log("Error in Fetching User All Carts");
  //     console.log("Error is :", err);
  //   }
  // };

  // console.log("Hello ji");

  // useEffect(() => {
  //   fetchUserCarts();
  // }, []);
  // if (!userCarts) return;

  return (
    <div>
      <div className="flex h-auto">
        <div className="w-full border border-black m-2">
          <div className="">
            <div className="h-16 border border-black m-2 flex items-center">
              <p>Items (11)</p>
            </div>
            <div className=" h-14 border border-black m-2">
              <div className="relative flex items-center">
                <p className="">Delevered To: Lucknow-226002</p>
                <button className="absolute right-0">Change</button>
              </div>
            </div>
            <div className=" border border-black m-2">
              {/* {userCarts.response.items.map((d) => (
                <Cart key={d.product} />
              ))} */}
              <Cart />
              <Cart />
              <Cart />
              <Cart />
            </div>
          </div>
        </div>
        <div className="w-96 h-full border border-black m-2">
          <div className="">
            <div className="flex h-14  m-1 justify-between items-center">
              <p className="">Price</p>
              <p className="">200</p>
            </div>
            <div className="flex h-14  m-1 justify-between items-center">
              <p className="">Discount</p>
              <p className="">120</p>
            </div>
            <div className="flex h-14  m-1 justify-between items-center">
              <p className="">Delevery Charge</p>
              <p className="">Free</p>
            </div>
            <div className="flex h-14  m-1 justify-between items-center">
              <p className="">Total Amount</p>
              <p className="">100</p>
            </div>
            <div className="flex h-14  m-1 flex items-center">
              <p className="">You Will Save 4390 on this order</p>
              <p className=""></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCart;
