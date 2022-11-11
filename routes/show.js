const { Router } = require("express");
const showRouter = Router();
const User = require("../models/User");
const Show = require("../models/Show");
const { body, validationResult, param } = require('express-validator')

//POST new show 
// {
//   "title": "TestShow",
//   "genre": "Horror",
//   "rating": 5,
//   "status": "on-going",
//   "UserId": 2
// }
//POST // http://localhost:3000/show/addNewShow
showRouter.post("/addNewShow", async (req, res) => {
  const show = await Show.Show.create(req.body);
  res.status(200).send(show);
});

// GET all shows /shows 
// GET // http://localhost:3000/show/shows
showRouter.get("/shows", async (req, res) => {
  const show = await Show.Show.findAll()
  res.status(200).send(show);
})

// GET one show /shows/5 
// GET // http://localhost:3000/show/shows/title/X-Files
showRouter.get("/shows/title/:title", async (req, res) => {
  const show = await Show.Show.findAll({
    where: {
      title: req.params.title
    }
  })
  res.status(200).send(show);
});

// GET shows of a particular genre (genre in req.params) /shows/genres/Comedy 
// GET // http://localhost:3000/show/shows/genre/Sitcom
showRouter.get("/shows/genre/:genre", async (req, res) => {
  // const show = await Show.Show.findByPk(req.params.genre)
  console.log(req.params.genre)
  const show = await Show.Show.findAll({
    where: {
      genre: req.params.genre
    }
  })
  res.status(200).send(show);
});

// PUT update the status of a show /shows/3/updates(rating) 
// PUT // http://localhost:3000/show/shows/8/update-status/cancelled 
// PUT x // http://localhost:3000/show/shows/8/update-status/can
showRouter.put(
  "/shows/:id/update-status/:status",
  //check that status is not empty and char min 5 - 25 and no white space
  param('status').isLength({ min: 5, max: 20 }),
  async (req, res) => {
    const errors = validationResult(req)
    // const result = req.params.status > 5 && req.params.status < 25
    if (!errors.isEmpty()) {
      return res.status(400).send({errors: errors.array()})
    }
    const show = await Show.Show.findByPk(req.params.id)
    await show.update({ status: req.params.status })
    res.status(200).send(show);
  });

// PUT update rating of a show that has been watched /shows/4/watched 
//PUT // http://localhost:3000/show/shows/3/update-rating/5
//PUT x // http://localhost:3000/show/shows/3/update-rating/9
showRouter.put(
  "/shows/:id/update-rating/:rating",
  //check that rating is not empty
  param('rating').isInt({ min: 0, max: 5 }),
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).send({errors: errors.array()})
    }
    const show = await Show.Show.findByPk(req.params.id)
    await show.update({ rating: req.params.rating })
    res.status(200).send(show);
  });


// DELETE a show 
//DELETE // http://localhost:3000/show/shows/deleteShow/12
showRouter.delete("/shows/deleteShow/:id", async (req, res) => {
  const show = await Show.Show.findByPk(req.params.id)
  await show.destroy({ id: req.params.id })
  res.status(200).send(show);
  // res.status(404).send(show);
});

module.exports = showRouter;