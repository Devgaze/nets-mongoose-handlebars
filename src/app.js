// init environment vars
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env'});

// connect to db
require('./loaders/db').connect();

// setup express
const path = require('path');
const express = require('express');
const expHbs = require('express-handlebars');
// const publicDirectoryPath = path.join(__dirname, '../', 'public');
const viewsDirectoryPath = path.join(__dirname);
const partialsDirectoryPath = path.join(__dirname, 'partials');
const app = express();

app.use(express.static(publicDirectoryPath));
app.use(express.json());

app.engine('.hbs', expHbs({
    defaultLayout: 'layout',
    extname: '.hbs',
    layoutsDir: viewsDirectoryPath,
    partialsDir: partialsDirectoryPath
}));

app.set('view engine', '.hbs');
app.set('views', viewsDirectoryPath);

// load homepage module
require('./homepage').register(app);
// .... any other

module.exports = app;