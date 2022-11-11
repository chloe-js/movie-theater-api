const { Router } = require("express");
const userRouter = Router();
const User = require("../models/User");
const Show = require("../models/Show");

// Users
//POST new user 
//POST// http://localhost:3000/user/addNewUser
// {
//     "id": 3,
//     "username": "testUser3@gmail.com",
//     "password": "ThisIsC"
// }
userRouter.post("/addNewUser", async (req, res) => {
    const user = await User.User.create(req.body);
    res.status(200).send(user);
  });

// GET all users /users
// GET // http://localhost:3000/user/allUsers
userRouter.get("/allUsers", async (req, res) => {
    const user = await User.User.findAll()
    res.status(200).send(user);
})
// GET one user /users/1
// GET // http://localhost:3000/user/allUsers/2
userRouter.get("/allUsers/:id", async (req, res) => {
    const user = await User.User.findByPk(req.params.id)
    res.status(200).send(user);
});


// GET all shows watched by a user (user id in req.params)   /users/2/shows(watched)
//GET // http://localhost:3000/user/allUsers/1/shows-watched/watched
userRouter.get("/allUsers/:UserId/shows-watched/:status", async (req, res) => {
    // const user = await Show.Show.findByPk(req.params.UserId);
    const user = await Show.Show.findAll({
        where: {
            UserId: req.params.UserId, // 1
            status: req.params.status  // on-going
        }
      })
    res.status(200).send(user);
});


module.exports = userRouter;