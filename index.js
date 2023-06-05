const express = require('express');
const mongoose = require('mongoose');

// Import routes
const mahasiswaRoute = require('./route/mahasiswaRoute');
const mataKuliahRoute = require('./route/mataKuliahRoute');

// Create express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
.then(() => {
  console.log('Connected to database');
})
.catch((error) => {
  console.log(`Error: ${error.message}`);
});

// Use routes
app.use('/mahasiswa', mahasiswaRoute);
app.use('/mata-kuliah', mataKuliahRoute);

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
