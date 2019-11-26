'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservaSchema = new Schema({
    carnet_user: {
        type: Number,
        required: true
    
    },
    numero_laboratorio: Number,
    estado: {
        type: String,
        default: 'Espera' 
    },
    fecha: Date,
    hora_inicio: Timestamp,
    hora_final: Timestamp
})

module.exports = mongoose.model('Reserva', ReservaSchema);

 