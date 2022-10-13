const equipoModel = require("../models/equipoScheme");

const getEquiposList = async (req, res) => {
    let equipos;
    let codigoServidor;
    try {
        equipos = await equipoModel.find();
        codigoServidor = 200;
    } catch (err) {
        equipos = "Ups! Error al consultar los equipos!\n\n" + err;
        codigoServidor = 500;
    }
    res.status(codigoServidor).send(equipos);
}

const getEquipo = async (req, res) => {
    const id = req.params.id
    try {
        let equipo = await equipoModel.findOne({ _id: id })
        res.status(200).json(equipo);
    } catch (err) {
        res.status(500).send("Ups! Error al consultar el equipo!\n\n" + err);
    }
}

const createEquipo = async (req, res) => {
    let nombre = req.body.nombre;
    let deporte = req.body.deporte;
    let mensaje = {};

    if (!nombre) {
        mensaje = { "msj": "Ingrese un nombre para el equipo!" };
        return res.status(400).json(mensaje);
    } else if (!deporte) {
        mensaje = { "msj": "Seleccione un deporte para el equipo!" };
        return res.status(400).json(mensaje);
    } else {
        let codigoServidor;
        try {
            const equipo = new equipoModel(req.body);
            equipo.save();
            mensaje = { "msj": "Equipo guardado!" };
            codigoServidor = 200;
        } catch (err) {
            codigoServidor = 500;
            mensaje = { "msj": "Ups! Error al guardar el equipo!\n\n" + err };
        }
        res.status(codigoServidor).json(mensaje);
    }

}

const updateEquipo = async (req, res) => {
    console.log("put:" + req.body);
    const { id, nombre, descripcion } = req.body;
    console.log("id: " + id);
    try {
        if (!id) {
            return res.status(400).send("Ups! No se pudo identificar el Id del equipo");
        }
        const equipo = {};
        equipo.nombre = nombre;
        equipo.descripcion = descripcion;
        const rta = await equipoModel.updateOne(
            { _id: id },
            { $set: equipo },
            { new: true }
        );
        res.status(200).json(rta);
    } catch (err) {
        res.status(400).send("Ups! Error al actualizar el equipo!\n\n" + err);
    }
}

const deleteEquipo = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).send("Ups! No se pudo identificar el Id del equipo");
        }
        const rta = await equipoModel.deleteOne({ _id: id });
        res.status(200).send("Equipo eliminado");
    } catch (err) {
        res.status(400).send("Ups! Error al eliminar el equipo!\n\n" + err);
    }
}

module.exports = {
    getEquiposList,
    getEquipo,
    createEquipo,
    updateEquipo,
    deleteEquipo
};