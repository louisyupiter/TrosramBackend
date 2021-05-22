const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbjs = require("./config/db");
const router = require("./routes");
const crypto = require("crypto");
const multer = require("multer");
// const upload = multer({dest: '/images'});
const path = require("path");

const app = express();

// app.post('/upload', upload.single('image'), (req, res) => {
//   if(req.file) {
//       res.json(req.file);
//   }
//   else throw 'error';
// });

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpng"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
// const upload = multer({storage:fileStorage, fileFilter:fileFilter}.single('image'))

app.use(multer({storage:fileStorage, fileFilter:fileFilter}).single('image'));
// app.use(upload.array());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(router);
dbjs();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("insyallah good work");
});

// const Crypto = require("cryptr");
// cryptr = new Crypto('123')
// const encstring = cryptr.encrypt('123')
// const decstring = cryptr.decrypt(encstring)


// const n = crypto.randomInt(0, 1000000);
// const isi = []
// app.get('/gen', (req, res) =>{
//   let isidata = n;
//   for(let i = isidata; i<100; isidata++){
//     console.log(isidata[i])
//   }
//   // res.json(isidata);
// })




app.listen(3000, () => {
  console.log("listening on localhost:3000");
});
