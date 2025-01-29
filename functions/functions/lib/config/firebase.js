"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const auth_1 = require("firebase/auth");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKuTN-cvOUfu47KxhYGNDEp9d4T_sRKAo",
    authDomain: "fb-api-79e8c.firebaseapp.com",
    projectId: "fb-api-79e8c",
    storageBucket: "fb-api-79e8c.firebasestorage.app",
    messagingSenderId: "71655946350",
    appId: "1:71655946350:web:d597ed2914e3fb30f74e7f",
    measurementId: "G-72EJDL3QHS",
};
// Initialize Firebase
const admin = (0, app_1.initializeApp)(firebaseConfig);
exports.default = {
    db: (0, firestore_1.getFirestore)(admin),
    auth: (0, auth_1.getAuth)(admin),
    admin,
};
//# sourceMappingURL=firebase.js.map