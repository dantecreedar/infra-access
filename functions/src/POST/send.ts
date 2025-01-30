//login with firestore and router.app

import express from "express";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Router } from "express";

const app = express();

//ruta de registro
const router = Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email y contraseña son requeridos",
      });
    }

    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    const db = getFirestore();
    await setDoc(doc(db, "users", user.uid), {
      name,
      email,
      phone,
      role: role || "user",
      createdAt: new Date(),
      uid: user.uid,
      activo: true,
    });

    return res.status(201).json({
      message: "Usuario registrado exitosamente",
      user: {
        uid: user.uid,
        email: user.email,
        role: role || "user",
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al registrar usuario",
      error: error,
    });
  }
});

// Example JSON for register endpoint
/*
{
  "name": "John Doe",
  "email": "john@example.com", 
  "password": "secretpassword123",
  "phone": "+1234567890",
  "role": "user"
}
*/

app.use(router);
