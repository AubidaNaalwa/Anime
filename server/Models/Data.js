const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const data = new Schema({
    username:String,
    description: String,
    img: String,
    title: String
}, { timestamps: true });

const Data = mongoose.model('data', data);

module.exports = Data;