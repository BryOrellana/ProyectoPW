'use strict'
const mongoose = requiere('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    carnet: Number,
    password: String,
    rol: String
})

module.exports = mongoose.model('User', UserSchema);

