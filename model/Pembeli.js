const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PembeliSchema = new Schema({
    nama:{type:String, required:true},
    alamat:{type:String, required:true},
    pemilik:{type:String, required:true}
});

const Pembeli = mongoose.model('Pembeli', PembeliSchema);
module.exports = Pembeli;