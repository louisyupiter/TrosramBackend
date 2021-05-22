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
        console.log(qrcode)
    //     qrcode.save()
    //     .then((qrcode) => {
    //         res.send(200).send({message: 'success', data:qrcode})
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    }
}

module.export = QrcodeController;