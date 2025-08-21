const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(403).json({
            message: "Invalid token"
        });
    }

    const token = authHeader.split(' ')[1];
    try {

        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId;
        next();
    }
    catch (exception) {
        res.status(403).json({
            message: exception
        });

    }

}
module.exports = { authMiddleware }