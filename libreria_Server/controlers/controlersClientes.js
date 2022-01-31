const { Cliente } = require("../Model/cliente");
const bcryptjs = require("bcryptjs");
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken');
const { generateAccessToken } = require("../validate/validations");
require("dotenv").config();



//*** PETICION GET ***//
//*** TODOS LOS CLIENTES ***//
const allClientes = (req, res) => {
    Cliente.find()
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log(error);
        });
};

//*** CLIENTES BY Id ***//
const ClientesById = async (req, res) => {
    try {
        const cliente = await Cliente.find().where({ _id: req.body.id });
        console.log({ data: cliente });

        res.send({ data: cliente });
    } catch (error) {
        res.status(404).send({ error: "Usuario no encontrado" });
    }
};


//*** PETICION POST ***//
//*** CLIENTE NUEVO ***//
const newClientes = async (req, res) => {
    const cliente = await Cliente.find().where({ email: req.body.email });
    if (cliente[0]) return res.status(400).json({ error: 'Email already exist' })

    // Encriptar el password
    const password = await bcryptjs.hash(req.body.password, 10);

    // Guardar nuevo cliente en Mongo
    const dataCliente = {
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        email: req.body.email,
        direccion: req.body.direccion,
        password: password,
    };

    const newCliente = new Cliente(dataCliente);

    newCliente.save((error) => {
        if (error) {
            console.log("Oooops, ocurrió un error");
            res.send(error);
        } else {
            console.log("Nuevo usuario guardado exitosamente !!!");
            return res.status(200).send(newCliente);
        }
    });
};

//*** LOGIN CLIENTE ***//
const LoginCliente = async (req, res) => {
    const cliente = await Cliente.find().where({ email: req.body.email })

    if (cliente) {
        const hashPassword = cliente[0].password
        const password = req.body.password
        const compara = await bcryptjs.compare(password, hashPassword)
        if (compara) {
            const datosCliente = {
                nombre: cliente.nombre,
                telefono: cliente.telefono,
                email: cliente.email,
                direccion: cliente.direccion,
                password: cliente.password
            }
            const accessToken = await generateAccessToken(datosCliente)
            res.json({ status: 'ok', token: accessToken })

        } else {
            res.json({ status: 'contrseña o email incorrectos' })
        }
    } else {
        res.json({ status: 'contrseña o email incorrectos' })
    }

};

//*** ENVIO DE CORREOS ***//
const CorreoCliente = async (req, res) => {
    try {
        var transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "komargustavo@gmail.com",
                pass: "tastqxoqliforfci"
            }
        });
        let info = await transporter.sendMail({
            from: `${req.body.asuntoForm} <${req.body.emailForm}>`,
            to: "komargustavo@hotmail.com",
            subject: "Prueba de envío de correo ",
            html: `Nombre: ${req.body.asuntoForm} <br> Email: ${req.body.emailForm} <br> ${req.body.mensajeForm}`
        });
        console.log("correo enviado");
    } catch (error) {
        console.log(error);
    }

}

//*** PETICION POST ***//
//*** UPDATE DE CLIENTES ***//
const updateClientes = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        Object.assign(cliente, req.body);
        cliente.save();
        res.send(cliente);
    } catch (error) {
        res.status(404).send({ error: "Usuario no encontrado!!" });
    }
};

//*** PETICION DELETE ***//
//*** ELIMINAR DE CLIENTE ***//
const deleteCliente = async (req, res) => {
    try {
        const cliente = await Cliente.deleteOne(req.params.body)
        console.log("El cliente se elimino exitosamente !!!");
        res.send({ data: user });
    } catch (err) {
        res.status(404).send({ error: "Usuario no encontrado!! " });
    }
};


// Funciones de validación
// const findUser = (id) => {
//     return users.find((user) => user.id === parseInt(id));
// };

// const validateUserName = (elNombre) => {
//     const schema = Joi.object({
//         nombre: Joi.string().min(3).required(),
//     });
//     return schema.validate({
//         nombre: elNombre,
//     });
// };

module.exports = {
    allClientes,
    ClientesById,
    newClientes,
    updateClientes,
    deleteCliente,
    LoginCliente,
    CorreoCliente,
};
