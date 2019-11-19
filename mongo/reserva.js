'use strict'
const mongoose = requiere('mongoose');
const Schema = mongoose.Schema;

const ReservaSchema = Schema({
    carnet_user: Number,
    numero_laboratorio: Number,
    estado: Boolean,
    fecha: Date,
    hora_inicio:/*ni idea*/,
    hora_final:/*ni idea*/
})

mongoose.model('Reserva', ReservaSchema);

