const SerialModel = require('../model/SerialNumber')

class SerialNumber {
    static post(req, res){
        const serialnumber = req.body;
        const serial = new SerialModel({serialnumber:serialnumber});
        
        serial.save()
        .then((serial) =>{
            res.status(200).send({message:'succes selamat ', data:serial})
        })
        .catch((err) =>{
            res.status(500).send({success:false})
        })
    }
}

module.exports = SerialNumber