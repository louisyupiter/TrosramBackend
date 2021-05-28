const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PenjualSchema = new Schema({
  _idQrcode: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "QrCode",
  },
  serial_number: { type: String, default: "" },
  nama_bengkel: { type: String, default: "" },
  alamat_bengkel: { type: String, default: "" },
  pemilik_bengkel: { type: String, default: "" },
});

PenjualSchema.set("toJSON", {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.id;
    delete ret.__v;
    return ret;
  },
});

const Penjual = mongoose.model("Penjual", PenjualSchema);
module.exports = Penjual;
