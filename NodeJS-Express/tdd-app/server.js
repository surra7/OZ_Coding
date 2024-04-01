const express = require("express");
const app = express();
const PORT = 5000;
const productRoutes = require("./routes");
const mongoose = require("mongoose");

require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((error) => console.log(error));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
