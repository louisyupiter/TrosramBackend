const QrcodeModel = require('../model/QrCode');

class QrcodeController{
    static post(req,res) {
        const link = 'https://github.com/AnggaChelsea',
        unixcode = [];    
        const rand = Math.random()*100;
        unixcode.push(rand);
        const qrcode = new QrcodeModel({
            link:link,
            unixcode:unixcode
        })
        // console.log(qrcode)
        qrcode.save()
        .then((qrcode) => {
            res.send(200).send({message: 'success', data:qrcode})
        })
        .catch((err) => {
            console.log(err)
        })
    }
    static create(req, res){
        const qrnew = new QrcodeModel({
            link:req.body.link,
            unixcode:req.body.unixcode
        })
        const no = 100
        for(let i = 0; i < no ; i++){
            console.log(qrnew[i])
        }
        qrnew.save()
        .then((qrnew) => {
            res.send(200).send({message: 'success generate', data:qrnew})
        })
        .catch((err) => {
            error(err)
        })
    }
}

module.exports = QrcodeController;