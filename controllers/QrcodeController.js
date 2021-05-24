const QrcodeModel = require("../model/QrCode");
// const cryptoRandomString = require("crypto-random-string");

class QrcodeController {
  static async create(req, res, next) {
    try {
      const test = QrcodeController.makeid(8);
      const qrcode = await QrcodeModel.create({ serial_number: `OSY${test}` });
      res.status(200).json({ success: true, message: "success", data: qrcode });
    } catch (error) {
      next(error);
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
