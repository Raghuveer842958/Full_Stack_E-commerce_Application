import React, { useState } from "react";
import ProductCart from "../cards/ProductCart";
import useCreateCategory from "../../customHooks/useCreateCategory";
import { useNavigate } from "react-router-dom";

const CreateCategory = () => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const navigate = useNavigate();

  const createNewCategory = async () => {
    try {
      const data = {
        name,
        description,
        image,
      };
      const token = localStorage.getItem("token");
      // const decoded = jwtDecode(token);
      const url = "http://localhost:5000/category";

      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        // body: JSON.stringify(data), // For POST/PUT requests
      });

      const newCategory = await res.json();
      console.log("Created Category is :", newCategory);
      if (newCategory.result) {
        navigate("/admin");
      }
    } catch (err) {
      console.log("Error in Creating Category");
      console.log("Error is :", err);
    }
  };

  return (
    <div className="flex h-auto w-auto">
      <div className="border border-black w-1/2">
        <div>
          <p className="m-2">Category Name</p>
          <div className="flex m-2">
            <input
              className="border border-black p-3"
              placeholder="Category Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <p className="m-2">Description</p>
          <div className="flex m-2">
            <input
              className="border border-black p-3"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div>
          <p className="m-2">Image</p>
          <div className="flex m-2">
            <input
              className="border border-black p-3"
              placeholder="Image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        </div>
        <button
          className="mt-5 ml-2 border border-black rounded-md px-5 py-2 flex itmes-center justify-center"
          onClick={createNewCategory}
        >
          Create
        </button>
      </div>

      <div className="border border-black w-1/2 flex justify-center items-center">
        <ProductCart />
      </div>
    </div>
  );
};

export default CreateCategory;
