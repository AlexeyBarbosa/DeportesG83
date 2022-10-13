const usuarioModel = require("../models/usuarioScheme");

const getUsuariosList = async (req, res) => {
    let usuarios;
    let codigoServidor;
    try {
        usuarios = await usuarioModel.find();
        codigoServidor = 200;
    } catch (err) {
        usuarios = "Ups! Error al consultar los usuarios!\n\n" + err;
        codigoServidor = 500;
    }
    res.status(codigoServidor).send(usuarios);
}

const getUsuario = async (req, res) => {
    const id = req.params.id
    try {
        let usuario = await usuarioModel.findOne({ _id: id })
        res.status(200).json(usuario);
    } catch (err) {
        res.status(500).send("Ups! Error al consultar el usuario!\n\n" + err);
    }
}

const createUsuario = async (req, res) => {
    let nombre = req.body.nombre;
    let correo = req.body.correo;
    let usuario = req.body.usuario;
    let clave = req.body.clave;
    let mensaje = {};

    if (!nombre || !correo || !usuario || !clave) {
        mensaje = { "msj": "Ingrese la información completa para el usuario!" };
        return res.status(400).json(mensaje);
    } else {
        let codigoServidor;
        try {
            const usuario = new usuarioModel(req.body);
            usuario.save();
            mensaje = { "msj": "Usuario guardado!" };
            codigoServidor = 200;
        } catch (err) {
            codigoServidor = 500;
            mensaje = { "msj": "Ups! Error al guardar el usuario!\n\n" + err };
        }
        res.status(codigoServidor).json(mensaje);
    }

}

const updateUsuario = async (req, res) => {
    console.log("put:" + req.body);
    const { id, nombre, descripcion } = req.body;
    console.log("id: " + id);
    try {
        if (!id) {
            return res.status(400).send("Ups! No se pudo identificar el Id del usuario");
        }
        const usuario = {};
        usuario.nombre = nombre;
        usuario.descripcion = descripcion;
        const rta = await usuarioModel.updateOne(
            { _id: id },
            { $set: usuario },
            { new: true }
        );
        res.status(200).json(rta);
    } catch (err) {
        res.status(400).send("Ups! Error al actualizar el usuario!\n\n" + err);
    }
}

const deleteUsuario = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).send("Ups! No se pudo identificar el Id del usuario");
        }
        const rta = await usuarioModel.deleteOne({ _id: id });
        res.status(200).send("Usuario eliminado");
    } catch (err) {
        res.status(400).send("Ups! Error al eliminar el usuario!\n\n" + err);
    }
}

module.exports = {
    getUsuariosList,
    getUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario
};