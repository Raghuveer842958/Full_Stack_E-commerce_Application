import React, { useEffect, useState } from "react";

const useCreateCategory = (props) => {
  const [productList, setProductList] = useState(null);
  const fetchData = async () => {
    try {
      const newCategoryData = props?.data;
      const token = localStorage.getItem("token");
      //   const decoded = jwtDecode(token);
      const url = "http://localhost:5000/category";

      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCategoryData),
        // body: JSON.stringify(data), // For POST/PUT requests
      });

      const userRes = await res.json();
      setProductList(userRes);
    } catch (err) {
      console.log("Error in Fetching all Categories List :", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return productList;
};

export default useCreateCategory;
