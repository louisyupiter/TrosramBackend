const PenjualModel = require('../model/Penjual')

class PenjualController {
    static post(req,res) {

        if(!req.file){
            const error = new Error('image harus di upload');
            error.errorStatus = 422;
            throw error
        }
        if(!req.body){
            const error = new Error('input harus di upload');
            error.errorStatus = 422;
            throw error
        }
           const namaPembeli  = req.body;
           const NoPol = req.body;
           const MerkMobil = req.body;
           const NoInvoice = req.body;
           const  Deskripsi = req.body;
           const  uploadVideo  = req.body;
           const image = req.files;
        const penjual = new PenjualModel({
            namaPembeli:namaPembeli,
            NoPol:NoPol,
            MerkMobil:MerkMobil,
            NoInvoice:NoInvoice,
            Deskripsi:Deskripsi,
            image:image,
            uploadVideo:uploadVideo,
        })
        console.log(penjual)
        penjual.save()
        .then((penjual)=>{
            res.status(200).send({message:'success upload data', data:penjual})
        })
        .catch((err)=>{
            res.status(500).send({message:'error', err:err})
        })
    }
    static get(req,res){
        PenjualModel.find()
        .then((penjual)=>{
            res.status(200).send({message:'success', data:penjual})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

}
module.exports = PenjualController;