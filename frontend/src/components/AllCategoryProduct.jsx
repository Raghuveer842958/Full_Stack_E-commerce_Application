import React from "react";
import SmallProductCart from "./cards/SmallProductCart";
import useGetProductsByCategories from "../customHooks/useGetProductsByCategories";
import { useParams } from "react-router-dom";

const AllCategoryProduct = (props) => {
  const apiData = [
    {
      name: "iPhone",
      id: "201",
      category: "Phone",
    },
    {
      name: "RealMe 15",
      id: "202",
      category: "Phone",
    },
    {
      name: "Redami 10 Prime",
      id: "203",
      category: "Phone",
    },
    {
      name: "OPPO Reno 2",
      id: "204",
      category: "Phone",
    },
    {
      name: "Infinix Hot 10",
      id: "205",
      category: "Phone",
    },
    {
      name: "Samsung Galexy",
      id: "206",
      category: "Phone",
    },
    {
      name: "Vivo U20",
      id: "207",
      category: "Phone",
    },
    {
      name: "iPhone 16",
      id: "208",
      category: "Phone",
    },
    {
      name: "Nothing",
      id: "209",
      category: "Phone",
    },
    {
      name: "Levenow",
      id: "210",
      category: "Phone",
    },
  ];
  const { id } = useParams();
  const categoryProductList = useGetProductsByCategories(id);
  // console.log("Category Product List :", categoryProductList);
  return (
    <div className="h-auto">
      <div className="flex">
        <div className="h-full w-1/5 border border-green-500 m-2">
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

        <div className="w-full">
          <div className="border border-black h-12 m-2">Category Products</div>
          <div className="flex flex-wrap">
            {categoryProductList?.items.map((d) => (
              <SmallProductCart data={d} key={d._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategoryProduct;
