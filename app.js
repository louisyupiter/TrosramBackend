const path = require("path");
const express = require("express");
const cors = require("cors");
const mongooseConnect = require("./config/db");
const admin = require('firebase-admin')
const router = require("./routes");
const fileUpload = require('express-fileupload');
global.__basedir = __dirname

const app = express();

mongooseConnect();

app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({limit: '50mb'}));
app.use("/uploads/image", express.static(path.join("image")));
app.use("/uploads/video", express.static(path.join("video")));
app.use(cors());
app.use(fileUpload());

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

app.use('/api/v1/',router);

//firebase-admin
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});

app.get("/", (req, res) => {
  res.send("API OSRAM version 0.1");
});

module.exports = app;