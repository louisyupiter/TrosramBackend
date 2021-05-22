const InputModel = require('../model/inputnumber')

class Inputserial{
    static post(req,res) {
        const number = req.body;
        const serialinput = new InputModel(number);
        serialinput.save()
        .then((serialinput)=>{
            res.status(200).send({message:'terimakasih', data:serialinput})
        })
        .catch((error)=>{
            console.error(error)
        })
    }
    static validate(req,res){
        
    }
}

module.exports = Inputserial;