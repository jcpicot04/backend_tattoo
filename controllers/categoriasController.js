const db = require("../models");

const Categorias = db.categorias

const addCategory = async (req, res) => {
    let info = {
        nombre: req.body.nombre
    }

    const category = await Categorias.create(info);
    res.status(200).send(category);
}

const getAllCategorias = async (req, res) => {
    let categories = await Categorias.findAll({});
    res.status(200).send(categories);
    console.log(categories);
}

const getOneCategory = async (req, res) => {
    let id = req.params.id
    let category = await Categorias.findOne({ where: { id: id }});
    res.status(200).send(category);
}

const updateCategory = async (req, res) => {
    let id = req.params.id
    let category = await Categorias.update(req.body, { where: { id: id }});
    res.status(200).send(category);
}

const deleteCategory = async (req, res) => {
    let id = req.params.id
    let category = await Categorias.destroy({ where: { id: id }});
    res.status(200).send('Categoría eliminada');
}

module.exports = {
    addCategory,
    getAllCategorias,
    getOneCategory,
    updateCategory,
    deleteCategory
}