// importamos archivo config con las variables de entorno
require("./config/config");

const express = require("express");
const app = express();

//importamos las rutas
const relatives = require("./routes/relatives");

//Middleware que comprueba si el contenido es del tipo application/json
app.use(express.json());

//ruta base para los endpoints
app.use("/relatives", relatives);

app.listen(process.env.PORT, () => console.log("Listening on port", process.env.PORT));
