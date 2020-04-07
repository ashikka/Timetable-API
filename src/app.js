/*jshint esversion: 6 */
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
dotenv.config();

app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

//Route imports
const userRoute = require("./routes/userRoutes");

//Use Routes
app.use("/user", userRoute);

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server is up on port ", port);
});
