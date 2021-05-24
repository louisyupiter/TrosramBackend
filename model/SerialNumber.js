const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SerialnumberSchema = new Schema({
    serialnumber:{type:String, required:true},
});

const Serial = mongoose.model('Serial', SerialnumberSchema);
module.exports = Serial;