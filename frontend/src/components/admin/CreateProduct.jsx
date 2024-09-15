import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const CreateProduct = () => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const [brand, setBrand] = useState();
  const [image, setImage] = useState();
  // const [category, setCategory] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log("Category id is :", id);

  const createNewProductHandler = async () => {
    try {
      const data = {
        name: "Girl Dress",
        description: "Girl Dress",
        image,
        price: "999",
        stock: 1000,
        categoryId: id,
        brand: "Girl Dress",
        image,
      };
      const token = localStorage.getItem("token");
      const decoded = jwtDecode(token);
      console.log("User id is :", decoded);
      const url = "http://localhost:5000/product/:" + decoded.id;

      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        // body: JSON.stringify(data), // For POST/PUT requests
      });

      const newProduct = await res.json();
      console.log("Created Category is :", newProduct);
      if (newProduct.result) {
        console.log("Category id is... :", newProduct?.response?.category);
        navigate("/admin/category/:" + newProduct?.response?.category);
      }
    } catch (err) {
      console.log("Error in Creating Category");
      console.log("Error is :", err);
    }
  };

  return (
    <div>
      <div>
        <div>
          <p className="m-2">Product Name</p>
          <div className="flex m-2">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="border border-black p-3"
              placeholder="Category Name"
            />
          </div>
        </div>
        <div>
          <p className="m-2">Description</p>
          <div className="flex m-2">
            <input
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="border border-black p-3"
              placeholder="Description"
            />
          </div>
        </div>
        <div>
          <p className="m-2">Image</p>
          <div className="flex m-2">
            <input
              onChange={(e) => setImage(e.target.value)}
              value={image}
              className="border border-black p-3"
              placeholder="Image"
            />
          </div>
        </div>
        <div>
          <p className="m-2">Price</p>
          <div className="flex m-2">
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              className="border border-black p-3"
              placeholder="Price"
            />
          </div>
        </div>
        <div>
          <p className="m-2">Brand</p>
          <div className="flex m-2">
            <input
              onChange={(e) => setBrand(e.target.value)}
              value={brand}
              className="border border-black p-3"
              placeholder="Brand"
            />
          </div>
        </div>
        <div>
          <p className="m-2">Stock</p>
          <div className="flex m-2">
            <input
              onChange={(e) => setStock(e.target.value)}
              value={stock}
              className="border border-black p-3"
              placeholder="Stock"
            />
          </div>
        </div>
        <button
          className="mt-5 ml-2 border border-black rounded-md px-5 py-2 flex itmes-center justify-center"
          onClick={createNewProductHandler}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateProduct;
