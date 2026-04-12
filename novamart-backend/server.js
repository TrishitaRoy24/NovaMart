const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const productRoutes = require("./routes/productRoutes");

// ✅ CORS Configuration
const allowedOrigins = [
  "http://localhost:4200", // Angular development server
  // "https://yourdomain.com", // Add your production frontend URL here
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (e.g., Postman, mobile apps)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    // Since you are not using cookies or authentication,
    // this can be safely removed or set to false.
    credentials: false,
  }),
);

// ✅ Middleware
app.use(express.json());

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("MongoDB connection error:", err));

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀. Good Trishita");
});

// ✅ Product Routes
app.use("/api/products", productRoutes);

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
