const jwt = require("jsonwebtoken");

const secretKey = require("../configuration/jwtConfig");

function generateToken(user){
    const payload = {
        id:user._id,
        email:user.email,
        role:user.role
    }
    return jwt.sign(payload, secretKey,{expiresIn: "1h"});
};

function generateRefreashToken(user){
    const payload = {
        id:user._id,
        email:user.email,
        role:user.role
    }
    return jwt.sign(payload, secretKey,{expiresIn: "1h"});
}

function verifyToken(token){
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        throw new Error("Invalid token");
    }
}


module.exports = {generateToken, generateRefreashToken, verifyToken};
