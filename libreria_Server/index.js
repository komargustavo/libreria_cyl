const express = require('express');
require('dotenv').config();
const clientesRouter=require('./routes/routersClientes')
const routerArticulos = require('./routes/routersArticulos')
const { string, boolean } = require('joi');
require('./config/mongoDataBase');
require('./config/mySqlDataBase');
const cors=require("cors");



const corsOptions ={
   origin:'*', 
   credentials:true,            //control de acceso. Permitir credenciales: true
   optionSuccessStatus:200,
}



const port = process.env.PORT;
const app = express();
app.use(cors(corsOptions))
app.use(express.json());
app.use('/clientes',clientesRouter)
app.use('/articulos',routerArticulos)

app.listen(port, () => {
    console.log(`escuchando en puerto ${port}`)
});



