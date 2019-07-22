const express = require('express');
const morgan = require('morgan');
const path = require('path');
// const geocoder = require('local-reverse-geocoder');

const app = express();

// Db connection
const { mongoose } = require('./database');

// Settings 
app.set('port', process.env.PORT || 3000);
// geocoder.init({}, function() {
//   // geocoder is loaded and ready to run
// });

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/alertas', require('./routes/alertas.routes'));
app.get('/reportar',function(req,res) {
  res.sendFile(__dirname + '/public/reporte.html');
});
app.get('/alertas',function(req,res) {
  res.sendFile(__dirname + '/public/alertas.html');
});
// app.get('/geo/:lat/:long',function(req,res) {
//   // console.log('Peticion recibida: ');
//   const point = {latitude: req.params.lat, longitude: req.params.long};
//   // console.log(point);
//   geocoder.lookUp(point, function(err, res1) {
//     const respuesta = JSON.parse(JSON.stringify(res1, null, 2));
//     res.json(respuesta);
//   });
//   // res.json(point);
// });

// Static Files
app.use(express.static(path.join(__dirname, 'public')));;

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
