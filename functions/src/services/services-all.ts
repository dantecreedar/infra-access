//config
import * as functions from "firebase-functions";
import express from "express";

// Initialize Firebase

//express y middleware configuration

const app = express();

app.use(express.json());

//rutas
app.use(require("../POST/send"));
//export function firebase

export const back = functions.https.onRequest((req, res) => {
  app(req, res);
  res.send("Hello from Firebase!");
});
