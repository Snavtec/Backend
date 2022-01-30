import jwt from "jsonwebtoken";

export function verificarToken(token) {
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        return payload;
    } catch (error) {
        return error;
    }
}

export function validarUsuario(req, res, next) {
    // middleware
    // es un intermediario entre el cliente y el cotrolador final
    if (!req.headers.authorization) {
        return res.status(401).json ({
            message: "Se necesita un token para realizar la solicitud",
        });
    }

    const token = req.headers.authorization.split

}