const db = require("../models");

const Tatuadores = db.tatuadores

const addTatuador = async (req, res) => {
    let info = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion ? req.body.descripcion : null,
        instagram: req.body.instagram,
        localizacion: req.body.localizacion,
        imagen: req.body.imagen,
        telefono: req.body.telefono ? req.body.telefono : null,
        mail: req.body.mail ? req.body.mail : null,
        idestudio: req.body.idestudio ? req.body.idestudio  : null,
    }

    const tatuador = await Tatuadores.create(info);
    res.status(200).send(tatuador);
}

const getAllTatuadores = async (req, res) => {
    let tatuadores = await Tatuadores.findAll({});
    res.status(200).send(tatuadores);
}

const getOneTatuador = async (req, res) => {
    let id = req.params.id
    let tatuador = await Tatuadores.findOne({ where: { id: id }});
    res.status(200).send(tatuador);
}

const updateTatuador = async (req, res) => {
    let id = req.params.id
    let tatuador = await Tatuadores.update(req.body, { where: { id: id }});
    res.status(200).send(tatuador);
}

const deleteTatuador = async (req, res) => {
    let id = req.params.id
    let tatuador = await Tatuadores.destroy({ where: { id: id }});
    res.status(200).send('Tatuador eliminado');
}

module.exports = {
    addTatuador,
    getAllTatuadores,
    getOneTatuador,
    updateTatuador,
    deleteTatuador
}