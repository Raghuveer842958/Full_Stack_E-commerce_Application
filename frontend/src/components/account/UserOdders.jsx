import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import OrderCart from "../cards/OrderCart";

const Orders = () => {
  //   const [userOrders, setUserOrders] = useState(null);

  //   const fetchUserOrders = async () => {
  //     try {
  //       const token = localStorage.getItem("token");
  //       const decoded = jwtDecode(token);
  //       const url = "http://localhost:5000/order/:" + decoded.id;

  //       const res = await fetch(url, {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-Type": "application/json",
  //         },
  //         // body: JSON.stringify(data),
  //         // body: JSON.stringify(data), // For POST/PUT requests
  //       });

  //       const userRes = await res.json();
  //       console.log("This is user all orders:", userRes);
  //       setUserOrders(userRes);
  //     } catch (err) {
  //       console.log("Error in Fetching User All Orders");
  //       console.log("Error is :", err);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchUserOrders();
  //   }, []);

  //   if (!userOrders) return;

  return (
    <div>
      <div className="flex">
        <div className="h-full w-1/5 border border-green-500 ml-4 mt-5">
          <div>
            <p className="ml-4 mt-2">Filter</p>
            <p className="ml-4 mt-2">Order List</p>
            <div className="ml-4">
              <div className="flex mt-2">
                <input type="checkbox" />
                <p>On the Way</p>
              </div>
              <div className="flex mt-2">
                <input type="checkbox" />
                <p className="">Delevered</p>
              </div>
              <div className="flex mt-2">
                <input type="checkbox" />
                <p>Cancelled</p>
              </div>
              <div className="flex mt-2">
                <input type="checkbox" />
                <p>Returned</p>
              </div>
            </div>
          </div>

          <div>
            <p className="ml-4 mt-4">Order Date</p>
            <div className="ml-4">
              <div className="flex mt-2">
                <input type="checkbox" />
                <p>Last 30 Days</p>
              </div>
              <div className="flex mt-2">
                <input type="checkbox" />
                <p className="">2023</p>
              </div>
              <div className="flex mt-2">
                <input type="checkbox" />
                <p>2022</p>
              </div>
              <div className="flex mt-2">
                <input type="checkbox" />
                <p>2021</p>
              </div>
              <div className="flex mt-2">
                <input type="checkbox" />
                <p>2020</p>
              </div>
              <div className="flex mt-2">
                <input type="checkbox" />
                <p>Older</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-auto w-full border border-green-500  ml-3 mr-3 mt-5">
          <div className="m-2 w-4/5 flex">
            <input className="w-4/5 border border-black block" type="text" />
            <button className="px-10 py-1 w-44 ml-1 border border-black">
              Search
            </button>
          </div>

          {/* {userOrders.response.map((d) => (
            <OrderCart key={d} />
          ))} */}

          <OrderCart />
          <OrderCart />
          <OrderCart />
          <OrderCart />
          <OrderCart />
          <OrderCart />
          <OrderCart />
          <OrderCart />
        </div>
      </div>
    </div>
  );
};

export default Orders;
