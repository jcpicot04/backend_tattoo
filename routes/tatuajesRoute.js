const express = require("express");
const router = express.Router();
const tatuajesController = require("../controllers/tatuajesController.js");

/** 
 * @swagger
 * /addTatuaje:
 *  post:
 *      description: Añadir nuevo tatuaje
 *      responses:
 *        '200':
 *          description: Successful response
*/
router.post('/addTatuaje', tatuajesController.addTatuaje);

router.get('/getAllTatuajes', tatuajesController.getAllTatuajes);
router.get('/getOneTatuaje/:id', tatuajesController.getOneTatuaje);
router.put('/updateTatuaje/:id', tatuajesController.updateTatuaje);
router.delete('/deleteTatuaje/:id', tatuajesController.deleteTatuaje);

module.exports = router;