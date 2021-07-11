const mongoose = require('mongoose')

const URI = 'mongodb+srv://germanpaul:contra123@cluster0-5omwb.mongodb.net/desastres?retryWrites=true&w=majority'

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
