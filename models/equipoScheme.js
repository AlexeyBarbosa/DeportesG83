const mongoose = require('mongoose')

const equipoScheme = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true
        },
        deporte: {
            type: Object,
            required: true
        },
        numeroIntegrantes: {
            type: Number
        }
    }
)

module.exports = mongoose.model("equipos", equipoScheme)