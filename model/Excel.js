const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const excelSchema = new Schema(
  {
    _idQrcode: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "QrCode",
    },
    serial_number: { type: String, default: "" },
    nama_bengkel: { type: String, default: "" },
    alamat_bengkel: { type: String, default: "" },
    pemilik_bengkel: { type: String, default: "" },
    nama_pembeli: { type: String, default: "" },
    nomor_polisi: { type: String, default: "" },
    merk_mobil: { type: String, default: "" },
    no_invoice: { type: String, default: "" },
    deskripsi: { type: String, default: "" },
    tanggal_input: { type: String, default: "" },
    image1: { type: String, default: "" },
    image2: { type: String, default: "" },
    image3: { type: String, default: "" },
    image4: { type: String, default: "" },
    image5: { type: String, default: "" },
    image6: { type: String, default: "" },
    instagram: { type: String, default: "" },
    video: { type: [String] },
  },
  {
    versionKey: false,
  }
);

excelSchema.set("toJSON", {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.id;
    delete ret.__v;
    return ret;
  },
});

const Excel = mongoose.model("excel", excelSchema);
module.exports = Excel;
