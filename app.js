require('dotenv').config();

const express  = require('express');
const path     = require('path');

// Inicializa o pool ao subir o app
require('./services/service.db');

const { enviarRelato } = require('./controllers/controller.report');

const app = express();

// ── View engine ────────────────────────────────────────────────────────────
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ── Middlewares ────────────────────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// ── Rotas ──────────────────────────────────────────────────────────────────
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Único endpoint de escrita — anônimo por design
app.post('/relato', enviarRelato);

module.exports = app;