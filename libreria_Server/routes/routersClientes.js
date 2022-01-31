const express = require('express');
const ClientesRouter = express.Router();

const { allClientes, ClientesById, newClientes, updateClientes, deleteCliente, LoginCliente, CorreoCliente } = require('../controlers/controlersClientes')




//*** PETICION GET ***/

ClientesRouter.get('/all', allClientes);
ClientesRouter.get('/id/:id', ClientesById);

//*** PETICION POST ***/
ClientesRouter.post('/nuevo', newClientes);
ClientesRouter.post('/login', LoginCliente);
ClientesRouter.post('/correo',CorreoCliente);


//*** PETICION PUT ***/
ClientesRouter.put('/id/:id', updateClientes);


//*** PETICION DELETE ***/
ClientesRouter.delete('/delete/:id', deleteCliente);




module.exports = ClientesRouter;