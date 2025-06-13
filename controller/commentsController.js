const db = require("../db/queries");

//display all users
async function getComments(req, res) {
  const comments = await db.getAllComments();
  res.render("index", { comments: comments });
}

//display a form to add a new user
async function displayForm(req, res) {
  res.render("form");
}

//handle the form submission
async function usersCommetPost(req, res) {
  const { user, message } = req.body;
  await db.addComment(user, message);
  res.redirect("/");
}

//detail function
async function getUserDetails(req, res) {
  const { detailId } = req.params;
  const details = await db.userDetails(detailId);
  res.render("detail", { title: "User details", details: details });
}

module.exports = { getComments, displayForm, usersCommetPost, getUserDetails };
