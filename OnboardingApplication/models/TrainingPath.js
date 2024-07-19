const mongoose = require('mongoose');

const TrainingPathSchema = new mongoose.Schema({
    role: String,
    courses: [String]
});

module.exports = mongoose.model('TrainingPath', TrainingPathSchema);
