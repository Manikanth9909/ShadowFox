// Basic Express server with bodyParser and CORS middleware
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // Adjust to your frontend URL/port
    credentials: true
}));
app.use(bodyParser.json());

// Example route
app.get('/', (req, res) => {
    res.send('API is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
