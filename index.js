const express = require('express');
const config = require('./app/config');
const pg = require('pg');
const format = require('pg-format');

const app = express();
app.get('/', (req, res) => res.send('Hiya!'));
app.listen(8000, () => console.log('Listening on port 8000!'));

const pool = new pg.Pool(config);
let myClient;
pool.connect((err, client, done) => {
  if (err) {
    console.log(err);
    done();
  }
  myClient = client;
  done();
});

app.get('/groceryList', (req, res) => {
  const groceryQuery = format('SELECT * from grocery');
  myClient.query(groceryQuery, (error, result) => {
    if (error) {
      console.log(error);
    }
    console.log(result.rows);
    res.send(result.rows);
  });
});
