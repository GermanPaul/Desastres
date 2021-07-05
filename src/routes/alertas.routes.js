const express = require('express');
const router = express.Router();

// Alerta Model
const Alerta = require('../models/alerta');

// GET all Alertas
router.get('/', async (req, res) => {
  const alertas = await Alerta.find();
  res.json(alertas);
});

// GET one Alert
router.get('/:id', async (req, res) => {
  const alerta = await Alerta.findById(req.params.id);
  res.json(alerta);
});

// ADD a new Alerta
router.post('/', async (req, res) => {
  const { municipio, fecha, tipo, descripcion } = req.body;
  const alerta = new Alerta({ municipio, fecha, tipo, descripcion });
  await alerta.save();
  res.json({ status: 'Alerta Saved' });
});

// UPDATE a new alerta
router.put('/:id', async (req, res) => {
  const { municipio, fecha, tipo, descripcion } = req.body;
  const newAlerta = { municipio, fecha, tipo, descripcion };
  await Alerta.findByIdAndUpdate(req.params.id, newAlerta);
  res.json({ status: 'Alerta Updated' });
});

router.delete('/:id', async (req, res) => {
  await Alerta.findByIdAndRemove(req.params.id);
  res.json({ status: 'Alerta Deleted' });
});

module.exports = router;
