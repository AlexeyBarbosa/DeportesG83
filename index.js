let puerto = 8180;
let express = require('express');
let app = express();
const cors = require('cors')
const db = require("./config/db");

app.use(cors())
app.use(express.json());
app.use(express.static('public'))

app.use('/api', require('./routes/principalRoutes'));

app.use('/api/deportes', require('./routes/deportesRoutes'));

app.use('/api/equipos', require('./routes/equiposRoutes'));

app.use('/api/eventos', require('./routes/eventosRoutes'));

app.use('/api/usuarios', require('./routes/usuariosRoutes'));

app.listen(puerto, function () {
    console.log("Puerto corriendo: " + puerto)
});

db();