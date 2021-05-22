const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const QrcodeSchema = new Schema({
    link: {type:String, default:'https://github.com/AnggaChelsea'},
    unixcode:{type:String, required:true}
})

const qrcode = mongoose.model('qrcode', QrcodeSchema);
module.exports = qrcode