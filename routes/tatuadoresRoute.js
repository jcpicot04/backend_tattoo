const express = require("express");
const router = express.Router();
const tatuadoresController = require("../controllers/tatuadoresController.js");

/** 
 * @swagger
 * /addTatuador:
 *  post:
 *      description: Añadir nuevo tatuador
 *      responses:
 *        '200':
 *          description: Successful response
*/
router.post('/addTatuador', tatuadoresController.addTatuador);

router.get('/getAllTatuadores', tatuadoresController.getAllTatuadores);
router.get('/getOneTatuador/:id', tatuadoresController.getOneTatuador);
router.put('/updateTatuador/:id', tatuadoresController.updateTatuador);
router.delete('/deleteTatuador/:id', tatuadoresController.deleteTatuador);

module.exports = router;