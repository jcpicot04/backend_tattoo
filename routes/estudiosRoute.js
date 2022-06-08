const express = require("express");
const router = express.Router();
const estudiosController = require("../controllers/estudiosController.js");

/**
 * @swagger
 * /estudios/addEstudio:
 *   post:
 *     summary: Añadir estudio
 *     tags: [Posts]
 *     parameters:
 *       - in : path
 *         name: nombre
 *         description: Nombre del estudio
 *         schema:
 *           type: string
 *         required: true
 *       - in : path
 *         name: latitud
 *         description: Latitud del estudio
 *         schema:
 *           type: string
 *         required: true
 *       - in : path
 *         name: longitud
 *         description: Longitud del estudio
 *         schema:
 *           type: string
 *         required: true
 *       - in : path
 *         name: imagen
 *         description: Imagen del estudio
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Estudio añadido
 *       400:
 *         description: Error
 */
router.post('/addEstudio', estudiosController.addEstudio);
/**
 * @swagger
 * /estudios/getAllEstudios:
 *   get:
 *     summary: Recoger todos los estudios
 *     tags: [Gets]
 *     responses:
 *       200:
 *         description: Estudios
 *       400:
 *         description: Error
 */
router.get('/getAllEstudios', estudiosController.getAllEstudios);
/**
 * @swagger
 * /estudios/getOneEstudio/{id}:
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
 *         description: Estudio seleccionado
 *       400:
 *         description: Error
 */
router.get('/getOneEstudio/:id', estudiosController.getOneEstudio);
/**
 * @swagger
 * /estudios/getEstudioImage/{id}:
 *   get:
 *     summary: Recoger imagen de un estudio
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
 *         description: Imagen del estudio seleccionado
 *       400:
 *         description: Error
 */
router.get('/getEstudioImage/:id', estudiosController.getEstudioImage);
router.put('/updateEstudio/:id', estudiosController.updateEstudio);
/**
 * @swagger
 * /estudios/deleteEstudio/{id}:
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
router.delete('/deleteEstudio/:id', estudiosController.deleteEstudio);

module.exports = router;