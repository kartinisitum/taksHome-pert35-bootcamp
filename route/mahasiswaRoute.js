const express = require('express');
const router = express.Router();
const Mahasiswa = require('../models/mahasiswa');

// handler untuk endpoint GET /mahasiswa
router.get('/mahasiswa', async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.find();
    res.status(200).send(mahasiswa);
  } catch (error) {
    res.status(500).send(error);
  }
});

// handler untuk endpoint POST /mahasiswa
router.post('/mahasiswa', async (req, res) => {
  try {
    const mahasiswa = new Mahasiswa(req.body);
    await mahasiswa.save();
    res.status(201).send(mahasiswa);
  } catch (error) {
    res.status(400).send(error);
  }
});

// handler untuk endpoint PUT /mahasiswa/:id
router.put('/mahasiswa/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const mahasiswa = await Mahasiswa.findByIdAndUpdate(id, req.body, { new: true });
    if (!mahasiswa) {
      return res.status(404).send({ message: 'Mahasiswa not found' });
    }
    res.status(200).send(mahasiswa);
  } catch (error) {
    res.status(400).send(error);
  }
});

// handler untuk endpoint DELETE /mahasiswa/:id
router.delete('/mahasiswa/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const mahasiswa = await Mahasiswa.findByIdAndDelete(id);
    if (!mahasiswa) {
      return res.status(404).send({ message: 'Mahasiswa not found' });
    }
    res.status(200).send({ message: 'Mahasiswa deleted successfully' });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
