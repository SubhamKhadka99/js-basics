// get all users
export const getAll = (req, res) => {
  const id = req.params.id;

  res.status(200).json({
    message: `User id : ${id} fetched`,
  });
};

//  get all users by id
export const getById = (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    message: `User id : ${id} fetched`,
  });
};

// create users
export const createUsers = (req, res) => {
  res.json({
    message: "User created",
  });
};

// Update users
export const updateUsers = (req, res) => {
  const id = req.params.id;
  res.json({
    message: `User id ${id} updated`,
  });
}

// delete users 
export const deleteUsers =  (req, res) => {
    const id =req.params.id
  res.json({
    message: `User id ${id} deleted`,
  });
}