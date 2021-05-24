const PenjualModel = require("../model/Penjual");
const multer = require('multer');


class PenjualController {
  static post(req, res) {
   
    const {
      serialNumber,
      namaPembeli,
      NoPol,
      MerkMobil,
      NoInvoice,
      Deskripsi,
      uploadVideo,
    } = req.body;
    const image = req.file
    const penjual = new PenjualModel({
      serialNumber,
      namaPembeli,
      NoPol,
      MerkMobil,
      NoInvoice,
      Deskripsi,
      image,
      uploadVideo,
    });

    penjual
      .save()
      .then((penjual) => {
        res.status(200).send({ message: "success upload data", data: penjual });
      })
      .catch((err) => {
        res.status(500).send({ message: "error", err: err });
      });
  }

  static get(req, res) {
    PenjualModel.find()
      .then((penjual) => {
        res.status(200).send({ message: "success", data: penjual });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static create(req, res){
      const newpenjual = new PenjualModel({
        serialNumber:req.body.serialNumber,
        namaPembeli:req.body.namaPembeli,
        NoPol:req.body.NoPol,
        MerkMobil:req.body.MerkMobil,
        NoInvoice:req.body.NoInvoice,
        Deskripsi:req.body.Deskripsi,
        image:req.body.image,
        uploadVideo:req.body.uploadVideo,
      }) 
      newpenjual.save()
      .then((newpenjual)=>{
          res.status(200).send({message:'success', data:newpenjual})
      })
      .catch((err)=>{
          console.log(err)
      })
  }
}
module.exports = PenjualController;
