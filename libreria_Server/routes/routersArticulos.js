const express = require('express');
const {allArticulos,articuloById, articuloByPrecio, articuloByName, newArticulo, updateArticulo, deleteArticulo}=require('../controlers/controlersArticulos')
const userRouter = express.Router();
const {verifyToken} = require('../validate/validations')


//*** PETICION GET ***/
// userRouter.get('/allArticulos',verifyToken, allArticulos);
userRouter.get('/allArticulos', allArticulos);
userRouter.get('/articulos/:id', articuloById);
userRouter.get('/articulos/precio/:precio', articuloByPrecio)
userRouter.get('/articulos/nombre/:nombre', articuloByName);

//*** PETICION POST ***/
userRouter.post('/articulos/nuevo', newArticulo);

//*** PETICION PUT ***/
userRouter.put('/articulos/:id', updateArticulo);

//*** PETICION DELETE ***/
userRouter.delete('/articulos/:id', deleteArticulo);

module.exports = userRouter;