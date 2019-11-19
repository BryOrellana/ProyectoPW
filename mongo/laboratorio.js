'use strict'
const mongoose = requiere('mongoose');
const Schema = mongoose.Schema;

const LaboSchema = Schema({
    numero_laboratorio: Number,
    carnet_administrador: Number
})

mongoose.model('Laboratorio', LaboSchema);

