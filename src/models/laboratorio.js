'use strict'
const mongoose = requiere('mongoose');
const Schema = mongoose.Schema;

const LaboSchema = new Schema({
    numero_laboratorio: Number,
    carnet_administrador: Number
})

module.exports = mongoose.model('Laboratorio', LaboSchema);

