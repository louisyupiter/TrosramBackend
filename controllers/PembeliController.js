const PembeliModel = require("../model/Pembeli");

class PembeliController {
    static create(req, res){
        const pembelinew = new PembeliModel({
            namaBengkel:req.body.namaBengkel, 
            alamatBengkel:req.body.alamatBengkel, 
            pemilikBengkel:req.body.pemilikBengkel,
        })
        pembelinew
        console.log(pembelinew)
      .save()
      .then((pembelinew) => {
        res.status(200).send({ success: true, data: pembelinew });
      })
      .catch((err) => {
        res.status(500).send({ success: false });
      });
    }

  static post(req, res) {
    const { 
        namaBengkel, 
        alamatBengkel, 
        pemilikBengkel } = req.body;
        console.log(req.body);
    const pembeli = new PembeliModel({
      namaBengkel, 
      alamatBengkel,
      pemilikBengkel,
    });
    console.log(pembeli)
    pembeli
      .save()
      .then((pembeli) => {
        res.status(200).send({ success: true, data: pembeli });
      })
      .catch((err) => {
        res.status(500).send({ success: false });
      });
  }
  static get(req, res) {
    PembeliModel.find()
      .then((pembeli) => {
        res.status(200).send({ message: "success", data: pembeli });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
module.exports = PembeliController;
