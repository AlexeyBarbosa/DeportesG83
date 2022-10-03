let puerto = 3000;
let express = require ('express');
let app = express();


app.use('/api', require('./routes/paginas'));//se importan las rutas de paginas y se agrega la parte inicial de la url .../api/...

app.listen(puerto, function(){
    console.log("Puerto corriendo")
});