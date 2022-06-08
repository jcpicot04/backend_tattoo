const db = require("../models");

const Estudios = db.estudios

const addEstudio = async (req, res) => {
    let info = {
        nombre: req.body.nombre,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        imagen: req.body.imagen
    }

    const estudio = await Estudios.create(info);
    res.status(200).send(estudio);
}

const getAllEstudios = async (req, res) => {
    let estudios = await Estudios.findAll({});
    res.status(200).send(estudios);
}

const getOneEstudio = async (req, res) => {
    let id = req.params.id
    let estudio = await Estudios.findOne({ where: { id: id }});
    res.status(200).send(estudio);
}

const getEstudioImage = async (req,res) => {
    let id = req.params.id
    let estudio = await Estudios.findOne({ where: { id: id }});
    console.log(estudio);
    res.status(200).sendFile(estudio.imagen);
}

const updateEstudio = async (req, res) => {
    let id = req.params.id
    let estudio = await Estudios.update(req.body, { where: { id: id }});
    res.status(200).send(estudio);
}

const deleteEstudio = async (req, res) => {
    let id = req.params.id
    let estudio = await Estudios.destroy({ where: { id: id }});
    res.status(200).send('Estudio eliminado');
}

module.exports = {
    addEstudio,
    getAllEstudios,
    getOneEstudio,
    updateEstudio,
    deleteEstudio
}