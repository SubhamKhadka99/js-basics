//  get all
export const getAll = (req, res) => {
  res.status(200).json({
    message: "All categories fetched",
  });
}
// get by id
export const getById =  (req, res) => {
    const id = req.params.id
    res.status(200).json({
    message: `Category ${id} fetched`,
  });
}

// create

export const createCategories = (req, res) => {
    res.json({
    message: "Category created",
  });
}


// update 
export const updateCategories = (req, res) => {
const {id}=req.params

  res.json({
     message: `Category ${id} updated`,
  });
}

// delete
export const deleteCategories =(req, res) => {
const {id}=req.params
    res.json({
    message: `Category ${id} delete`,
  });
}