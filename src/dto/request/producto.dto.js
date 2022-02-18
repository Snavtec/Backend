import mongoose from "mongoose";
import validator from "validator";

export function productoDto({ nombre, precio, tipo, estado }) {
    // nombre no puede estar vacio
    if (validator.isEmpty(nombre)) {
        throw Error("El nombre no puede estar vacio");
    }
    //precio no puede ser negativo
    if (!validator.isDecimal(precio.toString())&& +precio < 0) {  
        throw Error("El precio no puede ser negativo");
    }

    // if (+precio < 0) {
    //    throw Error("El precio no puede ser negativo");
    // }

    // tipo puede ser "ABARROTES", "HIGIENE PERSONAL", "OTROS" (no usar validator)
    if (tipo !== "ABARROTES" && tipo !== "HIGIENE PERSONAL" && tipo !== "OTROS") {
        throw Error('"El tipo debe ser "ABARROTES", "HIGIENE PERSONAL", "PERSONAL", "OTROS"');
    }

    // estado es opcional pero si me lo pasa tiene que ser un boolean 
    if (estado && !validator.isBoolean(estado)) {
        throw Error("El estado tiene que ser true o false");
    }

    return { nombre, precio, tipo, estado };
    }
