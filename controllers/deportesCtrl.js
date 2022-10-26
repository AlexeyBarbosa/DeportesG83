const deporteModel = require("../models/deporteScheme");

const getDeportesList = async (req, res) => {
    let deportes;
    let codigoServidor;
    try {
        deportes = await deporteModel.find();
        codigoServidor = 200;
    } catch (err) {
        deportes = "Ups! Error al consultar los deportes!\n\n" + err;
        codigoServidor = 500;
    }
    res.status(codigoServidor).send(deportes);
}

const getDeporte = async (req, res) => {
    const id = req.params.id
    try {
        let deporte = await deporteModel.findOne({ _id: id })
        res.status(200).json(deporte);
    } catch (err) {
        res.status(500).send("Ups! Error al consultar el deporte!\n\n" + err);
    }
}

const createDeporte = async (req, res) => {
    let nombre = req.body.nombre;
    let mensaje = {};

    if (!nombre) {
        mensaje = { "msj": "Ingrese un nombre para el deporte!" };
        return res.status(400).json(mensaje);
    } else {
        let codigoServidor;
        try {
            const deporte = new deporteModel(req.body);
            deporte.save();
            mensaje = { "msj": "Deporte guardado!" };
            codigoServidor = 200;
        } catch (err) {
            codigoServidor = 500;
            mensaje = { "msj": "Ups! Error al guardar el deporte!\n\n" + err };
        }
        res.status(codigoServidor).json(mensaje);
    }
}

const updateDeporte = async (req, res) => {
    console.log("put:" + req.body);
    const { id, nombre, descripcion } = req.body;
    console.log("id: " + id);
    try {
        if (!id) {
            return res.status(400).send("Ups! No se pudo identificar el Id del deporte");
        }
        const deporte = {};
        deporte.nombre = nombre;
        deporte.descripcion = descripcion;
        const rta = await deporteModel.updateOne(
            { _id: id },
            { $set: deporte },
            { new: true }
        );
        res.status(200).json(rta);
    } catch (err) {
        res.status(400).send("Ups! Error al actualizar el deporte!\n\n" + err);
    }
}

const deleteDeporte = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).send("Ups! No se pudo identificar el Id del deporte");
        }
        console.log("id" + id);
        const rta = await deporteModel.deleteOne({ _id: id });
        console.log(rta);
        console.log("cat Eliminada");
        res.status(200).send("Deporte eliminado");
    } catch (err) {
        console.log("Error: " + err);
        res.status(400).send("Ups! Error al eliminar el deporte!\n\n" + err);
    }
}

module.exports = {
    getDeportesList,
    getDeporte,
    createDeporte,
    updateDeporte,
    deleteDeporte
};