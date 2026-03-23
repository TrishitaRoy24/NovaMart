const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5000;
const productRoutes = require("./routes/productRoutes");

require("dotenv").config();

// Middleware
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀. Good Trishita");
});

// Product Routes
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
