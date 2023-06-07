const mongoose = require('mongoose');

// Define database URI
const DB_URI = 'mongodb://localhost:27017/myapp';

// Connect to database
mongoose.connect(DB_URI, {
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

// Export connection
module.exports = mongoose.connection;
