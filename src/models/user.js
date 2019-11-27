'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    carnet: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
    },
    rol: {
        type: String,
        default: 'Estudiante'
    },
    login_count: Number
})

module.exports = mongoose.model('User', UserSchema);

