const mongoose = require('mongoose');

// conexion del cluster
const URI = 'mongodb+srv://johnalondono:pNFbM4ek7n1Psze4@bdtecnology.uwhdcuj.mongodb.net/inventarios?retryWrites=true&w=majority&appName=bdtecnology';

mongoose.connect(URI)

//mensaje de conexion exitosa
.then(db => console.log('La base de datos esta conectada exitosamente'))

.catch(err => console.error(err));

module.exports = mongoose;