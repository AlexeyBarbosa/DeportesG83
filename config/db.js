const mongoose = require("mongoose");
//mongodb://localhost:27017/deportes_g83
const dbUrl = "url";

module.exports = () => {
    const conn = () => {
        mongoose.connect(
            dbUrl,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err) => {
                if (err) {
                    console.log("Error al conectar con BD\n\n" + err);
                } else {
                    console.log("db Conexión OK");
                }
            }
        );
    };
    conn();
};

