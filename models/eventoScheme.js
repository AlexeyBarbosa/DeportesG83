const mongoose = require("mongoose");

const eventoScheme = mongoose.Schema(

    {
        equipo1: {
            type: Object,
            required: true
        },
        equipo2: {
            type: Object,
            required: true
        },
        marcador1: {
            type: Number,
            required: true
        },
        marcador2: {
            type: Number,
            required: true
        },
        fecha: {
            type: Date,
            default: Date.now()
        }
    }

);

module.exports = mongoose.model("eventos", eventoScheme);