const express = require("express");
const router = express.Router();
const categoriasController = require("../controllers/categoriasController.js");

/**
 * @swagger
 * /categorias/addCategory:
 *   post:
 *     summary: Añadir categoría
 *     tags: [Posts]
 *     parameters:
 *       - in : path
 *         name: nombre
 *         description: Nombre de la categoría
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Categoría añadida
 *       400:
 *         description: Error
 */
router.post('/addCategory', categoriasController.addCategory);
/**
 * @swagger
 * /categorias/getAllCategorias:
 *   get:
 *     summary: Recoger todas las categorías
 *     tags: [Gets]
 *     responses:
 *       200:
 *         description: Categorías
 *       400:
 *         description: Error
 */
router.get('/getAllCategorias', categoriasController.getAllCategorias);
/**
 * @swagger
 * /categorias/getOneCategory/{id}:
 *   get:
 *     summary: Recoger una categoría
 *     tags: [Gets]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: ID de la categoría
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Categoría seleccionada
 *       400:
 *         description: Error
 */
router.get('/getOneCategory/:id', categoriasController.getOneCategory);
/**
 * @swagger
 * /categorias/getCategoryImage/{id}:
 *   get:
 *     summary: Recoger imagen de una categoría
 *     tags: [Gets]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: ID de la categoría
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Imagen de la categoría seleccionada
 *       400:
 *         description: Error
 */
 router.get('/getCategoryImage/:id', categoriasController.getCategoryImage);
router.put('/updateCategory/:id', categoriasController.updateCategory);
/**
 * @swagger
 * /categorias/deleteCategory/{id}:
 *   delete:
 *     summary: Eliminar una categoría
 *     tags: [Deletes]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: ID de la categoría
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Categoría eliminada
 *       400:
 *         description: Error
 */
router.delete('/deleteCategory/:id', categoriasController.deleteCategory);

module.exports = router