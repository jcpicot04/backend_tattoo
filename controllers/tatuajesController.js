const db = require("../models");

const Tatuajes = db.tatuajes

const addTatuaje = async (req, res) => {
    let info = {
        idtatuador: req.body.idtatuador,
        imagen: req.body.imagen,
        idcategoria: req.body.idcategoria
    }

    const tatuaje = await Tatuajes.create(info);
    res.status(200).send(tatuaje);
}

const getAllTatuajes = async (req, res) => {
    let tatuajes = await Tatuajes.findAll({});
    res.status(200).send(tatuajes);
}

const getOneTatuaje = async (req, res) => {
    let id = req.params.id
    let tatuaje = await Tatuajes.findOne({ where: { id: id }});
    res.status(200).send(tatuaje);
}

const updateTatuaje = async (req, res) => {
    let id = req.params.id
    let tatuaje = await Tatuajes.update(req.body, { where: { id: id }});
    res.status(200).send(tatuaje);
}

const deleteTatuaje = async (req, res) => {
    let id = req.params.id
    let tatuaje = await Tatuajes.destroy({ where: { id: id }});
    res.status(200).send('Tatuaje eliminado');
}

module.exports = {
    addTatuaje,
    getAllTatuajes,
    getOneTatuaje,
    updateTatuaje,
    deleteTatuaje
}