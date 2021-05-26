const express = require("express");
const cors = require("cors");
const mongooseConnect = require("./config/db");
const admin = require('firebase-admin')
const router = require("./routes");

const app = express();

mongooseConnect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/api/v1/',router);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

//firebase-admin
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});

app.get("/", (req, res) => {
  res.send("API OSRAM version 0.1");
});

module.exports = app;