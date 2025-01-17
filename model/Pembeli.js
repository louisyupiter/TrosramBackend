const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pembeliSchema = new Schema(
  {
    _idQrcode: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "qrcode",
    },
    _idPenjual: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Penjual",
    },
    nama_pembeli: { type: String, default: "" },
    nomor_polisi: { type: String, default: "" },
    merk_mobil: { type: String, default: "" },
    no_invoice: { type: String, default: "" },
    deskripsi: { type: String, default: "" },
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
    timestamps: { createdAt: "created_at", updatedAt: "tanggal_pengisian" },
    versionKey: false,
  }
);

pembeliSchema.set("toJSON", {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.id;
    delete ret.__v;
    delete ret.created_at;
    return ret;
  },
});

const Pembeli = mongoose.model("Pembeli", pembeliSchema);
module.exports = Pembeli;
