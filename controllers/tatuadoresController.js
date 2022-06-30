const db = require("../models");

const Tatuadores = db.tatuadores;
const Estudios = db.estudios;


const addTatuador = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No se ha subido imagen del tatuador.");
  }

  let info = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion ? req.body.descripcion : null,
    instagram: req.body.instagram,
    localizacion: req.body.localizacion,
    imagen: "",
    telefono: req.body.telefono ? req.body.telefono : null,
    mail: req.body.mail ? req.body.mail : null,
    idestudio: req.body.idestudio ? req.body.idestudio : null,
  };

  try {
    const tatuador = await Tatuadores.create(info);

    if (tatuador) {
      let file = req.files.imagen;
      var fs = require("fs");
      var shell = require("shelljs");
      const pathFile =
        require("path").resolve(__dirname, "..") +
        `/public/tatuadores/${tatuador.id}`;
      if (!fs.existsSync(pathFile)) {
        shell.mkdir("-p", pathFile);
      }
      const pathTatuajes =
        require("path").resolve(__dirname, "..") +
        `/public/tatuadores/${tatuador.id}/tatuajes`;
      if (!fs.existsSync(pathTatuajes)) {
        shell.mkdir("-p", pathTatuajes);
      }
      file.mv(pathFile + "/logo.jpg", function (err) {
        if (err) return res.status(500).send(err);
      });

      await tatuador.update(
        { imagen: `./public/tatuadores/${tatuador.id}/logo.jpg` },
        { where: { id: tatuador.id } }
      );

      res.status(200).send(tatuador);
    } else {
      res.status(500).json({ error: "Ha ocurrido un error" });
    }
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
};

const getAllTatuadores = async (req, res) => {
  let tatuadores = await Tatuadores.findAll();
  let tatuadoresEstudio = [];
  if(tatuadores){
    for (let t = 0; t < tatuadores.length; t++){
      let tatuador = {
        "id" : tatuadores[t].id,
        "nombre" : tatuadores[t].nombre,
        "descripcion" : tatuadores[t].descripcion,
        "instagram" : tatuadores[t].instagram,
        "localizacion" : tatuadores[t].localizacion,
        "imagen" : tatuadores[t].imagen,
        "telefono" : tatuadores[t].telefono,
        "mail" : tatuadores[t].mail,
        "idestudio" : tatuadores[t].idestudio,
      }
      if (tatuadores[t].idestudio) {
        let estudio = await Estudios.findOne({ where: { id : tatuadores[t].idestudio}});
        console.log(estudio.nombre)
        tatuador["estudio"] = {
            "nombre" : estudio.nombre,
            "latitud" : estudio.latitud,
            "longitud" : estudio.longitud,
            "imagen" : estudio.imagen
        }   
      }

      tatuadoresEstudio.push(tatuador);
    }
  }

  res.status(200).send(tatuadoresEstudio);
};

const getOneTatuador = async (req, res) => {
  let id = req.params.id;
  let tatuador = await Tatuadores.findOne({ where: { id: id } });
  res.status(200).send(tatuador);
};

const updateTatuador = async (req, res) => {
  let id = req.params.id;
  let tatuador = await Tatuadores.update(req.body, { where: { id: id } });
  res.status(200).send(tatuador);
};

const deleteTatuador = async (req, res) => {
  let id = req.params.id;
  let tatuador = await Tatuadores.destroy({ where: { id: id } });
  res.status(200).send("Tatuador eliminado");
};

module.exports = {
  addTatuador,
  getAllTatuadores,
  getOneTatuador,
  updateTatuador,
  deleteTatuador,
};
