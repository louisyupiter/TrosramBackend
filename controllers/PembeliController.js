const PembeliModel = require("../model/Pembeli");
const {
  uploadImageVideoMultiple,
  uploadImageSingle,
} = require("../helpers/helpers");
const Excel = require("../model/Excel");

class PembeliController {
  static async update(req, res, next) {
    try {
      const query = { _idQrcode: req.params.idqrcode };
      const { nama_pembeli, nomor_polisi, merk_mobil, no_invoice, deskripsi, instagram } =
        req.body;

      let today = new Date();
      let dd = String(today.getDate()).padStart(2, "0");
      let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      let yyyy = today.getFullYear();

      today = dd + "/" + mm + "/" + yyyy;
      const updatedData = {
        nama_pembeli,
        nomor_polisi,
        merk_mobil,
        no_invoice,
        deskripsi,
        instagram,
        tanggal_input: today,
      };

      for (const key in updatedData) {
        if (!updatedData[key]) {
          delete updatedData[key];
        }
      }

      const pembeli = await PembeliModel.findOneAndUpdate(query, updatedData, {
        new: true,
      });
      await Excel.findOneAndUpdate(query, updatedData, {
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

  static async updateMultiImage(req, res, next) {
    try {
      const query = { _idQrcode: req.params.idqrcode };
      const myFile = req.files;
      const tempPush = [];
      const imageUrl = await uploadImageVideoMultiple(myFile);
      tempPush.push(imageUrl);
      const pembeli = await PembeliModel.findOneAndUpdate(
        query,
        { $push: { image: { $each: tempPush } } },
        {
          new: true,
        }
      );
      await Excel.findOneAndUpdate(
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

  static async updateImage1(req, res, next) {
    try {
      const query = { _idQrcode: req.params.idqrcode };
      const myFile = req.files;
      const imageUrl = await uploadImageVideoMultiple(myFile);
      const pembeli = await PembeliModel.findOneAndUpdate(
        query,
        { image1: imageUrl },
        { new: true }
      );
      await Excel.findOneAndUpdate(
        query,
        { image1: imageUrl },
        { new: true }
      );
      res
        .status(200)
        .json({ success: true, message: "success", data: pembeli });
    } catch (error) {
      next(error);
    }
  }

  static async updateImage2(req, res, next) {
    try {
      const query = { _idQrcode: req.params.idqrcode };
      const myFile = req.files;
      const imageUrl = await uploadImageVideoMultiple(myFile);
      const pembeli = await PembeliModel.findOneAndUpdate(
        query,
        { image2: imageUrl },
        { new: true }
      );
      await Excel.findOneAndUpdate(
        query,
        { image2: imageUrl },
        { new: true }
      );
      res
        .status(200)
        .json({ success: true, message: "success", data: pembeli });
    } catch (error) {
      next(error);
    }
  }

  static async updateImage3(req, res, next) {
    try {
      const query = { _idQrcode: req.params.idqrcode };
      const myFile = req.files;
      const imageUrl = await uploadImageVideoMultiple(myFile);
      const pembeli = await PembeliModel.findOneAndUpdate(
        query,
        { image3: imageUrl },
        { new: true }
      );
      await Excel.findOneAndUpdate(
        query,
        { image3: imageUrl },
        { new: true }
      );
      res
        .status(200)
        .json({ success: true, message: "success", data: pembeli });
    } catch (error) {
      next(error);
    }
  }

  static async updateImage4(req, res, next) {
    try {
      const query = { _idQrcode: req.params.idqrcode };
      const myFile = req.files;
      const imageUrl = await uploadImageVideoMultiple(myFile);
      const pembeli = await PembeliModel.findOneAndUpdate(
        query,
        { image4: imageUrl },
        { new: true }
      );
      await Excel.findOneAndUpdate(
        query,
        { image4: imageUrl },
        { new: true }
      );
      res
        .status(200)
        .json({ success: true, message: "success", data: pembeli });
    } catch (error) {
      next(error);
    }
  }

  static async updateImage5(req, res, next) {
    try {
      const query = { _idQrcode: req.params.idqrcode };
      const myFile = req.files;
      const imageUrl = await uploadImageVideoMultiple(myFile);
      const pembeli = await PembeliModel.findOneAndUpdate(
        query,
        { image5: imageUrl },
        { new: true }
      );
      await Excel.findOneAndUpdate(
        query,
        { image5: imageUrl },
        { new: true }
      );
      res
        .status(200)
        .json({ success: true, message: "success", data: pembeli });
    } catch (error) {
      next(error);
    }
  }

  static async updateImage6(req, res, next) {
    try {
      const query = { _idQrcode: req.params.idqrcode };
      const myFile = req.files;
      const imageUrl = await uploadImageVideoMultiple(myFile);
      const pembeli = await PembeliModel.findOneAndUpdate(
        query,
        { image6: imageUrl },
        { new: true }
      );
      await Excel.findOneAndUpdate(
        query,
        { image6: imageUrl },
        { new: true }
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
      const myFile = req.files;
      const tempPush = [];
      const videoUrl = await uploadImageVideoMultiple(myFile);
      tempPush.push(videoUrl);
      const pembeli = await PembeliModel.findOneAndUpdate(
        query,
        { $push: { video: { $each: tempPush } } },
        {
          new: true,
        }
      );
      await Excel.findOneAndUpdate(
        query,
        { $push: { video: { $each: tempPush } } },
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
      const pembeli = await Excel.find({}, "-_idQrcode");
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
