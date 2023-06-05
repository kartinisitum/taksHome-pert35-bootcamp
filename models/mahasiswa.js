const mongoose = require('mongoose');

const mahasiswaSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true
  },
  nim: {
    type: String,
    required: true,
    unique: true
  },
  kelas: {
    type: String,
    required: true
  },
  jenisKelamin: {
    type: String,
    enum: ['Laki-laki', 'Perempuan'],
    required: true
  }
});

const Mahasiswa = mongoose.model('Mahasiswa', mahasiswaSchema);

module.exports = Mahasiswa;
