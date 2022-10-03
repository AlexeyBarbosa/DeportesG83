let puerto = 3000;
let express = require ('express');
let app = express();


app.use('/api', require('./routes/principalRoutes'));//se importan las rutas de paginas y se agrega la parte inicial de la url .../api/...

app.use('/api/categorias', require('./routes/categoriasRoutes'));

app.use('/api/equipos', require('./routes/equiposRoutes'));

app.use('/api/usuarios', require('./routes/usuariosRoutes'));

app.use('/api/eventos', require('./routes/eventosRoutes'));

app.listen(puerto, function(){
    console.log("Puerto corriendo")
});