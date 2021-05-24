const PembeliModel = require("../model/Pembeli");

class PembeliController {
  static async create(req, res, next) {
    try {
      // console.log(req.files.image[0].filename);
      // console.log(req.files.video[0].filename);
      const url = req.protocol + "://" + req.get("host");
      const pembeli = await PembeliModel.create({
        nama_pembeli: req.body.nama_pembeli,
        nomor_polisi: req.body.nomor_polisi,
        merk_mobil: req.body.merk_mobil,
        no_invoice: req.body.no_invoice,
        deskripsi: req.body.deskripsi,
        image: url + "/image/" + req.files.image[0].filename,
        video: url + "/video/" + req.files.video[0].filename,
      });
      
      res
        .status(200)
        .json({ success: true, message: "success", data: pembeli });
    } catch (error) {
      next(error);
    }
  }

  static async findall(_, res, next) {
    try {
      const pembeli = await PembeliModel.find();
      res
        .status(200)
        .json({ success: true, message: "success", data: pembeli });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = PembeliController;
