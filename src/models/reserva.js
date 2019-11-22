'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservaSchema = new Schema({
    carnet_user: Number,
    numero_laboratorio: Number,
    estado: {
        type: Boolean,
        default: false 
    },
    fecha: Date,
    hora_inicio: Timestamp,
    hora_final: Timestamp
})

module.exports = mongoose.model('Reserva', ReservaSchema);

 