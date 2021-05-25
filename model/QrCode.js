const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QrcodeSchema = new Schema({
  serial_number: { type: String, default: "" },
  isprint: { type: Boolean, default: false }
});

const qrcode = mongoose.model("qrcode", QrcodeSchema);
module.exports = qrcode;
