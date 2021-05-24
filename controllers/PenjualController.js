const PenjualModel = require("../model/Penjual");

class PenjualController {
  static async create(req, res, next) {
    try {
      const penjual = await PenjualModel.create({
        nama_bengkel: req.body.nama_bengkel,
        alamat_bengkel: req.body.alamat_bengkel,
        pemilik_bengkel: req.body.pemilik_bengkel,
      });
      res.status(200).json({
        success: true,
        message: "Berhasil Membuat Data Penjual",
        data: penjual,
      });
    } catch (error) {
      next(error);
    }
  }

  static async findall(_, res, next) {
    try {
      const penjual = await PenjualModel.find();
      res.status(200).json({
        success: true,
        message: "Berhasil Mengambil semua Data Penjual",
        data: penjual,
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = PenjualController;
