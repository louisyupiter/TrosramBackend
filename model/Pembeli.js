const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PembeliSchema = new Schema({
    namaBengkel:{type:String, required:true},
    alamatBengkel:{type:String, required:true},
    pemilikBengkel:{type:String, required:true}
});

const Pembeli = mongoose.model('Pembeli', PembeliSchema);
module.exports = Pembeli;