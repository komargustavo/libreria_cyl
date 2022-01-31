const mongoose = require('mongoose');
require('dotenv').config();

//*** Configuracion de la conexcion a la base de datos Mongo ***//

const userMongo = process.env.MONGO_URL;
// realizar la coneccion a la db mongo
mongoose.connect(userMongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// verifico si la coneccion se realizo
mongoose.connection.on('connected', () => {
    console.log('Mongo se conecto exitosamente...');
});

