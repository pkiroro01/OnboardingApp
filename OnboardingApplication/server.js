const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Handle form submissions
app.post('/submit', (req, res) => {
    const { fullName, startDate, jobRole } = req.body;

    // Placeholder response, as the data handling is managed on the client side
    res.json({
        fullName,
        startDate,
        jobRole,
        message: 'Form data received. Learning path selection is handled in the client application.'
    });
});

module.exports = app; // Export the app for testing

if (require.main === module) {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}