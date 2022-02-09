import validator from "validator";

export function tipoProductoDto({ nombre }) {
    //if (!validator.isEmpty(nombre)) {
    if (validator.isEmpty(nombre)) {  
        throw error ("El nombre no puede ser vacio");
    }

    return { nombre };
} 