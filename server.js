const express = require("express");
const app = express();
const userRouter = require("./routes/User");
const showRouter = require("./routes/Show");
// const db = require("./db");
const seed = require("./seed")


app.use(express.json());

app.use("/user", userRouter);
app.use("/show", showRouter);

// We can now make a request to our post route
app.listen(3000, async () => {
//   await db.sync();
  // await seed()
  console.log(`listening on port 3000`);
});
