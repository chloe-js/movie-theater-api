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

// PUT update and add a show if a user has watched it  /users/2/shows/9
//PUT // http://localhost:3000/user/allUsers/2/show/7/update-watched/watched
userRouter.put("/allUsers/:UserId/show/:showId/update-watched/:status", async (req, res) => {
    const user = await Show.Show.findByPk(req.params.showId)
    await user.update({
        status: req.params.status,
        UserId: req.params.UserId
    })
    res.status(200).send(user);
});



// userRouter.post("/", async (req, res) => {
//     //create the user db entry
//     // if going to await function need to async the (req,res) function 
//     //make sure the body send with the request MATCHES the model user,js!
//     const user = await User.create(req.body);
//     // very important to send something in the send ()
//     res.status(200).send({ user });
//   });


// userRouter.post(
//   "/",
//   //check email is email
//   body('email').isEmail(),
//   //check password length
//   body('password').isLength({ min: 6}),
//   async (req, res) => {

//     const errors = validatorResult(req)
//     if (!errors.isEmpty()) {
//       return res.status(400).send({ errors: errors.array() })
//     }

//     const user = await User.create(req.body);
//     res.status(201).send({ user });
//   }
// );

module.exports = userRouter;