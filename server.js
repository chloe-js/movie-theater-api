const { Router } = require("express");
const userRouter = Router();
const User = require("../models/User");

// const getUser = require('../middleware/getUser')
// const { body, validatorResult } = require('express-validator')


// Users

// GET all users
// userRouter.get("/:id", getUser, async (req, res) => {
//   res.status(200).send({ user: req.user });
// });

// GET one user
// userRouter.get("/:id", getUser, async (req, res) => {
//   res.status(200).send({ user: req.user });
// });

// GET all shows watched by a user (user id in req.params)
// userRouter.get("/:id", getUser, async (req, res) => {
//   res.status(200).send({ user: req.user });
// });

// PUT update and add a show if a user has watched it
// userRouter.put("/:id", getUser, async (req, res) => {
//   await req.user.update(req.body)
//   res.status(200).send({ user: req.user });
// });


// Shows

// GET all shows
// userRouter.get("/:id", getUser, async (req, res) => {
//   res.status(200).send({ user: req.user });
// });

// GET one show
// userRouter.get("/:id", getUser, async (req, res) => {
//   res.status(200).send({ user: req.user });
// });

// GET shows of a particular genre (genre in req.params)
// userRouter.get("/:id", getUser, async (req, res) => {
//   res.status(200).send({ user: req.user });
// });

// PUT update rating of a show that has been watched
// userRouter.put("/:id", getUser, async (req, res) => {
//   await req.user.update(req.body)
//   res.status(200).send({ user: req.user });
// });

// PUT update the status of a show
// userRouter.put("/:id", getUser, async (req, res) => {
//   await req.user.update(req.body)
//   res.status(200).send({ user: req.user });
// });

// DELETE a show
// userRouter.delete("/:id", getUser, async (req, res) => {
//   // use middleware to replace these lines with a function
//   // const user = await User.findByPk(req.params.id);
//   // REPLACE user! with req.user
//   await req.user.destroy()
//   res.status(200).send({ user: req.user });
// });



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