const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pembeliSchema = new Schema({
  serial_number: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "QrCode",
  },
  _idPembeli: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Penjual",

  },
  nama_pembeli: { type: String, default: "", required: true },
  nomor_polisi: { type: String, default: "", required: true },
  merk_mobil: { type: String, default: "", required: true },
  no_invoice: { type: String, default: "", required: true },
  deskripsi: { type: String, default: "" },
  image: { type: String, default: "", required: true },
  video: { type: String, default: "" },
});

const Pembeli = mongoose.model("Pembeli", pembeliSchema);
module.exports = Pembeli;
