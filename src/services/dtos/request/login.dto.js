import validator from "validator";

export function loginDto({ email, password }) {
    // isStrongPassword => longitud minima 8 caracteres, al menos una mayus, al menos una minus, al menos 1 numero, al menos 1 simbolo.
    // el validador hace una validacion siempre y cuando sea un string, si no es un string emitira un error pera la validacion retornara como boolean.
    if (!validator.isEmail(correo)) {   
        throw Error("El correo debe ser un correo valido");
    }

}   
   