const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const postRoutes = require("./routes/postsRoutes");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();

app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user", userRoutes);
app.use("/posts", postRoutes);
app.use("/", (req, res) => {
  res.send("Welcome to the Wanderlust Api");
});
const PORT = process.env.PORT || 5006;
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server started on PORT: ${PORT}`))
  )
  .catch((err) => console.log(err));

mongoose.set("useFindAndModify", false);
