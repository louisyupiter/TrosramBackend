const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PenjualSchema = new Schema({
  _idQrCode: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "QrCode",
    required: true,
  },
  _idPembeli: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pembeli",
    required: true,
  },
  serailNumber: { type: String, required: true },
  namaPembeli: { type: String, required: true },
  NoPol: { type: String, required: true },
  MerkMobil: { type: String, required: true },
  NoInvoice: { type: String, required: true },
  Deskripsi: { type: String, required: true },
  image: { type: String, required: true },
  uploadVideo: { type: String, required: true },
});
const Penjual = mongoose.model("Penjual", PenjualSchema);
module.exports = Penjual;
