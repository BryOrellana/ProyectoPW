'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservaSchema = new Schema({
    carnet_user: {
        type: String,
        required: true
    
    },
    numero_laboratorio: {
        type : String,
        required: true
    },
    estado: {
        type: String,
        default: 'Espera' 
    },
    fecha: {
        type: Date,
        required: true
    },
    hora_inicio: {
        type: String,

    },
    hora_final: {
        type: String,
 
    }
})

module.exports = mongoose.model('Reserva', ReservaSchema);

 