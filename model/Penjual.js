const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const penjualShema = new Schema({
  // _idQrCode: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "QrCode",                                                                      
  // },
  // _idPembeli: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Pembeli",

  // },
  serialNumber: { type: Number, required: true },
  namaPembeli: { type: String, required: true },
  NoPol: { type: String, required: true },
  MerkMobil: { type: String, required: true },
  NoInvoice: { type: String, required: true },
  Deskripsi: { type: String, required: true },
  image: { type: String, required: true },
  uploadVideo: { type: String, required: true },
});
const Penjual = mongoose.model('Penjual', penjualShema);
module.exports = Penjual;


