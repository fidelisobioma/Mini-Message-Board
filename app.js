//import and create express application
const express = require("express");
const app = express();
const path = require("node:path");

//serving static asset
const assetath = path.join(__dirname, "public");
app.use(express.static(assetath));
app.use(express.urlencoded({ extended: true }));

//set the ejs engine
app.set("view engine", "ejs");

//import routes
const usersRouter = require("./routes/usersRouter");
//use routes
app.use("/", usersRouter);

//Run the server on port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`my server is running on port ${PORT}`));
