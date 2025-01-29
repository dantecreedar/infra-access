import { Router } from "express";
import firebase from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Register } from "../model/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

const router = Router();

// Endpoint de registro
router.post("/register", async (req, res) => {
  try {
    const userData = Register(req);

    // Guardar datos en Firestore
    const usersCollection = collection(firebase.db, "users");
    const userDoc = await addDoc(usersCollection, {
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
  } catch (error: any) {
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
    const userCredential = await signInWithEmailAndPassword(
      firebase.auth,
      email,
      password
    );
    const user = userCredential.user;

    res.status(200).json({
      message: "Inicio de sesión exitoso",
      userId: user.uid,
      email: user.email,
    });
  } catch (error: any) {
    res.status(401).json({
      error: "Credenciales inválidas",
      details: error.message,
    });
  }
});

export default router;
