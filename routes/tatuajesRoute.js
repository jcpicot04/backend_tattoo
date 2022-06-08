const express = require("express");
const router = express.Router();
const tatuajesController = require("../controllers/tatuajesController.js");

/**
 * @swagger
 * /tatuajes/addTatuaje:
 *   post:
 *     summary: Añadir tatuaje
 *     tags: [Posts]
 *     parameters:
 *       - in : path
 *         name: idtatuador
 *         description: ID del tatuador del tatuaje
 *         schema:
 *           type: integer
 *         required: true
 *       - in : path
 *         name: imagen
 *         description: Imagen del tatuaje
 *         schema:
 *           type: string
 *         required: true
 *       - in : path
 *         name: idcategoria
 *         description: ID de la categoría del tatuaje
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Tatuaje añadido
 *       400:
 *         description: Error
 */
router.post('/addTatuaje', tatuajesController.addTatuaje);
/**
 * @swagger
 * /tatuajes/getAllTatuajes:
 *   get:
 *     summary: Recoger todos los tatuajes
 *     tags: [Gets]
 *     responses:
 *       200:
 *         description: Tatuajes
 *       400:
 *         description: Error
 */
router.get('/getAllTatuajes', tatuajesController.getAllTatuajes);
/**
 * @swagger
 * /tatuajes/getOneTatuaje/{id}:
 *   get:
 *     summary: Recoger un tatuaje
 *     tags: [Gets]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: ID del tatuaje
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Tatuaje seleccionado
 *       400:
 *         description: Error
 */
router.get('/getOneTatuaje/:id', tatuajesController.getOneTatuaje);
router.put('/updateTatuaje/:id', tatuajesController.updateTatuaje);
/**
 * @swagger
 * /tatuajes/deleteTatuaje/{id}:
 *   delete:
 *     summary: Eliminar un tatuaje
 *     tags: [Deletes]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: ID del tatuaje
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Tatuaje eliminado
 *       400:
 *         description: Error
 */
router.delete('/deleteTatuaje/:id', tatuajesController.deleteTatuaje);

module.exports = router;