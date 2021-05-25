const PenjualModel = require("../model/Penjual");

class PenjualController {
  static async update(req, res, next) {
    try {
      const query = { _idQrcode: req.params.idqrcode };
      const { nama_bengkel, alamat_bengkel, pemilik_bengkel } = req.body;
      const updatedData = {
        nama_bengkel,
        alamat_bengkel,
        pemilik_bengkel,
      };

      for (const key in updatedData) {
        if (!updatedData[key]) {
          delete updatedData[key];
        }
      }

      const penjual = await PenjualModel.findOneAndUpdate(query, updatedData, {
        new: true,
      });
      res.status(200).json({
        success: true,
        message: "Berhasil Update Data Penjual",
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

  static async findone(req, res, next) {
    try {
      const query = { _idQrcode: req.params.idqrcode };
      const penjual = await PenjualModel.findOne(query);
      res
        .status(200)
        .json({ success: true, message: "success", data: penjual });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = PenjualController;
