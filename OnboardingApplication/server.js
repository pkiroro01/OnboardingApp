const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

mongoose.connect('mongodb://localhost:27017/onboarding', { useNewUrlParser: true, useUnifiedTopology: true });

const TrainingPathSchema = new mongoose.Schema({
    role: String,
    courses: [String]
});

const TrainingPath = mongoose.model('TrainingPath', TrainingPathSchema);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', (req, res) => {
    const { fullName, startDate, jobRole } = req.body;
    TrainingPath.findOne({ role: jobRole }, (err, path) => {
        if (err) return res.status(500).send(err);
        if (!path) return res.status(404).send('No training path found for this role');

        res.json({
            fullName,
            startDate,
            jobRole,
            trainingPath: path.courses
        });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
