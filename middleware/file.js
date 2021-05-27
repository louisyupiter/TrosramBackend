const path = require("path"); // for getting file extension
const multer = require("multer"); // for uploading files
const {Storage} = require('@google-cloud/storage');

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};
// const storagefirebase = new Storage({
//   keyFilename:'AAAA3zx1OXE:APA91bFqUbbjeOtnlKbvghHMKSTewY3_7h2psOoc1ud3R382VVU1207gANb13izr_AtAQMJDVC2HA8eUrtFSxQdaHyU7gzuEknPhAU75HgFAs_bkuj2UNNPLKdCuSILflzHdxfVaHEe-'  ,
// });

const makeid = () => {
  const result = [];
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < 8; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength))
    );
  }
  return result.join("");
};

//gs://osram-d236c.appspot.com
//service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }

// let bucketName = 'gs://osram-d236c.appspot.com';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(error, __basedir +"/uploads/image/");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    // const ext = MIME_TYPE_MAP[file.mimetype];
    // cb(null, name + "-" + Date.now() + "." + ext);
    // cb(null, name + "." + ext);
    cb(null, makeid() + name);
  },
});

// console.log(__basedir);

const fileFilter = (req, file, cb) => {
  if (file.fieldname === "video") {
    // if uploading video
    if (
      file.mimetype === "video/x-flv" ||
      file.mimetype === "video/mp4" ||
      file.mimetype === "application/x-mpegURL" ||
      file.mimetype === "video/MP2T" ||
      file.mimetype === "video/3gpp" ||
      file.mimetype === "video/quicktime" ||
      file.mimetype === "video/x-msvideo" ||
      file.mimetype === "video/x-ms-wmv"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  } else {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
};

module.exports = multer({
  storage: storage,
  limits: { fileSize: 5000000 },
}).single("image");
