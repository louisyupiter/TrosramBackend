const path = require("path");
const express = require("express");
const cors = require("cors");
const mongooseConnect = require("./config/db");
const router = require("./routes");
global.__basedir = __dirname

const app = express();

mongooseConnect();

app.disable('x-powered-by');
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({limit: '50mb'}));
app.use("/uploads/image", express.static(path.join("image")));
app.use("/uploads/video", express.static(path.join("video")));
app.use(cors());

app.use((_, res, next) => {
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

app.get("/", (_, res) => {
  res.send("API OSRAM version 0.1");
});

module.exports = app;