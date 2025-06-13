const { Router } = require("express");
const usersRouter = Router();

const commentsControler = require("../controller/commentsController");

//display all users
usersRouter.get("/", commentsControler.getComments);

//display a form to add a new user
usersRouter.get("/new", commentsControler.displayForm);

//handle the form submission
usersRouter.post("/new", commentsControler.usersCommetPost);

//handle detail route
usersRouter.get("/details/:detailId", commentsControler.getUserDetails);

module.exports = usersRouter;
