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
        let number = req.body;
        InputModel.findOne({number:number})
        .then((number)=>{
            if(number){
                res.status(404).send({message:'serial number gak terdaftar'})
            }
        })

        .then((number)=>{
            res.status(200).send({message:'terimakasih', data:number})
        })
        .catch((error)=>{
            console.log(error)
        })
           
    }
}

module.exports = Inputserial;