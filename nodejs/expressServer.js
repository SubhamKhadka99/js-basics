import http from "http";
import express from "express";

// ! importing routes
import userRoutes from './routes/user.routes.js'
import categoriesRoutes from './routes/category.routes.js'

//! creating express app instance
const app = express();

//* server
const server = http.createServer(app);

app.get("/", (req, res) => {

  res.json({
    message: "Hello from server",
  });
});

//! get user by id
// dynamic route
// params
// get all users // you can add any amount of parameters it will stay on req.params

//! category

//! Product

//! using routes
app.use('/users',userRoutes)
app.use('/categories',categoriesRoutes)

//* listen on port 8000
server.listen(8000, () => {
  console.log(`server is up & running at http://localhost:8000`);
});

// req.url = current req url
// req.params => req parameter => /users/:id => user : to make dynamic
