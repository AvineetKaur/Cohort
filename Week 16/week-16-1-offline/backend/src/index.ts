import jwt, { JwtPayload } from "jsonwebtoken";
const express = require("express");
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express()
app.use(express.json())
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5713"

}))

const JWT_SECRET = "secret";

app.post('/signin', (req: any, res: any) => {
    const email = req.body.email;
    const password = req.body.password;
    //do db validations,fetch id of user from DB
    const token = jwt.sign({
        id: 1
    },
        JWT_SECRET);

    res.cookie("token", token); //will put cookie in set_cookie header
    res.send("Logged in!");
})

app.get('/user', function (req: any, res: any) {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    //get email of users form database
    res.send({
        userId: decoded.id
    })
})

app.post("/logout", (req: any, res: any) => {
    res.clearCookie("token");
    res.json({
        msg: "Logged out!"
    })

})

app.listen(3000);