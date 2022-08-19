const db = require("../models");

const Estudios = db.estudios

const addEstudio = async (req, res) => {
if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No se ha subido imagen del tatuador.");
}
    let info = {
        nombre: req.body.nombre,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        imagen: ""
    }

try {
    const estudio = await Estudios.create(info);

    if (estudio) {
        let file = req.files.imagen;
        var fs = require("fs");
        var shell = require("shelljs");
        const pathFile =
          require("path").resolve(__dirname, "..") +
          `/public/estudios/${estudio.id}`;
        if (!fs.existsSync(pathFile)) {
          shell.mkdir("-p", pathFile);
        }
        file.mv(pathFile + "/logo.jpg", function (err) {
          if (err) return res.status(500).send(err);
        });
  
        await estudio.update(
          { imagen: `./public/estudios/${estudio.id}/logo.jpg` },
          { where: { id: estudio.id } }
        );
  
        res.status(200).send(estudio);
      } else {
        res.status(500).json({ error: "Ha ocurrido un error" });
      }
    } catch (error) {
      res.status(500).json({ error: "Ha ocurrido un error" });
    }
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
    estudio.imagen && res.sendFile(require('path').resolve(__dirname, '..') + (estudio.imagen).replace(".", ""));
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
    getEstudioImage,
    updateEstudio,
    deleteEstudio
}