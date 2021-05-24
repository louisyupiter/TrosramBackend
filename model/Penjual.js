const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PenjualSchema = new Schema({
  nama_bengkel: { type: String, required: true },
  alamat_bengkel: { type: String, required: true },
  pemilik_bengkel: { type: String, required: true },
});

const Penjual = mongoose.model("Penjual", PenjualSchema);
module.exports = Penjual;
