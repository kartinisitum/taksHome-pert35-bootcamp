const MataKuliah = require('../models/mataKuliah');
const db = require('../db');
// Controller function to create a new mata kuliah
exports.createMataKuliah = async (req, res) => {
try {
const { kode, nama, sks, kelas } = req.body;
const mataKuliah = await MataKuliah.create({ kode, nama, sks, kelas });
res.status(201).json({ success: true, data: mataKuliah });
} catch (error) {
res.status(500).json({ success: false, message: error.message });
}
};

// Controller function to get all mata kuliah
exports.getAllMataKuliah = async (req, res) => {
try {
const mataKuliah = await MataKuliah.find();
res.status(200).json({ success: true, data: mataKuliah });
} catch (error) {
res.status(500).json({ success: false, message: error.message });
}
};

// Controller function to get a single mata kuliah
exports.getSingleMataKuliah = async (req, res) => {
try {
const { id } = req.params;
const mataKuliah = await MataKuliah.findById(id);
if (!mataKuliah) {
return res.status(404).json({ success: false, message: 'Mata kuliah not found' });
}
res.status(200).json({ success: true, data: mataKuliah });
} catch (error) {
res.status(500).json({ success: false, message: error.message });
}
};

// Controller function to update a mata kuliah
exports.updateMataKuliah = async (req, res) => {
try {
const { id } = req.params;
const { kode, nama, sks, kelas } = req.body;
const mataKuliah = await MataKuliah.findByIdAndUpdate(id, { kode, nama, sks, kelas }, { new: true });
if (!mataKuliah) {
return res.status(404).json({ success: false, message: 'Mata kuliah not found' });
}
res.status(200).json({ success: true, data: mataKuliah });
} catch (error) {
res.status(500).json({ success: false, message: error.message });
}
};

// Controller function to delete a mata kuliah
exports.deleteMataKuliah = async (req, res) => {
try {
const { id } = req.params;
const mataKuliah = await MataKuliah.findByIdAndDelete(id);
if (!mataKuliah) {
return res.status(404).json({ success: false, message: 'Mata kuliah not found' });
}
res.status(200).json({ success: true, message: 'Mata kuliah deleted' });
} catch (error) {
res.status(500).json({ success: false, message: error.message });
}
};