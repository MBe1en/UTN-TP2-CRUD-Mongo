import { verifyToken } from "../utils/verifyToken.js";

export const verifyTokenMW = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).json({message: "Access token not provided"})
    }

    try {
        const token = authHeader.substring(7);
        console.log(token)
        const decoded = verifyToken(token); //utils fnc
        req.user = decoded;
        console.log("req.user ", req.user);
        next();
    } catch (error) {
        return res.status(500).json({message: "Internal server error", error})
    }
}