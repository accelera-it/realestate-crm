const express = require('express');
const db = require('./db/config')
const route = require('./controllers/route');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 5001 || process.env.PORT;
require('dotenv').config()

//Setup Express App
const app = express();

// Middleware
app.use(bodyParser.json());

// Set up CORS  
app.use(cors());

//API Routes
app.use('/api', route);


app.get('/', async (req, res) => {
    res.send('Real Estate CRM Api...')
});

// Get port from environment and store in Express.

const server = app.listen(port, () => {
    const { address, port } = server.address();
    const host = address === '::' ? '127.0.0.1' : address;

    console.log(`Server listening at http://${host}:${port}/`);
});


// Connect to MongoDB
const DATABASE_URL = process.env.DB_URL || 'mongodb://127.0.0.1:27017'
const DATABASE = process.env.DB || 'realestate_crm'

db(DATABASE_URL, DATABASE);
