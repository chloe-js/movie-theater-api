const { Router } = require("express");
const showRouter = Router();
const User = require("../models/User");
const Show = require("../models/Show");

// Shows

// GET all shows /shows
// GET // http://localhost:3000/show/allShows
showRouter.get("/allShows", async (req, res) => {
  const show = await Show.Show.findAll()
  res.status(200).send(show);
})

// GET one show /shows/5
// // http://localhost:3000/show/allShows/3
// showRouter.get("/allShows/:id", async (req, res) => {
//   const show = await Show.Show.findByPk(req.params.id)
//   res.status(200).send(show);
// });
// GET // http://localhost:3000/show/allShows/title/X-Files
showRouter.get("/allShows/title/:title", async (req, res) => {
  const show = await Show.Show.findAll({
    where: {
      title: req.params.title
    }
  })
  res.status(200).send(show);
});

// GET shows of a particular genre (genre in req.params) /shows/genres/Comedy
// GET // http://localhost:3000/show/allShows/genre/Sitcom
showRouter.get("/allShows/genre/:genre", async (req, res) => {
  // const show = await Show.Show.findByPk(req.params.genre)
  console.log(req.params.genre)
  const show = await Show.Show.findAll({
    where: {
      genre: req.params.genre
    }
  })
  res.status(200).send(show);
});


module.exports = showRouter;