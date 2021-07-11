const mongoose = require('mongoose')

const { Schema } = mongoose

const AlertaSchema = new Schema({
  municipio: { type: String, required: true },
  fecha: { type: Date, required: true },
  tipo: { type: String, required: true },
  descripcion: { type: String, required: true },
})

module.exports = mongoose.model('Alerta', AlertaSchema)
