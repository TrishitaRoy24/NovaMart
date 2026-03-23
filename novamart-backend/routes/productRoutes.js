const express = require("express");
const router = express.Router();

const {
  getProduct,
  createProduct,
} = require("../controllers/productController");

router.route("/").get(getProduct).post(createProduct);

module.exports = router;
