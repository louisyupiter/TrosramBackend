const PembeliModel = require("../model/Pembeli");

class PembeliController {
  static async update(req, res, next) {
    try {
      const query = { _idQrcode: req.params.idqrcode };
      const { nama_pembeli, nomor_polisi, merk_mobil, no_invoice, deskripsi } =
        req.body;
      const url = req.protocol + "://" + req.get("host");
      // console.log(req);
      // console.log(req.file.filename);
      const image = url + "/image/" + req.file.filename;
      console.log(image);
      // console.log(req.files);
      // const video = url + "/video/" + req.file.filename;
      // console.log(video);
      const updatedData = {
        nama_pembeli,
        nomor_polisi,
        merk_mobil,
        no_invoice,
        deskripsi,
        image,
        // video,
      };

      console.log(updatedData);
      for (const key in updatedData) {
        if (!updatedData[key]) {
          delete updatedData[key];
        }
      }

      const pembeli = await PembeliModel.findOneAndUpdate(query, updatedData, {
        new: true,
      });
      console.log(pembeli);

      res.status(200).json({
        success: true,
        message: "Berhasil Update Data Pembeli",
        data: pembeli,
      });
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

  static async findone(req, res, next) {
    try {
      const query = { _idQrcode: req.params.idqrcode };
      // console.log(query);

      const pembeli = await PembeliModel.findOne(query).populate("_idQrcode");
      // console.log(pembeli);
      res
        .status(200)
        .json({ success: true, message: "success", data: pembeli });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = PembeliController;
