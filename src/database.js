const mongoose = require('mongoose')

const URI = process.env.MONGODB_URL || 'mongodb://localhost/desastres';

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    /* eslint-disable no-console */
    console.log('Conectado exitosamente a la Base de Datos...')
  })
  .catch((error) => {
    /* eslint-disable no-console */
    console.error(error)
  })

module.exports = mongoose
