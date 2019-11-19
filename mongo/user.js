'use strict'
const mongoose = requiere('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    carnet: Number,
    password: String,
    rol: String
})

mongoose.model('User', UserSchema);

