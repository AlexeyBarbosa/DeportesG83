const eventoModel = require("../models/eventoScheme");

const getEventosList = async (req, res) => {
    let eventos;
    let codigoServidor;
    try {
        eventos = await eventoModel.find();
        codigoServidor = 200;
    } catch (err) {
        eventos = "Ups! Error al consultar los eventos!\n\n" + err;
        codigoServidor = 500;
    }
    res.status(codigoServidor).send(eventos);
}

const getEvento = async (req, res) => {
    const id = req.params.id
    try {
        let evento = await eventoModel.findOne({ _id: id })
        res.status(200).json(evento);
    } catch (err) {
        res.status(500).send("Ups! Error al consultar el evento!\n\n" + err);
    }
}

const createEvento = async (req, res) => {
    let equipo1 = req.body.equipo1;
    let equipo2 = req.body.equipo2;
    let marcador1 = req.body.marcador1;
    let marcador2 = req.body.marcador2;
    let mensaje = {};

    if (!equipo1 || !equipo2 || !marcador1 || !marcador2) {
        mensaje = { "msj": "Ingrese la información completa para el evento!" };
        return res.status(400).json(mensaje);
    } else {
        let codigoServidor;
        try {
            const evento = new eventoModel(req.body);
            evento.save();
            mensaje = { "msj": "Evento guardado!" };
            codigoServidor = 200;
        } catch (err) {
            codigoServidor = 500;
            mensaje = { "msj": "Ups! Error al guardar el evento!\n\n" + err };
        }
        res.status(codigoServidor).json(mensaje);
    }

}

const updateEvento = async (req, res) => {
    console.log("put:" + req.body);
    const { id, nombre, descripcion } = req.body;
    console.log("id: " + id);
    try {
        if (!id) {
            return res.status(400).send("Ups! No se pudo identificar el Id del evento");
        }
        const evento = {};
        evento.nombre = nombre;
        evento.descripcion = descripcion;
        const rta = await eventoModel.updateOne(
            { _id: id },
            { $set: evento },
            { new: true }
        );
        res.status(200).json(rta);
    } catch (err) {
        res.status(400).send("Ups! Error al actualizar el evento!\n\n" + err);
    }
}

const deleteEvento = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).send("Ups! No se pudo identificar el Id del evento");
        }
        const rta = await eventoModel.deleteOne({ _id: id });
        res.status(200).send("Evento eliminado");
    } catch (err) {
        res.status(400).send("Ups! Error al eliminar el evento!\n\n" + err);
    }
}

module.exports = {
    getEventosList,
    getEvento,
    createEvento,
    updateEvento,
    deleteEvento
};