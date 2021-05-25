const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, default: "admin" },
  password: { type: String, default: "" }
});

const user = mongoose.model("user", UserSchema);
module.exports = user;
