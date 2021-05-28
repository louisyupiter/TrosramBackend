const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QrcodeSchema = new Schema({
  serial_number: { type: String, default: "" },
  isprint: { type: Boolean, default: false }
});

QrcodeSchema.set("toJSON", {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.id;
    delete ret.__v;
    return ret;
  },
});

const qrcode = mongoose.model("qrcode", QrcodeSchema);
module.exports = qrcode;
