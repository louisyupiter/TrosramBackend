const path = require("path"); // for getting file extension
const multer = require("multer"); // for uploading files

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

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

const storage = multer.diskStorage({
  destination: (_, file, cb) => {
    // setting destination of uploading files
    if (file.fieldname === "video") {
      cb(null, "./uploads/video");
    } else {
      cb(null, "./uploads/image");
    }
  },
  filename: (req, file, cb) => {
    // const name = file.originalname.toLowerCase().split(" ").join("-");
    // console.log(req.files);
    // const ext = MIME_TYPE_MAP[file.mimetype];
    // cb(null, name + "-" + Date.now() + "." + ext);
    // cb(null, name + "." + ext);
    // cb(null, name);
    cb(null, makeid() + path.extname(file.originalname));
  },
});

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
  fileFilter: fileFilter,
}).fields([
  {
    name: "image",
    maxCount: 1,
  },
  {
    name: "video",
    maxCount: 1,
  },
]);
