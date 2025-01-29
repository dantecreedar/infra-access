"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const firebase_1 = __importDefault(require("../../config/firebase"));
const firestore_1 = require("firebase/firestore");
const auth_1 = require("../model/auth");
const auth_2 = require("firebase/auth");
const router = (0, express_1.Router)();
// Endpoint de registro
router.post("/register", async (req, res) => {
    try {
        const userData = (0, auth_1.Register)(req);
        // Guardar datos en Firestore
        const usersCollection = (0, firestore_1.collection)(firebase_1.default.db, "users");
        const userDoc = await (0, firestore_1.addDoc)(usersCollection, {
            email: userData.email,
            name: userData.name,
            lastName: userData.lastName,
            phone: userData.phone,
            createdAt: new Date(),
            active: true,
        });
        res.status(201).json({
            message: "Usuario registrado exitosamente",
            userId: userDoc.id,
        });
    }
    catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
});
// Endpoint de login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        // Verificar credenciales con Firebase Auth
        const userCredential = await (0, auth_2.signInWithEmailAndPassword)(firebase_1.default.auth, email, password);
        const user = userCredential.user;
        res.status(200).json({
            message: "Inicio de sesión exitoso",
            userId: user.uid,
            email: user.email,
        });
    }
    catch (error) {
        res.status(401).json({
            error: "Credenciales inválidas",
            details: error.message,
        });
    }
});
exports.default = router;
//# sourceMappingURL=routes.js.map