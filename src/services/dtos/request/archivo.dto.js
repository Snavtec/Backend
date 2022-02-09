import validator from "validator";

export function archivoDto({ productId, contetType, ext, filename }) {
    // hacer las validaciones
    // para la ext solo vamos a permitir jpg, png, jpeg
    // contetType solo vamos a permitir image/png image/jpg image/jpeg 
    if (!validator.isNumeric(productId.toString())) {
        throw Error("El productID debe ser numerico");
    }

    console.log(contetType);
        // contenidosValidos = ["imagen/png", "image/jpg", "image/jpeg"];
        // van a iterar ese array y si hay una coincidencia incrementaran una variable x=0 y si al final de la iteracion la variable que sigue estando 0 (su valor inicial) entonces concluiremos que no esta dentro de los contenidos validos y emitiremos el error
        // usar forEach o forIn
    if (
        contentType !== "image/png" && // ||
        contentType !== "image/jng" && // || 
        contentType !== "image/jpeg"
    ) {
        throw Error(
            "El contetType solo puede ser: image/png, image/jpg, image/jpeg"
        );
    }

    // hacer lo mismo con las extensiones

    if (
        !validator.equals(ext, "jpg") &&
        !validator.equals(ext, "png") &&
        !validator.equals(ext, "jpeg")
    ) {
        throw Error("La ext solo puede ser: jpg, png, jpeg");
    }

    if (validator.isEmpty(filename)) {
        throw Error("El filename no puede esta vacio");
    }

    return { productId, contentType, ext, filename };
}
