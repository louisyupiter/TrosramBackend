const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const random = Math.floor(Math.random() * 199550);
const QrcodeSchema = new Schema({
    link: {type:String, default:'https://github.com/AnggaChelsea'},
    unixcode:{type:String, default:random }
})
const qrcode = mongoose.model('qrcode', QrcodeSchema);
module.exports = qrcode