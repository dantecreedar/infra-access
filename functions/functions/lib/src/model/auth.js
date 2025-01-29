"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = exports.Login = void 0;
const Login = (req) => ({
    email: req.body.email,
    password: req.body.password,
});
exports.Login = Login;
const Register = (req) => ({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    lastName: req.body.lastName,
    phone: req.body.phone,
});
exports.Register = Register;
//# sourceMappingURL=auth.js.map