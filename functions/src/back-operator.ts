import { Router } from "express";
import firebase from "../config/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { LoginDto, RegisterDto } from "./model/auth";

const router = Router();

// Endpoint de registro
router.post("/register", async (req, res) => {
  try {
    const userData = RegisterDto(req);

    // Guardar datos en Firestore
    const userDoc = await addDoc(collection(firebase.db, "users"), {
      email: userData.email,
      name: userData.name,
      lastName: userData.lastName,
      phone: userData.phone,
      createdAt: new Date(),
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
    const loginData = LoginDto(req);

    // Buscar datos del usuario en Firestore
    const q = query(
      collection(firebase.db, "users"),
      where("email", "==", loginData.email)
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return res.status(404).json({
        error: "Usuario no encontrado",
      });
    }

    const userData = querySnapshot.docs[0].data();

    res.status(200).json({
      message: "Login exitoso",
      user: userData,
    });
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
});

export default router;
