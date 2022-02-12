import { Router } from "express";
import Multer from "multer";

export const imagenRouter = Router();

// sirve para indicar el formato en la cual se va a almacenar el archivo entrante
// puede ser un disco (disco duro) o en memoria (RAM) 
const almacenamiento = Multer.diskStorage({ 
    destination: "src/media/",
    // esto nos permite cambiar el nombre con el cual se guardara el archivo en nuestro servidor 
    filename: (req, archivo, callback) => {
        const nombre = archivo.originalname;
        // como hacemos para evitar que si esa imagen ya existe no se sobre escriba??
        callback(null, nombre);
    },
}),

const muterMiddleware = Multer({
    storage: almacenamiento,
    // bytes * 1024 > 1 kb * 1024 > 1mb * 1024 > 1gb
    limits: { fileSize: 5 * 1024 * 1024 },
});

// any > aceptara todos los archivos y no de uno
// none > aceptara valores en formato texto (no aceptara archivos)
// array(nombre_campo, limite) > aceptara varios archivos definidos mediante un campo y opcionalmente un limite de cuantos archivos queremos recibir
// fields(campos) > acepta una mezcla de archivos especificados por los campos que vamos a recibir
// single(campo) > acepta un solo archivo mediante esa llave
// NOTA: todos los archivos se almacenaron en el request (req) para en el caso de single sera req.file mientras en los demas sera req.files
imagenRouter.post(
    "/subir-imagen",
    multerMiddlaware.single("imagen"),
    (req, res) => {
        console.log(req.file);
        return res.status(200).send();
    }
); 

imagenRouter.post("/subir-imagen");
