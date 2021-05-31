const PembeliModel = require("../model/Pembeli");
const uploadImage = require("../helpers/helpers");

class PembeliController {
  static async update(req, res, next) {
    try {
      const query = { _idQrcode: req.params.idqrcode };
      const { nama_pembeli, nomor_polisi, merk_mobil, no_invoice, deskripsi } =
        req.body;
      // console.log(req);
      // console.log(req.body);
      const updatedData = {
        nama_pembeli,
        nomor_polisi,
        merk_mobil,
        no_invoice,
        deskripsi,
      };
      // console.log(updatedData);

      for (const key in updatedData) {
        if (!updatedData[key]) {
          delete updatedData[key];
        }
      }

      const pembeli = await PembeliModel.findOneAndUpdate(query, updatedData, {
        new: true,
      });

      res.status(200).json({
        success: true,
        message: "Berhasil Update Data Pembeli",
        data: pembeli,
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateimage(req, res, next) {
    try {
      const query = { _idQrcode: req.params.idqrcode };
      const myFile = req.files;
      const tempPush = [];
      const imageUrl = await uploadImage(myFile);
      tempPush.push(imageUrl);
      const pembeli = await PembeliModel.findOneAndUpdate(
        query,
        { $push: { image: { $each: tempPush } } },
        {
          new: true,
        }
      );
      res
        .status(200)
        .json({ success: true, message: "success", data: pembeli });
    } catch (error) {
      next(error);
    }
  }

  static async updatevideo(req, res, next) {
    try {
      const query = { _idQrcode: req.params.idqrcode };
      const myFile = req.file;
      const videoUrl = await uploadImage(myFile);
      const pembeli = await PembeliModel.findOneAndUpdate(
        query,
        { video: videoUrl },
        {
          new: true,
        }
      );
      res
        .status(200)
        .json({ success: true, message: "success", data: pembeli });
    } catch (error) {
      next(error);
    }
  }

  static async findall(_, res, next) {
    try {
      const pembeli = await PembeliModel.find()
        .populate("_idQrcode", '-isprint -__v')
        .populate("_idPenjual");
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
      const pembeli = await PembeliModel.findOne(query).populate("_idQrcode");
      if (pembeli) {
        res
          .status(200)
          .json({ success: true, message: "Pembeli tersedia", data: pembeli });
      } else {
        throw { name: `NOT_AVAILABLE` };
      }
    } catch (error) {
      next(error);
    }
  }
}
module.exports = PembeliController;
