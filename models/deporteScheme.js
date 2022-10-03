const mongoose = require("mongoose");

const deporteScheme = mongoose.Schema(

    {
        nombre: {
            type: String,
            required: true,
            trim: true
        },
        descripcion: {
            type: String,
            required: false,
            trim: true
        }
    }

);

module.exports = mongoose.model("deportes", deporteScheme);