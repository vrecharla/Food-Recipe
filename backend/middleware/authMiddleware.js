const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next) => {
    let token = req.header('Authorization');

    if (!token) return res.status(401).json({ message: 'Access Denied' });

    try {

        token=token.split(" ")[1];
        console.log(token);
        const verified = jwt.verify(token, process.env.JWT_SECRET);

        req.user = verified;
        next();
    } catch (error) {
        console.error('Invalid Token:', error); 
        res.status(400).json({ message: 'Invalid Token' });
    }
};

module.exports = authMiddleware;
