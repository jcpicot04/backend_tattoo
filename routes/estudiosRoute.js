const express = require("express");
const router = express.Router();
const estudiosController = require("../controllers/estudiosController.js");

/** 
 * @swagger
 * /addEstudio:
 *  post:
 *      description: Añadir nuevo estudio
 *      responses:
 *        '200':
 *          description: Successful response
*/
router.post('/addEstudio', estudiosController.addEstudio);

router.get('/getAllEstudios', estudiosController.getAllEstudios);
router.get('/getOneEstudio/:id', estudiosController.getOneEstudio);
router.put('/updateEstudio/:id', estudiosController.updateEstudio);
router.delete('/deleteEstudio/:id', estudiosController.deleteEstudio);

module.exports = router;