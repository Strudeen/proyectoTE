require('dotenv').config();

const express = require('express');

const app = express();

const port = process.env.PORT || 3001;

const db = require('./database/postgres');


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
  next();
});

app.get('/', (req, res) => res.send("Running....."));




//Tablas basicas

const persona = '/api/persona';
app.use(persona, require('./routes/persona'));

/**
 * Sync
 */
const conectar = async () => {
  //await db.drop();
  await db.sync({ force: true });
}

conectar();

console.log("All models were synchronized successfully.");

app.listen(port, () => {
  console.log("******** Servidor corriendo en ", process.env.PORT);
});