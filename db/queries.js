const pool = require("./pool");

//retreive comments from database
async function getAllComments() {
  const { rows } = await pool.query("SELECT * FROM userscomment");
  return rows;
}

//retireve comments from database
async function addComment(user, message) {
  await pool.query("INSERT INTO userscomment (name, messages) VALUES ($1,$2)", [
    user,
    message,
  ]);
}

//retrieve user details
async function userDetails(detailId) {
  const { rows } = await pool.query(
    "SELECT * FROM userscomment WHERE userscomment.id = $1",
    [detailId]
  );
  return rows;
}
module.exports = { getAllComments, addComment, userDetails };
