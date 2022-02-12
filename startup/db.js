const mongoose = require('mongoose');
module.exports = function () {
  mongoose.connect('mongodb://localhost:27017/Events')
    .then(() => console.log('Connected to a database...'))
    .catch(() => console.error('Could not connect to MongoDB..'));
}

