const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
    const token = req.cookies.token; // ✅ Get JWT from cookie instead of header

    if (!token) {
        return res.status(401).json({ Error: "You are not Authenticated" });
    }

    jwt.verify(token, process.env.JWT_SECRET || "jwt-secret-key", (err, decoded) => {
        if (err) return res.status(403).json({ Error: "Invalid token" });

        req.email = decoded.email;
        req.id = decoded.id;
        next();
    });
};

module.exports = verifyUser;
