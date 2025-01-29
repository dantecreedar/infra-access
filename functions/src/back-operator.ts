// Importar dependencias
import * as functions from "firebase-functions/v2";
import express from "express"; // Importa Express
import bodyParser from "body-parser";
const app = express();

app.use(express.json());

// Middleware para parsear los datos JSON en las peticionesa

app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para parsear los datos JSON en las peticiones

app.use(bodyParser.json());

//rutas login and register

app.use(require("./routes/login"));

app.use(require("./routes/register"));

// rutas de admin

// Exportar la app como función de Firebase
exports.api = functions.https.onRequest(app);
