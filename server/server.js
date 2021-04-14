const express = require("express");
const cors = require("cors");
const app = express();

const CONNECTION_URL =
  "mongodb+srv://codeddave:drizzydave@cluster0.pog0z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(cors());
const PORT = process.env.PORT || 5006;
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`server started on PORT: ${PORT}`))
  )
  .catch((err) => console.log(err));

mongoose.set("useFindAndModify", false);
