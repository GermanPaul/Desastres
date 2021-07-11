const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()

// DB connection
require('./database')

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(express.json())

// Routes
app.use('/api/alertas', require('./routes/alertas.routes'))

app.get('/reportar', (req, res) => {
  res.sendFile(`${__dirname}/public/reporte.html`)
})
app.get('/alertas', (req, res) => {
  res.sendFile(`${__dirname}/public/alertas.html`)
})

// Static Files
app.use(express.static(path.join(__dirname, 'public')))

// Starting the server
app.listen(app.get('port'), () => {
  /* eslint-disable no-console */
  console.log(`Server on port ${app.get('port')}`)
})
