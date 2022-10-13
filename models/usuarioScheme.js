const mongoose = require('mongoose')

const usuarioScheme = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    correo: {
        type: String,
        required: true,
        trim: true
    },
    usuario: {
        type: String,
        required: true,
        trim: true
    },
    clave: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model("usuarios", usuarioScheme)