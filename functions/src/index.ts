import * as functions from "firebase-functions";
import * as express from "express";
import backOperator from "./back-operator";

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// Middleware para parsear los datos JSON en las peticiones
app.use(express.json());    
app.use("/api", backOperator);

export const api = functions.https.onRequest(app);
