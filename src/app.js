/*jshint esversion: 6 */
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

//Route imports
const userRoute = require("./routes/userRoutes");

//Use Routes
app.use("/user", userRoute);

//Firebase imports
const fireBase = require("./utils/firebase");

app.use("/user",fireBase);

const port = process.env.PORT;
app.listen(port || 3000, () => {
  console.log("Server is up on port ", port);
});
