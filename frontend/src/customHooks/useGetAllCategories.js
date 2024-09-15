import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

const useGetAllCategories = () => {
  const [categoriesList, setCategoriesList] = useState();
  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const decoded = jwtDecode(token);
      const url = "http://localhost:5000/categories";

      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        //   body: JSON.stringify(data),
        // body: JSON.stringify(data), // For POST/PUT requests
      });

      const userRes = await res.json();
      setCategoriesList(userRes);
      // console.log("All Product Categories is :", userRes);
    } catch (err) {
      console.log("Error in Fetching all Categories List :", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return categoriesList;
};

export default useGetAllCategories;
