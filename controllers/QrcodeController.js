const QrcodeModel = require("../model/QrCode");
const PenjualModel = require("../model/Penjual");
const PembeliModel = require("../model/Pembeli");

class QrcodeController {
  static async create(_, res, next) {
    try {
      const snid = QrcodeController.makeid(8);
      const qrcode = await QrcodeModel.create({ serial_number: `OSY${snid}` });
      const penjual = await PenjualModel.create({
        _idQrcode: qrcode._id,
        serial_number: qrcode.serial_number
      });
      await PembeliModel.create({
        _idQrcode: qrcode._id,
        _idPenjual: penjual._id,
      });
      res.status(200).json({ success: true, message: "success", data: qrcode });
    } catch (error) {
      next(error);
    }
  }

  static async getAllUnprinted(_, res, next) {
    try {
      const isPrint = await QrcodeModel.find({ isprint: false });
      if (isPrint.length !== 0) {
        res.status(200).json({
          success: true,
          message: "Serial Number Tersedia",
          data: isPrint,
        });
      } else {
        throw { name: `NOT_AVAILABLE` };
      }
    } catch (err) {
      next(err);
    }
  }

  static async printSerialNumber(_, res, next) {
    try {
      const isPrint = await QrcodeModel.find({ isprint: false });
      await QrcodeModel.updateMany({ isprint: false },{ isprint: true });
      if (isPrint.length !== 0) {
        res.status(200).json({
          success: true,
          message: "Serial Number Tersedia",
          data: isPrint,
        });
      } else {
        throw { name: `NOT_AVAILABLE` };
      }
    } catch (err) {
      next(err);
    }
  }

  static async validate(req, res, next) {
    try {
      const numberValidated = await QrcodeModel.findOne({
        serial_number: req.body.serial_number,
      });
      if (numberValidated) {
        res.status(200).json({
          success: true,
          message: "Serial Number Tersedia",
          data: numberValidated,
        });
      } else {
        throw { name: `SN_NONEXIST` };
      }
    } catch (err) {
      next(err);
    }
  }

  static makeid(length) {
    const result = [];
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      );
    }
    return result.join("");
  }
}

module.exports = QrcodeController;
