const ProductSchema = require("../models/productModel");

/* Get all product */
const getProduct = async (req, res) => {
  try {
    const products = await ProductSchema.find()
      .select("-createdAt -updatedAt -__v")
      .lean();

    const formattedProducts = products.map(({ _id, ...rest }) => ({
      id: _id,
      ...rest,
    }));

    res.json({
      data: formattedProducts,
      message: "Products Lists",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
