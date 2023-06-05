const Mahasiswa = require('../models/mahasiswa');
const db = require('../db');
// handler untuk endpoint GET /mahasiswa
const getMahasiswa = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.find();
    res.status(200).send(mahasiswa);
  } catch (error) {
    res.status(500).send(error);
  }
};

// handler untuk endpoint POST /mahasiswa
const createMahasiswa = async (req, res) => {
  try {
    const mahasiswa = new Mahasiswa(req.body);
    await mahasiswa.save();
    res.status(201).send(mahasiswa);
  } catch (error) {
    res.status(400).send(error);
  }
};

// handler untuk endpoint PUT /mahasiswa/:id
const updateMahasiswa = async (req, res) => {
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
};

// handler untuk endpoint DELETE /mahasiswa/:id
const deleteMahasiswa = async (req, res) => {
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
};

module.exports = {
  getMahasiswa,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa
};
