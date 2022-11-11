const { Router } = require("express");
const userRouter = Router();
const User = require("../models/User");
const Show = require("../models/Show");
const { body, validationResult } = require('express-validator')

// Users
//POST new user 
// {
//     "id": 3,
//     "username": "testUser3@gmail.com",
//     "password": "ThisIsC"
// }
//POST// http://localhost:3000/user/addNewUser
//POST// http://localhost:3000/user/addNewUser
userRouter.post(
    "/addNewUser", 
    // password is valid
    body('username').isEmail(),
    async (req, res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).send({errors: errors.array()})
        }

    const user = await User.User.create(req.body);
    res.status(200).send(user);
});

// GET all users /users 
// GET // http://localhost:3000/user/users
userRouter.get("/users", async (req, res) => {
    const user = await User.User.findAll()
    res.status(200).send(user);
})
// GET one user /users/1 
// GET // http://localhost:3000/user/users/2
userRouter.get("/users/:id", async (req, res) => {
    const user = await User.User.findByPk(req.params.id)
    res.status(200).send(user);
});

// PUT update and add a show if a user has watched it  /users/2/shows/9 
//PUT // http://localhost:3000/user/shows/2/show/7/update-watched/watched
userRouter.put("/shows/:UserId/show/:showId/update-watched/:status", async (req, res) => {
    const user = await Show.Show.findByPk(req.params.showId)
    await user.update({
        status: req.params.status,
        UserId: req.params.UserId
    })
    res.status(200).send(user);
});

// GET all shows watched by a user (user id in req.params)   /users/2/shows(watched) 
//GET // http://localhost:3000/user/users/2/shows/watched
userRouter.get("/users/:UserId/shows/:status", async (req, res) => {
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