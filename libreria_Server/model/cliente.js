const { string } = require('joi');
const mongoose = require('mongoose');

// *** SCHEMA MONGOOSE ***/
//Definimos la forma que va a tener el registro en la base de datos
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
    nombre: String,
    telefono: Number,
    email: String,
    direccion: String,
    password: String,

});

// *** MODELO MONGOOSE ***/
//El el modelo definimos que schema va a usar este nuevo dato, 
//podemos tener varios schemas dependiendo de la estructura del registro a
//en el ejemplo usamos el schema ClienteSchema para crear el modelo

const Cliente = mongoose.model('Cliente', ClienteSchema);

module.exports = {
    Cliente
}