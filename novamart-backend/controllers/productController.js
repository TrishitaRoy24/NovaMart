const ProductSchema = require("../models/productModel");

/* Get all product */
const getProduct = async (req, res) => {
  const products = await ProductSchema.find();
  res.json(products);
};

/* Create product */
const createProduct = async (req, res) => {
  const {
    name,
    price,
    description,
    category,
    brand,
    image,
    images,
    countInStock,
  } = req.body;

  const newProduct = new ProductSchema({
    name,
    price,
    description,
    category,
    brand,
    image,
    images,
    countInStock,
  });

  const createdProduct = await newProduct.save();

  res.status(200).json(createProduct);
};

module.exports = { getProduct, createProduct };
