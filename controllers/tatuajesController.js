const db = require("../models");

const Tatuajes = db.tatuajes
const Categorias = db.categorias
const CategoriasTatuajes = db.tatuajes_categorias

const addTatuaje = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No se ha subido imagen del tatuaje.");
    }
    let info = {
        idtatuador: req.body.idtatuador,
        imagen: "",
        titulo: req.body.titulo,
        zona: req.body.zona
    }

    try{
    const tatuaje = await Tatuajes.create(info);

    if (tatuaje) {
        let file = req.files.imagen;
        var fs = require("fs");
        var shell = require("shelljs");
        const pathFile =
          require("path").resolve(__dirname, "..") +
          `/public/tatuadores/${tatuaje.idtatuador}/tatuajes/${tatuaje.id}`;
        if (!fs.existsSync(pathFile)) {
          shell.mkdir("-p", pathFile);
        }
        file.mv(pathFile + "/tatuaje.jpg", function (err) {
          if (err) return res.status(500).send(err);
        });
  
        await tatuaje.update(
          { imagen: `./public/tatuadores/${tatuaje.idtatuador}/tatuajes/${tatuaje.id}/tatuaje.jpg` },
          { where: { id: tatuaje.id } }
        );
        
        res.status(200).send(tatuaje);
      } else {
        res.status(500).json({ error: "Ha ocurrido un error" });
      }
    } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
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

const addCategoriaTatuaje = async (req,res) => {
    let idtatuaje = req.body.idtatuaje;
    let idcategoria = req.body.idcategoria;
    let tatuaje = await Tatuajes.findOne({ where: { id: idtatuaje}})
    let categoria = await Categorias.findOne({ where: { id: idcategoria}})
    let info = {
        idtatuaje: tatuaje.id,
        idcategoria: categoria.id
    }
    if (tatuaje && categoria) {
        let categoriatatuaje = await CategoriasTatuajes.create(info);
        res.status(200).send(categoriatatuaje);
    }else{
        res.status(500).send("Categoria o tatuaje incorrecto");
    }

}

module.exports = {
    addTatuaje,
    getAllTatuajes,
    getOneTatuaje,
    updateTatuaje,
    deleteTatuaje,
    addCategoriaTatuaje
}