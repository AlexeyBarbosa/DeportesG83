let puerto = 3000;
let express = require('express');
let app = express();
const cors = require('cors')
const db = require("./config/db");

app.use(cors())
app.use(express.json());
app.use(express.static('public'))

app.use('/', function (req, res) {
    res.send("Inicio API");
});

app.use('/api', require('./routes/principalRoutes'));//se importan las rutas de paginas y se agrega la parte inicial de la url .../api/...

app.use('/api/deportes', require('./routes/deportesRoutes'));

app.use('/api/equipos', require('./routes/equiposRoutes'));

app.use('/api/eventos', require('./routes/eventosRoutes'));

app.use('/api/usuarios', require('./routes/usuariosRoutes'));

app.listen(puerto, function () {
    console.log("Puerto corriendo: " + puerto)
});

db();