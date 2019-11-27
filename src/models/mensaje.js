'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MsgSchema = new Schema({
    Nombre: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    },
    Mensaje: {
        type: String
    },
})

module.exports = mongoose.model('Msg', MsgSchema);