const express = require("express");
const router = express.Router();
const categoriasController = require("../controllers/categoriasController.js");

/** 
 * @swagger
 * /addCategory:
 *  post:
 *      description: Añadir nueva categoría
 *      responses:
 *        '200':
 *          description: Successful response
*/
router.post('/addCategory', categoriasController.addCategory);

router.get('/getAllCategorias', categoriasController.getAllCategorias);
router.get('/getOneCategory/:id', categoriasController.getOneCategory);
router.put('/updateCategory/:id', categoriasController.updateCategory);
router.delete('/deleteCategory/:id', categoriasController.deleteCategory);

module.exports = router