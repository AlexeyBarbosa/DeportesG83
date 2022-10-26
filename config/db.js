const mongoose = require("mongoose");
const dbUrl = "mongodb+srv://admin:e3j710xpRTSTITcK@alexeybarbosa.tlg5r74.mongodb.net/deportes_g83?retryWrites=true&w=majority";

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

