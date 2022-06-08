const express = require("express");
const router = express.Router();
const tatuadoresController = require("../controllers/tatuadoresController.js");

/**
 * @swagger
 * /tatuadores/addTatuador:
 *   post:
 *     summary: Añadir tatuador
 *     tags: [Posts]
 *     parameters:
 *       - in : path
 *         name: nombre
 *         description: Nombre del tatuador
 *         schema:
 *           type: string
 *         required: true
 *       - in : path
 *         name: descripcion
 *         description: Descripcion del tatuador
 *         schema:
 *           type: string
 *         required: false
 *       - in : path
 *         name: instagram
 *         description: Instagram del tatuador
 *         schema:
 *           type: string
 *         required: true
 *       - in : path
 *         name: localizacion
 *         description: Localizacion del tatuador
 *         schema:
 *           type: string
 *         required: true
 *       - in : path
 *         name: imagen
 *         description: Imagen del tatuador
 *         schema:
 *           type: string
 *         required: true
 *       - in : path
 *         name: telefono
 *         description: Telefono del tatuador
 *         schema:
 *           type: string
 *         required: false
 *       - in : path
 *         name: mail
 *         description: Mail del tatuador
 *         schema:
 *           type: string
 *         required: false
 *       - in : path
 *         name: idestudio
 *         description: ID del estudio del tatuador
 *         schema:
 *           type: integer
 *         required: false
 *     responses:
 *       200:
 *         description: Tatuador añadido
 *       400:
 *         description: Error
 */
router.post('/addTatuador', tatuadoresController.addTatuador);
/**
 * @swagger
 * /tatuadores/getAllTatuadores:
 *   get:
 *     summary: Recoger todos los estudios
 *     tags: [Gets]
 *     responses:
 *       200:
 *         description: Estudios
 *       400:
 *         description: Error
 */
router.get('/getAllTatuadores', tatuadoresController.getAllTatuadores);
/**
 * @swagger
 * /tatuadores/getOneTatuador/{id}:
 *   get:
 *     summary: Recoger un estudio
 *     tags: [Gets]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: ID del estudio
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Tatuador seleccionado
 *       400:
 *         description: Error
 */
router.get('/getOneTatuador/:id', tatuadoresController.getOneTatuador);
router.put('/updateTatuador/:id', tatuadoresController.updateTatuador);
/**
 * @swagger
 * /tatuadores/deleteTatuador/{id}:
 *   delete:
 *     summary: Eliminar un estudio
 *     tags: [Deletes]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: ID del estudio
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Estudio eliminado
 *       400:
 *         description: Error
 */
router.delete('/deleteTatuador/:id', tatuadoresController.deleteTatuador);

module.exports = router;