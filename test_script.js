const pg = require("pg");
const settings = require("./settings.json"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

const findByPerson = require('./name.js')(client)

const famousPerson = process.argv[2];

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  findByPerson(famousPerson, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    const rows = result.rows;
    console.log(rows); //output: 1
    client.end();
  });
});