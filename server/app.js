const express = require('express');
var bodyParser = require('body-parser');
const DB = require('./db.js');
const Mongodb = require('./db/index.js');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/api/query', async (req, res) => {
 try {
  const query = req.body.query;
  const db =  await DB.openDB();
  const execute = await db.all(query);
  res.status(200);
  res.send(execute);
  res.end();
 } catch (error) {
  res.status(500);
  res.end();
 }
});

app.post('/api/signup', async (req, res) => {
  try {
    const signUserUp = await Mongodb.signup(req.body);
    res.status(201);
    res.end();
  } catch (error) {
    res.status(500);
    res.end();
  }
});
app.post('/api/savequery', async(req, res) => {
  try {
    const saveQuery = await Mongodb.getUserById(req.body.id,req.body.queryName);
    res.status(200);
    res.end();
  } catch (error) {
    res.status(500);
    res.end();
  }
});
app.get('/api/getquery', async(req, res) => {
  try {
    const getQuery = await Mongodb.getUserQuery(req.query.id);
    console.log(getQuery);
    res.status(200);
    res.send(getQuery);
    res.end();
  } catch (error) {
    res.status(500);
    res.end();
  }
});
app.post('/api/login', async (req, res) => {
  try {
    const user = await Mongodb.getUserByName(req.body.username);
    if(user === null) {res.status(400);res.end();}
    const match = await Mongodb.compare(req.body.password,user.password);
    if(match === true) {
      res.status(200);
      res.send(user._id);
      res.end();
    } else {
      res.status(400);
      res.end();
    }
  } catch (error) {
    res.status(500);
    res.end();
  }
});


module.exports = app;