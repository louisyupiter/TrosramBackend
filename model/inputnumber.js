const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NumberSchema = new Schema({
    number:{type:Number, required:true}
})
const serial = mongoose.model('serial', NumberSchema);
module.exports = serial;