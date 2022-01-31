const express = require('express');
const Joi = require('joi');
const mysqlConnection = require('../config/mySqlDataBase')


//*** PETICION GET ***/
const allArticulos = (req, res) => {
        mysqlConnection.query("select * from articulos, precio where articulos.precio_idprecio=precio.idprecio", (error, data) => {

        if (error) {
            console.log(error)
        } else {
            res.status(200).send({ data: data })
        }
    })
};


const articuloById = (req, res) => {
    let artEncontrado = articulos.find(dato => dato.id === parseInt(req.params.id));
    if (!artEncontrado) res.status(400).send('Articulo inexistente');

    res.send(artEncontrado);

};

const articuloByPrecio = (req, res) => {
    let articuloPrecio = articulos.filter(dato => dato.precio === parseFloat(req.params.precio));
    if (!articuloPrecio) res.status(400).send('Precio no encontrado');
    let articuloNombre = articuloPrecio.map(nombre => nombre.nombre);

    res.send(articuloNombre);

};

const articuloByName = (req, res) => {
    let articulosNombre = articulos.filter(dato => dato.nombre === req.params.nombre);
    if (!articulosNombre) res.status(400).send('No exite ese articulo');

    res.send(articulosNombre);

};

//*** PETICION POST ***/
const newArticulo = (req, res) => {
    const schema = Joi.object({
        nombre: Joi.string().max(60).required(),
        precio: Joi.number().precision(2),
    });

    const { error } = schema.validate(
        { nombre: req.body.nombre },
        { precio: req.body.precio }
    );

    if (!error) {
        let articuloNuevo = {
            id: articulos.length + 1,
            nombre: req.body.nombre,
            precio: req.body.precio
        };
        articulos.push(articuloNuevo);
    };
    res.status(400).send(error);
};

//*** PETICION PUT ***/
const updateArticulo = (req, res) => {
    let artEncontrado = articulos.find(dato => dato.id === parseInt(req.params.id));
    if (!artEncontrado) res.status(400).send('Articulo no encontrado');

    const schema = Joi.object({
        nombre: Joi.string().max(60).required(),
        precio: Joi.number().precision(2)
    });

    const { error } = schema.validate(
        { nombre: req.body.nombre },
        { precio: req.body.precio }
    );

    if (!error) {
        artEncontrado.nombre = req.body.nombre;
        artEncontrado.precio = req.body.precio;

        res.send(artEncontrado);
    };
    res.status(400).send(error);
};

//*** PETICION DELETE ***/
const deleteArticulo = (req, res) => {
    let artEncontrado = articulos.find(dato => dato.id === parseInt(req.params.id));
    if (!artEncontrado) res.status(400).send('Articulo no encontrado');

    let index = articulos.indexOf(artEncontrado);
    articulos.splice(index, 1);
};
module.exports = {
    allArticulos,
    articuloById,
    articuloByPrecio,
    articuloByName,
    newArticulo,
    updateArticulo,
    deleteArticulo
};