const deporteModel = require("../models/deporteScheme");

const getDeportesList = async (req, res) => {
    let deportes;
    try {
        deportes = await deporteModel.find();
        codigoServidor = 200;
    } catch (err) {
        deportes = "Ups! Error al consultar los deportes!\n\n" + err;
        codigoServidor = 500;
    }
    res.status(codigoServidor).send(deportes);
}

const createDeporte = async (req, res) => {
    let nombre = req.body.nombre;
    let mensaje = {};

    if (nombre == "") {
        mensaje = { "msj": "Ingrese un nombre para el deporte!" };
        res.status(400).json(mensaje);
    } else {
        let codigoServidor;
        try {
            const deporte = new deporteModel(req.body);
            deporte.save();
            mensaje = { "msj": "Deporte guardado!" };
            codigoServidor = 200;
        } catch (err) {
            console.log("errrrrrrr");
            codigoServidor = 500;
            mensaje = { "msj": "Ups! Error al guardar el deporte!\n\n" + err };
        }
        res.status(codigoServidor).json(mensaje);
    }

}

const getDeporte = async (req, res) => {
    const id = req.params.id;

}

const updateDeporte = async (req, res) => {
    const id = req.params.id;

}

const deleteDeporte = async (req, res) => {
    const id = req.params.id;

}

module.exports = {
    getDeportesList,
    getDeporte,
    createDeporte,
    updateDeporte,
    deleteDeporte
};