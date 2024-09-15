const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const cartRoutes = require("./routes/cartRoutes");
const cors = require("cors");

// connect database
const database = require("./database");

// middleware
app.use(bodyParser.json());
app.use(cors());

// routes
app.use(userRoutes);
app.use(productRoutes);
app.use(orderRoutes);
app.use(categoryRoutes);
app.use(cartRoutes);

// server connection
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server Listen on Port ${PORT}`);
});
