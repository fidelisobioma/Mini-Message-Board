require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS userscomment(id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
name TEXT, 
messages TEXT, addedDate DATE DEFAULT CURRENT_DATE);

INSERT INTO userscomment(name, messages) VALUES('fidexcode', 'hey, AI wont take your Job');
`;

async function main() {
  console.log("sending...");
  const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("end");
}
main();
