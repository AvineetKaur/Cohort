"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express = require("express");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const app = express();
app.use(express.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    credentials: true,
    origin: "http://localhost:5713"
}));
const JWT_SECRET = "secret";
app.post('/signin', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    //do db validations,fetch id of user from DB
    const token = jsonwebtoken_1.default.sign({
        id: 1
    }, JWT_SECRET);
    res.cookie("token", token); //will put cookie in set_cookie header
    res.send("Logged in!");
});
app.get('/user', function (req, res) {
    const token = req.cookies.token;
    const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
    //get email of users form database
    res.send({
        userId: decoded.id
    });
});
app.post("/logout", (req, res) => {
    res.clearCookie("token");
    res.json({
        msg: "Logged out!"
    });
});
app.listen(3000);
