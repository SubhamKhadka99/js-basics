// get all product
export const getAll = (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    message: `All Products fetched`,
  });
};

//  get product by id
export const getById = (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Product id : ${id} fetched`,
  });
};

// create product
export const createProduct = (req, res) => {
  res.json({
    message: "Product created",
  });
};

// Update product
export const updateProduct = (req, res) => {
  const id = req.params.id;
  res.json({
    message: `Product id ${id} updated`,
  });
}

// delete product
export const deleteProduct =  (req, res) => {
    const id =req.params.id
  res.json({
    message: `Product id ${id} deleted`,
  });
}